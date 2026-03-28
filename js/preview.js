(function () {
  var STORAGE_IDEA = "ideaForge_idea";
  var STORAGE_TEMPLATE = "ideaForge_templateId";
  var STORAGE_MATCHED = "ideaForge_matched";

  function escapeScriptCloser(s) {
    return String(s).replace(/<\/script/gi, "<\\/script");
  }

  function buildFullDocument(template) {
    var css = escapeScriptCloser(template.css);
    var js = escapeScriptCloser(template.js);
    return (
      "<!DOCTYPE html><html lang=\"en\" dir=\"ltr\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Preview</title><style>" +
      css +
      "</style></head><body>" +
      template.html +
      "<script>" +
      js +
      "</script></body></html>"
    );
  }

  function init() {
    var idea = "";
    var templateId = "";
    var matched = true;

    var params = new URLSearchParams(window.location.search);
    var idFromUrl = params.get("id");
    var mFromUrl = params.get("m");
    var ideaFromUrl = params.get("idea");

    if (idFromUrl) {
      templateId = idFromUrl;
      matched = mFromUrl === "1";
      if (ideaFromUrl !== null && ideaFromUrl !== "") {
        try {
          idea = decodeURIComponent(ideaFromUrl.replace(/\+/g, " "));
        } catch (err) {
          idea = ideaFromUrl;
        }
      }
    }

    if (!templateId) {
      try {
        idea = sessionStorage.getItem(STORAGE_IDEA) || idea;
        templateId = sessionStorage.getItem(STORAGE_TEMPLATE) || "";
        matched = sessionStorage.getItem(STORAGE_MATCHED) === "1";
      } catch (e) {
        /* ignore */
      }
    }

    if (!templateId || typeof window.getTemplateById !== "function") {
      window.location.href = "index.html";
      return;
    }

    var template = window.getTemplateById(templateId);
    if (!template) {
      window.location.href = "index.html";
      return;
    }

    var ideaEl = document.getElementById("ideaDisplay");
    var templateEl = document.getElementById("templateDisplay");
    var banner = document.getElementById("noMatchBanner");
    var iframe = document.getElementById("previewFrame");
    var shell = document.getElementById("iframeShell");
    var codeBlocks = {
      html: document.getElementById("codeHtml"),
      css: document.getElementById("codeCss"),
      js: document.getElementById("codeJs"),
    };
    var tabs = document.querySelectorAll(".tab-btn");
    var copyBtn = document.getElementById("copyCodeBtn");
    var toast = document.getElementById("toast");

    if (ideaEl) ideaEl.textContent = idea.trim() || "(empty)";
    if (templateEl) templateEl.textContent = "Template: " + template.title;
    if (banner) {
      banner.hidden = matched;
    }

    var htmlSource =
      "<!-- Template body fragment -->\n" + template.html.trim() + "\n";
    if (codeBlocks.html) codeBlocks.html.textContent = htmlSource;
    if (codeBlocks.css) codeBlocks.css.textContent = template.css.trim();
    if (codeBlocks.js) codeBlocks.js.textContent = template.js.trim();

    function showTab(name) {
      var keys = ["html", "css", "js"];
      keys.forEach(function (k) {
        var block = document.getElementById("panel-" + k);
        if (block) block.hidden = k !== name;
      });
      tabs.forEach(function (btn) {
        var sel = btn.getAttribute("data-tab") === name;
        btn.setAttribute("aria-selected", sel ? "true" : "false");
      });
    }

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        showTab(btn.getAttribute("data-tab"));
      });
    });
    showTab("html");

    function currentCodeText() {
      var active = document.querySelector('.tab-btn[aria-selected="true"]');
      var tab = active ? active.getAttribute("data-tab") : "html";
      if (tab === "html" && codeBlocks.html) return codeBlocks.html.textContent;
      if (tab === "css" && codeBlocks.css) return codeBlocks.css.textContent;
      if (tab === "js" && codeBlocks.js) return codeBlocks.js.textContent;
      return "";
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var text = currentCodeText();
        if (!text) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            if (toast) {
              toast.textContent = "Copied";
              toast.classList.add("show");
              setTimeout(function () {
                toast.classList.remove("show");
              }, 1800);
            }
          });
        }
      });
    }

    var docHtml = buildFullDocument(template);
    if (iframe) {
      var frameWritten = false;
      function writeFrame() {
        if (frameWritten) return;
        var doc = iframe.contentDocument;
        if (!doc) return;
        frameWritten = true;
        doc.open();
        doc.write(docHtml);
        doc.close();
      }
      iframe.addEventListener("load", writeFrame, { once: true });
      iframe.src = "about:blank";
      try {
        if (
          iframe.contentDocument &&
          iframe.contentDocument.readyState === "complete"
        ) {
          writeFrame();
        }
      } catch (err) {
        /* cross-origin — ignore */
      }
    }

    var widths = {
      large: "1280px",
      medium: "768px",
      small: "375px",
    };
    var vpButtons = document.querySelectorAll(".viewport-btns button");

    function setViewport(key) {
      if (!shell) return;
      shell.style.maxWidth = widths[key] || "100%";
      vpButtons.forEach(function (b) {
        b.setAttribute(
          "aria-pressed",
          b.getAttribute("data-viewport") === key ? "true" : "false"
        );
      });
    }

    vpButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setViewport(btn.getAttribute("data-viewport"));
      });
    });
    setViewport("large");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
