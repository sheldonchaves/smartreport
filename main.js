(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adm/adm.component.ts":
/*!**************************************!*\
  !*** ./src/app/adm/adm.component.ts ***!
  \**************************************/
/*! exports provided: AdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmComponent", function() { return AdmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function AdmComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_5_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const macro_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.selectMacro(macro_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.selectedMacro == macro_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", macro_r4.name, " ");
} }
function AdmComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_5_div_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.selectedMacro.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_5_div_7_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.selectedMacro.text = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_5_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.saveMacro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Salvar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedMacro.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectedMacro.text);
} }
function AdmComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdmComponent_div_5_div_3_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.newMacro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdmComponent_div_5_div_7_Template, 8, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.service.macros);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedMacro);
} }
function AdmComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_6_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.selectItem(item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r13.selectedDiagItem == item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.name, " ");
} }
function AdmComponent_div_6_div_7_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r19.name, " ");
} }
function AdmComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdmComponent_div_6_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.selectedDiagItem.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_6_div_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.toggleMultiple(ctx_r22.selectedDiagItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Multiplo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_6_div_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.toggleMultiple(ctx_r23.selectedDiagItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Simples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdmComponent_div_6_div_7_span_12_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_6_div_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.addOption(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cadastrar nova pergunta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_6_div_7_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.saveMacro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Salvar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.selectedDiagItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r14.selectedDiagItem.type == "multiple" ? "btn-primary" : "btn-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r14.selectedDiagItem.type != "multiple" ? "btn-primary" : "btn-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.selectedDiagItem.options);
} }
function AdmComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdmComponent_div_6_div_3_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.newItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdmComponent_div_6_div_7_Template, 19, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.service.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedDiagItem);
} }
class AdmComponent {
    constructor(service) {
        this.service = service;
        this.area = 'macro';
    }
    ngOnInit() {
    }
    changeArea(area) {
        this.area = area;
    }
    selectMacro(macro) {
        this.selectedMacro = macro;
    }
    selectItem(item) {
        this.selectedDiagItem = item;
    }
    saveMacro() {
        this.selectedMacro = null;
    }
    toggleMultiple(item) {
        if (item.type == "multiple") {
            item.type = "";
        }
        else {
            item.type = "multiple";
        }
    }
    newItem() {
        this.service.items.push({
            name: "Novo", code: "nv", options: []
        });
    }
    newMacro() {
        this.service.macros.push({
            name: "Novo",
            items: [],
            selected: false, text: ""
        });
        this.service.processMacros();
    }
    addOption() {
    }
}
AdmComponent.ɵfac = function AdmComponent_Factory(t) { return new (t || AdmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"])); };
AdmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmComponent, selectors: [["app-adm"]], decls: 7, vars: 4, consts: [["role", "group", "aria-label", "Basic example", 1, "btn-group", "mb-2", "btn-group-sm"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["class", "row macros", 4, "ngIf"], ["class", "row diag", 4, "ngIf"], [1, "row", "macros"], [1, "col-3"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "mt-2", "btn-sm", "btn-primary", "btn-lg", "btn-block", 3, "click"], [1, "col"], ["class", "card", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "card"], [1, "card-header"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-body"], ["name", "", "id", "", "rows", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-muted"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "row", "diag"], [1, "row", "no-gutters"], [1, "col-4"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["class", "option", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "option"]], template: function AdmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_Template_button_click_1_listener() { return ctx.changeArea("macro"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Relat\u00F3rio Macrosc\u00F3pico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdmComponent_Template_button_click_3_listener() { return ctx.changeArea("diag"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Diagn\u00F3stico estruturado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdmComponent_div_5_Template, 8, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdmComponent_div_6_Template, 8, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.area == "macro" ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.area == "diag" ? "btn-primary" : "btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.area == "macro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.area == "diag");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".macros[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 0.3em 0.6em;\n  cursor: pointer;\n}\n\n.diag[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 0.3em 0.6em;\n  cursor: pointer;\n}\n\n.diag[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px 10px;\n  border: 1px solid #ccc;\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL2FkbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUtJO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBRlI7O0FBS0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9hZG0vYWRtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hY3JvcyB7XG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtIDAuNmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uZGlhZyB7XG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtIDAuNmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm9wdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adm',
                templateUrl: './adm.component.html',
                styleUrls: ['./adm.component.scss']
            }]
    }], function () { return [{ type: _services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adm_adm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm/adm.component */ "./src/app/adm/adm.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");







const routes = [
    { path: 'admin', component: _adm_adm_component__WEBPACK_IMPORTED_MODULE_2__["AdmComponent"] },
    { path: 'preview', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"] },
    { path: '', redirectTo: '/report', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = function (a0) { return { "active": a0 }; };
function AppComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_18_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const note_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.service.selectNote(note_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, note_r3 == (ctx_r0.service.subSelected == null ? null : ctx_r0.service.subSelected.note)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r3.text, " ");
} }
function AppComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.service.createNote = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nova");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nova Nota ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_20_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.service.noteText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_20_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.service.newNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Salvar e Selecionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.service.noteText);
} }
class AppComponent {
    // @ViewChild('autoCompleteObject') private autoCompleteObject: AutoComplete;
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.processMacros();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 5, consts: [[1, "navbar", "navbar-dark", "bg-dark", "mb-2"], [1, "navbar-brand"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", "routerLink", "/preview", 1, "btn", "btn-light", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["type", "button", "routerLink", "/report", 1, "btn", "btn-light", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-wpforms"], ["type", "button", "routerLink", "/admin", 1, "btn", "btn-light", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], [1, "container-fluid"], ["position", "right", 3, "visible", "visibleChange"], [1, "side-notes"], [1, "list", "p-2"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "note-name"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "p-2"], [1, "card"], [1, "card-header"], ["name", "", "id", "", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-sidebar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_sidebar_visibleChange_12_listener($event) { return ctx.service.notesVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Notas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_li_18_Template, 4, 5, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_button_19_Template, 3, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_20_Template, 7, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.service.notesVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.createNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.createNote);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".side-notes[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  line-height: 1.1em;\n  cursor: pointer;\n}\n.side-notes[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .note-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFEWjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQURoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLW5vdGVzIHtcbiAgICAubGlzdCB7XG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLm5vdGUtbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vL1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
/* harmony import */ var _adm_adm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adm/adm.component */ "./src/app/adm/adm.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/report.service */ "./src/app/services/report.service.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_app_services_report_service__WEBPACK_IMPORTED_MODULE_11__["ReportService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _adm_adm_component__WEBPACK_IMPORTED_MODULE_8__["AdmComponent"],
        _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"],
        _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _adm_adm_component__WEBPACK_IMPORTED_MODULE_8__["AdmComponent"],
                    _preview_preview_component__WEBPACK_IMPORTED_MODULE_9__["PreviewComponent"],
                    _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"]
                ],
                providers: [
                    src_app_services_report_service__WEBPACK_IMPORTED_MODULE_11__["ReportService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PreviewComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](macro_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", macro_r3.text, " ");
} }
function PreviewComponent_span_40_div_1_span_5_span_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.service.getSelectdSingle(item_r7), " ");
} }
function PreviewComponent_span_40_div_1_span_5_span_1_span_4_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PreviewComponent_span_40_div_1_span_5_span_1_span_4_li_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", mItem_r13.note.title, ") ");
} }
function PreviewComponent_span_40_div_1_span_5_span_1_span_4_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewComponent_span_40_div_1_span_5_span_1_span_4_li_2_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreviewComponent_span_40_div_1_span_5_span_1_span_4_li_2_span_6_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mItem_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mItem_r13.type == "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mItem_r13.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mItem_r13.note);
} }
function PreviewComponent_span_40_div_1_span_5_span_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewComponent_span_40_div_1_span_5_span_1_span_4_li_2_Template, 7, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.service.getSelectdMultiple(item_r7));
} }
function PreviewComponent_span_40_div_1_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_span_40_div_1_span_5_span_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const macro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.service.editItem(macro_r4, item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewComponent_span_40_div_1_span_5_span_1_span_3_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreviewComponent_span_40_div_1_span_5_span_1_span_4_Template, 3, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.type != "multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.type == "multiple");
} }
function PreviewComponent_span_40_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewComponent_span_40_div_1_span_5_span_1_Template, 5, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.service.checkItemFilled(item_r7));
} }
function PreviewComponent_span_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreviewComponent_span_40_div_1_span_5_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](macro_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", macro_r4.items);
} }
function PreviewComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewComponent_span_40_div_1_Template, 6, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.service.checkHasItemsSelecteds(macro_r4));
} }
function PreviewComponent_section_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", note_r25.title, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", note_r25.text, " ");
} }
function PreviewComponent_section_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewComponent_section_41_div_3_Template, 6, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.service.notes);
} }
class PreviewComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"])); };
PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], decls: 61, vars: 3, consts: [[1, "preview", "container"], [1, "card", "report-header"], [1, "body"], [1, "row"], [1, "col"], [1, "m-t-0", "m-b-0"], [1, "report", "mt-5"], [1, "date"], [1, "title"], [1, "text-title"], [1, "section-title"], ["class", "card", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card", "report-footer"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["class", "card", 4, "ngIf"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "name", 3, "click"], ["class", "text-single", 4, "ngIf"], [1, "text-single"], ["class", "text-multiple", 4, "ngFor", "ngForOf"], [1, "text-multiple"], [1, "name"], [1, "value"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5794.0778.2567");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "RGH 7108 | PRC 6681794");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "131 - CENTRO CIR\u00DARGICO (4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DR(A) ANDRE LUIS DE FREITAS PERINA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MARIA DA SILVA BEZERRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DN: 20/04/1977 (43 ANOS) | SEXO: FEMININO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TELEFONE: (11) 99999-5555");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Data de Coleta/Recebimento: 06/08/2020, Hora Aproximada: 09:14 BRT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " An\u00E1tomo Patol\u00F3gico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " (C\u00F3digo de Ordena\u00E7\u00E3o: SZD20-20-17586) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (M\u00E9todo: Colora\u00E7\u00E3o por Hematoxilina e Eosina) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Relat\u00F3rio Macrosc\u00F3pico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PreviewComponent_div_33_Template, 6, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Relat\u00F3rio Microsc\u00F3pico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Diagn\u00F3stico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PreviewComponent_span_40_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PreviewComponent_section_41_Template, 4, 1, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Exame analisado por:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Dra. Nathalia Beatriz Jose de Almeida | CRM-SP: 167669");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Dra. Marbele Guimaraes de Oliveira | CRM-SP 106445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Liberado por: (17/08/2020 16:13 BRT))");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Dra. Marbele Guimaraes de Oliveira | CRM-SP 106445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Respons\u00E1vel: Dra. Luciana Rodrigues de Meirelles CREMESP - 91265");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.macros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.macros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.notes.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".lists[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.lists[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  background-color: #865efd;\n  color: #fff;\n  padding: 0.2em 0.5em;\n}\n.list-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 0.3em 0.5em;\n  font-weight: 600;\n}\n.list-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.list-items[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  color: green;\n}\n.list-items[_ngcontent-%COMP%]   .item.enabled[_ngcontent-%COMP%] {\n  padding: 0.6em 1em;\n}\n.list-items[_ngcontent-%COMP%]   .item.enabled[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 1;\n}\n.list-items[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.list-items[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%] {\n  background-color: #29bb47;\n  border-color: #15a01f;\n}\n.list-items[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.sub-items[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 0.3em 0.5em;\n  font-weight: 400;\n}\n.sub-items[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n.sub-items[_ngcontent-%COMP%]   .sub.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.sub-items[_ngcontent-%COMP%]   .sub.selected[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.sub-items[_ngcontent-%COMP%]   .sub.selected[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.8em;\n  opacity: 1;\n}\n.macros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.macros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin-left: 0.5em;\n}\n.macros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  opacity: 0.7;\n  display: block;\n  line-height: 1em;\n  padding: 0 2em;\n}\n.macros[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  background-color: #865efd;\n  color: #fff;\n  padding: 0.2em 0.5em;\n}\n.diagnostics[_ngcontent-%COMP%]   .macro-title[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  display: block;\n  padding-left: 0.5em;\n  font-size: 0.8em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin-left: 2.4em;\n  display: block;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  opacity: 0.7;\n  display: block;\n  line-height: 1em;\n  padding: 0 2em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-single[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.7;\n  line-height: 1em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .text-multiple[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  line-height: 1em;\n  list-style-type: circle;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .text-multiple[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  margin-left: 1em;\n  line-height: 1.1em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .text-multiple[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.7;\n}\n.notes[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.notes[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .note-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1em;\n}\n.preview[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.preview[_ngcontent-%COMP%]   .report-header[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  font-weight: 700;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.6em;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  font-weight: 700;\n  opacity: 0.9;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  margin-bottom: 0.2em;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 0.3em;\n}\n.preview[_ngcontent-%COMP%]   .report[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  line-height: 1.2em;\n}\n.preview[_ngcontent-%COMP%]   .report-footer[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n.preview[_ngcontent-%COMP%]   .report-footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 0.3rem;\n  margin-left: 2em;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQVI7QUFHSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRFI7QUFRSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTFI7QUFNUTtFQUNJLGdCQUFBO0FBSlo7QUFTWTtFQUNJLFlBQUE7QUFQaEI7QUFXUTtFQUNJLGtCQUFBO0FBVFo7QUFXWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQVRoQjtBQWVZO0VBQ0ksc0JBQUE7QUFiaEI7QUFpQlE7RUFJSSx5QkFBQTtFQUNBLHFCQUFBO0FBbEJaO0FBY1k7RUFDSSxzQkFBQTtBQVpoQjtBQXNCSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBbkJSO0FBcUJRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBbkJaO0FBc0JRO0VBQ0ksYUFBQTtBQXBCWjtBQXVCUTtFQUNJLHNDQUFBO0FBckJaO0FBd0JZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUF0QmhCO0FBNkJJO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQTFCUjtBQTJCUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUF6Qlo7QUEyQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBekJaO0FBNkJZO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUEzQmhCO0FBa0NJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBL0JSO0FBbUNRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBakNaO0FBbUNRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWpDWjtBQW1DUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBakNaO0FBb0NRO0VBQ0ksb0JBQUE7QUFsQ1o7QUFtQ1k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFqQ2hCO0FBa0NnQjtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWhDcEI7QUFrQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBaENwQjtBQXlDUTtFQUNJLGdCQUFBO0FBdENaO0FBd0NZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQXRDaEI7QUE2Q0k7RUFDSSxzQkFBQTtBQTFDUjtBQTZDSTtFQUNJLGNBQUE7QUEzQ1I7QUErQ1E7RUFDSSx3QkFBQTtBQTdDWjtBQWdEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUE5Q1o7QUErQ1k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQTdDaEI7QUFpRFE7RUFDSSxlQUFBO0FBL0NaO0FBZ0RZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUE5Q2hCO0FBZ0RZO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQTlDaEI7QUErQ2dCO0VBQ0ksWUFBQTtBQTdDcEI7QUErQ29CO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0FBN0N4QjtBQStDb0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBN0N4QjtBQW9ESTtFQUNJLGNBQUE7QUFsRFI7QUFvRFE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbERaIiwiZmlsZSI6InNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RzIHtcbiAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY1ZWZkO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgfVxufVxuXG4ubGlzdC1pdGVtcyB7XG4gICAgLy8gbWFyZ2luLXRvcDogNGVtO1xuXG4gICAgLml0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwLjNlbSAwLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgLy8gb3BhY2l0eTogMC42O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmVuYWJsZWQge1xuICAgICAgICAgICAgcGFkZGluZzogMC42ZW0gMWVtO1xuXG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YmI0NztcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE1YTAxZjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN1Yi1pdGVtcyB7XG4gICAgLy8gbWFyZ2luLXRvcDogMWVtO1xuICAgIC5zdWIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwLjNlbSAwLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAuc3ViLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaGlkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAuNmVtIDFlbTtcblxuICAgICAgICAgICAgLnN1Yi1uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1hY3JvcyB7XG4gICAgLml0ZW0ge1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NjVlZmQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yZW0gMC41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kaWFnbm9zdGljcyB7XG4gICAgLm1hY3JvLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICM5ZTllOWU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjRlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMmVtO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXNpbmdsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgLnRleHQtbXVsdGlwbGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5vdGVzIHtcbiAgICAubGlzdCB7XG4gICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcblxuICAgICAgICAgICAgLm5vdGUtbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJldmlldyB7XG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgfVxuXG4gICAgLnJlcG9ydC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB9XG5cbiAgICAucmVwb3J0IHtcbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgLnRleHQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgICAgICAgLmNhcmQtYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcblxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZXBvcnQtZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogMC41ZW07XG5cbiAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview',
                templateUrl: './preview.component.html',
                styleUrls: ['./preview.component.scss']
            }]
    }], function () { return [{ type: _services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function ReportComponent_span_6_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function ReportComponent_span_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](macro_r4.text);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function ReportComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const macro_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.service.selectMacro(macro_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportComponent_span_6_i_3_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportComponent_span_6_span_4_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, macro_r4.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", macro_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.service.checkHasItemsSelecteds(macro_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", macro_r4.selected);
} }
function ReportComponent_span_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", macro_r10.name, " ");
} }
function ReportComponent_span_15_span_2_span_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.service.getSelectdSingle(item_r14), " ");
} }
function ReportComponent_span_15_span_2_span_1_span_5_li_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_span_15_span_2_span_1_span_5_li_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mItem_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", mItem_r20.note.title, ") ");
} }
function ReportComponent_span_15_span_2_span_1_span_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportComponent_span_15_span_2_span_1_span_5_li_2_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportComponent_span_15_span_2_span_1_span_5_li_2_span_6_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mItem_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mItem_r20.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mItem_r20.type == "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mItem_r20.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mItem_r20.note);
} }
function ReportComponent_span_15_span_2_span_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportComponent_span_15_span_2_span_1_span_5_li_2_Template, 7, 4, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.service.getSelectdMultiple(item_r14));
} }
function ReportComponent_span_15_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_span_15_span_2_span_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const macro_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.service.editItem(macro_r10, item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportComponent_span_15_span_2_span_1_span_4_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportComponent_span_15_span_2_span_1_span_5_Template, 3, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.type != "multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14.type == "multiple");
} }
function ReportComponent_span_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_span_15_span_2_span_1_Template, 6, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.service.checkItemFilled(item_r14));
} }
function ReportComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_span_15_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportComponent_span_15_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const macro_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.service.checkHasItemsSelecteds(macro_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", macro_r10.items);
} }
function ReportComponent_div_21_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r31.title, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r31.text, " ");
} }
function ReportComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Notas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportComponent_div_21_li_6_Template, 4, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.service.notes);
} }
const _c1 = function (a0, a1) { return { "fa-square-o": a0, "fa-check-square-o": a1 }; };
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, !sub_r37.selected, sub_r37.selected));
} }
const _c2 = function (a0, a1) { return { "fa-circle-thin": a0, "fa-check-circle-o": a1 }; };
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c2, !sub_r37.selected, sub_r37.selected));
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return sub_r37.value = $event; })("keyup", function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_input_1_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r49.service.updateText(); })("keydown.enter", function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_input_1_Template_input_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r50.service.keyEnterSubHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", sub_r37.value)("placeholder", sub_r37.text ? sub_r37.text : "");
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_input_1_Template, 1, 2, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r37.selected);
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_10_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subsub_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", subsub_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", subsub_r54, " ");
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_10_option_2_Template, 2, 2, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r37.options);
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_11_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r56.service.openNotes(sub_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", sub_r37.note ? "fa-sticky-note" : "fa-sticky-note-o");
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_div_23_ul_5_li_1_ul_6_li_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const sub_r37 = ctx.$implicit; const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r60.service.clickListSubItem(sub_r37, item_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_span_4_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_9_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_10_Template, 3, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_div_11_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r37 = ctx.$implicit;
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, sub_r37.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.type == "multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.type != "multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_r37.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ( ", sub_r37.code, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r37.type == "open" && sub_r37.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r37.type == "choose" && sub_r37.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r37.selected);
} }
function ReportComponent_div_23_ul_5_li_1_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_div_23_ul_5_li_1_ul_6_li_1_Template, 12, 10, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r34.options);
} }
const _c3 = function (a0, a1) { return { "active": a0, "selected": a1 }; };
function ReportComponent_div_23_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_div_23_ul_5_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const item_r34 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r65.service.clickListItem(item_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportComponent_div_23_ul_5_li_1_ul_6_Template, 2, 1, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c3, item_r34 == ctx_r33.service.activeItem, ctx_r33.service.checkHasSubSelecteds(item_r34)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ( ", item_r34.code, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.service.activeItem == item_r34);
} }
function ReportComponent_div_23_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_div_23_ul_5_li_1_Template, 7, 7, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.service.selectedMacro.items);
} }
function ReportComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_div_23_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.service.closeLists(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportComponent_div_23_ul_5_Template, 2, 1, "ul", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.service.selectedMacro.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.service.selectedMacro && ctx_r3.service.selectedMacro.items);
} }
class ReportComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 24, vars: 4, consts: [[1, "row", "mb-5"], [1, "col"], [1, "card", "macros", "mb-1"], [1, "card-header"], ["aria-hidden", "true", 1, "fa", "fa-file-text-o"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "card", "mb-1", "diagnostics"], [4, "ngFor", "ngForOf"], ["name", "", "id", "", "cols", "30", "rows", "5", 1, "card-body"], ["class", "card mb-1 notes", 4, "ngIf"], ["class", "card lists", 4, "ngIf"], [1, "item", 3, "ngClass", "click"], [1, "name"], ["class", "fa fa-check-circle", "aria-hidden", "true", 4, "ngIf"], ["class", "text", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [1, "text"], ["class", "macro-title", 4, "ngIf"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "macro-title"], [1, "item"], [4, "ngIf"], [1, "name", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], ["class", "text-single", 4, "ngIf"], [1, "text-single"], ["class", "text-multiple", 4, "ngFor", "ngForOf"], [1, "text-multiple"], [1, "value"], [1, "card", "mb-1", "notes"], ["aria-hidden", "true", 1, "fa", "fa-sticky-note-o"], [1, "list", "p-2"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "note-name"], [1, "card", "lists"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", 3, "click"], [1, "card-body"], ["class", "list-group list-items", 4, "ngIf"], [1, "list-group", "list-items"], ["class", "list-group-item list-group-item-action item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "item", 3, "ngClass", "click"], [1, "item-name"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right"], [1, "code"], ["class", "list-group sub-items", 4, "ngIf"], [1, "list-group", "sub-items"], ["class", "list-group-item list-group-item-action sub", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "sub", 3, "ngClass"], [1, "row"], [1, "col", 3, "click"], [1, "sub-name"], ["class", "col", 4, "ngIf"], ["class", "col-1", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], ["class", "form-control form-control-sm subvalue", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "keydown.enter", 4, "ngIf"], ["type", "text", 1, "form-control", "form-control-sm", "subvalue", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "keydown.enter"], ["name", "subs"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-1"], ["aria-hidden", "true", 1, "fa", 3, "ngClass", "click"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Relat\u00F3rio Macrosc\u00F3pico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportComponent_span_6_Template, 5, 6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Relat\u00F3rio Microsc\u00F3pico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Diagn\u00F3stico: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReportComponent_span_15_Template, 3, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Informe Cl\u00EDnico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ReportComponent_div_21_Template, 7, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportComponent_div_23_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.macros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.macros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.notes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.selectedMacro);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".lists[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.lists[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  background-color: #865efd;\n  color: #fff;\n  padding: 0.2em 0.5em;\n}\n.list-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 0.3em 0.5em;\n  font-weight: 600;\n}\n.list-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.list-items[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  color: green;\n}\n.list-items[_ngcontent-%COMP%]   .item.enabled[_ngcontent-%COMP%] {\n  padding: 0.6em 1em;\n}\n.list-items[_ngcontent-%COMP%]   .item.enabled[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 1;\n}\n.list-items[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.list-items[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%] {\n  background-color: #29bb47;\n  border-color: #15a01f;\n}\n.list-items[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.sub-items[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 0.3em 0.5em;\n  font-weight: 400;\n}\n.sub-items[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  opacity: 0.5;\n}\n.sub-items[_ngcontent-%COMP%]   .sub.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.sub-items[_ngcontent-%COMP%]   .sub.selected[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.sub-items[_ngcontent-%COMP%]   .sub.selected[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.8em;\n  opacity: 1;\n}\n.macros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.macros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin-left: 0.5em;\n}\n.macros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  opacity: 0.7;\n  display: block;\n  line-height: 1em;\n  padding: 0 2em;\n}\n.macros[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  background-color: #865efd;\n  color: #fff;\n  padding: 0.2em 0.5em;\n}\n.diagnostics[_ngcontent-%COMP%]   .macro-title[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  display: block;\n  padding-left: 0.5em;\n  font-size: 0.8em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin-left: 2.4em;\n  display: block;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  opacity: 0.7;\n  display: block;\n  line-height: 1em;\n  padding: 0 2em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-single[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.7;\n  line-height: 1em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .text-multiple[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  line-height: 1em;\n  list-style-type: circle;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .text-multiple[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  margin-left: 1em;\n  line-height: 1.1em;\n}\n.diagnostics[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .text-multiple[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.7;\n}\n.notes[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.notes[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .note-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFSO0FBR0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQURSO0FBUUk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUxSO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBU1k7RUFDSSxZQUFBO0FBUGhCO0FBV1E7RUFDSSxrQkFBQTtBQVRaO0FBV1k7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFUaEI7QUFlWTtFQUNJLHNCQUFBO0FBYmhCO0FBaUJRO0VBSUkseUJBQUE7RUFDQSxxQkFBQTtBQWxCWjtBQWNZO0VBQ0ksc0JBQUE7QUFaaEI7QUFzQkk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQW5CUjtBQXFCUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQW5CWjtBQXNCUTtFQUNJLGFBQUE7QUFwQlo7QUF1QlE7RUFDSSxzQ0FBQTtBQXJCWjtBQXdCWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBdEJoQjtBQTZCSTtFQUNJLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUExQlI7QUEyQlE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBekJaO0FBMkJRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXpCWjtBQTZCWTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBM0JoQjtBQWtDSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQS9CUjtBQW1DUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQWpDWjtBQW1DUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFqQ1o7QUFtQ1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWpDWjtBQW9DUTtFQUNJLG9CQUFBO0FBbENaO0FBbUNZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBakNoQjtBQWtDZ0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFoQ3BCO0FBa0NnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQWhDcEI7QUF5Q1E7RUFDSSxnQkFBQTtBQXRDWjtBQXdDWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUF0Q2hCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0cyB7XG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIGg1IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg2NWVmZDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICAgIH1cbn1cblxuLmxpc3QtaXRlbXMge1xuICAgIC8vIG1hcmdpbi10b3A6IDRlbTtcblxuICAgIC5pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC5pdGVtLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIC8vIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5lbmFibGVkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNmVtIDFlbTtcblxuICAgICAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWJiNDc7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMxNWEwMWY7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdWItaXRlbXMge1xuICAgIC8vIG1hcmdpbi10b3A6IDFlbTtcbiAgICAuc3ViIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgLnN1Yi1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAwLjZlbSAxZW07XG5cbiAgICAgICAgICAgIC5zdWItbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYWNyb3Mge1xuICAgIC5pdGVtIHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY1ZWZkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGlhZ25vc3RpY3Mge1xuICAgIC5tYWNyby10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG5cbiAgICAuaXRlbSB7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi40ZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJlbTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1zaW5nbGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgIC50ZXh0LW11bHRpcGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ub3RlcyB7XG4gICAgLmxpc3Qge1xuICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG5cbiAgICAgICAgICAgIC5ub3RlLW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.scss']
            }]
    }], function () { return [{ type: _services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/report.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReportService {
    constructor() {
        this.title = 'Carcinoma invasivo do colo uterino, com as seguintes características';
        this.previewMode = false;
        this.reportText = "";
        this.noteText = "";
        this.items = [
            {
                name: "Tipo de procedimento", code: "tp", type: "multiple", options: [
                    { name: "traquelectomia radical", selected: false, code: "tr" },
                    { name: "histerectomia total com anexectomia unilateral", selected: false, code: "htau" },
                    { name: "anexectomia bilateral", selected: false, code: "ab" },
                    { name: "salpingectomia unilateral", selected: false, code: "su" },
                    { name: "salpingectomia bilateral acompanhada de parametrectomia e linfadenectomia pélvica e peri - aórtica", selected: false, code: "sbap" },
                    { name: "outro", selected: false, code: "ou", type: "open", length: 1, value: "" },
                ]
            },
            {
                name: "Integridade do espécime", code: "ie", options: [
                    { name: "intacto", selected: false, code: "it" },
                    { name: "aberto", selected: false, code: "ab" },
                    { name: "fragmentado", selected: false, code: "ab", type: "open", length: 1, text: "Fragmentado em # fragmentos.", value: "" },
                ]
            },
            {
                name: "Localização do tumor", code: "lt", options: [
                    { name: "ectocérvice", selected: false, code: "ec" },
                    { name: "endocérvice", selected: false, code: "en" },
                    { name: "ectocérvice e endocérvice", selected: false, code: "ecen" },
                    { name: "não especificável", selected: false, code: "ecen" },
                    { name: "outro", selected: false, code: "ou", type: "open", length: 1, value: "" },
                ]
            },
            {
                name: "Dimensões do tumor", type: "multiple", code: "dt", options: [
                    { name: "Profundidade de invasão", selected: false, code: "pi", type: "open", length: 1, text: "Profundidade de invasão: # mm.", value: "" },
                    { name: "Espessura tumoral", selected: false, code: "et", type: "open", length: 1, text: "Espessura tumoral: # mm.", value: "" },
                    { name: "Segunda dimensão horizontal", selected: false, code: "sdh", type: "open", length: 1, text: "Segunda dimensão horizontal: # mm.", value: "" },
                    { name: "Número de blocos com tumor", selected: false, code: "nbt", type: "open", length: 1, value: "" },
                ]
            },
            {
                name: "Tipo histológico", code: "th", options: [
                    { name: "de células escamosas", selected: false, code: "ce" },
                    { name: "adenocarcinoma", selected: false, code: "ad", type: "open", length: 1, text: "adenocarcinoma #; padrão morfológico A, B, C do Sistema de Silva" },
                    { name: "outro", selected: false, code: "ou", type: "open", length: 1 },
                ]
            },
            {
                name: "Grau histológico", code: "gh", options: [
                    { name: "G1", selected: false, code: "g1" },
                    { name: "G2", selected: false, code: "g2" },
                    { name: "G3", selected: false, code: "g3" },
                    { name: "não graduável", selected: false, code: "ng", type: "open", length: 1, text: "não graduável(#)." },
                    { name: "não aplicável", selected: false, code: "na", type: "open", length: 1, text: "não aplicável(#)." },
                ]
            },
            {
                name: "Invasão linfovascular", code: "il", options: [
                    { name: "não detectada", selected: false, code: "nd" },
                    { name: "presente", selected: false, code: "p" },
                    { name: "indeterminada", selected: false, code: "i", type: "open", length: 1, text: "indeterminada(#)", value: "" },
                ]
            },
            {
                name: "Nível de infiltração da parede cervical", code: "nipc", options: [
                    { name: "terço interno", selected: false, code: "ti" },
                    { name: "médio", selected: false, code: "m" },
                    { name: "externo", selected: false, code: "e", type: "open", length: 2, text: "externo(tumor infiltra # mm em parede de # mm).", value: [11, 22] },
                ]
            },
            {
                name: "Lesões coexistentes", code: "lc", options: [
                    { name: "lesão intraepitelial escamosa de alto grau", selected: false, code: "lieag", type: "choose", options: ["2", "3", "2 / 3"], text: "lesão intraepitelial escamosa de alto grau(NIC #)" },
                    {
                        name: "lesão intraepitelial escamosa de alto grau com extensão para criptas endocervicais", selected: false, code: "lieagece", type: "choose", options: ["2", "3", "2 / 3"], text: "lesão intraepitelial escamosa de alto grau(NIC #) com extensão para criptas endocervicais"
                    },
                    { name: "adenocarcinoma in situ", selected: false, code: "as" },
                    { name: "lesão intraepitelial estratificada produtora de mucina(SMILE)", selected: false, code: "liepm" },
                    { name: "outro", selected: false, code: "ou", type: "open", length: 1, value: "" },
                ]
            },
            {
                name: "Status das margens cirúrgicas para doença invasiva", code: "smcdi", options: [
                    { name: "Ectocervical, manguito vaginal", selected: false, code: "emv" },
                    { name: "Parametrial / paracervical", selected: false, code: "pp" },
                    { name: "Ístmica", selected: false, code: "is" },
                    { name: "Radial / estromal profunda", selected: false, code: "rep" },
                ]
            }
        ];
        this.macros = [
            { name: "A - Colo uterino", items: [], selected: false, text: "o material é recebido em formalina e consiste de colo uterino, medindo 4, 2 x 4, 0 x 3, 8 cm.Apresenta superfície ectocervical pardo - clara e brilhante.O orifício externo é em fenda.Aos cortes, observa - se canal endocervical virtual com revestimento rugoso de coloração pardo - claro exibindo área mal delimitada friável e esbranquiçada, medindo 2, 0 x 1, 8 cm, distando 1, 8 cm do istmo e exteriorizando - se através do orifício externo.A face anterior e posterior foram tingidas nas cores azul e preta, respectivamente.Foram enviados cortes sequenciais da margem lateral 3h para margem lateral 9h.Os paramétrios foram enviados em cortes sequenciais da porção proximal para distal.A1 ao A3 - margem lateral 3h: 3bls / mf; A4 ao A6 - margem lateral 9h: 3bls / mf; A7 ao A35 - porção central: 29bls / mf; A36 - istmo: 1bl / 1f; A37 ao A40 - paramétrio direito: 4bls / mf; A41 ao A45 - paramétrio esquerdo: 5bls / mf.Enviado para exame microscópico todo o material 59B / mf." },
            { name: "B - Corpo uterino", items: [], selected: false, text: "o material é recebido em formalina e consiste de corpo uterino pesando 40, 0 gramas e medindo 4, 6 x 4, 6 x 3, 2 cm.A serosa é lisa e castanha.Aos cortes, a cavidade mede 3, 1 cm e está revestida por endométrio macio e róseo, medindo 0, 1 cm de espessura.O miométrio é constituído por tecido elástico e castanho, de aspecto fasciculado, medindo até 1, 7 cm de espessura, tendo em meio áreas focais de tonalidade vinhosa.Enviado para exame microscópico parte do material. 2bls / 4f." },
            { name: "C - Ovário direito", items: [], selected: false, text: "o material é recebido em formalina e consiste de ovário medindo 3, 3 x 3, 2 x 1, 4 cm.A superfície externa é lobulada e acinzentada.Aos cortes observam - se múltiplas cavidades císticas, a maior medindo 1, 2 cm de diâmetro, preenchidas ora por líquido seroso e incolor, ora por material friável e vinhoso, com parede amarelada e sinuosa.Enviado para exame microscópico parte do material. 2bls / 2f." },
            { name: "D - Tuba uterina direita", items: [], selected: false, text: "o material é recebido em formalina e consiste de tuba uterina medindo 4, 7 cm de comprimento por 0, 7 cm de diâmetro externo médio.A superfície externa é lisa e acinzentada.Aos cortes, a parede é constituída por tecido elástico e castanho, com a luz virtual.Enviado para exame microscópico parte do material. 2b / mf." },
            { name: "E - Ovário esquerdo", items: [], selected: false, text: "o material é recebido em formalina e consiste de ovário medindo 3, 7 x 2, 8 x 1, 6 cm.A superfície externa é lobulada e acinzentada.Aos cortes observam - se múltiplas cavidades císticas, a maior medindo 1, 0 cm de diâmetro, preenchidas ora por líquido seroso e incolor, ora por material friável e vinhoso, com parede amarelada e sinuosa.Enviado para exame microscópico parte do material. 2bls / 4f." },
            { name: "F - Tuba uterina esquerda", items: [], selected: false, text: "o material é recebido em formalina e consiste de tuba uterina medindo 5, 4 cm de comprimento por 0, 5 cm de diâmetro externo médio.A superfície externa é lisa e acinzentada.Aos cortes, a parede é constituída por tecido elástico e castanho, com a luz virtual.Enviado para exame microscópico parte do material. 2b / mf." },
            { name: "G - Linfonodo sentinela pélvico direito", items: [], selected: false, text: "o material é recebido em formalina e consiste de 2 estruturas nodulares ovoide medindo a maior 2, 5 cm no maior eixo, e o menor 2, 0 cm no maior eixo.A superfície externa é pardo - clara, lisa e brilhante.Aos cortes o tecido é firme - elástico e castanho.G1 - nódulo maior: 1bl; G2 - nódulo menor: 1bl.Enviado para exame microscópico todo o material. 2bls / mf." },
            { name: "H - Linfonodo sentinela pélvico esquerdo", items: [], selected: false, text: "o material é recebido em formalina e consiste de fragmento irregular, medindo 3, 1 x 1, 8 x 0, 7 cm, constituído por tecido macio e amarelado, de aspecto lobulado, com vascularização acentuada.Aos cortes, foram isolados 4 nódulos, o maior medindo 1, 8 cm no maior eixo, constituídos por tecido firme - elástico e castanho - amarelado.H1 - nódulo maior: 1bl; H2 - outros nódulos: 1bl.Enviado para exame microscópico parte do material. 2bls / mf." },
        ];
        this.notes = [];
    }
    processMacros() {
        console.log("processMacros()");
        this.macros.forEach(macro => {
            macro.items = JSON.parse(JSON.stringify(this.items));
        });
    }
    checkItemFilled(item) {
        let hasSelected = false;
        item.options.forEach(subitem => {
            if (subitem.selected) {
                hasSelected = true;
            }
        });
        return hasSelected;
    }
    getSelectdSingle(item) {
        let selectedItem;
        let returnText;
        item.options.forEach(subitem => {
            if (subitem.selected) {
                selectedItem = subitem;
            }
        });
        if (selectedItem.type != "open") {
            returnText = selectedItem.name;
        }
        else {
            returnText = selectedItem.text ? selectedItem.text.replace("#", selectedItem.value) : selectedItem.value;
        }
        if (selectedItem.note) {
            returnText += " (" + selectedItem.note.title + ")";
        }
        return returnText;
    }
    getSelectdMultiple(item) {
        let selectedsItem = [];
        item.options.forEach(subitem => {
            if (subitem.selected) {
                if (subitem.type != "open") {
                    selectedsItem.push(subitem);
                }
                else {
                    selectedsItem.push({
                        name: subitem.name,
                        value: subitem.text ? subitem.text.replace("#", subitem.value) : subitem.value,
                        type: subitem.type,
                        note: subitem.note
                    });
                }
            }
        });
        return selectedsItem;
    }
    clickListItem(item) {
        // this.deselectItems();
        this.activeItem = item;
        if (item.enabled) {
            // item.enabled = false;
        }
        else {
            item.enabled = true;
        }
        // this.updateText();
    }
    clickListSubItem(sub, item) {
        if (item.type != "multiple") {
            this.deselectSubs(sub, item);
        }
        if (sub.selected) {
            sub.selected = false;
        }
        else {
            sub.selected = true;
            if (sub.type == "open") {
                this.focusInValue(0);
            }
        }
        this.updateText();
    }
    deselectSubs(sub, item) {
        item.options.forEach(subitem => {
            if (sub != subitem) {
                subitem.selected = false;
            }
        });
    }
    selectMacro(macro) {
        this.macros.forEach(item => {
            item.selected = false;
        });
        macro.selected = true;
        this.selectedMacro = macro;
    }
    checkHasItemsSelecteds(macro) {
        let has = false;
        macro.items.forEach(item => {
            item.options.forEach(sub => {
                if (sub.selected) {
                    has = true;
                }
            });
        });
        return has;
    }
    checkHasSubSelecteds(item) {
        let has = false;
        item.options.forEach(sub => {
            if (sub.selected) {
                has = true;
            }
        });
        return has;
    }
    closeLists() {
        this.selectedMacro.selected = false;
        this.selectedMacro = null;
    }
    editItem(macro, item) {
        this.selectedMacro = macro;
        this.activeItem = item;
        this.previewMode = false;
    }
    openNotes(sub) {
        this.notesVisible = true;
        this.subSelected = sub;
    }
    selectNote(note) {
        this.subSelected.note = note;
        this.closeNotes();
    }
    closeNotes() {
        this.notesVisible = false;
        this.subSelected = null;
        this.createNote = false;
        this.noteText = "";
    }
    newNote() {
        this.notes.push({
            title: "Nota " + (this.notes.length + 1),
            text: this.noteText
        });
        this.subSelected.note = this.notes[this.notes.length - 1];
        this.closeNotes();
    }
    //
    deselectItems() {
        this.items.forEach(item => {
            let hasSubSelected = false;
            let subSelected;
            item.options.forEach(sub => {
                if (sub.enabled) {
                    subSelected = sub;
                    hasSubSelected = true;
                }
            });
            item.enabled = hasSubSelected;
            item.subSelected = subSelected;
        });
    }
    keyEnterSubHandler() {
        console.log("keyEnterSubHandler()");
        // this.deselectItems();
        this.activeItem = null;
        // this.focusOnAutocomplete();
    }
    focusInValue(index) {
        let input = document.querySelectorAll("input.subvalue")[index];
        if (input) {
            input.focus();
        }
    }
    updateText() {
        this.reportText = "";
        this.macros.forEach(item => {
            item.items.forEach(item => {
                if (item.subSelected) {
                    this.reportText += item.name + ': ';
                    item.options.forEach(sub => {
                        if (sub.enabled) {
                            if (sub.type == "open") {
                                this.reportText += sub.value + '\r\n';
                            }
                            else {
                                this.reportText += sub.name + '\r\n';
                            }
                        }
                    });
                }
            });
        });
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sheldon/4-projects/Dasa/smartreport/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map