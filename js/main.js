/**
 * Чистый Диван — клиентские скрипты сайта.
 * Мобильное меню, анимация появления блоков, форма заявки.
 */

function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (elements.length === 0) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initRequestForm() {
  const form = document.getElementById('request-form');
  const success = document.getElementById('form-success');

  if (!form || !success) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    success.hidden = false;
    form.reset();
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function initYear() {
  const year = document.getElementById('year');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initReveal();
  initRequestForm();
  initYear();
});
