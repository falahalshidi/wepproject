/** Match idea text to a template by keyword score; no match → default template. */
(function () {
  function normalize(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[.,!?;:،؛…]/g, " ")
      .replace(/\s+/g, " ");
  }

  function getTemplates() {
    return window.IDEA_TEMPLATES || [];
  }

  function getTemplateById(id) {
    return getTemplates().find(function (t) {
      return t.id === id;
    });
  }

  /**
   * @param {string} ideaText
   * @returns {{ template: object, matched: boolean, score: number }}
   */
  function matchIdea(ideaText) {
    var input = normalize(ideaText);
    var all = getTemplates();
    var defaultT = all.find(function (t) {
      return t.id === "default";
    });
    var candidates = all.filter(function (t) {
      return t.id !== "default";
    });

    var best = null;
    var bestScore = 0;
    for (var i = 0; i < candidates.length; i++) {
      var t = candidates[i];
      var score = 0;
      for (var j = 0; j < t.keywords.length; j++) {
        var k = normalize(t.keywords[j]);
        if (k && input.indexOf(k) !== -1) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        best = t;
      }
    }

    if (bestScore === 0 || !best) {
      return {
        template: defaultT || candidates[0],
        matched: false,
        score: 0,
      };
    }
    return { template: best, matched: true, score: bestScore };
  }

  window.matchIdea = matchIdea;
  window.getTemplateById = getTemplateById;
  window.normalizeIdeaText = normalize;
})();
