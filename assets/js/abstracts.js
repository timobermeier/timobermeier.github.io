// Collapse abstracts by default; each "Abstract" button shows or hides its own.
// Without JavaScript, abstracts simply stay visible.
document.querySelectorAll('.btn-toggle').forEach(function (btn) {
  var panel = document.getElementById(btn.getAttribute('aria-controls'));
  if (!panel) return;
  btn.hidden = false;
  btn.setAttribute('aria-expanded', 'false');
  panel.hidden = true;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });
});
