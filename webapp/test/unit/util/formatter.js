sap.ui.define([
  "cicddemo/util/formatter"
], function(formatter) {
  "use strict";

  QUnit.module("Formatter");

  QUnit.test("Should return 'Hello World!' if no name", function(assert) {
    assert.strictEqual(formatter.formatName(""), "Hello World!", "Empty string handled");
    assert.strictEqual(formatter.formatName(null), "Hello World!", "Null handled");
  });

  QUnit.test("Should return formatted name", function(assert) {
    assert.strictEqual(formatter.formatName("john"), "Hello John!", "Lowercase name formatted");
    assert.strictEqual(formatter.formatName(" Alice "), "Hello Alice!", "Trim and capitalize");
  });
});