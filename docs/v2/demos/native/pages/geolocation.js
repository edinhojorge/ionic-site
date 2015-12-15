"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

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
var GeolocationPage = (function () {
    function GeolocationPage() {
        _classCallCheck(this, GeolocationPage);
    }

    _createClass(GeolocationPage, [{
        key: "doGetLocation",
        value: function doGetLocation() {
            var _this = this;

            console.log('Getting location');
            this.gettingLocation = true;
            _ionicIonic.Geolocation.getCurrentPosition().then(function (pos) {
                _this.gettingLocation = false;
                console.log('Got location', pos);
                _this.location = pos;
            }, function (err) {
                _this.gettingLocation = false;
                console.error('Unable to get location', err);
            });
        }
    }, {
        key: "doTrackLocation",
        value: function doTrackLocation() {
            var _this2 = this;

            this.gettingTrackLocation = true;
            _ionicIonic.Geolocation.watchPosition().source.subscribe(function (pos) {
                _this2.gettingTrackLocation = false;
                console.log('Got location', pos);
                _this2.trackLocation = pos;
            }, function (err) {
                _this2.gettingTrackLocation = false;
                console.error('Unable to get location', pos);
            });
        }
    }]);

    return GeolocationPage;
})();
exports.GeolocationPage = GeolocationPage;
exports.GeolocationPage = GeolocationPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar>\n    <button menu-toggle>\n      <icon menu></icon>\n    </button>\n    <ion-title>Geolocation</ion-title>\n  </ion-navbar>\n  <ion-content padding>\n    <h2>Geolocation</h2>\n    <button primary outline (click)=\"doGetLocation()\">Get Location</button>\n    <div>\n      <b *ng-if=\"gettingLocation\">Fetching location...</b>\n      <b *ng-if=\"location\">{{location.coords.latitude}}, {{location.coords.longitude}}</b>\n    </div>\n    <button primary outline (click)=\"doTrackLocation()\">Track Location</button>\n    <div>\n      <b *ng-if=\"gettingTrackLocation\">Fetching location...</b>\n      <b *ng-if=\"trackLocation\">{{trackLocation.coords.latitude}}, {{trackLocation.coords.longitude}}</b>\n    </div>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [])], GeolocationPage);