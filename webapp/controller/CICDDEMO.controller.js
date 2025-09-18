sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "cicddemo/util/formatter"
], function(Controller, JSONModel, formatter) {
  "use strict";

  return Controller.extend("cicddemo.controller.CICDDEMO", {
    onInit: function() {
      this.getView().setModel(new JSONModel({ greeting: "" }));
    },

    onSayHello: function() {
      const sName = this.byId("nameInput").getValue();
      const sText = formatter.formatName(sName);
      this.getView().getModel().setProperty("/greeting", sText);
    }
  });
});
