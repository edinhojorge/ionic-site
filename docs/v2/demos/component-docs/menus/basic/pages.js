"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../../helpers');

var helpers = _interopRequireWildcard(_helpers);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BasicPage = function BasicPage(app) {
    _classCallCheck(this, BasicPage);

    this.app = app;
    this.app.getComponent('leftMenu').enable(true);
};
exports.BasicPage = BasicPage;
exports.BasicPage = BasicPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/basic/menu-home.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.IonicApp !== 'undefined' && _ionicIonic.IonicApp) === 'function' && _a || Object])], BasicPage);
var PageOne = function PageOne() {
    _classCallCheck(this, PageOne);
};
exports.PageOne = PageOne;
exports.PageOne = PageOne = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/basic/menu-home.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], PageOne);
var PageTwo = function PageTwo() {
    _classCallCheck(this, PageTwo);
};
exports.PageTwo = PageTwo;
exports.PageTwo = PageTwo = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/basic/menu-friends.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], PageTwo);
var PageThree = function PageThree() {
    _classCallCheck(this, PageThree);
};
exports.PageThree = PageThree;
exports.PageThree = PageThree = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'menus/basic/menu-events.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], PageThree);
var _a;