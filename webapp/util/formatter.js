sap.ui.define([], function() {
  "use strict";

  return {
    formatName: function(sName) {
      if (!sName || sName.trim() === "") {
        return "Hello World!";
      }
      const cleaned = sName.trim();
      return `Hello ${cleaned.charAt(0).toUpperCase() + cleaned.slice(1)}!`;
    }
  };
});
