/*global QUnit*/

sap.ui.define([
	"cicddemo/controller/CICDDEMO.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CICDDEMO Controller");

	QUnit.test("I should test the CICDDEMO controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
