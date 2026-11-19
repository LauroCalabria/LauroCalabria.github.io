/**
 * Language switcher (internationalization).
 *
 * Reads the dictionaries from js/translations.js and applies them to every
 * element marked with:
 *   - data-i18n="key"                    -> replaces the element's text
 *   - data-i18n-attr="attr:key;attr:key" -> replaces the listed attributes
 *
 * The chosen language is remembered in localStorage. English is the default.
 * Public API (used by js/main.js): Portfolio.i18n.t(key), Portfolio.i18n.getLanguage()
 */
(function (global) {
  'use strict';

  const document = global.document;

  // Languages the site supports, and the matching value for <html lang="...">.
  const SUPPORTED_LANGUAGES = ['en', 'pt'];
  const DEFAULT_LANGUAGE = 'en';
  const HTML_LANG = { en: 'en', pt: 'pt-BR' };
  const STORAGE_KEY = 'portfolio-language';

  const translations = global.Portfolio.translations;
  let currentLanguage = DEFAULT_LANGUAGE;

  /**
   * Returns true when the given code is a supported language.
   * Also protects against unexpected values read from localStorage.
   * @param {unknown} language
   * @returns {boolean}
   */
  function isSupported(language) {
    return typeof language === 'string' && SUPPORTED_LANGUAGES.includes(language);
  }

  /**
   * Reads the saved language. Storage can be blocked (private mode, browser
   * settings), so every access is wrapped in try/catch.
   * @returns {string}
   */
  function readSavedLanguage() {
    try {
      const saved = global.localStorage.getItem(STORAGE_KEY);
      return isSupported(saved) ? saved : DEFAULT_LANGUAGE;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }
  }

  /**
   * Saves the chosen language. Failing to save is not a problem for the page.
   * @param {string} language
   */
  function saveLanguage(language) {
    try {
      global.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      /* Ignored on purpose: the language still changes for this visit. */
    }
  }

  /**
   * Returns the text for a key in the current language.
   * Falls back to English, then to the key itself, so nothing breaks.
   * @param {string} key
   * @returns {string}
   */
  function t(key) {
    const current = translations[currentLanguage] || {};
    const fallback = translations[DEFAULT_LANGUAGE] || {};
    if (typeof current[key] === 'string') return current[key];
    if (typeof fallback[key] === 'string') return fallback[key];
    return key;
  }

  /**
   * Translates attributes such as aria-label.
   * Format: data-i18n-attr="aria-label:nav.label;title:other.key"
   * @param {Element} element
   */
  function translateAttributes(element) {
    const definition = element.getAttribute('data-i18n-attr');
    if (!definition) return;

    definition.split(';').forEach((pair) => {
      const [attribute, key] = pair.split(':').map((part) => part.trim());
      if (attribute && key) {
        element.setAttribute(attribute, t(key));
      }
    });
  }

  /**
   * Applies a language to the whole page.
   * @param {string} language - "en" or "pt"
   * @param {boolean} [persist=true] - remember the choice for the next visit
   */
  function setLanguage(language, persist = true) {
    if (!isSupported(language)) return;

    currentLanguage = language;
    document.documentElement.lang = HTML_LANG[language];

    // Element text. textContent is used (never innerHTML) for safety.
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = t(element.getAttribute('data-i18n'));
    });

    // Attributes (aria-label, etc.).
    document.querySelectorAll('[data-i18n-attr]').forEach(translateAttributes);

    // Page title and meta description.
    document.title = t('meta.title');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t('meta.description'));

    // Reflect the active language on the selector buttons.
    document.querySelectorAll('.lang-button').forEach((button) => {
      const isActive = button.getAttribute('data-lang') === language;
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (persist) saveLanguage(language);
  }

  /** Wires the language buttons and applies the saved language. */
  function init() {
    document.querySelectorAll('.lang-button').forEach((button) => {
      button.addEventListener('click', () => {
        setLanguage(button.getAttribute('data-lang'));
      });
    });

    // Do not rewrite the page when the English default is already in place.
    const saved = readSavedLanguage();
    if (saved !== DEFAULT_LANGUAGE) setLanguage(saved, false);
  }

  global.Portfolio.i18n = {
    t: t,
    setLanguage: setLanguage,
    getLanguage: function () { return currentLanguage; }
  };

  // Scripts are deferred, so the DOM is ready when this runs.
  init();
})(window);
