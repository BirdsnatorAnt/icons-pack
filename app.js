/* Icons Pack — gallery + search, no dependencies */
(function () {
  "use strict";

  var names = (typeof ICON_NAMES !== "undefined") ? ICON_NAMES : [];
  var gallery = document.getElementById("gallery");
  var filter = document.getElementById("filter");
  var clear = document.getElementById("clear");
  var empty = document.getElementById("empty");
  var shown = document.getElementById("shown");
  var toast = document.getElementById("toast");
  var toastTimer = null;

  document.getElementById("stat-count").textContent = names.length;

  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function render(list) {
    var html = "";
    for (var i = 0; i < list.length; i++) {
      var name = list[i];
      html += '<div class="tile" data-name="' + esc(name) + '">' +
              '<img src="assets/icons/' + esc(name) + '.ico" alt="" loading="lazy" width="32" height="32">' +
              "<span>" + esc(name) + "</span></div>";
    }
    gallery.innerHTML = html;
    shown.textContent = list.length;
    empty.hidden = list.length !== 0;
  }

  function apply() {
    var q = filter.value.trim().toLowerCase();
    if (!q) return render(names);
    var hits = [];
    for (var i = 0; i < names.length; i++) {
      if (names[i].toLowerCase().indexOf(q) !== -1) hits.push(names[i]);
    }
    render(hits);
  }

  function notify(text) {
    toast.textContent = text;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; }, 1600);
  }

  gallery.addEventListener("click", function (e) {
    var tile = e.target.closest(".tile");
    if (!tile) return;
    var name = tile.getAttribute("data-name");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(name).then(
        function () { notify("Скопійовано: " + name); },
        function () { notify(name); }
      );
    } else {
      notify(name);
    }
  });

  filter.addEventListener("input", apply);
  clear.addEventListener("click", function () {
    filter.value = "";
    apply();
    filter.focus();
  });

  render(names);
})();
