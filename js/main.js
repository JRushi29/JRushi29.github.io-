// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Home feed category filters
  var filterButtons = document.querySelectorAll('.filters button');
  var entries = document.querySelectorAll('.log .entry');
  if (filterButtons.length && entries.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        entries.forEach(function (entry) {
          if (cat === 'all' || entry.getAttribute('data-category') === cat) {
            entry.style.display = '';
          } else {
            entry.style.display = 'none';
          }
        });
      });
    });
  }

  // Sub-tabs (Hobbies page: Travel / Reading / Opinions)
  var subtabButtons = document.querySelectorAll('.subtabs button');
  var subpanels = document.querySelectorAll('.subpanel');
  if (subtabButtons.length && subpanels.length) {
    subtabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        subtabButtons.forEach(function (b) { b.classList.remove('active'); });
        subpanels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        var target = document.getElementById(btn.getAttribute('data-tab'));
        if (target) target.classList.add('active');
      });
    });
  }
});
