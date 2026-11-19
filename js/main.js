/**
 * Main site script.
 *
 * Responsibilities:
 *   1. Show the current year in the footer.
 *   2. Handle the contact form: validate, send to Formspree with fetch(),
 *      and show a status message (translated by js/i18n.js).
 *   3. Show the "back to top" button after scrolling down.
 *   4. Show initials instead of the profile photo when the image is missing.
 *
 * Security notes:
 *   - No innerHTML is used; messages are inserted with textContent.
 *   - The form endpoint must point to formspree.io (also enforced by the CSP).
 *   - A hidden honeypot field ("_gotcha") discards submissions made by bots.
 */
(function (global) {
  'use strict';

  const document = global.document;
  const i18n = global.Portfolio.i18n;

  // The back-to-top button appears after scrolling this many pixels.
  const BACK_TO_TOP_THRESHOLD = 600;

  // Only endpoints in this exact form are accepted for sending messages.
  const FORMSPREE_ENDPOINT_PATTERN = /^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/;

  /** Writes the current year into the footer. */
  function setFooterYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) yearElement.textContent = String(new Date().getFullYear());
  }

  /**
   * Shows a translated status message under the form.
   * The key is stored in data-i18n so the message is re-translated
   * automatically if the visitor switches language.
   * @param {HTMLElement} statusElement
   * @param {string} key - translation key, e.g. "contact.status.success"
   * @param {'success'|'error'|''} type - styling variant
   */
  function showStatus(statusElement, key, type) {
    statusElement.setAttribute('data-i18n', key);
    statusElement.textContent = i18n.t(key);
    statusElement.classList.remove('is-success', 'is-error');
    if (type) statusElement.classList.add('is-' + type);
  }

  /**
   * Returns true when the form action is a real Formspree endpoint
   * (and not the "YOUR_FORM_ID" placeholder).
   * @param {string} endpoint
   * @returns {boolean}
   */
  function isEndpointConfigured(endpoint) {
    return FORMSPREE_ENDPOINT_PATTERN.test(endpoint) && !endpoint.includes('YOUR_FORM_ID');
  }

  /**
   * Fallback used until Formspree is configured: opens the visitor's email
   * app with the message already filled in.
   * @param {HTMLFormElement} form
   */
  function openEmailApp(form) {
    const data = new FormData(form);
    const name = String(data.get('name')).trim().slice(0, 100);
    const message = String(data.get('message')).trim().slice(0, 2000);
    const subject = 'Portfolio contact from ' + name;
    const body = message + '\n\n' + name + '\n' + String(data.get('email')).trim();

    global.location.href =
      'mailto:' + form.getAttribute('data-email') +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  }

  /**
   * Sends the form data to Formspree and updates the status message.
   * @param {HTMLFormElement} form
   * @param {HTMLButtonElement} submitButton
   * @param {HTMLElement} statusElement
   */
  async function sendMessage(form, submitButton, statusElement) {
    submitButton.disabled = true;
    showStatus(statusElement, 'contact.status.sending', '');

    try {
      const response = await fetch(form.getAttribute('action'), {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });

      if (!response.ok) throw new Error('Request failed: ' + response.status);

      form.reset();
      showStatus(statusElement, 'contact.status.success', 'success');
    } catch (error) {
      showStatus(statusElement, 'contact.status.error', 'error');
    } finally {
      submitButton.disabled = false;
    }
  }

  /** Connects the contact form events. */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusElement = document.getElementById('form-status');
    if (!form || !statusElement) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const honeypot = form.querySelector('input[name="_gotcha"]');

    form.addEventListener('submit', (event) => {
      // Stop the default submit: validation and sending are handled here.
      event.preventDefault();

      // Bots fill in the hidden field. Pretend success and send nothing.
      if (honeypot && honeypot.value !== '') {
        form.reset();
        showStatus(statusElement, 'contact.status.success', 'success');
        return;
      }

      // Built-in browser validation (required, email format, min/max length).
      if (!form.checkValidity()) {
        showStatus(statusElement, 'contact.status.invalid', 'error');
        form.reportValidity();
        return;
      }

      const endpoint = form.getAttribute('action') || '';

      if (isEndpointConfigured(endpoint)) {
        sendMessage(form, submitButton, statusElement);
      } else {
        showStatus(statusElement, 'contact.status.fallback', '');
        openEmailApp(form);
      }
    });
  }

  /**
   * Back-to-top button: hidden at the top of the page, visible after scrolling.
   * Without JavaScript the link simply stays hidden (the page is short enough).
   */
  function initBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) return;

    function updateVisibility() {
      button.hidden = global.scrollY < BACK_TO_TOP_THRESHOLD;
    }

    global.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();

    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Respect visitors who prefer reduced motion.
      const reduceMotion = global.matchMedia('(prefers-reduced-motion: reduce)').matches;
      global.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });

      // The button hides itself at the top, so move keyboard focus to the
      // site name to avoid losing the focus position.
      const brand = document.querySelector('.brand');
      if (brand) brand.focus({ preventScroll: true });
    });
  }

  /**
   * Profile photo: if assets/img/profile.jpg cannot be loaded, hide the broken
   * image so the "LC" initials placeholder behind it is shown instead.
   */
  function initProfilePhoto() {
    const photo = document.getElementById('profile-photo');
    if (!photo) return;

    function hidePhoto() {
      photo.hidden = true;
    }

    photo.addEventListener('error', hidePhoto);

    // The error may have happened before this script ran.
    if (photo.complete && photo.naturalWidth === 0) hidePhoto();
  }

  setFooterYear();
  initContactForm();
  initBackToTop();
  initProfilePhoto();
})(window);
