/* MUS 302 listening guides - glossary interaction
 *
 * Behavior: any element with class "glossable" and a data-term attribute
 * will, when clicked, expand a definition box below it. Click again to close.
 * Click another glossable term and the previous one closes automatically.
 * Definitions come from the GLOSSARY object in glossary-data.js.
 */

(function () {
  "use strict";

  function init() {
    if (typeof GLOSSARY === "undefined") {
      console.warn("Glossary data not loaded.");
      return;
    }

    var glossables = document.querySelectorAll(".glossable");
    var openDefinition = null;

    glossables.forEach(function (el) {
      // Make each glossable a button-like element for accessibility
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-expanded", "false");

      var term = el.getAttribute("data-term");
      if (!term || !GLOSSARY[term]) {
        console.warn("No glossary entry for term:", term);
      }

      el.addEventListener("click", function (event) {
        event.preventDefault();
        toggle(el);
      });

      el.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle(el);
        }
      });
    });

    function toggle(el) {
      var isOpen = el.getAttribute("aria-expanded") === "true";

      if (openDefinition && openDefinition !== el) {
        closeDefinition(openDefinition);
      }

      if (isOpen) {
        closeDefinition(el);
      } else {
        openDefinitionFor(el);
      }
    }

    function openDefinitionFor(el) {
      var term = el.getAttribute("data-term");
      var entry = GLOSSARY[term];
      if (!entry) return;

      var def = document.createElement("aside");
      def.className = "gloss-definition";
      def.setAttribute("role", "note");

      var label = document.createElement("span");
      label.className = "gloss-term";
      label.textContent = entry.label || term;

      var sep = document.createTextNode(": ");

      var text = document.createElement("span");
      text.className = "gloss-text";
      text.textContent = entry.definition;

      def.appendChild(label);
      def.appendChild(sep);
      def.appendChild(text);

      // Insert the definition after the closest paragraph or heading
      // ancestor. This avoids breaking the flow of the sentence.
      var anchor = el;
      while (anchor && anchor.parentNode) {
        var parent = anchor.parentNode;
        if (parent.tagName === "P" || /^H[1-6]$/.test(parent.tagName)) {
          parent.parentNode.insertBefore(def, parent.nextSibling);
          break;
        }
        anchor = parent;
      }

      el.setAttribute("aria-expanded", "true");
      el._glossDef = def;
      openDefinition = el;
    }

    function closeDefinition(el) {
      if (el._glossDef && el._glossDef.parentNode) {
        el._glossDef.parentNode.removeChild(el._glossDef);
      }
      el._glossDef = null;
      el.setAttribute("aria-expanded", "false");
      if (openDefinition === el) {
        openDefinition = null;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
