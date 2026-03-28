(function () {
  var STORAGE_IDEA = "ideaForge_idea";
  var STORAGE_TEMPLATE = "ideaForge_templateId";
  var STORAGE_MATCHED = "ideaForge_matched";

  var textarea = document.getElementById("ideaInput");
  var generateBtn = document.getElementById("generateBtn");
  var grid = document.getElementById("templateCards");

  var presetTemplateId = null;

  function clearPresetOnEdit() {
    presetTemplateId = null;
  }

  if (textarea) {
    textarea.addEventListener("input", clearPresetOnEdit);
  }

  function renderCards() {
    if (!grid || !window.IDEA_TEMPLATES) return;
    var list = window.IDEA_TEMPLATES.filter(function (t) {
      return t.id !== "default";
    });
    var samples = {
      accounting:
        "I need a small site for my accounts, invoices, and bookkeeping",
      wallet: "Personal wallet app to track expenses and income",
      restaurant: "Restaurant website with a food menu",
      portfolio: "Portfolio site as a designer and developer",
      landing: "Landing page to market a new product",
    };
    list.forEach(function (t) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "template-card";
      card.setAttribute("data-template-id", t.id);
      card.innerHTML =
        "<h3>" +
        escapeHtml(t.title) +
        "</h3><p>Click to fill a sample, then Generate</p>";
      card.addEventListener("click", function () {
        presetTemplateId = t.id;
        textarea.value = samples[t.id] || t.title;
        textarea.focus();
      });
      grid.appendChild(card);
    });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function goPreview() {
    var idea = (textarea && textarea.value) || "";
    var result;
    if (
      presetTemplateId &&
      typeof window.getTemplateById === "function" &&
      window.getTemplateById(presetTemplateId)
    ) {
      result = {
        template: window.getTemplateById(presetTemplateId),
        matched: true,
        score: 1,
      };
    } else if (typeof window.matchIdea === "function") {
      result = window.matchIdea(idea);
    } else {
      return;
    }
    try {
      sessionStorage.setItem(STORAGE_IDEA, idea);
      sessionStorage.setItem(STORAGE_TEMPLATE, result.template.id);
      sessionStorage.setItem(STORAGE_MATCHED, result.matched ? "1" : "0");
    } catch (e) {
      /* storage may be blocked — URL still carries state */
    }
    var q = new URLSearchParams();
    q.set("id", result.template.id);
    q.set("m", result.matched ? "1" : "0");
    var forUrl = idea;
    while (forUrl.length > 0 && encodeURIComponent(forUrl).length > 7000) {
      forUrl = forUrl.slice(0, Math.floor(forUrl.length * 0.85));
    }
    q.set("idea", forUrl);
    window.location.href = "preview.html?" + q.toString();
  }

  if (generateBtn) {
    generateBtn.addEventListener("click", goPreview);
  }

  renderCards();
})();
