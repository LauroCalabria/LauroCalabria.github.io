/**
 * Color theme (light / dark).
 *
 * How the theme is chosen:
 *   1. The visitor's saved choice (localStorage), if any.
 *   2. Otherwise the operating system preference (prefers-color-scheme).
 *
 * The theme is stored as the `data-theme` attribute on <html>; the colors for
 * each theme are CSS variables defined in css/styles.css.
 *
 * This file is loaded in the <head> WITHOUT `defer` on purpose: it must run
 * before the page is painted, otherwise dark-theme visitors would see a flash
 * of the light theme. It is very small, so it does not slow the page down.
 */
(function (global) {
  'use strict';

  const document = global.document;

  const STORAGE_KEY = 'portfolio-theme';
  const THEMES = ['light', 'dark'];

  // Browser UI color (mobile address bar) for each theme.
  const THEME_COLORS = { light: '#fafbfd', dark: '#0e1424' };

  /**
   * Reads the saved theme. Storage can be blocked, so errors are handled.
   * @returns {string|null} "light", "dark" or null when nothing valid is saved
   */
  function readSavedTheme() {
    try {
      const saved = global.localStorage.getItem(STORAGE_KEY);
      return THEMES.includes(saved) ? saved : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Saves the visitor's choice. Failing to save is harmless.
   * @param {string} theme
   */
  function saveTheme(theme) {
    try {
      global.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Ignored on purpose: the theme still changes for this visit. */
    }
  }

  /**
   * Returns the operating system preference.
   * @returns {string} "light" or "dark"
   */
  function getSystemTheme() {
    const prefersDark = global.matchMedia &&
      global.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  /**
   * Applies a theme to the page and updates the toggle button state.
   * @param {string} theme - "light" or "dark"
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', THEME_COLORS[theme]);

    // The button may not exist yet while the <head> is being parsed.
    const button = document.getElementById('theme-toggle');
    if (button) button.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  /** Returns the theme currently applied to the page. */
  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  // Apply immediately (before first paint).
  applyTheme(readSavedTheme() || getSystemTheme());

  // Wire up the toggle button once the page structure is available.
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('theme-toggle');
    if (!button) return;

    // Sync aria-pressed now that the button exists.
    applyTheme(getCurrentTheme());

    button.addEventListener('click', function () {
      const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      saveTheme(next);
    });
  });

  // Follow operating system changes, unless the visitor made an explicit choice.
  if (global.matchMedia) {
    const mediaQuery = global.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = function (event) {
      if (!readSavedTheme()) applyTheme(event.matches ? 'dark' : 'light');
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', onSystemChange);
    }
  }
})(window);
