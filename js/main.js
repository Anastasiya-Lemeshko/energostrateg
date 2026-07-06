/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/detect-browser/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/detect-browser/es/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BotInfo: () => (/* binding */ BotInfo),
/* harmony export */   BrowserInfo: () => (/* binding */ BrowserInfo),
/* harmony export */   NodeInfo: () => (/* binding */ NodeInfo),
/* harmony export */   ReactNativeInfo: () => (/* binding */ ReactNativeInfo),
/* harmony export */   SearchBotDeviceInfo: () => (/* binding */ SearchBotDeviceInfo),
/* harmony export */   browserName: () => (/* binding */ browserName),
/* harmony export */   detect: () => (/* binding */ detect),
/* harmony export */   detectOS: () => (/* binding */ detectOS),
/* harmony export */   getNodeVersion: () => (/* binding */ getNodeVersion),
/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}


/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/bezier/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/bezier/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easingByBezier: () => (/* binding */ easingByBezier)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-use-before-define */
function easingByBezier(progress, bezier) {
    const [x1, y1, x2, y2] = bezier;
    if (x1 === y1 && x2 === y2) {
        return progress;
    }
    const val = [];
    for (let i = 0; i < 11; ++i) {
        val[i] = bezierCalc(i * 0.1, x1, x2);
    }
    if (progress === 0) {
        return 0;
    }
    if (progress === 1) {
        return 1;
    }
    return bezierCalc(bezierX(bezier, progress, val), y1, y2);
}
function bezierCalc(progress, x1, x2) {
    return (((bezierA(x1, x2) * progress + bezierB(x1, x2)) * progress + bezierC(x1)) *
        progress);
}
function bezierA(x1, x2) {
    return 1.0 - 3.0 * x2 + 3.0 * x1;
}
function bezierB(x1, x2) {
    return 3.0 * x2 - 6.0 * x1;
}
function bezierC(x1) {
    return 3.0 * x1;
}
function bezierX(bezier, progress, val) {
    // eslint-disable-next-line no-unused-vars
    const x1 = bezier[0];
    const x2 = bezier[2];
    let start = 0;
    let current = 1;
    for (; current !== 10 && val[current] <= progress; ++current) {
        start += 0.1;
    }
    --current;
    const dist = (progress - val[current]) / (val[current + 1] - val[current]);
    const guessForT = start + dist * 0.1;
    const initialSlope = bezierSlope(guessForT, x1, x2);
    if (initialSlope >= 0.001) {
        return bezierNewtonRaphsonIterate(progress, guessForT, x1, x2);
    }
    if (initialSlope === 0.0) {
        return guessForT;
    }
    return bezierBinarySubdivide(progress, start, start + 0.1, x1, x2);
}
function bezierSlope(progress, x1, x2) {
    return (3.0 * bezierA(x1, x2) * progress * progress +
        2.0 * bezierB(x1, x2) * progress +
        bezierC(x1));
}
function bezierNewtonRaphsonIterate(progress, guessForT, x1, x2) {
    for (let i = 0; i < 4; ++i) {
        const currentSlope = bezierSlope(guessForT, x1, x2);
        if (currentSlope === 0.0) {
            return guessForT;
        }
        const currentX = bezierCalc(guessForT, x1, x2) - progress;
        guessForT -= currentX / currentSlope;
    }
    return guessForT;
}
function bezierBinarySubdivide(progress, a, b, x1, x2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = a + (b - a) / 2.0;
        currentX = bezierCalc(currentT, x1, x2) - progress;
        if (currentX > 0.0) {
            b = currentT;
        }
        else {
            a = currentT;
        }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.js":
/*!********************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easing: () => (/* binding */ easing)
/* harmony export */ });
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bezier */ "./node_modules/easing-progress/lib/esm/bezier/index.js");

/**
 * Calculate easing value
 */
function easing(progress, easingType = false) {
    if (Array.isArray(easingType)) {
        return (0,_bezier__WEBPACK_IMPORTED_MODULE_0__.easingByBezier)(progress, easingType);
    }
    if (typeof easingType === 'function') {
        return easingType(progress);
    }
    return progress;
}
//# sourceMappingURL=easing.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInBack.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInBack.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInBack: () => (/* binding */ EaseInBack)
/* harmony export */ });
const EaseInBack = (x) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * x * x * x - c1 * x * x;
};
//# sourceMappingURL=easeInBack.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInBounce.js":
/*!*************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInBounce.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInBounce: () => (/* binding */ EaseInBounce)
/* harmony export */ });
/* harmony import */ var _easeOutBounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easeOutBounce */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutBounce.js");

const EaseInBounce = (x) => 1 - (0,_easeOutBounce__WEBPACK_IMPORTED_MODULE_0__.EaseOutBounce)(1 - x);
//# sourceMappingURL=easeInBounce.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInCirc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInCirc.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInCirc: () => (/* binding */ EaseInCirc)
/* harmony export */ });
const EaseInCirc = (x) => 1 - Math.sqrt(1 - Math.pow(x, 2));
//# sourceMappingURL=easeInCirc.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInCubic.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInCubic.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInCubic: () => (/* binding */ EaseInCubic)
/* harmony export */ });
const EaseInCubic = (x) => Math.pow(x, 3);
//# sourceMappingURL=easeInCubic.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInElastic.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInElastic.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInElastic: () => (/* binding */ EaseInElastic)
/* harmony export */ });
const EaseInElastic = (x) => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : -(Math.pow(2, (10 * x - 10))) * Math.sin((x * 10 - 10.75) * c4);
};
//# sourceMappingURL=easeInElastic.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInExpo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInExpo.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInExpo: () => (/* binding */ EaseInExpo)
/* harmony export */ });
const EaseInExpo = (x) => x === 0 ? 0 : Math.pow(2, (10 * x - 10));
//# sourceMappingURL=easeInExpo.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutBack.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutBack.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutBack: () => (/* binding */ EaseInOutBack)
/* harmony export */ });
const EaseInOutBack = (x) => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;
    return x < 0.5
        ? (Math.pow((2 * x), 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow((2 * x - 2), 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
};
//# sourceMappingURL=easeInOutBack.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutBounce.js":
/*!****************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutBounce.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutBounce: () => (/* binding */ EaseInOutBounce)
/* harmony export */ });
/* harmony import */ var _easeOutBounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easeOutBounce */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutBounce.js");

const EaseInOutBounce = (x) => x < 0.5
    ? (1 - (0,_easeOutBounce__WEBPACK_IMPORTED_MODULE_0__.EaseOutBounce)(1 - 2 * x)) / 2
    : (1 + (0,_easeOutBounce__WEBPACK_IMPORTED_MODULE_0__.EaseOutBounce)(2 * x - 1)) / 2;
//# sourceMappingURL=easeInOutBounce.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutCirc.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutCirc.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutCirc: () => (/* binding */ EaseInOutCirc)
/* harmony export */ });
const EaseInOutCirc = (x) => x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow((2 * x), 2))) / 2
    : (Math.sqrt(1 - Math.pow((-2 * x + 2), 2)) + 1) / 2;
//# sourceMappingURL=easeInOutCirc.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutCubic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutCubic.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutCubic: () => (/* binding */ EaseInOutCubic)
/* harmony export */ });
const EaseInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow((-2 * x + 2), 3) / 2;
//# sourceMappingURL=easeInOutCubic.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutElastic.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutElastic.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutElastic: () => (/* binding */ EaseInOutElastic)
/* harmony export */ });
const EaseInOutElastic = (x) => {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? -(Math.pow(2, (20 * x - 10)) * Math.sin((20 * x - 11.125) * c5)) / 2
                : (Math.pow(2, (-20 * x + 10)) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};
//# sourceMappingURL=easeInOutElastic.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutExpo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutExpo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutExpo: () => (/* binding */ EaseInOutExpo)
/* harmony export */ });
const EaseInOutExpo = (x) => x === 0
    ? 0
    : x === 1
        ? 1
        : x < 0.5
            ? Math.pow(2, (20 * x - 10)) / 2
            : (2 - Math.pow(2, (-20 * x + 10))) / 2;
//# sourceMappingURL=easeInOutExpo.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuad.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuad.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutQuad: () => (/* binding */ EaseInOutQuad)
/* harmony export */ });
const EaseInOutQuad = (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow((-2 * x + 2), 2) / 2;
//# sourceMappingURL=easeInOutQuad.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuart.js":
/*!***************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuart.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutQuart: () => (/* binding */ EaseInOutQuart)
/* harmony export */ });
const EaseInOutQuart = (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow((-2 * x + 2), 4) / 2;
//# sourceMappingURL=easeInOutQuart.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuint.js":
/*!***************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuint.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutQuint: () => (/* binding */ EaseInOutQuint)
/* harmony export */ });
const EaseInOutQuint = (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow((-2 * x + 2), 5) / 2;
//# sourceMappingURL=easeInOutQuint.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutSine.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInOutSine.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInOutSine: () => (/* binding */ EaseInOutSine)
/* harmony export */ });
const EaseInOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2;
//# sourceMappingURL=easeInOutSine.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInQuad.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInQuad.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInQuad: () => (/* binding */ EaseInQuad)
/* harmony export */ });
const EaseInQuad = (x) => Math.pow(x, 2);
//# sourceMappingURL=easeInQuad.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInQuart.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInQuart.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInQuart: () => (/* binding */ EaseInQuart)
/* harmony export */ });
const EaseInQuart = (x) => Math.pow(x, 4);
//# sourceMappingURL=easeInQuart.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInQuint.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInQuint.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInQuint: () => (/* binding */ EaseInQuint)
/* harmony export */ });
const EaseInQuint = (x) => Math.pow(x, 5);
//# sourceMappingURL=easeInQuint.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeInSine.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeInSine.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInSine: () => (/* binding */ EaseInSine)
/* harmony export */ });
const EaseInSine = (x) => 1 - Math.cos((x * Math.PI) / 2);
//# sourceMappingURL=easeInSine.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutBack.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutBack.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutBack: () => (/* binding */ EaseOutBack)
/* harmony export */ });
const EaseOutBack = (x) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow((x - 1), 3) + c1 * Math.pow((x - 1), 2);
};
//# sourceMappingURL=easeOutBack.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutBounce.js":
/*!**************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutBounce.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutBounce: () => (/* binding */ EaseOutBounce)
/* harmony export */ });
const EaseOutBounce = (x) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    }
    if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    }
    if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    }
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
};
//# sourceMappingURL=easeOutBounce.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutCirc.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutCirc.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutCirc: () => (/* binding */ EaseOutCirc)
/* harmony export */ });
const EaseOutCirc = (x) => Math.sqrt(1 - Math.pow((x - 1), 2));
//# sourceMappingURL=easeOutCirc.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutCubic.js":
/*!*************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutCubic.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutCubic: () => (/* binding */ EaseOutCubic)
/* harmony export */ });
const EaseOutCubic = (x) => 1 - Math.pow((1 - x), 3);
//# sourceMappingURL=easeOutCubic.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutElastic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutElastic.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutElastic: () => (/* binding */ EaseOutElastic)
/* harmony export */ });
const EaseOutElastic = (x) => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, (-10 * x)) * Math.sin((x * 10 - 0.75) * c4) + 1;
};
//# sourceMappingURL=easeOutElastic.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutExpo.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutExpo.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutExpo: () => (/* binding */ EaseOutExpo)
/* harmony export */ });
const EaseOutExpo = (x) => x === 1 ? 1 : 1 - Math.pow(2, (-10 * x));
//# sourceMappingURL=easeOutExpo.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutQuad.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutQuad.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutQuad: () => (/* binding */ EaseOutQuad)
/* harmony export */ });
const EaseOutQuad = (x) => 1 - Math.pow((1 - x), 2);
//# sourceMappingURL=easeOutQuad.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutQuart.js":
/*!*************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutQuart.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutQuart: () => (/* binding */ EaseOutQuart)
/* harmony export */ });
const EaseOutQuart = (x) => 1 - Math.pow((1 - x), 4);
//# sourceMappingURL=easeOutQuart.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutQuint.js":
/*!*************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutQuint.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutQuint: () => (/* binding */ EaseOutQuint)
/* harmony export */ });
const EaseOutQuint = (x) => 1 - Math.pow((1 - x), 5);
//# sourceMappingURL=easeOutQuint.js.map

/***/ }),

/***/ "./node_modules/easing-progress/lib/esm/easing.net/easeOutSine.js":
/*!************************************************************************!*\
  !*** ./node_modules/easing-progress/lib/esm/easing.net/easeOutSine.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseOutSine: () => (/* binding */ EaseOutSine)
/* harmony export */ });
const EaseOutSine = (x) => Math.sin((x * Math.PI) / 2);
//# sourceMappingURL=easeOutSine.js.map

/***/ }),

/***/ "./node_modules/inapp-spy/dist/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/inapp-spy/dist/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SFSVCExperimental: () => (/* binding */ SFSVCExperimental),
/* harmony export */   "default": () => (/* binding */ index_default)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/utils.ts
var WIN_ERROR = "Window is not available and no user agent was provided.";
var getUA = () => {
  var _a, _b;
  if (typeof window !== "undefined") {
    const ua = ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.vendor) || // @ts-ignore
    (window == null ? void 0 : window.opera);
    if (ua) return ua;
  }
  console.error(WIN_ERROR);
  return "";
};
var empty = {
  isInApp: false,
  appKey: void 0,
  appName: void 0,
  skipped: false
};
var getIsAppleDevice = (ua) => {
  return ua.match(/(iPhone|iPad|iPod|Macintosh)/) !== null;
};
var checkSkip = ({
  skip,
  appKey,
  ua
}) => {
  if (!skip || skip.length === 0) return false;
  const isApple = getIsAppleDevice(ua);
  return skip.some(
    ({ appKey: excludeAppKey, platform }) => appKey === excludeAppKey && (!platform || isApple && platform === "apple" || !isApple && platform === "android")
  );
};
var isSafariRegex = new RegExp(
  /Mozilla\/5\.0 \([^\)]+\) AppleWebKit\/[^\s]+ \(KHTML, like Gecko\) Version\/[^\s]+ (Mobile\/[^\s]+ )?Safari\/[^\s]+$/
);
var getIsSafariUA = (ua) => {
  return isSafariRegex.test(ua);
};
var isiOS = (ua) => {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(ua) || // iPad on iOS 13 detection
  window && window.document && ua.includes("Mac") && "ontouchend" in window.document;
};
var getSafariVersion = (ua) => {
  const match = [...ua.matchAll(/Version\/([^\s]+)/g)];
  return match[0][1];
};
function waitForPageLoad() {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      if (window.document.readyState === "complete") {
        resolve(true);
      } else {
        const onLoad = () => {
          resolve(true);
          window.removeEventListener("load", onLoad);
        };
        window.addEventListener("load", onLoad);
      }
    });
  });
}
var pollForProperties = (_0) => __async(null, [_0], function* ({
  maxTime,
  properties,
  interval
}) {
  let elapsed = 0;
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      elapsed += interval;
      for (const property of properties) {
        if (property in window) {
          clearInterval(intervalId);
          resolve(true);
          return;
        }
      }
      if (elapsed >= maxTime) {
        clearInterval(intervalId);
        resolve(false);
      }
    }, interval);
  });
});

// src/detectTelegram.ts
var getIsTelegram = () => {
  return "TelegramWebview" in window || // Android
  "TelegramWebviewProxy" in window || // iPhone
  "TelegramWebviewProxyProto" in window;
};

// src/detectClientSide.ts
var appNameCustom = {
  telegram: {
    name: "Telegram"
  }
};
var getDetectClientSide = () => {
  if (typeof window === "undefined") return;
  if (getIsTelegram()) return "telegram";
  return;
};
var appKeysDetectByCustom = Object.keys(
  appNameCustom
);

// src/regexAppName.ts
var appNameRegExps = {
  messenger: {
    regex: /(\bFB[\w_]+\/(Messenger))|(^(?!.*\buseragents)(?!.*\bIABMV).*(FB_IAB|FBAN).*)/i,
    // Experimental for newer UAs - don't have `"useragents:" or end in "IABMV"
    name: "Facebook Messenger"
  },
  instagram: {
    regex: /\bInstagram/i,
    name: "Instagram"
  },
  facebook: {
    regex: /\bFB[\w_]+\/|\bFacebook/i,
    name: "Facebook"
  },
  twitter: {
    regex: /\bTwitter/i,
    name: "Twitter"
  },
  line: {
    regex: /\bLine\//i,
    name: "Line"
  },
  wechat: {
    regex: /\bMicroMessenger\//i,
    name: "WeChat"
  },
  threads: {
    regex: /\bBarcelona/i,
    name: "Threads"
  },
  tiktok: {
    regex: /musical_ly|Bytedance/i,
    name: "TikTok"
  },
  snapchat: {
    regex: /Snapchat/i,
    name: "Snapchat"
  },
  linkedin: {
    regex: /LinkedInApp/i,
    name: "LinkedIn"
  },
  gsa: {
    regex: /GSA/i,
    name: "Google Search App"
  },
  whatsapp: {
    regex: /\b(WAiOS|WA4A)\//i,
    name: "WhatsApp"
  },
  reddit: {
    regex: /\bReddit\//i,
    name: "Reddit"
  }
};
var appKeysDetectByUA = Object.keys(
  appNameRegExps
);
var getAppKey = (ua) => {
  return appKeysDetectByUA.find(
    (appName) => appNameRegExps[appName].regex.test(ua)
  );
};

// src/regexInApp.ts
var inAppRegExps = [
  "WebView",
  // Apple devices but not with "Safari/" following
  "(iPhone|iPod|iPad)(?!.*Safari/)",
  // Android webview
  "Android.*wv\\)"
];
var inappRegex = new RegExp(
  `${inAppRegExps.map((reg) => `(${reg})`).join("|")}`,
  "i"
);

// src/detectSafariPrivate.ts
var currentSafariTest = () => __async(null, null, function* () {
  try {
    yield navigator.storage.getDirectory();
    return false;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return msg.toLowerCase().includes("unknown transient reason");
  }
});
var safari13to18Test = () => {
  let settled = false;
  return new Promise((resolve) => {
    const name = `idb${Math.random()}`;
    const openReq = indexedDB.open(name, 1);
    const finish = (isPrivate, db) => {
      if (settled) return;
      settled = true;
      if (db) db.close();
      indexedDB.deleteDatabase(name);
      resolve(isPrivate);
    };
    openReq.onupgradeneeded = (ev) => {
      const db = ev.target.result;
      const putReq = db.createObjectStore("t", { autoIncrement: true }).put(new Blob());
      putReq.onerror = (event) => {
        var _a;
        const req = event.target;
        const message = ((_a = req.error) == null ? void 0 : _a.message) || "";
        finish(message.includes("are not yet supported"), db);
      };
      putReq.onsuccess = () => finish(false, db);
    };
    openReq.onerror = () => finish(false);
    openReq.onsuccess = () => finish(false, openReq.result);
  });
};
var getIsSafariPrivate = () => __async(null, null, function* () {
  var _a;
  if (typeof navigator === "undefined") return false;
  if (((_a = navigator.storage) == null ? void 0 : _a.getDirectory) !== void 0) {
    return yield currentSafariTest();
  } else if (navigator.maxTouchPoints !== void 0) {
    return yield safari13to18Test();
  }
  return false;
});

// src/detectSFSVC.ts
var compare = (a, b) => {
  return a.localeCompare(b, void 0, { numeric: true, sensitivity: "base" });
};
var consoleDebug = ({
  note,
  debug,
  last
}) => {
  if (debug) {
    console.log(
      note,
      "SchemaDataExtractor" in window || "MicrodataExtractor" in window ? "This is Safari" : last ? "Did not detect Safari - assuming SFSVC" : "Still checking if Safari",
      performance.now()
    );
  }
};
var minSafariVersion = "17";
var getSFSVCExperimental = (..._0) => __async(null, [..._0], function* ({
  debug = false,
  maxVersion,
  maxTime = 300
  // Max time to figure out if it is Safari (ie not SFSVC)
} = {}) {
  const ua = getUA();
  if (!ua) return false;
  if (!isiOS(ua)) return false;
  if (!getIsSafariUA(ua)) return false;
  if ("clearAppBadge" in ((window == null ? void 0 : window.navigator) || {})) return false;
  if (getIsTelegram()) return false;
  const version = getSafariVersion(ua);
  if (compare(version, minSafariVersion) < 0) return false;
  if (maxVersion !== void 0 && (compare(maxVersion, minSafariVersion) < 0 || compare(version, maxVersion) > 0))
    return false;
  if (compare(version, "26.4") >= 0) {
    return !("browser" in window) || !window.browser;
  }
  const isSafariPrivate = yield getIsSafariPrivate();
  if (isSafariPrivate) return false;
  yield waitForPageLoad();
  if (debug) consoleDebug({ note: "Page loaded", debug });
  const isSafari = yield pollForProperties({
    interval: 60,
    maxTime,
    properties: ["SchemaDataExtractor", "MicrodataExtractor"]
  });
  if (debug) consoleDebug({ note: "Extra polling done", debug, last: true });
  return !isSafari;
});

// src/index.ts
var InAppSpy = (options = {}) => {
  var _a, _b;
  const { skip, ua = "" } = options;
  const userAgent = ua || getUA();
  if (!userAgent)
    return __spreadProps(__spreadValues({}, empty), {
      ua: userAgent
    });
  const skipFn = (key) => checkSkip({ skip, appKey: key, ua: userAgent });
  const uaAppKey = getAppKey(userAgent);
  if (uaAppKey || userAgent.match(inappRegex) !== null) {
    if (skipFn(uaAppKey)) return __spreadProps(__spreadValues({}, empty), { ua: userAgent, skipped: true });
    return {
      isInApp: true,
      appKey: uaAppKey,
      appName: uaAppKey ? appNameRegExps[uaAppKey].name : void 0,
      ua: userAgent,
      skipped: false
    };
  }
  const clientAppKey = getDetectClientSide();
  if (clientAppKey) {
    if (skipFn(clientAppKey)) return __spreadProps(__spreadValues({}, empty), { ua: userAgent, skipped: true });
    return {
      isInApp: true,
      appKey: clientAppKey,
      appName: (_b = (_a = appNameCustom) == null ? void 0 : _a[clientAppKey]) == null ? void 0 : _b.name,
      ua: userAgent,
      skipped: false
    };
  }
  return __spreadProps(__spreadValues({}, empty), {
    ua: userAgent
  });
};
var SFSVCExperimental = getSFSVCExperimental;
var index_default = InAppSpy;
if (typeof window !== "undefined" && false) // removed by dead control flow
{}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(notification, message);
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.prevEl);
      const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);
      } else {
        swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach(controlElement => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = e => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(swiper);
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, slideEl);
      slidesEl.append(tempDOM.children[0]);
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, '');
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, slideEl);
      slidesEl.prepend(tempDOM.children[0]);
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, '');
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return 'next';
    } else if (nextIndex === prevIndex - 1) {
      return 'previous';
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === 'next') {
        swiper.slideNext();
      } else if (moveDirection === 'previous') {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(subEl, paginationHTML || '');
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.find(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      if (thumbsParams.swiper.destroyed) {
        initialized = false;
        return false;
      }
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(tempDOM, slideEl);
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(slideEl, slide);
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force, beforeInit, forceActiveIndex) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update(false, true);
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: false,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let isPanningWithMouse = false;
  let mousePanStart = {
    x: 0,
    y: 0
  };
  const mousePanSensitivity = -3; // Negative to invert pan direction
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    const isMouseEvent = e.pointerType === 'mouse';
    const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      if (isMousePan) onMouseMove(e);
      return;
    }
    if (isMousePan) {
      onMouseMove(e);
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    evCache.length = 0;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function onMouseMove(e) {
    // Only pan if zoomed in and mouse panning is enabled
    if (currentScale <= 1 || !gesture.imageWrapEl) return;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
    const matrix = new window.DOMMatrix(currentTransform);
    if (!isPanningWithMouse) {
      isPanningWithMouse = true;
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = matrix.e;
      image.startY = matrix.f;
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      return;
    }
    const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
    const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
    const scaledWidth = image.width * currentScale;
    const scaledHeight = image.height * currentScale;
    const slideWidth = gesture.slideWidth;
    const slideHeight = gesture.slideHeight;
    const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
    const maxX = -minX;
    const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
    const maxY = -minY;
    const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
    const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
    gesture.imageWrapEl.style.transitionDuration = '0ms';
    gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    mousePanStart.x = e.clientX;
    mousePanStart.y = e.clientY;
    image.startX = newX;
    image.startY = newY;
    image.currentX = newX;
    image.currentY = newY;
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const prevScale = currentScale;
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
      image.touchesStart.x = undefined;
      image.touchesStart.y = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
        translateX = image.currentX * zoom.scale / prevScale;
        translateY = image.currentY * zoom.scale / prevScale;
      } else {
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
      }
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    image.currentX = translateX;
    image.currentY = translateY;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    image.currentX = undefined;
    image.currentY = undefined;
    image.touchesStart.x = undefined;
    image.touchesStart.y = undefined;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
    if (swiper.params.zoom.panOnMouseMove) {
      mousePanStart = {
        x: 0,
        y: 0
      };
      if (isPanningWithMouse) {
        isPanningWithMouse = false;
        image.startX = 0;
        image.startY = 0;
      }
    }
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/()[\]])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate _virtualUpdated', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 5.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: June 27, 2025
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === 'reset') {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  const browser = getBrowser();
  const isSafari = browser.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const clearBlankSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach(el => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next',
    initial
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();

  // Get breakpoint for window/container width and update parameters
  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === 'column') {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === 'row') {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate(undefined, true);
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.y)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setCSSProperty),
/* harmony export */   b: () => (/* binding */ elementParents),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ elementOffset),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ now),
/* harmony export */   g: () => (/* binding */ getSlideTransformEl),
/* harmony export */   h: () => (/* binding */ elementOuterSize),
/* harmony export */   i: () => (/* binding */ elementIndex),
/* harmony export */   j: () => (/* binding */ classesToTokens),
/* harmony export */   k: () => (/* binding */ getTranslate),
/* harmony export */   l: () => (/* binding */ elementTransitionEnd),
/* harmony export */   m: () => (/* binding */ makeElementsArray),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ isObject),
/* harmony export */   p: () => (/* binding */ getRotateFix),
/* harmony export */   q: () => (/* binding */ elementStyle),
/* harmony export */   r: () => (/* binding */ elementNextAll),
/* harmony export */   s: () => (/* binding */ setInnerHTML),
/* harmony export */   t: () => (/* binding */ elementPrevAll),
/* harmony export */   u: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   v: () => (/* binding */ showWarning),
/* harmony export */   w: () => (/* binding */ elementIsChildOf),
/* harmony export */   x: () => (/* binding */ extend),
/* harmony export */   y: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const children = [...element.children];
  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  // Breadth-first search through all parent's children and assigned elements
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
  }
}
function elementIsChildOf(el, parent) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let isChild = parent.contains(el);
  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}
function setInnerHTML(el, html) {
  if (html === void 0) {
    html = '';
  }
  if (typeof trustedTypes !== 'undefined') {
    el.innerHTML = trustedTypes.createPolicy('html', {
      createHTML: s => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */




/***/ }),

/***/ "./node_modules/vevet/lib/esm/base/Callbacks/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/base/Callbacks/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Callbacks: () => (/* binding */ Callbacks)
/* harmony export */ });
/* harmony import */ var _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/noopIfDestroyed */ "./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js");
/* harmony import */ var _internal_safeAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/safeAction */ "./node_modules/vevet/lib/esm/internal/safeAction.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./node_modules/vevet/lib/esm/utils/common/uid.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




/**
 * Manages event callbacks with features like one-time execution, protection, and delays.
 *
 * @group Base
 */
class Callbacks {
    constructor(_props = {}) {
        this._props = _props;
        /** Whether the instance has been destroyed. */
        this._isDestroyed = false;
        /** Storage for registered callbacks. */
        this._list = [];
    }
    /** Returns the list of all registered callbacks. */
    get list() {
        return this._list;
    }
    /**
     * Registers a callback for an event.
     * @param target - Event name to associate the callback with.
     * @param action - Function to execute on the event.
     * @param settings - Optional callback settings (e.g., timeout, one-time).
     * @returns Callback ID and a removal function.
     */
    add(target, action, settings = {}) {
        const id = (0,_utils_common__WEBPACK_IMPORTED_MODULE_2__.uid)('callback');
        this._list.push(Object.assign(Object.assign({}, settings), { id,
            target, action: action }));
        return { id, remove: () => this.remove(id) };
    }
    /**
     * Adds a callback and returns a destructor to remove it.
     * @param target - Event name to associate the callback with.
     * @param action - Function to execute on the event.
     * @param settings - Optional callback settings (e.g., timeout, one-time).
     * @returns A function to remove the callback.
     */
    on(target, action, settings = {}) {
        const callback = this.add(target, action, settings);
        return () => {
            callback.remove();
        };
    }
    /**
     * Removes a callback by its ID.
     * @param id - ID of the callback to remove.
     * @returns `true` if the callback was removed, `false` otherwise.
     */
    remove(id) {
        return this._remove(id);
    }
    /**
     * Removes a callback, with an option to force removal of protected callbacks.
     * @param callbackId - ID of the callback to remove.
     * @param canRemoveProtected - Whether to forcibly remove protected callbacks.
     * @returns `true` if the callback was removed, `false` otherwise.
     */
    _remove(callbackId, canRemoveProtected = false) {
        this._list = this._list.filter((callback) => {
            if (callback.id !== callbackId) {
                return true;
            }
            if (callback.protected && !canRemoveProtected) {
                return true;
            }
            return false;
        });
        const hasCallback = this._list.some(({ id }) => id === callbackId);
        return !hasCallback;
    }
    /** Removes all callbacks, including protected ones. */
    _removeAll() {
        while (this._list.length > 0) {
            this._remove(this._list[0].id, true);
        }
    }
    /**
     * Executes a callback and removes it if marked as `isOnce`.
     * @param callback - Callback to execute.
     * @param parameter - Argument to pass to the callback.
     */
    _callAction(_a, parameter) {
        var { id, timeout, action } = _a, callback = __rest(_a, ["id", "timeout", "action"]);
        const { ctx } = this._props;
        if (timeout) {
            setTimeout(() => (0,_internal_safeAction__WEBPACK_IMPORTED_MODULE_1__.safeAction)(() => action(parameter, ctx)), timeout);
        }
        else {
            (0,_internal_safeAction__WEBPACK_IMPORTED_MODULE_1__.safeAction)(() => action(parameter, ctx));
        }
        if (callback.once) {
            this._remove(id, true);
        }
    }
    /**
     * Triggers all callbacks for a given event.
     * @param target - Event name to trigger.
     * @param arg - Argument to pass to the callbacks.
     */
    emit(target, arg) {
        this._list.forEach((callback) => {
            if (callback.target === target) {
                this._callAction(callback, arg);
            }
        });
    }
    /** Removes all registered callbacks. */
    destroy() {
        this._removeAll();
        this._isDestroyed = true;
    }
}
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_0__.noopIfDestroyed
], Callbacks.prototype, "add", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_0__.noopIfDestroyed
], Callbacks.prototype, "on", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_0__.noopIfDestroyed
], Callbacks.prototype, "remove", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_0__.noopIfDestroyed
], Callbacks.prototype, "emit", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_0__.noopIfDestroyed
], Callbacks.prototype, "destroy", null);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/base/Module/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/base/Module/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Module: () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
/* harmony import */ var _internal_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/cn */ "./node_modules/vevet/lib/esm/internal/cn.js");
/* harmony import */ var _internal_mergeWithNoUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/mergeWithNoUndefined */ "./node_modules/vevet/lib/esm/internal/mergeWithNoUndefined.js");
/* harmony import */ var _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/noopIfDestroyed */ "./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js");
/* harmony import */ var _Callbacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Callbacks */ "./node_modules/vevet/lib/esm/base/Callbacks/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// todo: jsdoc

/**
 * A base class for modules that handle responsive properties, event listeners, and custom callbacks.
 *
 * @group Base
 */
class Module {
    /** Get default static props */
    _getStatic() {
        return { __staticProp: true };
    }
    /** Set default mutable props */
    _getMutable() {
        return { __mutableProp: true };
    }
    /**
     * Current properties. Do not mutate these directly, use {@linkcode updateProps} instead.
     */
    get props() {
        return this._props;
    }
    /** Optional prefix for classnames used by the module */
    get prefix() {
        return (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_0__.initVevet)().prefix;
    }
    /** The name of the module, derived from the class name */
    get name() {
        return this.constructor.name;
    }
    /**
     * Checks if the module has been destroyed.
     */
    get isDestroyed() {
        return this._isDestroyed;
    }
    /**
     * Retrieves the module's callbacks instance.
     */
    get callbacks() {
        return this._callbacks;
    }
    /**
     * Creates a new instance of the Module class.
     */
    constructor(props, onCallbacksProp) {
        /** Tracks whether the module has been destroyed */
        this._isDestroyed = false;
        /** Stores actions that need to be executed when the module is destroyed */
        this._destroyable = [];
        this._callbacks = new _Callbacks__WEBPACK_IMPORTED_MODULE_4__.Callbacks({ ctx: this });
        this._props = (0,_internal_mergeWithNoUndefined__WEBPACK_IMPORTED_MODULE_2__.mergeWithNoUndefined)(Object.assign(Object.assign({}, this._getStatic()), this._getMutable()), Object.assign({}, props));
        // Initialize callbacks
        const onCallbacks = Object.assign(Object.assign({}, props), onCallbacksProp);
        if (onCallbacks) {
            const callbacksProps = Object.keys(onCallbacks).filter((key) => key.startsWith('on') &&
                typeof onCallbacks[key] === 'function');
            callbacksProps.forEach((key) => {
                let target = key.slice(2);
                target = target.charAt(0).toLowerCase() + target.slice(1);
                this._callbacks.on(target, onCallbacks[key]);
            });
        }
    }
    /**
     * Method that is called when the module's properties mutate. In most cases, used to handle callbacks.
     */
    _handleProps(diff) {
        this.callbacks.emit('props', diff);
    }
    /** Change module's mutable properties */
    updateProps(props) {
        const prevProps = Object.assign({}, this._props);
        const keys = Object.keys(this.props);
        this._props = Object.assign(Object.assign({}, this._props), props);
        const diff = {};
        keys.forEach((key) => {
            // @ts-ignore
            const prevValue = prevProps[key];
            // @ts-ignore
            const newValue = this._props[key];
            if (prevValue !== newValue) {
                diff[key] = newValue;
            }
        });
        this._handleProps(diff);
    }
    /**
     * Adds a callback on the module's destruction.
     *
     * @param action - The function to execute during destruction.
     */
    onDestroy(action) {
        if (this.isDestroyed) {
            action();
            return;
        }
        this._destroyable.push(action);
    }
    /**
     * Adds a custom callback to the module.
     *
     * @param target - The event type to listen for (e.g., 'props', 'destroy').
     * @param listener - The function to execute when the event is triggered.
     * @param settings - Additional settings for the callback.
     */
    on(target, listener, settings = {}) {
        return this.callbacks.on(target, listener, settings);
    }
    /**
     * Helper function to generate classnames with the module's prefix.
     *
     * @param classNames - The class names to generate.
     * @returns A string of class names with the module's prefix applied.
     */
    _cn(...classNames) {
        return classNames.map((value) => `${this.prefix}${value}`).join(' ');
    }
    /**
     * Adds a class name on an element, and keeps track of it for removal when the module is destroyed.
     *
     * @param element - The target DOM element.
     * @param className - The class name to toggle.
     */
    _addTempClassName(element, className) {
        const isAlreadyExists = (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnHas)(element, className);
        if (!isAlreadyExists) {
            (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnAdd)(element, className);
            this.onDestroy(() => (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnRemove)(element, className));
        }
    }
    /**
     * Destroys the module, cleaning up resources, callbacks, and event listeners.
     */
    destroy() {
        this._destroy();
    }
    /**
     * Internal method to handle the destruction of the module.
     * It removes all callbacks, destroys properties, and cleans up event listeners and class names.
     */
    _destroy() {
        this._callbacks.emit('destroy', undefined);
        this._callbacks.destroy();
        this._destroyable.forEach((action) => action());
        this._isDestroyed = true;
    }
}
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Module.prototype, "updateProps", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Module.prototype, "on", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Module.prototype, "destroy", null);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Pointers/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Pointers/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pointers: () => (/* binding */ Pointers)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./node_modules/vevet/lib/esm/base/Module/index.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _internal_isNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/isNumber */ "./node_modules/vevet/lib/esm/internal/isNumber.js");
/* harmony import */ var _internal_unwrapAngle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/unwrapAngle */ "./node_modules/vevet/lib/esm/internal/unwrapAngle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/math/clamp.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./props */ "./node_modules/vevet/lib/esm/components/Pointers/props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./node_modules/vevet/lib/esm/components/Pointers/styles.js");








/**
 * Manages pointer events, including tracking multiple pointers,
 * and emitting callbacks for pointer interactions.
 *
 * For proper functionality, ensure the container has an appropriate
 * [touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) property.
 *
 * [Documentation](https://vevetjs.com/docs/Pointers)
 *
 * @group Components
 */
class Pointers extends _base__WEBPACK_IMPORTED_MODULE_0__.Module {
    /**
     * Returns the default static properties.
     */
    _getStatic() {
        return Object.assign(Object.assign({}, super._getStatic()), _props__WEBPACK_IMPORTED_MODULE_6__.STATIC_PROPS);
    }
    /**
     * Returns the default mutable properties.
     */
    _getMutable() {
        return Object.assign(Object.assign({}, super._getMutable()), _props__WEBPACK_IMPORTED_MODULE_6__.MUTABLE_PROPS);
    }
    constructor(props, onCallbacks) {
        super(props, onCallbacks);
        /**
         * Stores active event listeners for runtime interactions.
         */
        this._listeners = [];
        /** Indicates whether the `start` event has been triggered. */
        this._isStarted = false;
        /** Save minPointers value */
        this._saveMinPointers = 1;
        /** Move data. */
        this._moveData = null;
        /** Whether a microtask `move` emit is scheduled. */
        this._moveScheduled = false;
        /** Angle data */
        this._angle = { raw: 0, unwrapped: 0, unwrappedStart: 0 };
        // Defaults
        this._pointersMap = new Map();
        // Setup base events
        this._setBaseEvents();
    }
    /** Indicates whether the `start` event has been triggered. */
    get isStarted() {
        return this._isStarted;
    }
    /** Returns the map of active pointers. */
    get pointersMap() {
        return this._pointersMap;
    }
    /** Returns the container element handling events. */
    get container() {
        return this.props.container;
    }
    /** Move data */
    get move() {
        return this._moveData;
    }
    /** Get buttons */
    _getButtons(type) {
        const { buttons } = this.props;
        return Array.isArray(buttons) ? buttons : buttons(type);
    }
    /** Get max pointers */
    _getMinPointers(type) {
        const { minPointers } = this.props;
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp)((0,_internal_isNumber__WEBPACK_IMPORTED_MODULE_2__.isNumber)(minPointers) ? minPointers : minPointers(type), 1, Infinity);
    }
    /** Get max pointers */
    _getMaxPointers(type) {
        const { maxPointers } = this.props;
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.clamp)((0,_internal_isNumber__WEBPACK_IMPORTED_MODULE_2__.isNumber)(maxPointers) ? maxPointers : maxPointers(type), this._getMinPointers(type), Infinity);
    }
    /** Normalize pointer event type */
    _getPointerType(event) {
        const types = ['mouse', 'touch'];
        if (types.includes(event.pointerType)) {
            return event.pointerType;
        }
        return 'mouse';
    }
    /**
     * Attaches base event listeners to the container.
     */
    _setBaseEvents() {
        const { container } = this;
        const pointerdown = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(container, 'pointerdown', (event) => this._handlePointerDown(event));
        const dragstart = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(container, 'dragstart', (event) => event.preventDefault(), { passive: false });
        const centralMouseDown = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(container, 'mousedown', (event) => {
            if (this._getButtons('mouse').includes(1)) {
                event.preventDefault();
            }
        }, { passive: false });
        const contextmenu = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(container, 'contextmenu', (event) => {
            if (this._getButtons('mouse').includes(2)) {
                event.preventDefault();
            }
        }, { passive: false });
        this.onDestroy(() => {
            pointerdown();
            dragstart();
            centralMouseDown();
            contextmenu();
        });
    }
    /**
     * Attaches runtime event listeners for active pointer interactions.
     */
    _setRuntimeEvents() {
        const listeners = this._listeners;
        if (listeners.length > 0) {
            return;
        }
        const pointermove = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(window, 'pointermove', (event) => this._handlePointerMove(event), { passive: false });
        const pointerup = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(window, 'pointerup', (event) => this._handlePointerUp(event), { passive: false });
        const pointercancel = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(window, 'pointercancel', () => this._handleCancel(), { passive: false });
        const blur = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(window, 'blur', () => this._handleCancel());
        this._listeners = [pointermove, pointerup, pointercancel, blur];
    }
    /**
     * Handles pointer down events (`pointerdown`).
     * Adds a new pointer if conditions are met and triggers the `pointerdown` callback.
     */
    _handlePointerDown(event) {
        const { props } = this;
        const { x, y } = this._decodeCoords(event);
        const pointerType = this._getPointerType(event);
        const buttons = this._getButtons(pointerType);
        const minPointers = this._getMinPointers(pointerType);
        this._saveMinPointers = minPointers;
        const maxPointers = this._getMaxPointers(pointerType);
        if (!props.enabled) {
            return;
        }
        // check if button type is allowed
        if (!buttons.includes(event.button)) {
            return;
        }
        // Check if pointer already exists or no more pointers allowed
        const hasPointer = this.pointersMap.get(event.pointerId);
        if (hasPointer || this.pointersMap.size >= maxPointers) {
            return;
        }
        // Add new pointer
        const pointer = {
            id: event.pointerId,
            index: this.pointersMap.size,
            start: { x, y },
            prev: { x, y },
            current: { x, y },
            diff: { x: 0, y: 0 },
            step: { x: 0, y: 0 },
            accum: { x: 0, y: 0 },
        };
        this.pointersMap.set(event.pointerId, pointer);
        // update indices
        let index = 0;
        this.pointersMap.forEach((currentPointer) => {
            currentPointer.index = index;
            index += 1;
        });
        // Start callback
        if (this.pointersMap.size === minPointers) {
            this._isStarted = true;
            this.callbacks.emit('start', undefined);
        }
        // Add runtime events
        this._setRuntimeEvents();
        // Apply styles to prevent user-select
        if (props.disableUserSelect) {
            _internal_env__WEBPACK_IMPORTED_MODULE_1__.body.append(_styles__WEBPACK_IMPORTED_MODULE_7__.styles);
        }
        // Trigger start callback
        this.callbacks.emit('pointerdown', { event, pointer });
    }
    /**
     * Handles pointer movement (`pointermove`).
     * Updates pointer positions and triggers the `pointermove` callback.
     */
    _handlePointerMove(event) {
        const pointer = this.pointersMap.get(event.pointerId);
        if (!pointer) {
            return;
        }
        if (!this.props.enabled) {
            return;
        }
        const { x, y } = this._decodeCoords(event);
        // Update previous and current coordinates
        pointer.prev = Object.assign({}, pointer.current);
        pointer.current = { x, y };
        // Update diff
        pointer.diff.x = pointer.current.x - pointer.start.x;
        pointer.diff.y = pointer.current.y - pointer.start.y;
        // Update step
        pointer.step.x = pointer.current.x - pointer.prev.x;
        pointer.step.y = pointer.current.y - pointer.prev.y;
        // Update total movement
        pointer.accum.x += Math.abs(pointer.step.x);
        pointer.accum.y += Math.abs(pointer.step.y);
        // Trigger 'move' callback with relevant data
        this.callbacks.emit('pointermove', { event, pointer });
        if (this._isStarted) {
            this._updateMove();
            this._scheduleMove();
        }
    }
    /**
     * Handles pointer release (`pointerup`).
     * Removes the pointer and triggers the `pointerup` callback.
     * If no active pointers remain, fires the `end` callback.
     */
    _handlePointerUp(event) {
        // check if pointer exists
        const pointer = this.pointersMap.get(event.pointerId);
        // Get min-pointers
        const minPointers = this._getMinPointers(this._getPointerType(event));
        if (!pointer) {
            return;
        }
        // Trigger callbacks
        this.callbacks.emit('pointerup', { pointer });
        // delete pointer
        this.pointersMap.delete(event.pointerId);
        // end if no pointers left
        if (this.pointersMap.size < minPointers && this._isStarted) {
            this._isStarted = false;
            this._moveData = null;
            this._angle = { raw: 0, unwrapped: 0, unwrappedStart: 0 };
            this.callbacks.emit('end', undefined);
        }
        // cancel
        if (this.pointersMap.size === 0) {
            this._cleanup();
        }
    }
    /**
     * Handles event cancellations (`pointercancel`, `blur`).
     * Triggers the `end` callback and cleans up all pointers.
     */
    _handleCancel() {
        this.callbacks.emit('end', undefined);
        // Trigger callbacks for all pointers
        this.pointersMap.forEach((pointer) => {
            this.callbacks.emit('pointerup', { pointer });
        });
        this._cleanup();
    }
    /**
     * Prevents text selection during pointer interactions.
     */
    _resetSelection() {
        var _a, _b;
        (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.empty();
        (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
    }
    /**
     * Returns pointer coordinates relative to the container.
     */
    _decodeCoords(event) {
        const { container, props } = this;
        if (!props.relative) {
            return { x: event.clientX, y: event.clientY };
        }
        const bounding = container.getBoundingClientRect();
        const x = event.clientX - bounding.left;
        const y = event.clientY - bounding.top;
        return { x, y };
    }
    /** Update move data */
    _updateMove() {
        const pointers = Array.from(this.pointersMap.values()).sort((a, b) => a.index - b.index);
        const currents = pointers.map(({ current }) => current);
        const center = this._getAverageCenter(currents);
        const distance = Math.max(this._getAverageDistance(currents), 0.001);
        const rawAngle = this._getAngle(currents);
        if (!this._moveData) {
            this._angle = {
                raw: rawAngle,
                unwrapped: rawAngle,
                unwrappedStart: rawAngle,
            };
            this._moveData = {
                center,
                prevCenter: Object.assign({}, center),
                startCenter: Object.assign({}, center),
                distance,
                prevDistance: distance,
                startDistance: distance,
                scale: 1,
                prevScale: 1,
                angle: 0,
                prevAngle: 0,
            };
            return;
        }
        this._moveData.prevCenter = Object.assign({}, this._moveData.center);
        this._moveData.center = Object.assign({}, center);
        this._moveData.prevDistance = this._moveData.distance;
        this._moveData.distance = distance;
        if (pointers.length >= 2) {
            this._moveData.prevScale = this._moveData.scale;
            this._moveData.scale = distance / this._moveData.startDistance;
            this._angle.unwrapped += (0,_internal_unwrapAngle__WEBPACK_IMPORTED_MODULE_3__.unwrapAngleDelta)(rawAngle, this._angle.raw);
            this._angle.raw = rawAngle;
            this._moveData.prevAngle = this._moveData.angle;
            this._moveData.angle = this._angle.unwrapped - this._angle.unwrappedStart;
        }
    }
    /** Returns the angle between the first two pointers (deg). */
    _getAngle(points) {
        if (points.length < 2) {
            return 0;
        }
        const [first, second] = points;
        return (Math.atan2(second.y - first.y, second.x - first.x) * 180) / Math.PI;
    }
    /** Returns the average center position of points. */
    _getAverageCenter(points) {
        if (points.length === 1) {
            return points[0];
        }
        const sum = points.reduce((acc, p) => ({
            x: acc.x + p.x,
            y: acc.y + p.y,
        }), { x: 0, y: 0 });
        return {
            x: sum.x / points.length,
            y: sum.y / points.length,
        };
    }
    /** Returns the average distance between points */
    _getAverageDistance(points) {
        if (points.length <= 1) {
            return 0;
        }
        const center = this._getAverageCenter(points);
        const total = points.reduce((sum, p) => sum + Math.hypot(p.x - center.x, p.y - center.y), 0);
        return total / points.length;
    }
    /** Schedules a deduplicated `move` callback for the current microtask. */
    _scheduleMove() {
        if (this._moveScheduled) {
            return;
        }
        this._moveScheduled = true;
        queueMicrotask(() => {
            this._moveScheduled = false;
            if (!this._isStarted ||
                this.pointersMap.size < this._saveMinPointers ||
                !this._moveData) {
                return;
            }
            this.callbacks.emit('move', this._moveData);
        });
    }
    /**
     * Cleans up event listeners, pointers, and injected styles.
     */
    _cleanup() {
        this._listeners.forEach((listener) => listener());
        this._listeners = [];
        this._isStarted = false;
        this._moveScheduled = false;
        this._moveData = null;
        this._angle = { raw: 0, unwrapped: 0, unwrappedStart: 0 };
        this.pointersMap.clear();
        if (this.props.disableUserSelect) {
            this._resetSelection();
            _styles__WEBPACK_IMPORTED_MODULE_7__.styles === null || _styles__WEBPACK_IMPORTED_MODULE_7__.styles === void 0 ? void 0 : _styles__WEBPACK_IMPORTED_MODULE_7__.styles.remove();
        }
    }
    /**
     * Destroys the component and removes all event listeners.
     */
    _destroy() {
        this._cleanup();
        super._destroy();
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Pointers/props.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Pointers/props.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MUTABLE_PROPS: () => (/* binding */ MUTABLE_PROPS),
/* harmony export */   STATIC_PROPS: () => (/* binding */ STATIC_PROPS)
/* harmony export */ });
const STATIC_PROPS = {
    __staticProp: true,
    container: null,
    buttons: [0],
    relative: false,
    minPointers: 1,
    maxPointers: 5,
    disableUserSelect: true,
};
const MUTABLE_PROPS = {
    __mutableProp: true,
    enabled: true,
};
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Pointers/styles.js":
/*!******************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Pointers/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");

const styles = _internal_env__WEBPACK_IMPORTED_MODULE_0__.isBrowser ? _internal_env__WEBPACK_IMPORTED_MODULE_0__.doc.createElement('style') : null;
if (styles) {
    styles.innerHTML = '* { user-select: none !important; }';
}
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Raf/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Raf/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Raf: () => (/* binding */ Raf)
/* harmony export */ });
/* harmony import */ var _base_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/Module */ "./node_modules/vevet/lib/esm/base/Module/index.js");
/* harmony import */ var _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/noopIfDestroyed */ "./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./props */ "./node_modules/vevet/lib/esm/components/Raf/props.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Manages an animation frame loop with configurable FPS and playback controls.
 *
 * [Documentation](https://vevetjs.com/docs/Raf)
 *
 * @group Components
 */
class Raf extends _base_Module__WEBPACK_IMPORTED_MODULE_0__.Module {
    /** Get default static properties */
    _getStatic() {
        return Object.assign(Object.assign({}, super._getStatic()), _props__WEBPACK_IMPORTED_MODULE_2__.STATIC_PROPS);
    }
    /** Get default mutable properties */
    _getMutable() {
        return Object.assign(Object.assign({}, super._getMutable()), _props__WEBPACK_IMPORTED_MODULE_2__.MUTABLE_PROPS);
    }
    constructor(props, onCallbacks) {
        super(props, onCallbacks);
        /** Indicates if the animation frame is currently running */
        this._isPlaying = false;
        /** Active requestAnimationFrame ID, or `null` if not running */
        this._raf = null;
        /** Timestamp of the last frame */
        this._lastTimestamp = null;
        /** Timestamp of the current frame */
        this._timestamp = null;
        /** Current frame index */
        this._index = 0;
        /** Real-time FPS */
        this._fps = 60;
        /** Duration of the last frame in ms */
        this._duration = 0;
        // Initialize FPS
        this._fps = this.props.fps === 'auto' ? this._fps : this.props.fps;
        // Play on init
        if (this.props.enabled) {
            this._play();
        }
    }
    /** Playback state of the animation frame */
    get isPlaying() {
        return this._isPlaying;
    }
    /** Timestamp of the current frame */
    get timestamp() {
        var _a;
        return (_a = this._timestamp) !== null && _a !== void 0 ? _a : 0;
    }
    /** Current frame index */
    get index() {
        return this._index;
    }
    /** Real-time FPS */
    get fps() {
        return this._fps;
    }
    /** Duration of the last frame in ms */
    get duration() {
        return this._duration;
    }
    /** Scaling coefficient based on a 60 FPS target */
    get fpsFactor() {
        return 60 / this.fps;
    }
    /** Handle property mutations */
    _handleProps(props) {
        super._handleProps(props);
        this._lastTimestamp = null;
        if (this.props.enabled) {
            this._play();
        }
        else {
            this._pause();
        }
    }
    /** Start the animation loop */
    play() {
        if (this.props.enabled) {
            return;
        }
        this.updateProps({ enabled: true });
    }
    /** Internal method to start the loop */
    _play() {
        if (this.isPlaying) {
            return;
        }
        this._isPlaying = true;
        this.callbacks.emit('play', undefined);
        this.callbacks.emit('toggle', undefined);
        this._raf = window.requestAnimationFrame(this._animate.bind(this));
    }
    /** Pause the animation loop */
    pause() {
        if (!this.props.enabled) {
            return;
        }
        this.updateProps({ enabled: false });
    }
    /** Internal method to pause the loop */
    _pause() {
        if (!this.isPlaying) {
            return;
        }
        if (this._raf) {
            window.cancelAnimationFrame(this._raf);
            this._raf = null;
        }
        this._isPlaying = false;
        this.callbacks.emit('pause', undefined);
        this.callbacks.emit('toggle', undefined);
    }
    /** Animation loop handler, calculates FPS, and triggers callbacks */
    _animate() {
        var _a, _b;
        if (!this._isPlaying) {
            return;
        }
        this._raf = window.requestAnimationFrame(this._animate.bind(this));
        const minFrameDuration = this.props.fps === 'auto' ? 1 : 1000 / this.props.fps;
        this._timestamp = performance.now();
        (_a = this._lastTimestamp) !== null && _a !== void 0 ? _a : (this._lastTimestamp = this._timestamp);
        const duration = this._timestamp - ((_b = this._lastTimestamp) !== null && _b !== void 0 ? _b : this._timestamp);
        if (duration < minFrameDuration) {
            return;
        }
        this._duration = duration;
        this._lastTimestamp = this._timestamp;
        this._index += 1;
        this._computeFPS();
        this.callbacks.emit('frame', {
            fps: this.fps,
            fpsFactor: this.fpsFactor,
            duration: this.duration,
            lerpFactor: this.lerpFactor.bind(this),
        });
    }
    /** Calculate linear interpolation factor to make animations run the same regardless of FPS */
    lerpFactor(ease) {
        return 1 - Math.exp(-ease * 60 * (this.duration / 1000));
    }
    /** Compute real-time FPS from frame durations */
    _computeFPS() {
        const { duration, index, props } = this;
        if ((index > 10 && index % props.fpsRecalcFrames !== 0) ||
            duration <= 0 ||
            duration > 250) {
            return;
        }
        const standardFps = 60;
        const standardFrameTime = 1000 / standardFps;
        const fpsMultiplier = standardFrameTime / duration;
        this._fps = Math.round(60 * fpsMultiplier) || 1;
    }
    /** Destroy the animation frame and stop the loop */
    _destroy() {
        this.pause();
        super._destroy();
    }
}
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_1__.noopIfDestroyed
], Raf.prototype, "play", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_1__.noopIfDestroyed
], Raf.prototype, "pause", null);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Raf/props.js":
/*!************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Raf/props.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MUTABLE_PROPS: () => (/* binding */ MUTABLE_PROPS),
/* harmony export */   STATIC_PROPS: () => (/* binding */ STATIC_PROPS)
/* harmony export */ });
const STATIC_PROPS = {
    __staticProp: true,
};
const MUTABLE_PROPS = {
    __mutableProp: true,
    fps: 'auto',
    enabled: false,
    fpsRecalcFrames: 10,
};
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Scrollbar/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Scrollbar/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scrollbar: () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./node_modules/vevet/lib/esm/base/Module/index.js");
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
/* harmony import */ var _internal_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/cn */ "./node_modules/vevet/lib/esm/internal/cn.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/noopIfDestroyed */ "./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js");
/* harmony import */ var _internal_textDirection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/textDirection */ "./node_modules/vevet/lib/esm/internal/textDirection.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/math/clamp.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/common/toPixels.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/listeners/onResize.js");
/* harmony import */ var _Swipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Swipe */ "./node_modules/vevet/lib/esm/components/Swipe/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./props */ "./node_modules/vevet/lib/esm/components/Scrollbar/props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles */ "./node_modules/vevet/lib/esm/components/Scrollbar/styles.js");
/* harmony import */ var _utils_isSnap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/isSnap */ "./node_modules/vevet/lib/esm/components/Scrollbar/utils/isSnap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/**
 * A custom scrollbar component. Supports both `window` and `HTMLElement` containers.
 *
 * [Documentation](https://vevetjs.com/docs/Scrollbar)
 *
 * @group Components
 */
class Scrollbar extends _base__WEBPACK_IMPORTED_MODULE_0__.Module {
    /** Get default static properties */
    _getStatic() {
        return Object.assign(Object.assign({}, super._getStatic()), _props__WEBPACK_IMPORTED_MODULE_11__.STATIC_PROPS);
    }
    /** Get default mutable properties */
    _getMutable() {
        return Object.assign(Object.assign({}, super._getMutable()), _props__WEBPACK_IMPORTED_MODULE_11__.MUTABLE_PROPS);
    }
    constructor(props, onCallbacks) {
        super(props, onCallbacks);
        /** Save scroll value on swipe start */
        this._valueOnSwipeStart = 0;
        /** Previous scroll value */
        this._prevScrollValue = 0;
        /** Detects if the container is RTL */
        this._isRtl = false;
        // detect features
        this._isRtl = (0,_internal_textDirection__WEBPACK_IMPORTED_MODULE_5__.getTextDirection)(this.parent) === 'rtl' && this.axis === 'x';
        // No need to remove styles on destroy
        (0,_styles__WEBPACK_IMPORTED_MODULE_12__.createScrollbarStyles)(this.prefix);
        // Create elements
        this._create();
        // Set events
        this._setResize();
        this._setOnscroll();
        this._setSwipe();
        // Initialize
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(this.outer, this._cn('_inited'));
    }
    get prefix() {
        return `${(0,_global_initVevet__WEBPACK_IMPORTED_MODULE_1__.initVevet)().prefix}scrollbar`;
    }
    /**
     * Scrollbar outer element
     */
    get outer() {
        return this._outer;
    }
    /**
     * The element to which the scrollbar is applied.
     */
    get container() {
        return this.props.container;
    }
    /**
     * Scrollbar track element (the container of the thumb).
     */
    get track() {
        return this._track;
    }
    /**
     * Scrollbar thumb element (draggable handle).
     */
    get thumb() {
        return this._thumb;
    }
    /** Scroll axis */
    get axis() {
        return this.props.axis;
    }
    /**
     * The element where the scrollbar is appended.
     * If `parent` is not set, it defaults to `container` or `document.body` (if applied to `window`).
     */
    get parent() {
        const { parent, container } = this.props;
        if (parent) {
            return parent;
        }
        if (container instanceof Window) {
            return _internal_env__WEBPACK_IMPORTED_MODULE_3__.body;
        }
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(container)) {
            return container.container;
        }
        return container;
    }
    /**
     * The actual scrollable element.
     * Returns `document.documentElement` for `window`, otherwise the `container` itself.
     */
    get scrollElement() {
        return this.container instanceof Window ? _internal_env__WEBPACK_IMPORTED_MODULE_3__.html : this.container;
    }
    /**
     * Returns the total scroll width/height of the content.
     */
    get scrollSize() {
        const { scrollElement } = this;
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(scrollElement)) {
            return scrollElement.max - scrollElement.min;
        }
        return this.axis === 'x'
            ? scrollElement.scrollWidth
            : scrollElement.scrollHeight;
    }
    /**
     * Returns the total scrollable distance.
     */
    get scrollableSize() {
        const { scrollElement } = this;
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(scrollElement)) {
            return scrollElement.max - scrollElement.min;
        }
        return this.axis === 'x'
            ? this.scrollSize - scrollElement.clientWidth
            : this.scrollSize - scrollElement.clientHeight;
    }
    /**
     * Returns scrollTop or scrollLeft of the scrollable element.
     */
    get scrollValue() {
        const { axis } = this;
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(this.container)) {
            return this.container.loopedCurrent;
        }
        if (this.container instanceof Window) {
            return axis === 'x' ? window.scrollX : window.scrollY;
        }
        return axis === 'x' ? this.container.scrollLeft : this.container.scrollTop;
    }
    /** Returns the current track size. */
    get trackSize() {
        return this.axis === 'x'
            ? this._track.offsetWidth
            : this._track.offsetHeight;
    }
    /** Returns the current thumb size. */
    get thumbSize() {
        return this.axis === 'x'
            ? this._thumb.offsetWidth
            : this._thumb.offsetHeight;
    }
    /** Handles property mutations */
    _handleProps(props) {
        super._handleProps(props);
        this.resize();
    }
    /** Create elements */
    _create() {
        const isInWindow = this.container instanceof Window;
        const { scrollElement } = this;
        this._outer = this._createOuter();
        this.parent.appendChild(this._outer);
        this._track = this._createTrack();
        this._outer.appendChild(this._track);
        this._thumb = this._createThumb();
        this._track.appendChild(this._thumb);
        // Apply global styles
        if (isInWindow) {
            this._addTempClassName(_internal_env__WEBPACK_IMPORTED_MODULE_3__.html, this._cn('-scrollable'));
            this._addTempClassName(_internal_env__WEBPACK_IMPORTED_MODULE_3__.body, this._cn('-scrollable'));
        }
        else if (scrollElement instanceof HTMLElement) {
            this._addTempClassName(scrollElement, this._cn('-scrollable'));
        }
        this.onDestroy(() => this._outer.remove());
    }
    /** Create outer element */
    _createOuter() {
        const cn = this._cn.bind(this);
        const { props, axis } = this;
        const element = _internal_env__WEBPACK_IMPORTED_MODULE_3__.doc.createElement('div');
        element.setAttribute('data-scrollbar', 'true');
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, cn(''));
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, cn(`_${axis}`));
        if (props.class) {
            (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, props.class);
        }
        if (this.container instanceof Window) {
            this._addTempClassName(element, this._cn('_in-window'));
        }
        if (props.autoHide) {
            this._addTempClassName(element, this._cn('_auto-hide'));
        }
        return element;
    }
    /** Create track element */
    _createTrack() {
        const cn = this._cn.bind(this);
        const { axis } = this;
        const element = _internal_env__WEBPACK_IMPORTED_MODULE_3__.doc.createElement('div');
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, cn('__track'));
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, cn(`__track_${axis}`));
        return element;
    }
    /** Create thumb element */
    _createThumb() {
        const cn = this._cn.bind(this);
        const element = _internal_env__WEBPACK_IMPORTED_MODULE_3__.doc.createElement('div');
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, cn('__thumb'));
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(element, cn(`__thumb_${this.axis}`));
        return element;
    }
    /** Set resize events */
    _setResize() {
        const { scrollElement } = this;
        // Snap
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(scrollElement)) {
            const destruct = scrollElement.on('resize', () => this.resize());
            this.onDestroy(() => destruct());
            return;
        }
        // DOM
        const createResizeHandler = () => {
            const children = Array.from(scrollElement.children);
            return (0,_utils__WEBPACK_IMPORTED_MODULE_9__.onResize)({
                element: [this.track, this.parent, scrollElement, ...children],
                viewportTarget: 'width',
                resizeDebounce: this.props.resizeDebounce,
                callback: () => this.resize(),
            });
        };
        let resizeHandler = createResizeHandler();
        resizeHandler.resize();
        const childrenObserver = new MutationObserver(() => {
            resizeHandler.remove();
            resizeHandler = createResizeHandler();
            resizeHandler.debounceResize();
        });
        childrenObserver.observe(scrollElement, { childList: true });
        this.onDestroy(() => {
            resizeHandler.remove();
            childrenObserver.disconnect();
        });
    }
    /** Set scroll events */
    _setOnscroll() {
        const { container } = this;
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(container)) {
            const destruct = container.on('update', () => this._onScroll());
            this.onDestroy(() => destruct());
            return;
        }
        const handler = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.addEventListener)(container, 'scroll', () => this._onScroll(), { passive: true });
        this.onDestroy(() => handler());
    }
    /** Set swipe events */
    _setSwipe() {
        if (!this.props.draggable) {
            return;
        }
        const swipe = new _Swipe__WEBPACK_IMPORTED_MODULE_10__.Swipe({ container: this.thumb, grabCursor: true });
        swipe.on('start', (coord) => this._handleSwipeStart(coord));
        swipe.on('move', (coord) => this._handleSwipeMove(coord));
        swipe.on('end', (coord) => this._handleSwipeEnd(coord));
        swipe.on('touchmove', (event) => this._handleSwipeTouchMove(event));
        swipe.on('mousemove', (event) => this._handleSwipeMouseMove(event));
        this.onDestroy(() => swipe.destroy());
    }
    /** Handles swipe start */
    _handleSwipeStart(coords) {
        const { container } = this;
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(container)) {
            this._valueOnSwipeStart = container.target;
        }
        else {
            this._valueOnSwipeStart = this.scrollValue;
        }
        this.callbacks.emit('swipeStart', coords);
    }
    /** Handle swipe move */
    _handleSwipeMove(coords) {
        this._onSwipeMove(coords);
        this.callbacks.emit('swipe', coords);
    }
    /** Handle swipe end */
    _handleSwipeEnd(coords) {
        this.callbacks.emit('swipeEnd', coords);
    }
    /** Handle swipe touchmove */
    _handleSwipeTouchMove(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    /** Handle swipe mousemove */
    _handleSwipeMouseMove(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    /** Resize the scrollbar. */
    resize() {
        const { scrollableSize, scrollSize, outer, track, thumb, props, axis } = this;
        const { autoSize: shouldAutoSize } = props;
        const isHorizontal = axis === 'x';
        // Define if the scrollbar is empty
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnToggle)(outer, this._cn('_empty'), scrollableSize === 0);
        // Save sizes
        const trackSize = isHorizontal ? track.offsetWidth : track.offsetHeight;
        // Calculate minimum thumb size
        const minThumbSize = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.toPixels)(props.minSize);
        let newThumbSize = minThumbSize;
        // Calculate thumb sizes if auto-size is enabled
        if (shouldAutoSize) {
            newThumbSize = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.clamp)(trackSize / (scrollSize / trackSize), minThumbSize, Infinity);
        }
        // Apply sizes
        const { style } = thumb;
        if (isHorizontal) {
            style.width = `${newThumbSize}px`;
        }
        else {
            style.height = `${newThumbSize}px`;
        }
        // Reset timeouts
        if (this._addInActionTimeout) {
            clearTimeout(this._addInActionTimeout);
        }
        // Render the scrollbar
        this._render();
        // Emit callbacks
        this.callbacks.emit('resize', undefined);
    }
    /** Render the scrollbar. */
    _render() {
        const { scrollValue, scrollableSize, axis, thumbSize, trackSize } = this;
        const isRtl = this._isRtl;
        const normalizedScrollValue = isRtl ? Math.abs(scrollValue) : scrollValue;
        let scrollProgress = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.clamp)(normalizedScrollValue / scrollableSize);
        if (isRtl) {
            scrollProgress = 1 - scrollProgress;
        }
        const translate = (trackSize - thumbSize) * scrollProgress;
        const x = axis === 'x' ? translate : 0;
        const y = axis === 'y' ? translate : 0;
        this._thumb.style.transform = `translate(${x}px, ${y}px)`;
        // Emit callbacks
        this.callbacks.emit('update', undefined);
    }
    /** Handle scroll update */
    _onScroll() {
        const { scrollValue, outer } = this;
        const inActionClass = this._cn('_in-action');
        if (scrollValue !== this._prevScrollValue) {
            this._addInActionTimeout = setTimeout(() => {
                if (!(0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnHas)(outer, inActionClass)) {
                    (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnAdd)(outer, inActionClass);
                    this.callbacks.emit('show', undefined);
                }
            }, 50);
        }
        else {
            this._prevScrollValue = scrollValue;
        }
        this._render();
        if (this._removeInActionTimeout) {
            clearTimeout(this._removeInActionTimeout);
        }
        this._removeInActionTimeout = setTimeout(() => {
            (0,_internal_cn__WEBPACK_IMPORTED_MODULE_2__.cnRemove)(outer, inActionClass);
            this.callbacks.emit('hide', undefined);
        }, 500);
    }
    /** Handle swipe move */
    _onSwipeMove(data) {
        const { scrollElement, axis, trackSize, thumbSize, scrollableSize } = this;
        const valueOnStart = this._valueOnSwipeStart;
        const diff = axis === 'x' ? data.diff.x : data.diff.y;
        let iterator = (diff / (trackSize - thumbSize)) * scrollableSize;
        if ((0,_utils_isSnap__WEBPACK_IMPORTED_MODULE_13__.isSnap)(scrollElement)) {
            iterator = this._isRtl ? -iterator : iterator;
            const { min, max } = scrollElement;
            const trackLength = scrollElement.max - scrollElement.min;
            const loopCount = scrollElement.props.loop ? scrollElement.loopCount : 0;
            const target = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.clamp)(valueOnStart + iterator, min + trackLength * loopCount, max + trackLength * loopCount);
            scrollElement.setTarget(target);
        }
        else {
            const target = valueOnStart + iterator;
            scrollElement.scrollTo({
                top: axis === 'y' ? target : undefined,
                left: axis === 'x' ? target : undefined,
                behavior: 'instant',
            });
        }
    }
    /**
     * Destroys the component and cleans up resources.
     */
    _destroy() {
        super._destroy();
        if (this._addInActionTimeout) {
            clearTimeout(this._addInActionTimeout);
        }
        if (this._removeInActionTimeout) {
            clearTimeout(this._removeInActionTimeout);
        }
    }
}
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_4__.noopIfDestroyed
], Scrollbar.prototype, "resize", null);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Scrollbar/props.js":
/*!******************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Scrollbar/props.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MUTABLE_PROPS: () => (/* binding */ MUTABLE_PROPS),
/* harmony export */   STATIC_PROPS: () => (/* binding */ STATIC_PROPS)
/* harmony export */ });
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");

const STATIC_PROPS = {
    __staticProp: true,
    container: _internal_env__WEBPACK_IMPORTED_MODULE_0__.isBrowser ? window : null,
    parent: false,
    class: false,
    axis: 'y',
    draggable: true,
    autoHide: true,
    resizeDebounce: 50,
};
const MUTABLE_PROPS = {
    __mutableProp: true,
    minSize: 50,
    autoSize: true,
};
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Scrollbar/styles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Scrollbar/styles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScrollbarStyles: () => (/* binding */ createScrollbarStyles)
/* harmony export */ });
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _internal_prependStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/prependStyles */ "./node_modules/vevet/lib/esm/internal/prependStyles.js");


let style = null;
function createScrollbarStyles(prefix) {
    if (style) {
        return style;
    }
    style = _internal_env__WEBPACK_IMPORTED_MODULE_0__.doc.createElement('style');
    (0,_internal_prependStyles__WEBPACK_IMPORTED_MODULE_1__.prependStyles)(style);
    style.innerHTML = `
    .${prefix}-scrollable {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .${prefix}-scrollable::-webkit-scrollbar {
      display: none;
      appearance: none;
      width: 0;
      height: 0;
    }

    .${prefix} {
      position: absolute;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s linear, visibility 0.25s linear;
    }

    .${prefix}.${prefix}_in-window {
      position: fixed;
      z-index: 9;
    }

    .${prefix}.${prefix}_inited {
      opacity: 1;
      visibility: visible;
    }

    .${prefix}.${prefix}_empty {
      opacity: 0;
      visibility: hidden;
    }

    .${prefix}.${prefix}_auto-hide {
      opacity: 0;
    }

    .${prefix}.${prefix}_auto-hide:hover,
    .${prefix}.${prefix}_auto-hide:active,
    .${prefix}.${prefix}_in-action {
      opacity: 1;
    }

    .${prefix}_y {
      top: 0;
      right: 0;
      width: 10px;
      height: 100%;
    }

    .${prefix}_x {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;
    }

    .${prefix}__track {
      position: relative;
      width: 100%;
      height: 100%;
      background: #ccc;
    }

    .${prefix}__thumb {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
    }
  `;
    return style;
}
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Scrollbar/utils/isSnap.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Scrollbar/utils/isSnap.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSnap: () => (/* binding */ isSnap)
/* harmony export */ });
function isSnap(instance) {
    return (typeof instance === 'object' &&
        instance !== null &&
        'slides' in instance &&
        'toCoord' in instance);
}
//# sourceMappingURL=isSnap.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Swipe/Coords/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Swipe/Coords/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeCoords: () => (/* binding */ SwipeCoords)
/* harmony export */ });
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
/* harmony import */ var _internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/isFiniteNumber */ "./node_modules/vevet/lib/esm/internal/isFiniteNumber.js");
/* harmony import */ var _internal_unwrapAngle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../internal/unwrapAngle */ "./node_modules/vevet/lib/esm/internal/unwrapAngle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./node_modules/vevet/lib/esm/utils/common/closest.js");




const START_VEC3 = { x: 0, y: 0, angle: 0 };
const START_STATE = Object.assign(Object.assign({}, START_VEC3), { time: 0 });
class SwipeCoords {
    constructor(ctx) {
        this.ctx = ctx;
        /** Event timestamp. */
        this._timestamp = 0;
        /** Start position. */
        this._start = Object.assign({}, START_STATE);
        /** Previous position. */
        this._prev = Object.assign({}, START_STATE);
        /** Current position. */
        this._current = Object.assign({}, START_STATE);
        /** Movement offset from start. */
        this._diff = Object.assign({}, START_STATE);
        /** Movement offset from previous position. */
        this._step = Object.assign({}, START_STATE);
        /** Total accumulated movement since swipe start. */
        this._accum = Object.assign({}, START_VEC3);
        /** Movement with rubber and snap applied (movement space). */
        this._movement = Object.assign({}, START_VEC3);
        /** Previous movement with rubber and snap applied (movement space). */
        this._prevMovement = Object.assign({}, START_VEC3);
        /** Raw accumulated displacement (before rubber). */
        this._rawMovement = Object.assign({}, START_VEC3);
        /** Raw atan2 angle and unwrapped cumulative angle. */
        this._tempAngle = { raw: 0, unwrapped: 0 };
        /** Active snap target per axis, if any. */
        this._snap = {};
        /** Cached normalized bounds (refreshed on swipe start). */
        this._bounds = null;
        /** Current scale modifier. */
        this._scale = 1;
    }
    get timestamp() {
        return this._timestamp;
    }
    get start() {
        return this._start;
    }
    get prev() {
        return this._prev;
    }
    get current() {
        return this._current;
    }
    get diff() {
        return this._diff;
    }
    get step() {
        return this._step;
    }
    get accum() {
        return this._accum;
    }
    /** Displacement in movement space (rubber + snap). */
    get movement() {
        return this._movement;
    }
    set movement(value) {
        const newValue = Object.assign(Object.assign({}, this.movement), value);
        this._movement.x = newValue.x;
        this._movement.y = newValue.y;
        this._movement.angle = newValue.angle;
        this._rawMovement.x = newValue.x;
        this._rawMovement.y = newValue.y;
        this._rawMovement.angle = newValue.angle;
    }
    /** Previous displacement in movement space (rubber + snap). */
    get prevMovement() {
        return this._prevMovement;
    }
    /** Raw movement before rubber (same space as `bounds`). */
    get rawMovement() {
        return this._rawMovement;
    }
    /** Normalized movement limits (`[min, max]` per defined axis). */
    get bounds() {
        if (this._bounds) {
            return this._bounds;
        }
        return this.calculateBounds();
    }
    get overflow() {
        return this.ctx.props.overflow ? Math.abs(this.ctx.props.overflow()) : 0;
    }
    /** Current scale modifier */
    get scale() {
        return this._scale;
    }
    get coords() {
        const { timestamp, start, prev, current, diff, step, accum, movement, prevMovement, scale, } = this;
        return {
            timestamp,
            start,
            prev,
            current,
            diff,
            step,
            accum,
            movement,
            prevMovement,
            scale,
        };
    }
    /** Resolved snap target per axis during the current gesture. */
    get snap() {
        return this._snap;
    }
    /**
     * Overflow past `bounds` per axis in movement space.
     * Zero when inside limits; used for bounce-back.
     */
    get exceeds() {
        const { _rawMovement: movement, bounds } = this;
        if (!bounds) {
            return null;
        }
        let xDiff = 0;
        let yDiff = 0;
        let aDiff = 0;
        if (bounds.x) {
            if (movement.x < bounds.x[0]) {
                xDiff = movement.x - bounds.x[0];
            }
            else if (movement.x > bounds.x[1]) {
                xDiff = movement.x - bounds.x[1];
            }
        }
        if (bounds.y) {
            if (movement.y < bounds.y[0]) {
                yDiff = movement.y - bounds.y[0];
            }
            else if (movement.y > bounds.y[1]) {
                yDiff = movement.y - bounds.y[1];
            }
        }
        if (bounds.angle) {
            if (movement.angle < bounds.angle[0]) {
                aDiff = movement.angle - bounds.angle[0];
            }
            else if (movement.angle > bounds.angle[1]) {
                aDiff = movement.angle - bounds.angle[1];
            }
        }
        return {
            x: xDiff,
            y: yDiff,
            angle: aDiff,
        };
    }
    /** Parses pointer coordinates relative to the container */
    decode(event) {
        const vevet = (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_0__.initVevet)();
        const { props, container } = this.ctx;
        let clientX = 0;
        let clientY = 0;
        if ('touches' in event) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        }
        else if ('type' in event) {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        else {
            clientX = event.x;
            clientY = event.y;
        }
        let x = clientX;
        let y = clientY;
        let centerX = vevet.width / 2;
        let centerY = vevet.height / 2;
        if (props.relative) {
            const bounding = container.getBoundingClientRect();
            x = clientX - bounding.left;
            y = clientY - bounding.top;
            centerX = bounding.left + bounding.width / 2;
            centerY = bounding.top + bounding.height / 2;
        }
        const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
        const angle = (angleRad * 180) / Math.PI;
        return {
            x: x,
            y: y,
            angle,
            time: performance.now(),
        };
    }
    /** Apply scale and optionally zoom toward an origin in movement space. */
    applyScale(value, originProp) {
        if (this._scale === value) {
            return;
        }
        if (originProp) {
            const origin = this.decode(originProp);
            const ratio = value / this._scale;
            this.movement = {
                x: origin.x - (origin.x - this._movement.x) * ratio,
                y: origin.y - (origin.y - this._movement.y) * ratio,
            };
        }
        this._scale = value;
    }
    /** Set start coordinates */
    setStart(state) {
        this._tempAngle = { raw: state.angle, unwrapped: state.angle };
        this._timestamp = performance.now();
        this._start = Object.assign({}, state);
        this._prev = Object.assign({}, state);
        this._current = Object.assign({}, state);
        this._diff = Object.assign(Object.assign({}, START_VEC3), { time: 0 });
        this._step = Object.assign(Object.assign({}, START_VEC3), { time: 0 });
        this._accum = Object.assign({}, START_VEC3);
    }
    /** Sync temp angle */
    syncTempAngle() {
        this._tempAngle.raw = this._current.angle;
        this._tempAngle.unwrapped = this._current.angle;
    }
    /** Update coordinates */
    update({ x, y, angle, time }, applyRatio = true) {
        // Vars
        const { start, ctx } = this;
        const stepRatio = applyRatio ? ctx.props.ratio : 1;
        // Update bounds
        if ((ctx.hasInertia() && ctx.recalculateBoundsOnInertia()) ||
            !ctx.hasInertia()) {
            this.calculateBounds();
        }
        // Save
        this._timestamp = performance.now();
        this._prev = Object.assign({}, this.current);
        this._current = { x, y, angle, time };
        const { _current: current, _prev: prev, overflow } = this;
        // Update angle
        this._updateTempAngle(angle);
        current.angle = this._tempAngle.unwrapped;
        // Update coords
        this._step = {
            x: current.x - prev.x,
            y: current.y - prev.y,
            angle: current.angle - prev.angle,
            time: current.time - prev.time,
        };
        this._diff = {
            x: current.x - start.x,
            y: current.y - start.y,
            angle: this._diff.angle + this._step.angle,
            time: current.time - start.time,
        };
        this._accum = {
            x: this._accum.x + Math.abs(this._step.x),
            y: this._accum.y + Math.abs(this._step.y),
            angle: this._accum.angle + Math.abs(this._step.angle),
        };
        this._rawMovement = {
            x: this._rawMovement.x + this._step.x * stepRatio,
            y: this._rawMovement.y + this._step.y * stepRatio,
            angle: this._rawMovement.angle + this._step.angle * stepRatio,
        };
        this._prevMovement.x = this._movement.x;
        this._prevMovement.y = this._movement.y;
        this._prevMovement.angle = this._movement.angle;
        this._movement.x = this._applyRubber('x', overflow);
        this._movement.y = this._applyRubber('y', overflow);
        this._movement.angle = this._applyRubber('angle', overflow);
        this._snapMovementAxis('x');
        this._snapMovementAxis('y');
        this._snapMovementAxis('angle');
    }
    /** Snap movement axis */
    _snapMovementAxis(axis) {
        var _a;
        const { props, hasInertia } = this.ctx;
        const snap = (_a = props.snap) === null || _a === void 0 ? void 0 : _a.call(props);
        if (!snap) {
            this._snap[axis] = undefined;
            return;
        }
        const snaps = snap[axis];
        if (!(snaps === null || snaps === void 0 ? void 0 : snaps.length)) {
            this._snap[axis] = undefined;
            return;
        }
        const value = this._movement[axis];
        const target = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.closest)(value, snaps);
        const radius = props.snapRadius;
        if ((0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(radius) && Math.abs(target - value) > Math.abs(radius)) {
            this._snap[axis] = undefined;
            return;
        }
        this._snap[axis] = target;
        if (!hasInertia()) {
            this._movement[axis] = target;
        }
    }
    /** Calculate bounds */
    calculateBounds() {
        const { props } = this.ctx;
        if (!props.bounds) {
            this._bounds = null;
            return;
        }
        const bounds = props.bounds(this.coords);
        const d = [-Infinity, Infinity];
        const x = (bounds === null || bounds === void 0 ? void 0 : bounds.x)
            ? [Math.min(...bounds.x), Math.max(...bounds.x)]
            : [...d];
        const y = (bounds === null || bounds === void 0 ? void 0 : bounds.y)
            ? [Math.min(...bounds.y), Math.max(...bounds.y)]
            : [...d];
        const a = (bounds === null || bounds === void 0 ? void 0 : bounds.angle)
            ? [Math.min(...bounds.angle), Math.max(...bounds.angle)]
            : [...d];
        this._bounds = { x, y, angle: a };
        return this._bounds;
    }
    /** Unwrap raw atan2 angle and accumulate into _angle */
    _updateTempAngle(rawAngle) {
        this._tempAngle.unwrapped += (0,_internal_unwrapAngle__WEBPACK_IMPORTED_MODULE_2__.unwrapAngleDelta)(rawAngle, this._tempAngle.raw);
        this._tempAngle.raw = rawAngle;
    }
    /** Apply rubber-band past movement bounds. */
    _applyRubber(axis, overflow) {
        var _a;
        const temp = this._rawMovement[axis];
        const bounds = (_a = this.bounds) === null || _a === void 0 ? void 0 : _a[axis];
        if (!bounds) {
            return temp;
        }
        const [min, max] = bounds;
        if (temp >= min && temp <= max) {
            return temp;
        }
        if (temp < min) {
            return min - this._rubberDistance(min - temp, overflow);
        }
        return max + this._rubberDistance(temp - max, overflow);
    }
    /**
     * Overscroll → rubber displacement
     */
    _rubberDistance(overscroll, limit) {
        if (overscroll <= 0 || limit <= 0) {
            return 0;
        }
        return (limit * overscroll) / (limit + overscroll);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Swipe/Inertia/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Swipe/Inertia/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeInertia: () => (/* binding */ SwipeInertia)
/* harmony export */ });
/* harmony import */ var _components_Raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Raf */ "./node_modules/vevet/lib/esm/components/Raf/index.js");
/* harmony import */ var _internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/isFiniteNumber */ "./node_modules/vevet/lib/esm/internal/isFiniteNumber.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./node_modules/vevet/lib/esm/utils/math/clamp.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./node_modules/vevet/lib/esm/utils/math/lerp.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const IDLE_VEC3 = { x: 0, y: 0, angle: 0 };
const IDLE_STATE = Object.assign(Object.assign({}, IDLE_VEC3), { time: 0 });
const LERP_APPROX = 0.01;
const BELOW_THRESHOLD = 0.1;
class SwipeInertia {
    constructor(ctx) {
        this.ctx = ctx;
        this._velocity = Object.assign({}, IDLE_STATE);
        this._initialVelocity = Object.assign({}, IDLE_STATE);
        this._saveRawMovement = Object.assign({}, IDLE_VEC3);
        this._rawMovement = Object.assign({}, IDLE_VEC3);
        this._saveStep = Object.assign({}, IDLE_STATE);
        this._saveCurrent = Object.assign({}, IDLE_STATE);
    }
    /** Check if inertia is active */
    get has() {
        return !!this._raf;
    }
    /** Apply inertia-based movement */
    release(onUpdate) {
        const { ctx } = this;
        const { props } = ctx;
        this._modifiedDistance = undefined;
        this._saveCurrent = Object.assign({}, ctx.coords.current);
        this._saveStep = Object.assign({}, ctx.coords.step);
        this._saveRawMovement = Object.assign({}, ctx.coords.rawMovement);
        this._rawMovement = Object.assign({}, ctx.coords.rawMovement);
        const data = this._calcVelocity();
        if (!data || !(0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(data.dt) || data.dt <= 0) {
            ctx.onFail();
            return false;
        }
        const { linearSpeed, angularSpeed, vx, vy, va, threshold } = data;
        if (!(0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(linearSpeed) ||
            !(0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(angularSpeed) ||
            (linearSpeed < threshold && angularSpeed < threshold)) {
            ctx.onFail();
            return false;
        }
        this._onUpdate = onUpdate;
        this._velocity = { x: vx, y: vy, angle: va, time: performance.now() };
        this._initialVelocity = Object.assign({}, this._velocity);
        if (props.inertiaDistanceModifier) {
            this._modifiedDistance = props.inertiaDistanceModifier({
                x: this._predictDistance(vx, props.inertiaDecay),
                y: this._predictDistance(vy, props.inertiaDecay),
                angle: this._predictDistance(va, props.inertiaDecay),
            });
        }
        this._raf = new _components_Raf__WEBPACK_IMPORTED_MODULE_0__.Raf({
            enabled: true,
            onFrame: this._handleRaf.bind(this),
        });
        this.ctx.onStart();
        return true;
    }
    /** Calculate velocity */
    _calcVelocity() {
        const { _saveCurrent: current, _saveStep: step } = this;
        const _a = this.ctx.props, { inertiaRatio, ratio, maxVelocity } = _a, props = __rest(_a, ["inertiaRatio", "ratio", "maxVelocity"]);
        if (!current || !step) {
            return null;
        }
        const gap = performance.now() - current.time;
        const dt = Math.max(step.time, gap, 1);
        const iRatio = (0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(inertiaRatio) ? inertiaRatio : 1;
        const sRatio = (0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(ratio) ? ratio : 1;
        const finalRatio = sRatio * iRatio;
        const maxVX = maxVelocity.x ? Math.abs(maxVelocity.x) : 0;
        let vx = (step.x / dt) * finalRatio;
        vx = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(vx, -maxVX, maxVX);
        const maxVY = maxVelocity.y ? Math.abs(maxVelocity.y) : 0;
        let vy = (step.y / dt) * finalRatio;
        vy = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(vy, -maxVY, maxVY);
        const maxVA = maxVelocity.angle ? Math.abs(maxVelocity.angle) : 0;
        let va = (step.angle / dt) * finalRatio;
        va = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(va, -maxVA, maxVA);
        const linearSpeed = Math.hypot(vx, vy) * 1000;
        const angularSpeed = Math.abs(va) * 1000;
        const threshold = props.inertiaThreshold;
        return { dt, vx, vy, va, linearSpeed, angularSpeed, threshold };
    }
    /** Handle RAF update */
    _handleRaf() {
        var _a;
        if (!this._raf) {
            return;
        }
        const { _raf: raf } = this;
        const duration = this._raf.duration;
        const { coords, props } = this.ctx;
        const { _velocity: velocity, _saveCurrent: startCurrent, _saveRawMovement: startRawMovement, _rawMovement: rawMovement, _modifiedDistance: distance, _initialVelocity: initial, } = this;
        const frameMs = duration;
        // Delta
        const dx = velocity.x * frameMs;
        const dy = velocity.y * frameMs;
        const dAngle = velocity.angle * frameMs;
        // Friction
        const frictionEase = raf.lerpFactor(props.inertiaDecay);
        velocity.x = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(velocity.x, 0, frictionEase);
        velocity.y = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(velocity.y, 0, frictionEase);
        velocity.angle = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(velocity.angle, 0, frictionEase);
        // Movement
        if (distance) {
            const xP = this._getVelocityProgress(velocity.x, initial.x);
            const yP = this._getVelocityProgress(velocity.y, initial.y);
            const aP = this._getVelocityProgress(velocity.angle, initial.angle);
            rawMovement.x = startRawMovement.x + distance.x * xP;
            rawMovement.y = startRawMovement.y + distance.y * yP;
            rawMovement.angle = startRawMovement.angle + distance.angle * aP;
        }
        else {
            rawMovement.x += dx;
            rawMovement.y += dy;
            rawMovement.angle += dAngle;
        }
        // Bounce
        let isBouncing = false;
        const rawBounceEase = props.inertiaBounceEase;
        const bounceEase = rawBounceEase >= 1 ? 1 : raf.lerpFactor(rawBounceEase);
        // Bounce within bounds
        const { bounds } = coords;
        if (bounds === null || bounds === void 0 ? void 0 : bounds.x) {
            const bx = this._applyAxisBounce('x', rawMovement.x, velocity.x, bounds.x, bounceEase);
            rawMovement.x = bx.value;
            velocity.x = bx.velocity;
            isBouncing = 'bounceFinished' in bx ? true : isBouncing;
        }
        if (bounds === null || bounds === void 0 ? void 0 : bounds.y) {
            const by = this._applyAxisBounce('y', rawMovement.y, velocity.y, bounds.y, bounceEase);
            rawMovement.y = by.value;
            velocity.y = by.velocity;
            isBouncing = 'bounceFinished' in by ? true : isBouncing;
        }
        if (bounds === null || bounds === void 0 ? void 0 : bounds.angle) {
            const ba = this._applyAxisBounce('angle', rawMovement.angle, velocity.angle, bounds.angle, bounceEase);
            rawMovement.angle = ba.value;
            velocity.angle = ba.velocity;
            isBouncing = 'bounceFinished' in ba ? true : isBouncing;
        }
        // Callbacks
        const totalX = rawMovement.x - startRawMovement.x;
        const totalY = rawMovement.y - startRawMovement.y;
        const totalA = rawMovement.angle - startRawMovement.angle;
        const x = startCurrent.x + totalX;
        const y = startCurrent.y + totalY;
        const angle = startCurrent.angle + totalA;
        (_a = this._onUpdate) === null || _a === void 0 ? void 0 : _a.call(this, { x, y, angle });
        // Stop
        const linearStep = Math.hypot(dx, dy);
        const angularStep = Math.abs(dAngle);
        let shouldStop = linearStep < BELOW_THRESHOLD && angularStep < BELOW_THRESHOLD;
        if (distance) {
            shouldStop =
                Math.abs(totalX - distance.x) < LERP_APPROX &&
                    Math.abs(totalY - distance.y) < LERP_APPROX &&
                    Math.abs(totalA - distance.angle) < LERP_APPROX;
        }
        if (!isBouncing && shouldStop) {
            this.ctx.onEnd();
            this._clear();
        }
    }
    /** Calculate velocity progress */
    _getVelocityProgress(v, initial) {
        if (Math.abs(initial) < BELOW_THRESHOLD) {
            return 1;
        }
        const p = 1 - Math.abs(v / initial);
        if (Math.abs(1 - p) < LERP_APPROX / 10) {
            return 1;
        }
        return p;
    }
    _predictDistance(velocity, decay, frameMs = 1000 / 60) {
        const k = (decay * 60) / 1000;
        const r = Math.exp(-k * frameMs);
        return (velocity * frameMs) / (1 - r);
    }
    /** Apply exponential axis bounce overflow */
    _applyAxisBounce(axis, value, velocity, bounds, ease) {
        if (!bounds.length) {
            return { value, velocity };
        }
        const snappy = this.ctx.coords.snap[axis];
        const lo = typeof snappy === 'number' ? snappy : Math.min(...bounds);
        const hi = typeof snappy === 'number' ? snappy : Math.max(...bounds);
        if (value < lo || value > hi) {
            const target = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(value, lo, hi);
            const val = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(value, target, ease, LERP_APPROX);
            const vel = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(velocity, 0, ease, LERP_APPROX);
            return {
                value: val,
                velocity: vel,
                bounceFinished: val === target && vel === 0,
            };
        }
        return { value, velocity };
    }
    /** Clear data and stop animation */
    _clear() {
        var _a;
        (_a = this._raf) === null || _a === void 0 ? void 0 : _a.destroy();
        this._raf = undefined;
        this._velocity = Object.assign({}, IDLE_STATE);
    }
    /** Stop inertia animation */
    cancel() {
        if (this._raf) {
            this.ctx.onCancel();
        }
        this._clear();
    }
    /** Destroy instance */
    destroy() {
        this._clear();
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Swipe/Styles/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Swipe/Styles/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeStyles: () => (/* binding */ SwipeStyles)
/* harmony export */ });
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./node_modules/vevet/lib/esm/components/Swipe/Styles/styles.js");


class SwipeStyles {
    constructor(_ctx) {
        this._ctx = _ctx;
        this._styles = _styles__WEBPACK_IMPORTED_MODULE_1__.cursorStyles === null || _styles__WEBPACK_IMPORTED_MODULE_1__.cursorStyles === void 0 ? void 0 : _styles__WEBPACK_IMPORTED_MODULE_1__.cursorStyles.cloneNode(true);
        this.setInline();
    }
    /** Applies touch-action and cursor styles */
    setInline() {
        const { props } = this._ctx;
        const target = props.thumb || props.container;
        const { axis, enabled, grabCursor: hasGrabCursor } = props;
        const { style } = target;
        const cursor = enabled && hasGrabCursor ? 'grab' : '';
        let touchAction = 'none';
        if (axis === 'x') {
            touchAction = 'pan-y';
        }
        else if (axis === 'y') {
            touchAction = 'pan-x';
        }
        style.cursor = cursor;
        style.touchAction = touchAction;
    }
    /** Appends styles */
    append() {
        const swipe = this._ctx;
        if (swipe.props.grabCursor && this._styles) {
            _internal_env__WEBPACK_IMPORTED_MODULE_0__.body.append(this._styles);
        }
    }
    /** Remove styles */
    remove() {
        var _a;
        (_a = this._styles) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Swipe/Styles/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Swipe/Styles/styles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cursorStyles: () => (/* binding */ cursorStyles)
/* harmony export */ });
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");

const cursorStyles = _internal_env__WEBPACK_IMPORTED_MODULE_0__.isBrowser ? _internal_env__WEBPACK_IMPORTED_MODULE_0__.doc.createElement('style') : null;
if (cursorStyles) {
    cursorStyles.innerHTML = '* { cursor: grabbing !important; }';
}
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Swipe/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Swipe/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swipe: () => (/* binding */ Swipe)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./node_modules/vevet/lib/esm/base/Module/index.js");
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutCubic.js");
/* harmony import */ var _Pointers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pointers */ "./node_modules/vevet/lib/esm/components/Pointers/index.js");
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Timeline */ "./node_modules/vevet/lib/esm/components/Timeline/index.js");
/* harmony import */ var _Coords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Coords */ "./node_modules/vevet/lib/esm/components/Swipe/Coords/index.js");
/* harmony import */ var _Inertia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Inertia */ "./node_modules/vevet/lib/esm/components/Swipe/Inertia/index.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./props */ "./node_modules/vevet/lib/esm/components/Swipe/props.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Styles */ "./node_modules/vevet/lib/esm/components/Swipe/Styles/index.js");











/**
 * Manages swipe interactions:
 * - Tracks movement and detects direction
 * - Emits events on start, move, and end
 * - Supports exponential inertia
 * - Optional bounds with rubber-band overflow and bounce-back
 *
 * Notes:
 * - Does not transform elements, only computes coordinates.
 *
 * [Documentation](https://vevetjs.com/docs/Swipe)
 *
 * @group Components
 */
class Swipe extends _base__WEBPACK_IMPORTED_MODULE_0__.Module {
    /**
     * Returns default static properties.
     */
    _getStatic() {
        return Object.assign(Object.assign({}, super._getStatic()), _props__WEBPACK_IMPORTED_MODULE_8__.STATIC_PROPS);
    }
    /**
     * Returns default mutable properties.
     */
    _getMutable() {
        return Object.assign(Object.assign({}, super._getMutable()), _props__WEBPACK_IMPORTED_MODULE_8__.MUTABLE_PROPS);
    }
    constructor(props, onCallbacks) {
        super(props, onCallbacks);
        /** If swiping has started */
        this._isSwiping = false;
        /** If swiping has been aborted */
        this._isAborted = false;
        const { container, thumb, buttons, pointers } = this.props;
        this._coords = new _Coords__WEBPACK_IMPORTED_MODULE_6__.SwipeCoords({
            container,
            props: this.props,
            hasInertia: () => this.hasInertia,
            recalculateBoundsOnInertia: () => this.props.recalculateBoundsOnInertia,
        });
        this._styles = new _Styles__WEBPACK_IMPORTED_MODULE_9__.SwipeStyles(this);
        this._inertia = new _Inertia__WEBPACK_IMPORTED_MODULE_7__.SwipeInertia({
            props: this.props,
            coords: this._coords,
            onStart: () => {
                this._coords.syncTempAngle();
                this.callbacks.emit('inertiaStart', undefined);
            },
            onFail: () => this.callbacks.emit('inertiaFail', undefined),
            onCancel: () => this.callbacks.emit('inertiaCancel', undefined),
            onEnd: () => this.callbacks.emit('inertiaEnd', undefined),
        });
        // create pointers
        this._pointers = new _Pointers__WEBPACK_IMPORTED_MODULE_4__.Pointers({
            container: thumb || container,
            buttons,
            minPointers: pointers,
            maxPointers: pointers,
            relative: false,
            enabled: this.props.enabled,
            disableUserSelect: this.props.disableUserSelect,
        });
        // Set Events
        this._setEvents();
    }
    /** Full coordinate snapshot (pointer space + `movement`). */
    get coords() {
        return this._coords.coords;
    }
    /** Coordinate reference element. */
    get container() {
        return this.props.container;
    }
    /** Whether release inertia is running. */
    get hasInertia() {
        return this._inertia.has;
    }
    /** Whether overflow bounce-back timeline is running. */
    get hasBounce() {
        return !!this._bounceTm;
    }
    /** Whether a swipe gesture is in progress. */
    get isSwiping() {
        return this._isSwiping;
    }
    /** Handles property updates */
    _handleProps(props) {
        super._handleProps(props);
        this._pointers.updateProps({ enabled: this.props.enabled });
        this._styles.setInline();
        if (!this.props.inertia || !this.props.enabled) {
            this.cancelInertia();
        }
        if (!this.props.enabled) {
            this.cancelBounce();
        }
    }
    /** Sets event listeners */
    _setEvents() {
        const { callbacks } = this;
        const { container } = this.props;
        this._pointers.on('start', () => this._handlePointersStart());
        this._pointers.on('pointerdown', (data) => callbacks.emit('pointerdown', data));
        this._pointers.on('pointermove', (data) => callbacks.emit('pointermove', data));
        this._pointers.on('pointerup', (data) => callbacks.emit('pointerup', data));
        this._pointers.on('end', () => this._handlePointersEnd());
        const touchstart = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener)(container, 'touchstart', (event) => this._handleTouchStart(event), { passive: false });
        this.onDestroy(() => touchstart());
    }
    /** Handles `touchstart` events */
    _handleTouchStart(event) {
        if (!this.props.enabled) {
            return;
        }
        this._preventEdgeSwipe(event);
        this.callbacks.emit('touchstart', event);
    }
    /** Prevents edge swipes if enabled */
    _preventEdgeSwipe(event) {
        const { props } = this;
        if (!props.preventEdgeSwipe) {
            return;
        }
        const threshold = props.edgeSwipeThreshold;
        const x = event.targetTouches[0].pageX;
        const shouldPrevent = x <= threshold || x >= (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_1__.initVevet)().width - threshold;
        if (event.cancelable && shouldPrevent) {
            event.preventDefault();
            this.callbacks.emit('preventEdgeSwipe', undefined);
        }
    }
    /** Handles pointers start */
    _handlePointersStart() {
        this.cancelBounce();
        this.cancelInertia();
        const touchmove = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener)(window, 'touchmove', this._handleTouchMove.bind(this), { passive: false });
        const mousemove = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addEventListener)(window, 'mousemove', this._handleMouseMove.bind(this));
        const end = this._pointers.on('end', () => {
            this._handleEnd();
            end();
            touchmove();
            mousemove();
        });
        this.onDestroy(() => {
            end();
            touchmove();
            mousemove();
        });
    }
    /** Handles pointers end */
    _handlePointersEnd() {
        if (!this._isSwiping) {
            this.releaseBounce();
        }
    }
    /** Handles `touchmove` event */
    _handleTouchMove(event) {
        this.callbacks.emit('touchmove', event);
        if (this._isSwiping && this.props.preventTouchMove && event.cancelable) {
            event.preventDefault();
        }
        this._handleMove('touch');
    }
    /** Handles `mousemove` event */
    _handleMouseMove(event) {
        if (this.props.requireCtrlKey && !event.ctrlKey) {
            return;
        }
        this.callbacks.emit('mousemove', event);
        this._handleMove('mouse');
    }
    /** Handles move events */
    _handleMove(type) {
        if (!this._pointers.move || !this.props.enabled) {
            return;
        }
        const data = this._coords;
        const state = data.decode(this._pointers.move.center);
        if (this._isAborted) {
            return;
        }
        // Save start coordinates
        if (!this._startCoord) {
            this._startCoord = Object.assign({}, state);
        }
        // Update start time
        if (!this._startTime) {
            this._startTime = +Date.now();
        }
        // check if can start
        if (!this._isSwiping && !this._canStart(state, type)) {
            return;
        }
        // start
        if (!this._isSwiping) {
            this.cancelInertia();
            this.cancelBounce();
            this._isSwiping = true;
            this._startCoord = Object.assign({}, state);
            data.setStart(state);
            this.callbacks.emit('start', this.coords);
            this._styles.append();
        }
        // move
        this._move(state);
    }
    /** Checks if swipe can start */
    _canStart(state, type) {
        const { _startCoord: startCoord, _startTime: startTime } = this;
        if (!startCoord || !startTime) {
            return false;
        }
        const { threshold, minTime, axis, willAbort } = this.props;
        const diff = {
            x: state.x - startCoord.x,
            y: state.y - startCoord.y,
        };
        // check threshold
        const distX = diff.x;
        const distY = diff.y;
        const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        if (dist < threshold) {
            return false;
        }
        // check time
        if (+new Date() - startTime < minTime) {
            return false;
        }
        // check axis
        if (axis) {
            const rawAngle = (Math.atan2(Math.abs(diff.y), Math.abs(diff.x)) * 180) / Math.PI;
            const normalizedAngle = axis === 'x' ? rawAngle : 90 - rawAngle;
            if (normalizedAngle > 45) {
                this._reset();
                this._isAborted = true;
                this.callbacks.emit('abort', undefined);
                return false;
            }
        }
        // Check if should abort
        const shouldAbort = willAbort({
            type,
            state,
            start: startCoord,
            diff,
        });
        if (shouldAbort) {
            this._reset();
            this._isAborted = true;
            this.callbacks.emit('abort', undefined);
            return false;
        }
        return true;
    }
    /** Handles move events */
    _move(state, applyRatio = true) {
        const coords = this._coords;
        // Update coords
        coords.update(state, applyRatio);
        // trigger callbacks
        this.callbacks.emit('move', this.coords);
    }
    /** Handles swipe end */
    _handleEnd() {
        // reset
        this._startTime = undefined;
        this._isAborted = false;
        // check swiping
        if (!this.isSwiping) {
            return;
        }
        // reset
        this._reset();
        // reset styles
        this._styles.remove();
        // calculate direction
        const { x: diffX, y: diffY } = this._coords.diff;
        const absDiffX = Math.abs(diffX);
        const absDiffY = Math.abs(diffY);
        const { directionThreshold } = this.props;
        const endAxis = absDiffX > absDiffY ? 'x' : 'y';
        if (endAxis === 'x' && absDiffX > directionThreshold) {
            if (diffX > 0) {
                this.callbacks.emit('toRight', undefined);
            }
            else if (diffX < 0) {
                this.callbacks.emit('toLeft', undefined);
            }
        }
        if (endAxis === 'y' && absDiffY > directionThreshold) {
            if (diffY > 0) {
                this.callbacks.emit('toBottom', undefined);
            }
            else if (diffY < 0) {
                this.callbacks.emit('toTop', undefined);
            }
        }
        // end callback
        this.callbacks.emit('end', this.coords);
        // end with inertia or bounce
        let hasInertia = false;
        if (this.props.inertia) {
            hasInertia = this._releaseInertia();
        }
        if (!hasInertia) {
            this.releaseBounce();
        }
    }
    /** Reset swipe states */
    _reset() {
        this._startCoord = undefined;
        this._isSwiping = false;
    }
    /** Apply inertia-based movement */
    _releaseInertia() {
        return this._inertia.release(({ x, y, angle }) => {
            this.callbacks.emit('inertia', undefined);
            this._move({ x, y, angle, time: performance.now() }, false);
        });
    }
    /** Apply bounce overflow animation */
    releaseBounce(targetDuration) {
        this.cancelBounce();
        const { exceeds } = this._coords;
        const canBounce = this.props.canBounce();
        if (!exceeds ||
            (!exceeds.x && !exceeds.y && !exceeds.angle) ||
            !canBounce) {
            return;
        }
        const start = Object.assign({}, this.current);
        const duration = targetDuration !== null && targetDuration !== void 0 ? targetDuration : this.props.bounceDuration;
        const tm = new _Timeline__WEBPACK_IMPORTED_MODULE_5__.Timeline({ duration, easing: _utils__WEBPACK_IMPORTED_MODULE_3__.EaseOutCubic });
        this._bounceTm = tm;
        this._coords.syncTempAngle();
        tm.on('update', ({ eased }) => {
            this._move({
                x: start.x - exceeds.x * eased,
                y: start.y - exceeds.y * eased,
                angle: start.angle - exceeds.angle * eased,
                time: performance.now(),
            }, false);
        });
        tm.on('end', this.cancelBounce.bind(this));
        tm.play();
    }
    /** Cancel inertia */
    cancelInertia() {
        this._inertia.cancel();
    }
    /** Cancel bounce */
    cancelBounce() {
        var _a;
        (_a = this._bounceTm) === null || _a === void 0 ? void 0 : _a.destroy();
        this._bounceTm = undefined;
    }
    /** Calculate swipe bounds */
    calculateBounds() {
        return this._coords.calculateBounds();
    }
    /** Pointer position at swipe start. */
    get start() {
        return this._coords.start;
    }
    /** Previous pointer position. */
    get prev() {
        return this._coords.prev;
    }
    /** Current pointer position. */
    get current() {
        return this._coords.current;
    }
    /** Offset from swipe start to current pointer position. */
    get diff() {
        return this._coords.diff;
    }
    /** Offset from previous to current pointer position. */
    get step() {
        return this._coords.step;
    }
    /** Absolute path length since swipe start. */
    get accum() {
        return this._coords.accum;
    }
    /** Total displacement in movement space (use for element transforms). */
    get movement() {
        return this._coords.movement;
    }
    /** Current scale modifier. */
    get scale() {
        return this._coords.scale;
    }
    /**
     * Sets programmatic scale in movement space.
     * Optionally zooms toward an origin point and emits `move`.
     */
    setScale(value, origin) {
        this._coords.applyScale(value, origin);
        this._move(Object.assign(Object.assign({}, this.current), { time: performance.now() }));
        if (!this._inertia.has) {
            this.releaseBounce(0);
        }
    }
    /**
     * Sets programmatic displacement in movement space.
     * Reapplies rubber, snap, emits `move`, and cancels overflow bounce.
     */
    setMovement(value) {
        this._coords.movement = value;
        this._move(Object.assign(Object.assign({}, this.current), { time: performance.now() }));
        this.releaseBounce(0);
    }
    /**
     * Destroys the component
     */
    _destroy() {
        super._destroy();
        this.cancelBounce();
        this._pointers.destroy();
        this._inertia.destroy();
        this._styles.remove();
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Swipe/props.js":
/*!**************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Swipe/props.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MUTABLE_PROPS: () => (/* binding */ MUTABLE_PROPS),
/* harmony export */   STATIC_PROPS: () => (/* binding */ STATIC_PROPS)
/* harmony export */ });
const STATIC_PROPS = {
    __staticProp: true,
    container: null,
    thumb: null,
    buttons: [0],
    pointers: 1,
    disableUserSelect: true,
};
const MUTABLE_PROPS = {
    __mutableProp: true,
    enabled: true,
    relative: false,
    axis: null,
    ratio: 1,
    grabCursor: false,
    willAbort: () => false,
    threshold: 5,
    minTime: 0,
    directionThreshold: 50,
    preventEdgeSwipe: true,
    edgeSwipeThreshold: 20,
    preventTouchMove: true,
    requireCtrlKey: false,
    bounceDuration: 250,
    overflow: () => 50,
    inertia: false,
    inertiaDecay: 0.05,
    inertiaBounceEase: 0.3,
    inertiaRatio: 1,
    inertiaThreshold: 1,
    maxVelocity: { x: 7, y: 7, angle: 3 },
    bounds: null,
    recalculateBoundsOnInertia: true,
    snap: null,
    canBounce: () => true,
    snapRadius: null,
    inertiaDuration: null,
    inertiaEasing: null,
    velocityModifier: null,
    inertiaDistanceThreshold: null,
    inertiaDistanceModifier: null,
};
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Timeline/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Timeline/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeline: () => (/* binding */ Timeline)
/* harmony export */ });
/* harmony import */ var _base_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/Module */ "./node_modules/vevet/lib/esm/base/Module/index.js");
/* harmony import */ var _internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/isFiniteNumber */ "./node_modules/vevet/lib/esm/internal/isFiniteNumber.js");
/* harmony import */ var _internal_isUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/isUndefined */ "./node_modules/vevet/lib/esm/internal/isUndefined.js");
/* harmony import */ var _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/noopIfDestroyed */ "./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/math */ "./node_modules/vevet/lib/esm/utils/math/clamp.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/math */ "./node_modules/vevet/lib/esm/utils/math/easing.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./props */ "./node_modules/vevet/lib/esm/components/Timeline/props.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 * A timeline class for managing animations with easing and precise progress control.
 * It provides methods for playing, reversing, pausing, and resetting the timeline.
 *
 * [Documentation](https://vevetjs.com/docs/Timeline)
 *
 * @group Components
 */
class Timeline extends _base_Module__WEBPACK_IMPORTED_MODULE_0__.Module {
    /** Get default static properties. */
    _getStatic() {
        return Object.assign(Object.assign({}, super._getStatic()), _props__WEBPACK_IMPORTED_MODULE_6__.STATIC_PROPS);
    }
    /** Get default mutable properties. */
    _getMutable() {
        return Object.assign(Object.assign({}, super._getMutable()), _props__WEBPACK_IMPORTED_MODULE_6__.MUTABLE_PROPS);
    }
    constructor(props, onCallbacks) {
        super(props, onCallbacks);
        // Initialize default values
        this._progress = 0;
        this._eased = 0;
        this._raf = undefined;
        this._time = 0;
        this._isReversed = false;
        this._isPaused = false;
    }
    /**
     * Get or set the linear progress of the timeline.
     * Setting this triggers an update and associated callbacks.
     */
    get progress() {
        return this._progress;
    }
    set progress(val) {
        this._progress = (0,_utils_math__WEBPACK_IMPORTED_MODULE_4__.clamp)(val);
        this._onUpdate();
    }
    /**
     * Get the eased progress of the timeline, derived from the easing function.
     */
    get eased() {
        return this._eased;
    }
    /**
     * Whether the timeline is currently playing.
     */
    get isPlaying() {
        return !(0,_internal_isUndefined__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(this._raf);
    }
    /**
     * Whether the timeline is reversed (progress decreases over time).
     */
    get isReversed() {
        return this._isReversed;
    }
    /**
     * Whether the timeline is paused.
     */
    get isPaused() {
        return this._isPaused;
    }
    /**
     * Get the timeline duration, ensuring it is at least 0 ms.
     */
    get duration() {
        const source = this.props.duration;
        if (!(0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_1__.isFiniteNumber)(source) || source < 0) {
            return 0;
        }
        return this.props.duration;
    }
    /**
     * Play the timeline, advancing progress toward completion.
     * Does nothing if the timeline is destroyed or already completed.
     */
    play() {
        if (this.progress === 1) {
            return;
        }
        this._isReversed = false;
        this._isPaused = false;
        if (!this.isPlaying) {
            this._time = Date.now();
            this._animate();
        }
    }
    /**
     * Reverse the timeline, moving progress toward the start.
     * Does nothing if the timeline is destroyed or already at the start.
     */
    reverse() {
        if (this.progress === 0) {
            return;
        }
        this._isReversed = true;
        this._isPaused = false;
        if (!this.isPlaying) {
            this._time = Date.now();
            this._animate();
        }
    }
    /**
     * Pause the timeline, halting progress without resetting it.
     */
    pause() {
        this._isPaused = true;
        if (this._raf) {
            window.cancelAnimationFrame(this._raf);
        }
        this._raf = undefined;
    }
    /**
     * Reset the timeline to the beginning (progress = 0).
     */
    reset() {
        this.pause();
        this.progress = 0;
    }
    /**
     * Animate the timeline, updating progress based on elapsed time.
     */
    _animate() {
        if (this.isPaused) {
            return;
        }
        const { isReversed, duration } = this;
        if (duration <= 0) {
            this.progress = isReversed ? 1 : 0;
            this.progress = isReversed ? 0 : 1;
            return;
        }
        const currentTime = Date.now();
        const frameDiff = Math.abs(this._time - currentTime);
        this._time = currentTime;
        const progressIterator = frameDiff / duration / (isReversed ? -1 : 1);
        const progressTarget = this.progress + progressIterator;
        this.progress = progressTarget;
        if ((this.progress === 1 && !isReversed) ||
            (this.progress === 0 && isReversed)) {
            this._isReversed = false;
            this._isPaused = false;
            this._raf = undefined;
            return;
        }
        this._raf = window.requestAnimationFrame(() => this._animate());
    }
    /**
     * Handle progress updates and trigger callbacks.
     */
    _onUpdate() {
        this._eased = (0,_utils_math__WEBPACK_IMPORTED_MODULE_5__.easing)(this._progress, this.props.easing);
        this.callbacks.emit('update', {
            progress: this._progress,
            eased: this._eased,
        });
        if (this.progress === 0) {
            this.callbacks.emit('start', undefined);
            return;
        }
        if (this.progress === 1) {
            this.callbacks.emit('end', undefined);
        }
    }
    /**
     * Destroy the timeline, stopping any active animation and cleaning up resources.
     */
    _destroy() {
        this.pause();
        super._destroy();
    }
}
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Timeline.prototype, "play", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Timeline.prototype, "reverse", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Timeline.prototype, "pause", null);
__decorate([
    _internal_noopIfDestroyed__WEBPACK_IMPORTED_MODULE_3__.noopIfDestroyed
], Timeline.prototype, "reset", null);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/components/Timeline/props.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/components/Timeline/props.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MUTABLE_PROPS: () => (/* binding */ MUTABLE_PROPS),
/* harmony export */   STATIC_PROPS: () => (/* binding */ STATIC_PROPS)
/* harmony export */ });
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
var _a, _b;

const STATIC_PROPS = {
    __staticProp: true,
};
const MUTABLE_PROPS = {
    __mutableProp: true,
    easing: (_b = (_a = (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_0__.initVevet)()) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.easing,
    duration: 1000,
};
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/core/handlers/createPageLoad/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/core/handlers/createPageLoad/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPageLoad: () => (/* binding */ createPageLoad)
/* harmony export */ });
/* harmony import */ var _base_Callbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/Callbacks */ "./node_modules/vevet/lib/esm/base/Callbacks/index.js");
/* harmony import */ var _internal_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/cn */ "./node_modules/vevet/lib/esm/internal/cn.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _utils_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/listeners */ "./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js");




function createPageLoad({ prefix, applyClassNames }) {
    const callbacks = new _base_Callbacks__WEBPACK_IMPORTED_MODULE_0__.Callbacks();
    let isLoaded = false;
    if (_internal_env__WEBPACK_IMPORTED_MODULE_2__.doc.readyState === 'complete') {
        setTimeout(() => handleLoaded(), 0);
    }
    else {
        (0,_utils_listeners__WEBPACK_IMPORTED_MODULE_3__.addEventListener)(window, 'load', () => handleLoaded());
    }
    /** Callback on page loaded */
    function handleLoaded() {
        const { body } = document;
        isLoaded = true;
        if (applyClassNames) {
            (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnRemove)(_internal_env__WEBPACK_IMPORTED_MODULE_2__.html, `${prefix}loading`);
            (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnRemove)(body, `${prefix}loading`);
            (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnAdd)(_internal_env__WEBPACK_IMPORTED_MODULE_2__.html, `${prefix}loaded`);
        }
        callbacks.emit('loaded', undefined);
    }
    /** Add a callback on page load */
    function onLoad(callback) {
        if (isLoaded) {
            callback();
            return () => { };
        }
        return callbacks.on('loaded', () => callback());
    }
    return { onLoad, getIsLoaded: () => isLoaded };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/core/handlers/createViewport/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/core/handlers/createViewport/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createViewport: () => (/* binding */ createViewport)
/* harmony export */ });
/* harmony import */ var _base_Callbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/Callbacks */ "./node_modules/vevet/lib/esm/base/Callbacks/index.js");
/* harmony import */ var _internal_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../internal/cn */ "./node_modules/vevet/lib/esm/internal/cn.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../internal/isFiniteNumber */ "./node_modules/vevet/lib/esm/internal/isFiniteNumber.js");
/* harmony import */ var _utils_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/listeners */ "./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js");





function createViewport({ prefix, props, isMobile, isInApp, browserName, }) {
    // create styles
    let styles = _internal_env__WEBPACK_IMPORTED_MODULE_2__.doc.getElementById('vevet_css_preset');
    if (!styles) {
        styles = _internal_env__WEBPACK_IMPORTED_MODULE_2__.doc.createElement('style');
        styles.id = 'vevet_css_preset';
        _internal_env__WEBPACK_IMPORTED_MODULE_2__.body.appendChild(styles);
    }
    // create svh helper
    const svhHelper = _internal_env__WEBPACK_IMPORTED_MODULE_2__.doc.createElement('div');
    const { style } = svhHelper;
    svhHelper.id = 'vevet_svh_helper';
    style.position = 'fixed';
    style.top = '-100svh';
    style.left = '-100px';
    style.width = '1px';
    style.height = '100svh';
    _internal_env__WEBPACK_IMPORTED_MODULE_2__.body.appendChild(svhHelper);
    // create callbacks
    const callbacks = new _base_Callbacks__WEBPACK_IMPORTED_MODULE_0__.Callbacks();
    // default data
    const data = {
        width: 0,
        height: 0,
        sHeight: 0,
        vw: 0,
        vh: 0,
        svh: 0,
        scrollbarWidth: 0,
        rem: 16,
        landscape: false,
        portrait: false,
        dpr: window.devicePixelRatio,
        lowerDpr: window.devicePixelRatio,
    };
    // update values for the first time
    updateValues();
    updateClassNames();
    updateCSSVars();
    // add resize events
    let debounce;
    function debounceResize() {
        if (debounce) {
            clearTimeout(debounce);
            debounce = undefined;
        }
        if (props.resizeDebounce) {
            debounce = setTimeout(() => onResize(), props.resizeDebounce);
        }
        else {
            onResize();
        }
    }
    (0,_utils_listeners__WEBPACK_IMPORTED_MODULE_4__.addEventListener)(window, 'resize', () => debounceResize());
    const observer = new ResizeObserver(() => debounceResize());
    observer.observe(_internal_env__WEBPACK_IMPORTED_MODULE_2__.html);
    observer.observe(_internal_env__WEBPACK_IMPORTED_MODULE_2__.body);
    /** Event on window resize */
    function onResize() {
        const { width: prevWidth, height: prevHeight } = data;
        updateValues();
        updateClassNames();
        updateCSSVars();
        const { width, height } = data;
        callbacks.emit('trigger', undefined);
        if (width !== prevWidth || height !== prevHeight) {
            callbacks.emit('any', undefined);
        }
        if (width !== prevWidth && height === prevHeight) {
            callbacks.emit('onlyWidth', undefined);
        }
        if (height !== prevHeight && width === prevWidth) {
            callbacks.emit('onlyHeight', undefined);
        }
        if (width !== prevWidth && height !== prevHeight) {
            callbacks.emit('both', undefined);
        }
        if (width !== prevWidth) {
            callbacks.emit('width', undefined);
        }
        if (height !== prevHeight) {
            callbacks.emit('height', undefined);
        }
    }
    /** Update viewport values */
    function updateValues() {
        const { width: prevWidth } = data;
        const vWidth = window.innerWidth;
        const vHeight = window.innerHeight;
        data.width = vWidth;
        data.height = vHeight;
        data.scrollbarWidth = vWidth - _internal_env__WEBPACK_IMPORTED_MODULE_2__.html.clientWidth;
        data.vw = data.width / 100;
        data.vh = data.height / 100;
        const rootStyles = getComputedStyle(_internal_env__WEBPACK_IMPORTED_MODULE_2__.html);
        const fontSize = parseFloat(rootStyles.fontSize);
        data.rem = (0,_internal_isFiniteNumber__WEBPACK_IMPORTED_MODULE_3__.isFiniteNumber)(fontSize) ? fontSize : 16;
        data.landscape = data.width > data.height;
        data.portrait = data.width < data.height;
        data.dpr = window.devicePixelRatio;
        data.lowerDpr = !isMobile ? 1 : Math.min(data.dpr, 2);
        // for in-app browser, update svh only if width changed
        if (isMobile && (isInApp || browserName.includes('fxios'))) {
            const rootHeight = _internal_env__WEBPACK_IMPORTED_MODULE_2__.html.clientHeight;
            if (prevWidth !== data.width || !data.sHeight) {
                data.sHeight = rootHeight;
                data.svh = data.sHeight / 100;
            }
            else if (prevWidth === data.width && rootHeight < data.sHeight) {
                data.sHeight = rootHeight;
                data.svh = data.sHeight / 100;
            }
        }
        else {
            // when other browser, update svh directly
            data.svh = svhHelper.clientHeight / 100 || _internal_env__WEBPACK_IMPORTED_MODULE_2__.html.clientHeight / 100;
            data.sHeight = data.svh * 100;
        }
    }
    /** Update page classnames according to the viewport data */
    function updateClassNames() {
        if (!props.applyClassNames) {
            return;
        }
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnToggle)(_internal_env__WEBPACK_IMPORTED_MODULE_2__.html, `${prefix}landscape`, data.landscape);
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_1__.cnToggle)(_internal_env__WEBPACK_IMPORTED_MODULE_2__.html, `${prefix}portrait`, data.portrait);
    }
    /** Update CSS variables */
    function updateCSSVars() {
        styles.innerHTML = `
      html {
        --vw: ${data.vw}px;
        --vh: ${data.vh}px;
        --svh: ${data.svh}px;
        --scrollbar-width: ${data.scrollbarWidth}px;
      }
    `;
    }
    return { data, callbacks };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/core/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vevet/lib/esm/core/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Core: () => (/* binding */ Core)
/* harmony export */ });
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/es/index.js");
/* harmony import */ var inapp_spy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inapp-spy */ "./node_modules/inapp-spy/dist/index.mjs");
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");
/* harmony import */ var _internal_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/cn */ "./node_modules/vevet/lib/esm/internal/cn.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _manifest_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manifest.json */ "./node_modules/vevet/lib/esm/manifest.json");
/* harmony import */ var _handlers_createPageLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/createPageLoad */ "./node_modules/vevet/lib/esm/core/handlers/createPageLoad/index.js");
/* harmony import */ var _handlers_createViewport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handlers/createViewport */ "./node_modules/vevet/lib/esm/core/handlers/createViewport/index.js");








function Core(input) {
    // set default properties
    var _a;
    const defaultProps = {
        resizeDebounce: 0,
        easing: [0.25, 0.1, 0.25, 1],
        applyClassNames: false,
    };
    const props = Object.assign(Object.assign({}, defaultProps), input);
    const prefix = 'v-';
    // device info
    const browserData = (0,detect_browser__WEBPACK_IMPORTED_MODULE_0__.detect)();
    const device = (0,ismobilejs__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const osName = (_a = ((browserData === null || browserData === void 0 ? void 0 : browserData.os) || '')) === null || _a === void 0 ? void 0 : _a.split(' ')[0].toLowerCase();
    const browserName = ((browserData === null || browserData === void 0 ? void 0 : browserData.name) || '').toLowerCase();
    const isMobileByUserAgent = device.phone || device.tablet;
    let isMobile = isMobileByUserAgent;
    if (!isMobile) {
        if (!window.matchMedia('(pointer: fine)').matches) {
            isMobile = true;
        }
    }
    const { isInApp, appName } = (0,inapp_spy__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const inAppBrowser = isInApp ? (appName || 'unknown').toLowerCase() : false;
    // events
    const pageLoad = (0,_handlers_createPageLoad__WEBPACK_IMPORTED_MODULE_6__.createPageLoad)({
        prefix,
        applyClassNames: props.applyClassNames,
    });
    const viewport = (0,_handlers_createViewport__WEBPACK_IMPORTED_MODULE_7__.createViewport)({
        prefix,
        props,
        isMobile,
        isInApp,
        browserName,
    });
    // output
    const output = Object.assign(Object.assign({}, viewport.data), { viewportCallbacks: viewport.callbacks, version: _manifest_json__WEBPACK_IMPORTED_MODULE_5__.version, props,
        prefix, phone: device.phone, tablet: device.tablet, mobile: isMobile, osName,
        browserName,
        inAppBrowser,
        doc: _internal_env__WEBPACK_IMPORTED_MODULE_4__.doc,
        html: _internal_env__WEBPACK_IMPORTED_MODULE_4__.html,
        body: _internal_env__WEBPACK_IMPORTED_MODULE_4__.body, loaded: false, onLoad: pageLoad.onLoad, onResize: (...params) => viewport.callbacks.on(...params) });
    // update props on page load
    pageLoad.onLoad(() => {
        output.loaded = true;
    });
    // update props on viewport change
    viewport.callbacks.add('trigger', () => {
        const keys = Object.keys(viewport.data);
        keys.forEach((key) => {
            // @ts-ignore
            output[key] = viewport.data[key];
        });
    }, { protected: true, name: 'vevet core' });
    // set device features
    (function setDeviceFeatures() {
        if (!props.applyClassNames) {
            return;
        }
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_3__.cnAdd)(_internal_env__WEBPACK_IMPORTED_MODULE_4__.html, `${prefix}os-${osName}`);
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_3__.cnAdd)(_internal_env__WEBPACK_IMPORTED_MODULE_4__.html, `${prefix}browser-${browserName}`);
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_3__.cnToggle)(_internal_env__WEBPACK_IMPORTED_MODULE_4__.html, `${prefix}phone`, output.phone);
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_3__.cnToggle)(_internal_env__WEBPACK_IMPORTED_MODULE_4__.html, `${prefix}tablet`, output.tablet);
        (0,_internal_cn__WEBPACK_IMPORTED_MODULE_3__.cnToggle)(_internal_env__WEBPACK_IMPORTED_MODULE_4__.html, `${prefix}mobile`, output.mobile);
    })();
    return output;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/global/initVevet.js":
/*!********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/global/initVevet.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initVevet: () => (/* binding */ initVevet)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/vevet/lib/esm/core/index.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");


/**
 * @group Utils
 */
function initVevet() {
    var _a;
    if (!_internal_env__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {
        return undefined;
    }
    if (window.vevet5) {
        return window.vevet5;
    }
    const coreProps = (_a = window.VEVET_PROPS) !== null && _a !== void 0 ? _a : {};
    const core = (0,_core__WEBPACK_IMPORTED_MODULE_0__.Core)(coreProps);
    window.vevet5 = core;
    return window.vevet5;
}
// auto initialize
if (_internal_env__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {
    window.vevet5 = initVevet();
}
//# sourceMappingURL=initVevet.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/cn.js":
/*!***************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/cn.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cnAdd: () => (/* binding */ cnAdd),
/* harmony export */   cnHas: () => (/* binding */ cnHas),
/* harmony export */   cnRemove: () => (/* binding */ cnRemove),
/* harmony export */   cnToggle: () => (/* binding */ cnToggle)
/* harmony export */ });
function cnAdd(element, className) {
    element.classList.add(className);
}
function cnRemove(element, className) {
    if (className) {
        element.classList.remove(className);
    }
}
function cnToggle(element, className, is) {
    if (className) {
        element.classList.toggle(className, is);
    }
}
function cnHas(element, className) {
    return element.classList.contains(className);
}
//# sourceMappingURL=cn.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/env.js":
/*!****************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/env.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   doc: () => (/* binding */ doc),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof window !== 'undefined';
const doc = (isBrowser ? document : undefined);
const html = (isBrowser ? doc.documentElement : undefined);
const body = (isBrowser ? doc.body : undefined);
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/isFiniteNumber.js":
/*!***************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/isFiniteNumber.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFiniteNumber: () => (/* binding */ isFiniteNumber)
/* harmony export */ });
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNumber */ "./node_modules/vevet/lib/esm/internal/isNumber.js");

function isFiniteNumber(value) {
    return (0,_isNumber__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && !Number.isNaN(value) && Number.isFinite(value);
}
//# sourceMappingURL=isFiniteNumber.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/isNumber.js":
/*!*********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/isNumber.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumber: () => (/* binding */ isNumber)
/* harmony export */ });
function isNumber(value) {
    return typeof value === 'number';
}
//# sourceMappingURL=isNumber.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/isUndefined.js":
/*!************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/isUndefined.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
function isUndefined(value) {
    return typeof value === 'undefined';
}
//# sourceMappingURL=isUndefined.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/mergeWithNoUndefined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/mergeWithNoUndefined.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeWithNoUndefined: () => (/* binding */ mergeWithNoUndefined)
/* harmony export */ });
function mergeWithNoUndefined(source, add) {
    const addKeys = Object.keys(add);
    const addNonUndefinedKeys = addKeys.filter((key) => add[key] !== undefined);
    const newAdd = addNonUndefinedKeys.reduce((acc, key) => {
        acc[key] = add[key];
        return acc;
    }, {});
    return Object.assign(Object.assign({}, source), newAdd);
}
//# sourceMappingURL=mergeWithNoUndefined.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js":
/*!****************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/noopIfDestroyed.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noopIfDestroyed: () => (/* binding */ noopIfDestroyed)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
function noopIfDestroyed(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function check(...args) {
        if (this._isDestroyed) {
            return;
        }
        return originalMethod.apply(this, args);
    };
}
//# sourceMappingURL=noopIfDestroyed.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/onlyFinite.js":
/*!***********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/onlyFinite.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onlyFinite: () => (/* binding */ onlyFinite)
/* harmony export */ });
/* harmony import */ var _isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFiniteNumber */ "./node_modules/vevet/lib/esm/internal/isFiniteNumber.js");

function onlyFinite(value, defaultValue = 0) {
    if ((0,_isFiniteNumber__WEBPACK_IMPORTED_MODULE_0__.isFiniteNumber)(value)) {
        return value;
    }
    return defaultValue;
}
//# sourceMappingURL=onlyFinite.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/prependStyles.js":
/*!**************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/prependStyles.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prependStyles: () => (/* binding */ prependStyles)
/* harmony export */ });
function prependStyles(style) {
    var _a;
    const firstStyles = document.querySelector('link[rel="stylesheet"], style');
    if (firstStyles) {
        (_a = firstStyles.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(style, firstStyles);
    }
    else {
        document.head.appendChild(style);
    }
}
//# sourceMappingURL=prependStyles.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/safeAction.js":
/*!***********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/safeAction.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeAction: () => (/* binding */ safeAction)
/* harmony export */ });
function safeAction(action) {
    try {
        action();
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
    }
}
//# sourceMappingURL=safeAction.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/textDirection.js":
/*!**************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/textDirection.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTextDirection: () => (/* binding */ getTextDirection)
/* harmony export */ });
function getTextDirection(element) {
    return window.getComputedStyle(element).direction;
}
//# sourceMappingURL=textDirection.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/internal/unwrapAngle.js":
/*!************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/internal/unwrapAngle.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unwrapAngleDelta: () => (/* binding */ unwrapAngleDelta)
/* harmony export */ });
function unwrapAngleDelta(raw, prevRaw) {
    const halfTurn = 180;
    let delta = raw - prevRaw;
    if (delta > halfTurn) {
        delta -= halfTurn * 2;
    }
    else if (delta < -halfTurn) {
        delta += halfTurn * 2;
    }
    return delta;
}
//# sourceMappingURL=unwrapAngle.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/manifest.json":
/*!**************************************************!*\
  !*** ./node_modules/vevet/lib/esm/manifest.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = {"version":"5.10.0"};

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/common/closest.js":
/*!************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/common/closest.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closest: () => (/* binding */ closest)
/* harmony export */ });
/**
 * Get closest value in array to target value.
 *
 * @example
 * closest(5, [3, 6, 9, 12, 15]); // => 6
 */
function closest(target, values) {
    if (!Array.isArray(values) || values.length === 0) {
        return target;
    }
    return values.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
}
//# sourceMappingURL=closest.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/common/toPixels.js":
/*!*************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/common/toPixels.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toPixels: () => (/* binding */ toPixels)
/* harmony export */ });
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
/* harmony import */ var _internal_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/env */ "./node_modules/vevet/lib/esm/internal/env.js");
/* harmony import */ var _internal_isNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/isNumber */ "./node_modules/vevet/lib/esm/internal/isNumber.js");
/* harmony import */ var _internal_onlyFinite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/onlyFinite */ "./node_modules/vevet/lib/esm/internal/onlyFinite.js");




/**
 * Transform value to pixels. Supported units: `px` | 'rem' | 'vw' | 'vh' | 'svh'.
 *
 * @group Utils
 *
 * @example
 * toPixels('100px'); // => 100
 * toPixels('1vw'); // => 19.20
 */
function toPixels(value) {
    if (!_internal_env__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {
        return 0;
    }
    const app = (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_0__.initVevet)();
    if (!window.vevet5_toPixelsCache) {
        window.vevet5_toPixelsCache = new Map();
        app.onResize('any', () => {
            window.vevet5_toPixelsCache.clear();
        }, { name: 'toPixels' });
    }
    if (window.vevet5_toPixelsCache.has(value)) {
        return window.vevet5_toPixelsCache.get(value);
    }
    let finalValue = 0;
    const num = parseFloat(`${value}`);
    if ((0,_internal_isNumber__WEBPACK_IMPORTED_MODULE_2__.isNumber)(value)) {
        finalValue = value;
    }
    else if (Number.isNaN(num)) {
        finalValue = 0;
    }
    else if (value.includes('rem')) {
        finalValue = num * app.rem;
    }
    else if (value.includes('vw')) {
        finalValue = num * app.vw;
    }
    else if (value.includes('vh')) {
        finalValue = num * app.vh;
    }
    else if (value.includes('svh')) {
        finalValue = num * app.svh;
    }
    else if (value.includes('px')) {
        finalValue = num;
    }
    finalValue = (0,_internal_onlyFinite__WEBPACK_IMPORTED_MODULE_3__.onlyFinite)(finalValue);
    window.vevet5_toPixelsCache.set(value, finalValue);
    return finalValue;
}
//# sourceMappingURL=toPixels.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/common/uid.js":
/*!********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/common/uid.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uid: () => (/* binding */ uid)
/* harmony export */ });
let index = 0;
/**
 * Generates a unique ID with an optional prefix.
 *
 * This function returns a string that combines a prefix (default is 'id') with a unique incrementing number.
 * It ensures each call will return a unique identifier.
 *
 * @group Utils
 *
 * @example
 * uid(); // => 'id_1'
 * uid('test'); // => 'test_2'
 * uid(0); // => '0_3'
 */
function uid(prefix = 'id') {
    index += 1;
    return `${prefix}_${index}`;
}
//# sourceMappingURL=uid.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js":
/*!************************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/listeners/addEventListener.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener)
/* harmony export */ });
/**
 * A utility function to add an event listener to a specified element.
 *
 * This function adds an event listener for the specified event type and
 * returns a function that can be called to remove the event listener.
 *
 * @param element - The target element to which the event listener will be attached.
 * @param target - The name of the event to listen for (e.g., 'click', 'scroll').
 * @param listener - The callback function to execute when the event occurs.
 * @param options - Optional parameters for the event listener.
 *
 * @group Utils
 *
 * @example
 * const button = document.getElementById('myButton');
 * const removeClickListener = addEventListener(button, 'click', (event) => {
 *   console.log('Button clicked!');
 * });
 *
 * // To remove the event listener later
 * removeClickListener();
 */
function addEventListener(element, target, listener, options) {
    element.addEventListener(target, listener, options);
    const remove = () => {
        element.removeEventListener(target, listener, options);
    };
    return remove;
}
//# sourceMappingURL=addEventListener.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/listeners/onResize.js":
/*!****************************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/listeners/onResize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onResize: () => (/* binding */ onResize)
/* harmony export */ });
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");

/**
 * Adds resize listeners to elements (using `ResizeObserver`) and/or the viewport.
 *
 * @group Utils
 *
 * @example
 * const resizeWithElement = onResize({
 *   callback: () => console.log('Element resized'),
 *   element: document.getElementById('app'),
 * });
 *
 * const resizeWithViewport = onResize({
 *   callback: () => console.log('Viewport resized'),
 *   viewportTarget: 'width',
 * });
 *
 * const resizeWithBoth = onResize({
 *   callback: () => console.log('Both resized'),
 *   element: document.getElementById('app'),
 *   viewportTarget: 'any',
 * });
 */
function onResize({ callback, element, viewportTarget = 'width', resizeDebounce = 0, name, }) {
    const core = (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_0__.initVevet)();
    let timeout;
    let resizeObserver;
    let viewportCallback;
    const debounceResize = (delay) => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        timeout = setTimeout(() => callback(), delay !== null && delay !== void 0 ? delay : resizeDebounce);
    };
    // Initialize ResizeObserver if element is provided
    if (element) {
        resizeObserver = new ResizeObserver(() => {
            debounceResize(core.props.resizeDebounce + resizeDebounce);
        });
        (Array.isArray(element) ? element : [element]).forEach((el) => {
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(el);
        });
    }
    // Attach viewport event listeners if specified
    if (viewportTarget) {
        viewportCallback = core.onResize(viewportTarget, () => debounceResize(), {
            name,
        });
    }
    return {
        remove: () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
            viewportCallback === null || viewportCallback === void 0 ? void 0 : viewportCallback();
        },
        resize: () => callback(),
        debounceResize: () => debounceResize(),
    };
}
//# sourceMappingURL=onResize.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/math/clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/math/clamp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
/**
 * Restricts a value to lie within a specified range.
 *
 * Ensures that `value` is no less than `min` and no greater than `max`.
 *
 * @param {number} value - The input value to be clamped.
 * @param {number} [min=0] - The lower bound of the range (default is 0).
 * @param {number} [max=1] - The upper bound of the range (default is 1).
 * @returns {number} - The clamped value within the range [min, max].
 *
 * @group Utils
 *
 * @example
 * clamp(1.5, 0.1, 0.9); // 0.9
 * clamp(0.001, 0.1, 0.9); // 0.1
 * clamp(0.5, 0, 1); // 0.5
 */
function clamp(value, min = 0, max = 1) {
    const realMin = Math.min(min, max);
    const realMax = Math.max(min, max);
    return Math.max(realMin, Math.min(value, realMax));
}
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/math/easing.js":
/*!*********************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/math/easing.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EaseInBack: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_2__.EaseInBack),
/* harmony export */   EaseInBounce: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_3__.EaseInBounce),
/* harmony export */   EaseInCirc: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_4__.EaseInCirc),
/* harmony export */   EaseInCubic: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_5__.EaseInCubic),
/* harmony export */   EaseInElastic: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_6__.EaseInElastic),
/* harmony export */   EaseInExpo: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_7__.EaseInExpo),
/* harmony export */   EaseInOutBack: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_8__.EaseInOutBack),
/* harmony export */   EaseInOutBounce: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_9__.EaseInOutBounce),
/* harmony export */   EaseInOutCirc: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_10__.EaseInOutCirc),
/* harmony export */   EaseInOutCubic: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_11__.EaseInOutCubic),
/* harmony export */   EaseInOutElastic: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_12__.EaseInOutElastic),
/* harmony export */   EaseInOutExpo: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_13__.EaseInOutExpo),
/* harmony export */   EaseInOutQuad: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_14__.EaseInOutQuad),
/* harmony export */   EaseInOutQuart: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_15__.EaseInOutQuart),
/* harmony export */   EaseInOutQuint: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_16__.EaseInOutQuint),
/* harmony export */   EaseInOutSine: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_17__.EaseInOutSine),
/* harmony export */   EaseInQuad: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_18__.EaseInQuad),
/* harmony export */   EaseInQuart: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_19__.EaseInQuart),
/* harmony export */   EaseInQuint: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_20__.EaseInQuint),
/* harmony export */   EaseInSine: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_21__.EaseInSine),
/* harmony export */   EaseOutBack: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_22__.EaseOutBack),
/* harmony export */   EaseOutBounce: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_23__.EaseOutBounce),
/* harmony export */   EaseOutCirc: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_24__.EaseOutCirc),
/* harmony export */   EaseOutCubic: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_25__.EaseOutCubic),
/* harmony export */   EaseOutElastic: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_26__.EaseOutElastic),
/* harmony export */   EaseOutExpo: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_27__.EaseOutExpo),
/* harmony export */   EaseOutQuad: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_28__.EaseOutQuad),
/* harmony export */   EaseOutQuart: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_29__.EaseOutQuart),
/* harmony export */   EaseOutQuint: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_30__.EaseOutQuint),
/* harmony export */   EaseOutSine: () => (/* reexport safe */ easing_progress__WEBPACK_IMPORTED_MODULE_31__.EaseOutSine),
/* harmony export */   easing: () => (/* binding */ easing)
/* harmony export */ });
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.js");
/* harmony import */ var _global_initVevet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/initVevet */ "./node_modules/vevet/lib/esm/global/initVevet.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInBack.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInBounce.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInCirc.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInCubic.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInElastic.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInExpo.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutBack.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutBounce.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutCirc.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutCubic.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutElastic.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutExpo.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuad.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuart.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutQuint.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInOutSine.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInQuad.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInQuart.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInQuint.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeInSine.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutBack.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutBounce.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutCirc.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutCubic.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutElastic.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutExpo.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutQuad.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutQuart.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutQuint.js");
/* harmony import */ var easing_progress__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! easing-progress */ "./node_modules/easing-progress/lib/esm/easing.net/easeOutSine.js");



/**
 * Applies an easing function to a given progress value.
 *
 * This function calculates eased progress using a specified easing function,
 * bezier curve, or custom easing function.
 *
 * @param {number} progress - The current progress value, typically between 0 and 1.
 * @param {TEasingType} easingType - The easing method to apply. It can be:
 *   - A predefined easing function (e.g., `EaseInBounce`).
 *   - A bezier array (e.g., `[0.25, 0.1, 0.25, 1]`).
 *   - A custom easing function (e.g., `(value) => Math.sin(Math.PI * 0.5 * value)`).
 * @returns {number} - The eased progress value.
 *
 * @group Utils
 *
 * @example
 * easing(0.35, EaseInBounce);
 * // => 0.167 (eased progress using EaseInBounce)
 *
 * easing(0.35, [0.25, 0.1, 0.25, 1]);
 * // => 0.604 (eased progress using a bezier curve)
 *
 * easing(0.35, (value) => Math.sin(Math.PI * 0.5 * value));
 * // => 0.522 (eased progress using a custom easing function)
 */
const easing = (progress, easingType) => { var _a; if (easingType === void 0) { easingType = (_a = (0,_global_initVevet__WEBPACK_IMPORTED_MODULE_1__.initVevet)().props.easing) !== null && _a !== void 0 ? _a : false; } return (0,easing_progress__WEBPACK_IMPORTED_MODULE_0__.easing)(progress, easingType); };
//# sourceMappingURL=easing.js.map

/***/ }),

/***/ "./node_modules/vevet/lib/esm/utils/math/lerp.js":
/*!*******************************************************!*\
  !*** ./node_modules/vevet/lib/esm/utils/math/lerp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lerp: () => (/* binding */ lerp)
/* harmony export */ });
/**
 * Performs linear interpolation (LERP) between a current value and a target value using an easing factor.
 *
 * Linear interpolation calculates an intermediate value between `current` and `target`
 * based on a given `factor`, providing smooth transitions.
 *
 * @param {number} current - The starting value.
 * @param {number} target - The end value.
 * @param {number} factor - The interpolation factor, typically between 0 and 1. A lower value results in slower interpolation, while a higher value makes it faster.
 * @param {number} [approximation=0] - A small threshold to determine when the difference between the interpolated value and the target is negligible. If the difference is within this threshold, the function returns `target` directly.
 * @returns {number} - The interpolated value.
 *
 * @group Utils
 *
 * @example
 * lerp(0, 1, 0.4);
 * // => 0.4 (40% progress from 0 to 1)
 *
 * lerp(0.75, 0.8, 0.98);
 * // => 0.799 (close to the target but not exactly 0.8)
 *
 * lerp(0.75, 0.8, 0.98, 0.01);
 * // => 0.8 (within the approximation threshold)
 */
function lerp(current, target, factor, approximation = 0) {
    const value = current + (target - current) * factor;
    const difference = Math.abs(target - value);
    if (difference <= approximation) {
        return target;
    }
    return value;
}
//# sourceMappingURL=lerp.js.map

/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_accordion.js */ "./src/js/components/_accordion.js");
/* harmony import */ var _components_custom_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_custom-select.js */ "./src/js/components/_custom-select.js");
/* harmony import */ var _components_open_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_open-mobile-menu.js */ "./src/js/components/_open-mobile-menu.js");
/* harmony import */ var _components_move_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_move-header.js */ "./src/js/components/_move-header.js");
/* harmony import */ var _components_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_popup.js */ "./src/js/components/_popup.js");
/* harmony import */ var _components_navigation_swiper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_navigation-swiper.js */ "./src/js/components/_navigation-swiper.js");
/* harmony import */ var _components_cards_swiper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_cards-swiper.js */ "./src/js/components/_cards-swiper.js");
/* harmony import */ var _components_move_hero_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_move-hero.js */ "./src/js/components/_move-hero.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_tabs.js */ "./src/js/components/_tabs.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_modal.js */ "./src/js/components/_modal.js");
/* harmony import */ var _components_rating_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/_rating.js */ "./src/js/components/_rating.js");
/* harmony import */ var _components_button_scroll_top_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_button-scroll-top.js */ "./src/js/components/_button-scroll-top.js");
/* harmony import */ var _components_advanced_search_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/_advanced-search.js */ "./src/js/components/_advanced-search.js");
/* harmony import */ var _components_custom_scrollbar_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/_custom-scrollbar.js */ "./src/js/components/_custom-scrollbar.js");
/* harmony import */ var _components_checkbox_select_all_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/_checkbox-select-all.js */ "./src/js/components/_checkbox-select-all.js");
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/_dropdown.js */ "./src/js/components/_dropdown.js");
/* harmony import */ var _components_filter_view_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/_filter-view.js */ "./src/js/components/_filter-view.js");
/* harmony import */ var _components_thumb_swiper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/_thumb-swiper.js */ "./src/js/components/_thumb-swiper.js");
/* harmony import */ var _components_grid_align_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/_grid-align.js */ "./src/js/components/_grid-align.js");



















document.addEventListener('DOMContentLoaded', () => {
  (0,_components_custom_select_js__WEBPACK_IMPORTED_MODULE_1__.renderCustomSelect)();
  (0,_components_open_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__.setMobileMenu)();
  (0,_components_move_header_js__WEBPACK_IMPORTED_MODULE_3__.moveHeader)();
  (0,_components_popup_js__WEBPACK_IMPORTED_MODULE_4__.setPopup)();
  (0,_components_navigation_swiper_js__WEBPACK_IMPORTED_MODULE_5__.setNavigationSwiper)();
  (0,_components_cards_swiper_js__WEBPACK_IMPORTED_MODULE_6__.initCardsSwiper)();
  (0,_components_move_hero_js__WEBPACK_IMPORTED_MODULE_7__.moveHero)();
  (0,_components_tabs_js__WEBPACK_IMPORTED_MODULE_8__.setTabs)();
  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_9__.setModals)();
  (0,_components_rating_js__WEBPACK_IMPORTED_MODULE_10__.setRating)();
  (0,_components_button_scroll_top_js__WEBPACK_IMPORTED_MODULE_11__.addScrollButton)();
  (0,_components_accordion_js__WEBPACK_IMPORTED_MODULE_0__.openVisibleContent)();
  (0,_components_accordion_js__WEBPACK_IMPORTED_MODULE_0__.setAccordeonToggles)();
  (0,_components_advanced_search_js__WEBPACK_IMPORTED_MODULE_12__.setAdvancedSearch)();
  (0,_components_custom_scrollbar_js__WEBPACK_IMPORTED_MODULE_13__.initCustomScrollbar)();
  (0,_components_checkbox_select_all_js__WEBPACK_IMPORTED_MODULE_14__.initSelectAllCheckbox)();
  (0,_components_dropdown_js__WEBPACK_IMPORTED_MODULE_15__.setDropdown)();
  (0,_components_filter_view_js__WEBPACK_IMPORTED_MODULE_16__.setFilterToggles)();
  (0,_components_thumb_swiper_js__WEBPACK_IMPORTED_MODULE_17__.setThumbSwiper)();
  (0,_components_grid_align_js__WEBPACK_IMPORTED_MODULE_18__.alignGridComponents)();
});

/***/ }),

/***/ "./src/js/_utils.js":
/*!**************************!*\
  !*** ./src/js/_utils.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSwiperClass: () => (/* binding */ addSwiperClass),
/* harmony export */   checkVisibleSlides: () => (/* binding */ checkVisibleSlides),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   getAutoSlidesCount: () => (/* binding */ getAutoSlidesCount),
/* harmony export */   getBlockClass: () => (/* binding */ getBlockClass),
/* harmony export */   getScrollWidth: () => (/* binding */ getScrollWidth),
/* harmony export */   getSlidesCount: () => (/* binding */ getSlidesCount),
/* harmony export */   getSwiperClass: () => (/* binding */ getSwiperClass),
/* harmony export */   isArrowDownKey: () => (/* binding */ isArrowDownKey),
/* harmony export */   isArrowUpKey: () => (/* binding */ isArrowUpKey),
/* harmony export */   isEnterKey: () => (/* binding */ isEnterKey),
/* harmony export */   isEscapeKey: () => (/* binding */ isEscapeKey),
/* harmony export */   isTabKey: () => (/* binding */ isTabKey),
/* harmony export */   removeSwiperClass: () => (/* binding */ removeSwiperClass),
/* harmony export */   removeTabIndex: () => (/* binding */ removeTabIndex),
/* harmony export */   setSlidesTabIndex: () => (/* binding */ setSlidesTabIndex),
/* harmony export */   setSwiperProgress: () => (/* binding */ setSwiperProgress),
/* harmony export */   setTabIndex: () => (/* binding */ setTabIndex)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars.js */ "./src/js/_vars.js");

const isEscapeKey = evt => evt.key === 'Escape';
const isArrowDownKey = evt => evt.key === 'ArrowDown';
const isArrowUpKey = evt => evt.key === 'ArrowUp';
const isEnterKey = evt => evt.key === 'Enter';
const isTabKey = evt => evt.key === 'Tab';
const getScrollWidth = () => {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};
const setTabIndex = array => {
  array.forEach(link => {
    link.setAttribute('tabindex', '0');
  });
};
const removeTabIndex = array => {
  array.forEach(link => {
    link.setAttribute('tabindex', '-1');
  });
};
const getSlidesCount = swiper => {
  const swiperList = swiper.querySelector('[class*="swiper-wrapper"]');
  return swiperList.children.length;
};
const getAutoSlidesCount = swiper => {
  const swiperSlide = swiper.querySelector('[class*="swiper-wrapper"] li');
  const slideWidth = swiperSlide.offsetWidth;
  return Math.floor(window.innerWidth / slideWidth);
};
const addSwiperClass = (swiper, el) => {
  const swiperWrapper = swiper.querySelector(`.${el}swiper-wrapper`);
  const swiperSlides = swiper.querySelectorAll(`.${el}slide`);
  swiper.classList.add('swiper');
  swiperWrapper.classList.add('swiper-wrapper');
  swiperWrapper.classList.remove('no-swiper');
  swiperSlides.forEach(slide => {
    slide.classList.add('swiper-slide');
  });
};
const removeSwiperClass = (swiper, el) => {
  const swiperWrapper = swiper.querySelector(`.${el}swiper-wrapper`);
  const swiperSlides = swiper.querySelectorAll(`.${el}slide`);
  swiper.classList.remove('swiper');
  swiperWrapper.classList.remove('swiper-wrapper');
  swiperWrapper.classList.add('no-swiper');
  swiperSlides.forEach(slide => {
    slide.classList.remove('swiper-slide');
  });
};
const getSwiperClass = swiper => {
  const className = swiper.className.split(' ').find(cls => cls.includes('swiper') && cls !== 'swiper');
  return className ? className.replace('swiper', '') : null;
};
const getBlockClass = element => {
  const className = element.className.split(' ').find(cls => cls.includes('__') && !cls.endsWith('__'));
  if (className) {
    const prefix = className.split('__')[0];
    return prefix;
  }
  return null;
};
const findActiveSlides = (index, activeIndex, numberOfActiveSlides) => {
  for (let i = 0; i < numberOfActiveSlides; i++) {
    if (index === activeIndex + i) {
      return true;
    }
  }
  return false;
};
const setSlidesTabIndex = (swiper, countVisibleSlides) => {
  swiper.slides.forEach((slide, index) => {
    const isActive = findActiveSlides(index, swiper.activeIndex, countVisibleSlides);
    slide.querySelectorAll('a, button, input, textarea, select, [tabindex]').forEach(el => {
      el.tabIndex = isActive ? 0 : -1;
    });
  });
};
const checkVisibleSlides = block => {
  if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDER_CONFIG[block]) {
    if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.DESKTOP_WIDTH.matches) {
      return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDER_CONFIG[block].desktop_count;
    } else if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches) {
      return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDER_CONFIG[block].tablet_count;
    }
    return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDER_CONFIG[block].mobile_count;
  } else {
    return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDER_CONFIG.default;
  }
};
const formatNumber = num => {
  return num < 10 ? `0${num}` : `${num}`;
};
const setSwiperProgress = swiper => {
  const progressElement = swiper.el.querySelector('.swiper-progress');
  if (!progressElement) return;
  const activeIndex = swiper.realIndex;
  const totalSlides = swiper.slides.length;
  progressElement.textContent = `${formatNumber(activeIndex + 1)}/${formatNumber(totalSlides)}`;
};
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(undefined, rest), timeoutDelay);
  };
};


/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COUNT_GRID_COLUMNS: () => (/* binding */ COUNT_GRID_COLUMNS),
/* harmony export */   COUNT_VISIBLE_FIELDS: () => (/* binding */ COUNT_VISIBLE_FIELDS),
/* harmony export */   COUNT_VISIBLE_TAGS: () => (/* binding */ COUNT_VISIBLE_TAGS),
/* harmony export */   DESKTOP_WIDTH: () => (/* binding */ DESKTOP_WIDTH),
/* harmony export */   HEADER_FIXED_OFFSET: () => (/* binding */ HEADER_FIXED_OFFSET),
/* harmony export */   MODAL_CONTENT: () => (/* binding */ MODAL_CONTENT),
/* harmony export */   MODAL_TIMER: () => (/* binding */ MODAL_TIMER),
/* harmony export */   RANGE_VALUES: () => (/* binding */ RANGE_VALUES),
/* harmony export */   SLIDER_CONFIG: () => (/* binding */ SLIDER_CONFIG),
/* harmony export */   SMALL_DESKTOP_WIDTH: () => (/* binding */ SMALL_DESKTOP_WIDTH),
/* harmony export */   TABLET_WIDTH: () => (/* binding */ TABLET_WIDTH),
/* harmony export */   TABS_DELAY: () => (/* binding */ TABS_DELAY),
/* harmony export */   TEXTAREA_LINEHEIGHT: () => (/* binding */ TEXTAREA_LINEHEIGHT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});
const TABLET_WIDTH = window.matchMedia('(min-width: 768px)');
const SMALL_DESKTOP_WIDTH = window.matchMedia('(min-width: 1024px)');
const DESKTOP_WIDTH = window.matchMedia('(min-width: 1366px)');
const HEADER_FIXED_OFFSET = 500;
const COUNT_VISIBLE_TAGS = 12;
const COUNT_VISIBLE_FIELDS = 9;
const MODAL_TIMER = 3000000;
const TABS_DELAY = 5000;
const TEXTAREA_LINEHEIGHT = 22;
const MODAL_CONTENT = {
  'title': {
    'individual-calc': 'Получите индивидуальный расчёт под ваш проект',
    'request': 'Оставьте заявку — мы подберём оптимальное решение для вашей перголы',
    'order': 'Закажите перголу с гарантией результата',
    'cost': 'Точная стоимость — для вашего проекта под ключ',
    'question': 'Не нашли нужной информации? Спросите нас напрямую',
    'design': 'Закажите перголу с индивидуальным дизайном'
  },
  'desc': {
    'question': 'Мы на связи и готовы помочь с выбором, расчётом или техническими нюансами.'
  },
  'pattern': {
    'individual-design': 'Заказать перголу {title} по индивидуальному дизайну'
  }
};
const SLIDER_CONFIG = {
  'default': {
    'mobile_count': 1,
    'tablet_count': 2,
    'desktop_count': 3
  },
  'hero': {
    'mobile_count': 1,
    'tablet_count': 1,
    'desktop_count': 1,
    'loop': true,
    'auto_height': false
  },
  'products-list': {
    'mobile_count': 2,
    'tablet_count': 3,
    'desktop_count': 10000,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true
  },
  'products-list-short': {
    'mobile_count': 2,
    'tablet_count': 3,
    'desktop_count': 4,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true
  },
  'clients': {
    'mobile_count': 'auto',
    'tablet_count': 'auto',
    'desktop_count': 10000,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
    'mobile_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH
  },
  'reviews': {
    'mobile_count': 'auto',
    'tablet_count': 'auto',
    'desktop_count': 10000,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
    'mobile_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH
  },
  'product-tab': {
    'mobile_count': 'auto',
    'tablet_count': 2,
    'desktop_count': 4,
    'loop': false,
    'has_navigation': false,
    'has_scrollbar': true,
    'mobile_margin': 20,
    'desktop_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH
  },
  'steps': {
    'mobile_count': 1,
    'tablet_count': 2,
    'desktop_count': 4,
    'loop': false,
    'desktop_width': SMALL_DESKTOP_WIDTH
  },
  'thanks': {
    'mobile_count': 'auto',
    'tablet_count': 2,
    'desktop_count': 4,
    'loop': false,
    'mobile_margin': 20,
    'desktop_margin': 20,
    'desktop_width': SMALL_DESKTOP_WIDTH
  }
};
const RANGE_VALUES = {
  'default': {
    'min': 0,
    'max': 100,
    'step': 1,
    'start': 0,
    'end': 100
  },
  'min-price': {
    'min': 350000,
    'max': 500000,
    'step': 10000,
    'start': 300000
  },
  'max-price': {
    'min': 500000,
    'max': 700000,
    'step': 10000,
    'start': 450000
  },
  'price': {
    'min': 350000,
    'max': 700000,
    'step': 10000,
    'start': 300000,
    'end': 700000
  },
  'years': {
    'min': 1,
    'max': 24,
    'step': 1,
    'start': 1,
    'end': 24
  },
  'people': {
    'min': 1,
    'max': 24,
    'step': 1,
    'start': 1,
    'end': 24
  }
};
const COUNT_GRID_COLUMNS = {
  default: 2,
  multiform: {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
};

/***/ }),

/***/ "./src/js/components/_accordion.js":
/*!*****************************************!*\
  !*** ./src/js/components/_accordion.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openDetails: () => (/* binding */ openDetails),
/* harmony export */   openVisibleContent: () => (/* binding */ openVisibleContent),
/* harmony export */   setAccordeonToggles: () => (/* binding */ setAccordeonToggles)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");

const accordionButtons = document.querySelectorAll('.accordion-button');
const openVisibleContent = () => {
  const visibleContent = document.querySelectorAll('.accordion-content--opened');
  if (!accordionButtons.length || !visibleContent.length) return;
  visibleContent.forEach(element => {
    element.style.maxHeight = `${element.scrollHeight}px`;
  });
};
const openDetails = evt => {
  const currentButton = evt.target.closest('button');
  let currentContent = currentButton.parentElement.querySelector('.accordion-content');
  if (!currentContent) {
    const accordion = currentButton.closest('.accordion');
    if (accordion) {
      currentContent = accordion.querySelector('.accordion-content');
    }
  }
  if (!currentContent) return;
  const accordionContainer = currentButton.closest('.accordion');
  const isSingleMode = accordionContainer && accordionContainer.dataset.accordion === 'single';
  if (isSingleMode) {
    const allButtons = accordionContainer.querySelectorAll('.accordion-button');
    const allContents = accordionContainer.querySelectorAll('.accordion-content');
    allButtons.forEach(button => {
      if (button !== currentButton) {
        button.classList.remove('accordion-button--active');
      }
    });
    allContents.forEach(content => {
      if (content !== currentContent) {
        content.classList.remove('accordion-content--opened');
        content.style.maxHeight = null;
      }
    });
  }
  currentContent.classList.toggle('accordion-content--opened');
  currentButton.classList.toggle('accordion-button--active');
  if (currentContent.classList.contains('accordion-content--opened')) {
    currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
  } else {
    currentContent.style.maxHeight = null;
  }
};
const setAccordeonToggles = () => {
  if (!accordionButtons.length) return;
  accordionButtons.forEach(button => {
    button.addEventListener('click', openDetails);
  });
};

// пересчет высоты при ресайзе
const recalcOpenedAccordionHeight = () => {
  const openedContents = document.querySelectorAll('.accordion-content--opened');
  if (!openedContents.length) return;
  openedContents.forEach(content => {
    content.style.maxHeight = null;
    setTimeout(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }, 0);
  });
};
const debounsedRecalc = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(recalcOpenedAccordionHeight, 50);
window.addEventListener('resize', debounsedRecalc);


/***/ }),

/***/ "./src/js/components/_advanced-search.js":
/*!***********************************************!*\
  !*** ./src/js/components/_advanced-search.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAdvancedSearch: () => (/* binding */ setAdvancedSearch)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const filter = document.querySelector('.filters');
const form = filter ? filter.querySelector('.filters__form') : null;
const buttonOpen = filter ? filter.querySelector('.filters__button-open') : null;
const filterContainer = form ? form.querySelector('.filters__fields-list') : null;
const fieldsList = filterContainer ? filterContainer.querySelectorAll('.filters__group') : null;
const advansedButton = form ? form.querySelector('.filters__advanced-search') : null;
const controls = filter ? filter.querySelector('.filters__controls') : null;
let initialHeightForm = 0;
let initialHeightList = 0;
let isClasses = true;
let isControlsMoved = false;

// функция расчета высоты формы
const heightCalculate = () => {
  if (!fieldsList || !fieldsList.length) return;

  // сброс рассчитаной высоты

  filterContainer.style.removeProperty('max-height');
  form.style.removeProperty('max-height');

  // расчет высоты формы в открытом виде
  initialHeightForm = form.scrollHeight;

  // расчет высоты списка со скрытыми элементами
  fieldsList.forEach((field, index) => {
    if (index >= _vars_js__WEBPACK_IMPORTED_MODULE_0__.COUNT_VISIBLE_FIELDS) {
      field.classList.add('hidden');
    }
  });
  initialHeightList = filterContainer.scrollHeight;
  filterContainer.style.maxHeight = `${initialHeightList}px`;
  fieldsList.forEach((field, index) => {
    if (index >= _vars_js__WEBPACK_IMPORTED_MODULE_0__.COUNT_VISIBLE_FIELDS) {
      field.classList.remove('hidden');
      field.classList.add('field-hidden');
    }
  });
};

// функция открытия дополнительных полей
const showTags = () => {
  fieldsList.forEach((field, index) => {
    if (index >= _vars_js__WEBPACK_IMPORTED_MODULE_0__.COUNT_VISIBLE_FIELDS) {
      field.classList.remove('field-hidden');
    }
  });
  filterContainer.style.maxHeight = `${filterContainer.scrollHeight + 15}px`;
  form.style.maxHeight = `${initialHeightForm}px`;
  advansedButton.classList.add('js-hide-all');
  advansedButton.textContent = 'Простой поиск';
};

// функция закрытия дополнительных полей
const hideTags = () => {
  form.style.maxHeight = `${initialHeightForm}px`;
  filterContainer.style.maxHeight = `${initialHeightList}px`;
  fieldsList.forEach((field, index) => {
    if (index >= _vars_js__WEBPACK_IMPORTED_MODULE_0__.COUNT_VISIBLE_FIELDS) {
      field.classList.add('field-hidden');
    }
  });
  advansedButton.classList.remove('js-hide-all');
  advansedButton.textContent = 'Расширенный поиск';
};

// проверка необходимости аккордеона
const checkAccordion = () => {
  // снимает классы аккордеона на десктопе
  if (buttonOpen && form && _vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && isClasses) {
    buttonOpen.classList.remove('accordion-button', 'accordion-button--active');
    form.classList.remove('accordion-content', 'accordion-content--opened');
    isClasses = false;
  }

  // вешает классы аккордеона на десктопе
  if (buttonOpen && form && !_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && !isClasses) {
    buttonOpen.classList.add('accordion-button', 'accordion-button--active');
    form.classList.add('accordion-content', 'accordion-content--opened');
    isClasses = true;
  }
};

// двигает блок контролов
const moveControls = () => {
  // ставит контролы после фильтров
  if (form && controls && _vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && !isControlsMoved) {
    form.insertAdjacentElement('afterend', controls);
    isControlsMoved = true;
  }

  // ставит контролы перед фильтрами
  if (form && controls && !_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && isControlsMoved) {
    form.insertAdjacentElement('beforebegin', controls);
    isControlsMoved = false;
  }
};
const setAdvancedSearch = () => {
  if (!advansedButton || !fieldsList || !fieldsList.length) return;

  // если фильтров мало, прячет кнопку расширенного поиска
  if (fieldsList.length <= _vars_js__WEBPACK_IMPORTED_MODULE_0__.COUNT_VISIBLE_FIELDS) {
    advansedButton.classList.add('hidden');
    return;
  }
  heightCalculate();
  checkAccordion();
  moveControls();
  advansedButton.addEventListener('click', () => {
    if (!advansedButton.classList.contains('js-hide-all')) {
      showTags();
    } else {
      hideTags();
    }
  });
};

// обработчики на ресайзы
let moveTimeoutDecktop = null;
let moveTimeoutTablet = null;
_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.addEventListener('change', () => {
  clearTimeout(moveTimeoutDecktop);
  moveTimeoutDecktop = setTimeout(() => {
    if (advansedButton && advansedButton.classList.contains('js-hide-all')) {
      hideTags();
    }
    heightCalculate();
    checkAccordion();
    moveControls();
  }, 10);
});
_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.addEventListener('change', () => {
  clearTimeout(moveTimeoutTablet);
  moveTimeoutTablet = setTimeout(() => {
    if (advansedButton && advansedButton.classList.contains('js-hide-all')) {
      hideTags();
    }
    heightCalculate();
  }, 10);
});


/***/ }),

/***/ "./src/js/components/_button-scroll-top.js":
/*!*************************************************!*\
  !*** ./src/js/components/_button-scroll-top.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScrollButton: () => (/* binding */ addScrollButton)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");

const scrollButton = document.querySelector('.button-scroll-top');
const onWindowScroll = () => {
  if (window.pageYOffset > 350) {
    scrollButton.classList.add('button-scroll-top--visible');
  } else {
    scrollButton.classList.remove('button-scroll-top--visible');
  }
};
const debouncedOnScrollWindow = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(onWindowScroll, 30);
const onScrollButtonClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const addScrollButton = () => {
  if (!scrollButton) return;
  window.addEventListener('scroll', debouncedOnScrollWindow);
  scrollButton.addEventListener('click', onScrollButtonClick);
};


/***/ }),

/***/ "./src/js/components/_cards-swiper.js":
/*!********************************************!*\
  !*** ./src/js/components/_cards-swiper.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCardsSwiper: () => (/* binding */ initCardsSwiper)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");



const sections = document.querySelectorAll('[data-swiper="cards"]');
const initCardsSwiper = () => {
  if (!sections.length) return;
  sections.forEach(section => {
    const initImgSwiper = () => {
      const imgSwipers = section.querySelectorAll(`.product-card__swiper`);
      if (imgSwipers.length) {
        imgSwipers.forEach(imgSwiper => {
          new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](imgSwiper, {
            modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],
            direction: 'horizontal',
            speed: 500,
            allowTouchMove: true,
            slidesPerView: 1,
            spaceBetween: 5,
            scrollbar: {
              el: `.product-card__swiper-scrollbar`,
              draggable: true,
              hide: false
            }
          });
        });
      }
    };
    initImgSwiper();
  });
};


/***/ }),

/***/ "./src/js/components/_checkbox-select-all.js":
/*!***************************************************!*\
  !*** ./src/js/components/_checkbox-select-all.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSelectAllCheckbox: () => (/* binding */ initSelectAllCheckbox)
/* harmony export */ });
const selectAllContainers = document.querySelectorAll('.select-all');
const initSelectAllCheckbox = () => {
  if (!selectAllContainers || !selectAllContainers.length) return;
  selectAllContainers.forEach(container => {
    container.addEventListener('change', evt => {
      const target = evt.target;
      if (!target.matches('input[type="checkbox"]')) return;
      const selectAll = container.querySelector('.select-all-checkbox');
      const otherCheckboxes = container.querySelectorAll('input[type="checkbox"]:not(.select-all-checkbox)');

      // Клик на "Выбрать все"
      if (target === selectAll) {
        otherCheckboxes.forEach(checkbox => checkbox.checked = target.checked);
      }
      // Клик на обычный чекбокс
      else if (selectAll) {
        selectAll.checked = Array.from(otherCheckboxes).every(checkbox => checkbox.checked);
      }
    });
  });
};


/***/ }),

/***/ "./src/js/components/_custom-scrollbar.js":
/*!************************************************!*\
  !*** ./src/js/components/_custom-scrollbar.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCustomScrollbar: () => (/* binding */ initCustomScrollbar)
/* harmony export */ });
/* harmony import */ var vevet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vevet */ "./node_modules/vevet/lib/esm/components/Scrollbar/index.js");

const scrollbarWrappers = document.querySelectorAll('.custom-scrollbar-wrapper');
const initCustomScrollbar = () => {
  if (!scrollbarWrappers || !scrollbarWrappers.length) return;
  scrollbarWrappers.forEach(wrapper => {
    const customScrollbar = wrapper.querySelector('.custom-scrollbar');
    const scrollbar = new vevet__WEBPACK_IMPORTED_MODULE_0__.Scrollbar({
      container: customScrollbar,
      parent: wrapper,
      autoHide: false
    });
  });
};


/***/ }),

/***/ "./src/js/components/_custom-select.js":
/*!*********************************************!*\
  !*** ./src/js/components/_custom-select.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCustomSelect: () => (/* binding */ renderCustomSelect)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils.js */ "./src/js/_utils.js");

const selects = document.querySelectorAll('.select');
const renderCustomSelect = () => {
  if (!selects.length) return;
  selects.forEach(select => {
    const selectButton = select.querySelector('.select__button');
    const originalSelect = select.querySelector('.select__original');
    const customSelect = document.createElement('div');
    const createCustomSelect = () => {
      customSelect.classList.add('select__list');
      const currentValue = originalSelect.value;
      Array.from(originalSelect.options).forEach(option => {
        const optionItem = document.createElement('button');
        optionItem.classList.add('select__item');
        optionItem.type = 'button';
        optionItem.setAttribute('tabindex', '-1');
        optionItem.textContent = option.textContent;
        optionItem.dataset.value = option.value;

        // если значение уже пришло из URL → подсветка и текст кнопки
        if (option.value === currentValue) {
          optionItem.classList.add('select__item--active');
          selectButton.textContent = option.textContent;
        }
        customSelect.appendChild(optionItem);
      });

      // если value пустой — берём selected option
      if (!currentValue) {
        const selectedOption = originalSelect.options[originalSelect.selectedIndex];
        if (selectedOption) {
          selectButton.textContent = selectedOption.textContent;
        }
      }
      select.appendChild(customSelect);
      originalSelect.classList.add('visually-hidden');
      originalSelect.setAttribute('tabindex', '-1');
      customSelect.setAttribute('tabindex', '-1');
    };
    const checkTabIndex = () => {
      const options = customSelect.querySelectorAll('.select__item');
      if (select.classList.contains('select--open')) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTabIndex)(options);
        customSelect.addEventListener('focusout', onSelectFocusOut);
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(options);
        customSelect.removeEventListener('focusout', onSelectFocusOut);
      }
    };
    const openSelect = () => {
      select.classList.add('select--open');
      checkTabIndex();
      customSelect.addEventListener('click', onSelectOptionClick);
      document.addEventListener('keydown', onSelectKeydown);
      document.addEventListener('click', onDocumentClick);
    };
    const closeSelect = () => {
      select.classList.remove('select--open');
      checkTabIndex();
      selectButton.focus();
      customSelect.removeEventListener('click', onSelectOptionClick);
      document.removeEventListener('keydown', onSelectKeydown);
      document.removeEventListener('click', onDocumentClick);
    };
    const chooseOption = option => {
      const selectedValue = option.dataset.value;
      const selectedText = option.textContent;

      // кнопка
      selectButton.textContent = selectedText;

      // оригинальный select
      originalSelect.value = selectedValue;

      // active state
      customSelect.querySelectorAll('.select__item').forEach(item => item.classList.remove('select__item--active'));
      option.classList.add('select__item--active');

      // msFilter2
      if (window.jQuery) {
        window.jQuery(originalSelect).trigger('change');
      } else {
        originalSelect.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
      closeSelect();
    };
    const toggleSelect = () => {
      selectButton.addEventListener('click', () => {
        select.classList.contains('select--open') ? closeSelect() : openSelect();
      });
    };
    function onSelectKeydown(evt) {
      const open = select.classList.contains('select--open');
      const options = Array.from(customSelect.querySelectorAll('.select__item'));
      const currentIndex = options.indexOf(document.activeElement);
      if (!open) return;
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArrowDownKey)(evt)) {
        evt.preventDefault();
        options[(currentIndex + 1) % options.length].focus();
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArrowUpKey)(evt)) {
        evt.preventDefault();
        options[(currentIndex - 1 + options.length) % options.length].focus();
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEnterKey)(evt)) {
        evt.preventDefault();
        if (currentIndex >= 0) {
          chooseOption(options[currentIndex]);
        }
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEscapeKey)(evt)) {
        closeSelect();
      }
    }
    function onSelectOptionClick(evt) {
      if (evt.target.classList.contains('select__item')) {
        chooseOption(evt.target);
      }
    }
    function onDocumentClick(evt) {
      if (!select.contains(evt.target)) {
        closeSelect();
      }
    }
    function onSelectFocusOut(evt) {
      if (!evt.relatedTarget || !select.contains(evt.relatedTarget)) {
        closeSelect();
      }
    }
    createCustomSelect();
    toggleSelect();
  });
};


/***/ }),

/***/ "./src/js/components/_dropdown.js":
/*!****************************************!*\
  !*** ./src/js/components/_dropdown.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDropdown: () => (/* binding */ setDropdown)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils.js */ "./src/js/_utils.js");

const dropdowns = document.querySelectorAll('.dropdown');
const setDropdown = () => {
  if (!dropdowns) return;
  dropdowns.forEach(dropdown => {
    const dropdownButton = dropdown.querySelector('.dropdown__button');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    if (!dropdownList) return;
    const checkTabIndex = () => {
      const options = dropdownList.querySelectorAll('.dropdown__item-link');
      if (dropdown.classList.contains('dropdown--open')) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTabIndex)(options);
        dropdownList.addEventListener('focusout', onSelectFocusOut);
      } else {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(options);
        dropdownList.removeEventListener('focusout', onSelectFocusOut);
      }
    };
    const openSelect = () => {
      dropdown.classList.add('dropdown--open');
      checkTabIndex();
      dropdownList.addEventListener('click', onSelectOptionClick);
      document.addEventListener('keydown', onSelectKeydown);
      document.addEventListener('click', onDocumentClick);
    };
    const closeSelect = () => {
      dropdown.classList.remove('dropdown--open');
      checkTabIndex();
      dropdownButton.focus();
      dropdownList.removeEventListener('click', onSelectOptionClick);
      document.removeEventListener('keydown', onSelectKeydown);
      document.removeEventListener('click', onDocumentClick);
    };
    const toggleSelect = () => {
      dropdownButton.addEventListener('click', () => {
        if (dropdown.classList.contains('dropdown--open')) {
          closeSelect();
        } else {
          openSelect();
        }
      });
    };
    function onSelectKeydown(evt) {
      const open = dropdown.classList.contains('dropdown--open');
      const options = Array.from(dropdownList.querySelectorAll('a'));
      const currentIndex = options.indexOf(document.activeElement);
      if (!open) {
        return;
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArrowDownKey)(evt)) {
        evt.preventDefault();
        if (currentIndex < options.length - 1) {
          options[currentIndex + 1].focus();
        } else {
          options[0].focus();
        }
        return;
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isArrowUpKey)(evt)) {
        evt.preventDefault();
        if (currentIndex > 0) {
          options[currentIndex - 1].focus();
        } else {
          options[options.length - 1].focus();
        }
        return;
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEnterKey)(evt)) {
        evt.preventDefault();
        if (currentIndex > 0) {
          closeSelect();
        }
        return;
      }
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEscapeKey)(evt)) {
        closeSelect();
      }
    }
    function onSelectOptionClick(evt) {
      if (evt.target.tagName === 'A') {
        closeSelect();
      }
    }
    function onDocumentClick(evt) {
      if (!dropdown.contains(evt.target)) {
        closeSelect();
      }
    }
    function onSelectFocusOut(evt) {
      if (evt.relatedTarget === null || !dropdown.contains(evt.relatedTarget)) {
        closeSelect();
      }
    }
    toggleSelect();
  });
};


/***/ }),

/***/ "./src/js/components/_filter-view.js":
/*!*******************************************!*\
  !*** ./src/js/components/_filter-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFilterToggles: () => (/* binding */ setFilterToggles)
/* harmony export */ });
const filters = document.querySelector('.filters');
const filterView = filters ? filters.querySelector('.filters__view') : null;
const filterList = filters ? filters.querySelector('.filters__products') : null;
const setFilterToggles = () => {
  if (!filterView || !filterList) return;
  filterView.addEventListener('click', evt => {
    const button = evt.target.closest('button');
    filterView.querySelector('.filters__view-toggle--active').classList.remove('filters__view-toggle--active');
    button.classList.add('filters__view-toggle--active');
    filterList.classList.remove('filters__products--animated');
    filterList.classList.add('filters__products--hidden');
    setTimeout(() => {
      if (button.classList.contains('filters__view-toggle--list')) {
        filterList.classList.add('filters__products--list', 'products-view-list');
      } else {
        filterList.classList.remove('filters__products--list', 'products-view-list');
      }
      filterList.classList.add('filters__products--animated');
      filterList.classList.remove('filters__products--hidden');
    }, 50);
  });
};


/***/ }),

/***/ "./src/js/components/_grid-align.js":
/*!******************************************!*\
  !*** ./src/js/components/_grid-align.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignGridComponents: () => (/* binding */ alignGridComponents)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");


const grid = document.querySelectorAll('[data-align="grid"]');
const alignGridComponents = () => {
  if (!grid || !grid.length || !_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches) return;
  grid.forEach(item => {
    const gridTitles = item.querySelectorAll('[data-align="title"]');
    const gridText = item.querySelectorAll('[data-align="text"]');
    let minTitleHeight = 0;
    let minTextHeight = 0;
    if (gridTitles && gridTitles.length) {
      gridTitles.forEach(title => {
        title.style.minHeight = 'unset';
        minTitleHeight = Math.max(minTitleHeight, title.offsetHeight);
      });
      gridTitles.forEach(title => {
        title.style.minHeight = `${minTitleHeight}px`;
      });
    }
    if (gridText && gridText.length) {
      gridText.forEach(text => {
        text.style.minHeight = 'unset';
        minTextHeight = Math.max(minTextHeight, text.offsetHeight);
      });
      gridText.forEach(text => {
        text.style.minHeight = `${minTextHeight}px`;
      });
    }
  });
};
const debouncedAlign = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.debounce)(alignGridComponents, 100);
window.addEventListener('resize', debouncedAlign);


/***/ }),

/***/ "./src/js/components/_modal-render.js":
/*!********************************************!*\
  !*** ./src/js/components/_modal-render.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderModalContent: () => (/* binding */ renderModalContent),
/* harmony export */   renderPhotoToModal: () => (/* binding */ renderPhotoToModal)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_vars.js */ "./src/js/_vars.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_video.js */ "./src/js/components/_video.js");


const renderPhotoToModal = (modal, button) => {
  console.log(1);
  const modalImgContainer = modal.querySelector('.modal-photo__img');
  const fullImgContainer = button.parentElement.querySelector('[data-full-photo]');
  if (!modalImgContainer || !fullImgContainer) return;
  const copyFullImg = fullImgContainer.cloneNode(true);
  modalImgContainer.innerHTML = '';
  modalImgContainer.appendChild(copyFullImg);
  (0,_video_js__WEBPACK_IMPORTED_MODULE_1__.initVideo)(copyFullImg);
};
const renderModalContent = (modal, button) => {
  // Отрисовка заголовка для модального окна
  if (button.hasAttribute('data-modal-title')) {
    const titleKey = button.getAttribute('data-modal-title');
    const modalTitle = modal.querySelector('[data-modal-title]');
    if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.title && _vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.title[titleKey] && modalTitle) {
      modalTitle.textContent = _vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.title[titleKey];
    }
    ;
  }

  // Отрисовка описания для модального окна
  if (button.hasAttribute('data-modal-desc')) {
    const descKey = button.getAttribute('data-modal-desc');
    const modalDesc = modal.querySelector('[data-modal-desc]');
    if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.title && _vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.desc[descKey] && modalDesc) {
      modalDesc.textContent = _vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.desc[descKey];
    }
    ;
  }

  // Отрисовка динамического заголовка
  if (button.hasAttribute('data-modal-dynamic')) {
    let sourceTitle = button.closest('[data-modal-title]');
    const modalTitle = modal.querySelector('[data-modal-title]');
    if (!sourceTitle) sourceTitle = button.parentElement.querySelector('[data-modal-title]');
    if (sourceTitle && modalTitle) {
      modalTitle.textContent = sourceTitle.textContent;
    }
    ;
  }

  // Отрисовка заголовка с паттерном
  if (button.hasAttribute('data-modal-pattern')) {
    let sourceTitle = button.closest('[data-modal-title]');
    const modalTitle = modal.querySelector('[data-modal-title]');
    const patternKey = button.getAttribute('data-modal-pattern');
    if (!sourceTitle) sourceTitle = button.parentElement.querySelector('[data-modal-title]');
    if (sourceTitle && modalTitle && _vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.pattern[patternKey]) {
      const dynamicText = sourceTitle.textContent.trim();
      const pattern = _vars_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_CONTENT.pattern[patternKey];
      modalTitle.textContent = pattern.replace('{title}', dynamicText);
    }
    ;
  }
};


/***/ }),

/***/ "./src/js/components/_modal.js":
/*!*************************************!*\
  !*** ./src/js/components/_modal.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setModals: () => (/* binding */ setModals)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils.js */ "./src/js/_utils.js");
/* harmony import */ var _components_modal_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_modal-render.js */ "./src/js/components/_modal-render.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_vars.js */ "./src/js/_vars.js");



class ModalWindow {
  constructor(buttons) {
    this.html = document.querySelector('html');
    this.buttons = buttons || [];
    this.firstFocusableElement = null;
    this.lastFocusableElement = null;
    this.openedByButton = null;
  }
  handleOpen() {
    if (this.buttons.length === 0) return;
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        const modalName = button.getAttribute('data-modal-button');
        if (!modalName) return;
        this.modal = document.querySelector(`[data-modal="${modalName}"]`);
        if (!this.modal) return;
        if (modalName === 'image-full' && !_vars_js__WEBPACK_IMPORTED_MODULE_2__.TABLET_WIDTH.matches) return;

        // проверка необходимости отрисовки элементов в модальном окне
        if (modalName === 'image-full') {
          (0,_components_modal_render_js__WEBPACK_IMPORTED_MODULE_1__.renderPhotoToModal)(this.modal, button);
        }
        (0,_components_modal_render_js__WEBPACK_IMPORTED_MODULE_1__.renderModalContent)(this.modal, button);
        this.modalWindow = this.modal.querySelector('.modal__container');
        this.closeBtn = this.modal.querySelector('.modal-close');
        const focusableElements = Array.from(this.modal.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        this.firstFocusableElement = focusableElements[0];
        this.lastFocusableElement = focusableElements[focusableElements.length - 1];
        this.openedByButton = button;
        this.addEventListeners();
        this.openModal(this.modal);
      });

      // обработка enter, если вызов модалки идет через тег <a>
      if (button.tagName === 'A' && !button.href) {
        button.addEventListener('keydown', evt => {
          if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEnterKey)(evt)) {
            evt.preventDefault();
            button.click();
          }
        });
      }
    });
  }

  // открывает модальные окна по истечении таймера
  timerStart() {
    const subscribeModal = document.querySelector('[data-modal="subscribe"]');
    if (!subscribeModal) return;
    let inactivityTimer;
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        const otherModalOpened = document.querySelector('.modal.open');
        if (otherModalOpened) return;
        this.modal = subscribeModal;
        this.modalWindow = subscribeModal.querySelector('.modal__container');
        this.closeBtn = subscribeModal.querySelector('.modal-close');
        const focusableElements = Array.from(subscribeModal.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        this.firstFocusableElement = focusableElements[0];
        this.lastFocusableElement = focusableElements[focusableElements.length - 1];
        this.addEventListeners();
        this.openModal(subscribeModal);
      }, _vars_js__WEBPACK_IMPORTED_MODULE_2__.MODAL_TIMER);
    };
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('click', resetTimer);
    resetTimer();
  }
  addEventListeners() {
    if (!this.modal || !this.modalWindow || !this.closeBtn) return;

    // Закрытие по кнопке
    this.closeBtn.addEventListener('click', this.handleClose);

    // Закрытие по Escape
    this.escapeHandler = evt => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEscapeKey)(evt)) this.closeModal(this.modal);
    };
    window.addEventListener('keydown', this.escapeHandler);

    // Закрытие по клику вне модального окна
    this.modalWindow.addEventListener('click', evt => {
      evt.stopPropagation();
    });
    this.modal.addEventListener('click', this.handleOverlayClick);

    // Зацикливание фокуса
    this.modal.addEventListener('keydown', this.loopFocus);
  }
  removeEventListeners() {
    if (this.closeBtn) {
      this.closeBtn.removeEventListener('click', this.handleClose);
    }
    window.removeEventListener('keydown', this.escapeHandler);
    if (this.modal) {
      this.modal.removeEventListener('click', this.handleOverlayClick);
      this.modal.removeEventListener('keydown', this.loopFocus);
    }
  }
  handleClose = () => {
    this.closeModal(this.modal);
  };
  handleOverlayClick = evt => {
    if (evt.target === this.modal) {
      this.closeModal(this.modal);
    }
  };
  loopFocus = evt => {
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isTabKey)(evt)) {
      return;
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isTabKey)(evt) && evt.shiftKey && document.activeElement === this.firstFocusableElement) {
      evt.preventDefault();
      this.lastFocusableElement.focus();
    } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isTabKey)(evt) && !evt.shiftKey && document.activeElement === this.lastFocusableElement) {
      evt.preventDefault();
      this.firstFocusableElement.focus();
    }
  };
  openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    this.closeBtn.focus();
  }
  openModalSuccess(modalSuccess) {
    if (!modalSuccess) return;
    this.closeAllModal();
    this.modal = modalSuccess;
    this.modalWindow = this.modal.querySelector('.modal__container');
    this.closeBtn = this.modal.querySelector('.modal-close');
    const focusableElements = Array.from(this.modal.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    this.addEventListeners();
    this.openModal(this.modal);
  }
  closeModal(modal) {
    if (!modal) return;
    if (this.openedByButton) {
      this.openedByButton.focus();
      this.openedByButton = null;
    }
    modal.classList.remove('open');
    this.removeEventListeners();
  }
  closeAllModal() {
    const allModal = document.querySelectorAll('.modal');
    if (!allModal) return;
    allModal.forEach(el => {
      if (el.classList.contains('open')) {
        el.classList.remove('open');
      }
    });
    this.removeEventListeners();
  }
  init() {
    this.handleOpen();
    this.timerStart();
  }
}
const setModals = () => {
  const openButtons = document.querySelectorAll('[data-modal-button]');
  const modalWindow = new ModalWindow(openButtons);
  const modalSuccess = document.querySelector('[modal-success]');
  modalWindow.init();

  // Проверка наличия jQuery
  if (typeof jQuery === 'undefined' && typeof $ === 'undefined') {
    console.warn('jQuery is not loaded.');
    return;
  }
  $(document).on('af_complete', (evt, res) => {
    if (modalSuccess) if (res.success) modalWindow.openModalSuccess(modalSuccess);
  });
};


/***/ }),

/***/ "./src/js/components/_move-header.js":
/*!*******************************************!*\
  !*** ./src/js/components/_move-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveHeader: () => (/* binding */ moveHeader)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const header = document.querySelector('.header');
const logo = header ? header.querySelector('.header__logo') : null;
const select = header ? header.querySelector('.header__select') : null;
const menu = header ? header.querySelector('[data-mobile-menu="main"]') : null;
const menuContainer = menu ? menu.querySelector('.header__menu-container') : null;
const user = header ? header.querySelector('.header__user-list') : null;
const socials = header ? header.querySelector('.js-header-socials') : null;
const fixButton = header ? header.querySelector('.header__fix-button--catalog') : null;
const headerTop = header ? header.querySelector('.header__top') : null;
const headerBottom = header ? header.querySelector('.header__bottom') : null;
let isHeaderMoved = false;
let moveTimeout = null;
const moveHeader = () => {
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    if (header && _vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && !isHeaderMoved) {
      headerBottom.insertAdjacentElement('afterbegin', logo);
      headerBottom.insertAdjacentElement('beforeend', user);
      headerBottom.insertAdjacentElement('beforeend', socials);
      isHeaderMoved = true;
    }
    if (header && !_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && isHeaderMoved) {
      select.insertAdjacentElement('afterend', logo);
      fixButton.insertAdjacentElement('afterend', user);
      menuContainer.insertAdjacentElement('beforeend', socials);
      isHeaderMoved = false;
    }
  }, 10);
};
_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.addEventListener('change', moveHeader);


/***/ }),

/***/ "./src/js/components/_move-hero.js":
/*!*****************************************!*\
  !*** ./src/js/components/_move-hero.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveHero: () => (/* binding */ moveHero)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const heroTop = document.querySelector('.hero__top');
const content = heroTop ? heroTop.querySelector('.hero__content') : null;
let isHeroMoved = false;
let moveTimeout = null;
const moveHero = () => {
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    if (heroTop && _vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches && !isHeroMoved) {
      heroTop.insertAdjacentElement('afterbegin', content);
      isHeroMoved = true;
    }
    if (heroTop && !_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches && isHeroMoved) {
      heroTop.insertAdjacentElement('beforeend', content);
      isHeroMoved = false;
    }
  }, 10);
};
_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.addEventListener('change', moveHero);


/***/ }),

/***/ "./src/js/components/_navigation-swiper.js":
/*!*************************************************!*\
  !*** ./src/js/components/_navigation-swiper.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setNavigationSwiper: () => (/* binding */ setNavigationSwiper)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_utils.js */ "./src/js/_utils.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");




const sections = document.querySelectorAll('[data-swiper="navigation"]');
const setNavigationSwiper = () => {
  if (!sections || !sections.length) return;
  sections.forEach(section => {
    const sectionClass = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSwiperClass)(section);
    const sectionName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getBlockClass)(section);
    const swiperButtons = section.querySelector(`.${sectionClass}swiper-button-container`) ?? section.parentElement.querySelector(`.${sectionClass}swiper-button-container`);
    const swiperScrollbar = section.querySelector(`.${sectionClass}swiper-scrollbar`) ?? section.parentElement.querySelector(`.${sectionClass}swiper-scrollbar`);
    const sliderConfig = _vars_js__WEBPACK_IMPORTED_MODULE_3__.SLIDER_CONFIG[sectionName] || _vars_js__WEBPACK_IMPORTED_MODULE_3__.SLIDER_CONFIG.default;
    const desktopBreakpoint = sliderConfig.desktop_width ?? _vars_js__WEBPACK_IMPORTED_MODULE_3__.DESKTOP_WIDTH;
    const desktopBreakpointNumber = sliderConfig.desktop_width ? '1024' : '1366';
    const sectionSection = section.closest('section');
    const tabs = sectionSection ? sectionSection.querySelector('.tabs') : null;
    let swiperContainer = null;
    const destroyNavigationSwiper = (swiper, el) => {
      if (swiperContainer) {
        swiperContainer.destroy();
        swiperContainer = null;
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeSwiperClass)(swiper, el);
        if (swiperButtons) {
          swiperButtons.classList.add('hidden');
        }
        if (swiperScrollbar) {
          swiperScrollbar.classList.add('hidden');
        }
      }
    };
    const initNavigationSwiper = isLoopNeeded => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addSwiperClass)(section, sectionClass);
      if (swiperButtons) {
        swiperButtons.classList.remove('hidden');
      }
      if (swiperScrollbar) {
        swiperScrollbar.classList.remove('hidden');
      }
      const hasNavigation = sliderConfig.has_navigation ?? true;
      const hasScrollbar = sliderConfig.has_scrollbar ?? false;

      // Сборка модулей
      const modules = [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.FreeMode];
      if (hasNavigation) modules.push(swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation);
      if (hasScrollbar) modules.push(swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar);

      // Настройки навигации
      const navigationConfig = hasNavigation ? {
        nextEl: `.${sectionClass}swiper-button-container .button-swiper--next`,
        prevEl: `.${sectionClass}swiper-button-container .button-swiper--prev`
      } : false;

      // Настройки скроллбара
      const scrollbarConfig = hasScrollbar ? {
        el: swiperScrollbar,
        draggable: true,
        hide: false
      } : false;
      swiperContainer = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](section, {
        modules: modules,
        direction: 'horizontal',
        speed: 500,
        allowTouchMove: true,
        slidesPerView: sliderConfig.mobile_count,
        spaceBetween: sliderConfig.mobile_margin ?? 10,
        loop: isLoopNeeded,
        autoHeight: sliderConfig.auto_height ?? sliderConfig.mobile_count === 1,
        noSwiping: true,
        ...(sliderConfig.fade && {
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          }
        }),
        ...(sliderConfig.freeMode && {
          freeMode: {
            enabled: true,
            momentum: false,
            sticky: false
          }
        }),
        breakpoints: {
          768: {
            slidesPerView: sliderConfig.tablet_count,
            autoHeight: sliderConfig.auto_height ?? sliderConfig.tablet_count === 1
          },
          [desktopBreakpointNumber]: {
            slidesPerView: sliderConfig.desktop_count,
            autoHeight: sliderConfig.auto_height ?? sliderConfig.desktop_count === 1,
            speed: 1500,
            spaceBetween: sliderConfig.desktop_margin ? sliderConfig.desktop_margin : 10
          }
        },
        ...(navigationConfig && {
          navigation: navigationConfig
        }),
        ...(scrollbarConfig && {
          scrollbar: scrollbarConfig
        }),
        on: {
          init: function () {
            const numberOfVisibleSlides = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.checkVisibleSlides)(sectionName);
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.setSlidesTabIndex)(this, numberOfVisibleSlides);
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.setSwiperProgress)(this);
          },
          slideChange: function () {
            const numberOfVisibleSlides = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.checkVisibleSlides)(sectionName);
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.setSlidesTabIndex)(this, numberOfVisibleSlides);
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.setSwiperProgress)(this);
          }
        }
      });
    };
    let moveTimeout = null;
    const checkNavigationSwiper = () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        // делает скрытый табами слайдер нерабочим
        if (tabs) {
          const tabContent = section.closest('.tabs__tabcontent');
          const isTabActive = tabContent?.classList.contains('tabs__tabcontent--active');
          if (!isTabActive) {
            if (swiperContainer) {
              destroyNavigationSwiper(section, sectionClass);
            }
            return;
          }
        }

        // проверка использования параметра 'auto' у количества слайдов на странице
        let autoSliderConfig = null;
        if (!_vars_js__WEBPACK_IMPORTED_MODULE_3__.TABLET_WIDTH.matches && sliderConfig.mobile_count === 'auto') {
          autoSliderConfig = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getAutoSlidesCount)(section);
        }
        if (_vars_js__WEBPACK_IMPORTED_MODULE_3__.TABLET_WIDTH.matches && !desktopBreakpoint.matches && sliderConfig.tablet_count === 'auto') {
          autoSliderConfig = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getAutoSlidesCount)(section);
        }
        if (desktopBreakpoint.matches && sliderConfig.desktop_count === 'auto') {
          autoSliderConfig = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getAutoSlidesCount)(section);
        }

        // проверка необходимости слайдера
        const isNeedMobile = !_vars_js__WEBPACK_IMPORTED_MODULE_3__.TABLET_WIDTH.matches && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSlidesCount)(section) > (autoSliderConfig ?? sliderConfig.mobile_count);
        const isNeedTablet = _vars_js__WEBPACK_IMPORTED_MODULE_3__.TABLET_WIDTH.matches && !desktopBreakpoint.matches && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSlidesCount)(section) > (autoSliderConfig ?? sliderConfig.tablet_count);
        const isNeedDesktop = desktopBreakpoint.matches && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSlidesCount)(section) > (autoSliderConfig ?? sliderConfig.desktop_count);
        const isLoopNeeded = (sliderConfig.loop ?? false) && (isNeedMobile || isNeedTablet || isNeedDesktop);
        if (!swiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
          initNavigationSwiper(isLoopNeeded);
        } else if (swiperContainer && !isNeedMobile && !isNeedTablet && !isNeedDesktop) {
          destroyNavigationSwiper(section, sectionClass);
        } else if (swiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
          destroyNavigationSwiper(section, sectionClass);
          initNavigationSwiper(isLoopNeeded);
        }
      }, 10);
    };
    checkNavigationSwiper();
    _vars_js__WEBPACK_IMPORTED_MODULE_3__.TABLET_WIDTH.addEventListener('change', checkNavigationSwiper);
    desktopBreakpoint.addEventListener('change', checkNavigationSwiper);

    // проверка активности таба для скрытых слайдеров
    const tabContent = tabs ? section.closest('.tabs__tabcontent') : null;
    if (tabContent) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            const isActive = tabContent.classList.contains('tabs__tabcontent--active');
            if (isActive) {
              checkNavigationSwiper();
            }
          }
        });
      });
      observer.observe(tabContent, {
        attributes: true
      });
    }
    // конец проверки активности таба
  });
};


/***/ }),

/***/ "./src/js/components/_open-mobile-menu.js":
/*!************************************************!*\
  !*** ./src/js/components/_open-mobile-menu.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setMobileMenu: () => (/* binding */ setMobileMenu)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_vars.js */ "./src/js/_vars.js");


const header = document.querySelector('.header');
const menuButtons = document.querySelectorAll('[data-mobile-menu-button]');
const setMobileMenu = () => {
  if (!menuButtons || !menuButtons.length) return;
  menuButtons.forEach(menuButton => {
    const menuName = menuButton.getAttribute('data-mobile-menu-button');
    if (!menuName) return;
    const menu = document.querySelector(`[data-mobile-menu="${menuName}"]`);
    if (!menu) return;
    const headerLinks = menu.querySelectorAll('a, button');
    const closeButton = menu.querySelector('.js-button-close');
    let scrollSize = 0;
    const openMobileMenu = () => {
      menu.classList.add('is-open');
      menuButton.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onDocumentKeydown);
      document.addEventListener('click', onDocumentClick);
      closeButton.addEventListener('click', onCloseButtonClick);
      header.addEventListener('focusout', onMenuFocusOut);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTabIndex)(headerLinks);
      scrollSize = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getScrollWidth)();
      document.body.style.paddingRight = `${scrollSize}px`;
    };
    const closeMobileMenu = () => {
      menu.classList.remove('is-open');
      menuButton.classList.remove('active');
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = 0;
      document.removeEventListener('keydown', onDocumentKeydown);
      document.removeEventListener('click', onDocumentClick);
      closeButton.removeEventListener('click', onCloseButtonClick);
      header.removeEventListener('focusout', onMenuFocusOut);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(headerLinks);
    };
    function onDocumentKeydown(evt) {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEscapeKey)(evt)) {
        evt.preventDefault();
        closeMobileMenu();
      }
    }
    function onMenuFocusOut(evt) {
      if (evt.relatedTarget === null || !header.contains(evt.relatedTarget)) {
        closeMobileMenu();
      }
    }
    function onDocumentClick(evt) {
      if (!header.contains(evt.target)) {
        closeMobileMenu();
      }
    }
    function onCloseButtonClick() {
      closeMobileMenu();
    }
    const toggleMenuButton = () => {
      if (!menuButton) return;
      menuButton.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    };
    if (!_vars_js__WEBPACK_IMPORTED_MODULE_1__.DESKTOP_WIDTH.matches && headerLinks && headerLinks.length) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(headerLinks);
    }
    let moveTimeout = null;
    _vars_js__WEBPACK_IMPORTED_MODULE_1__.DESKTOP_WIDTH.addEventListener('change', () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        if (!headerLinks || !headerLinks.length) return;
        if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.DESKTOP_WIDTH.matches) {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTabIndex)(headerLinks);
        } else {
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(headerLinks);
        }
      }, 10);
    });
    toggleMenuButton();
  });
};


/***/ }),

/***/ "./src/js/components/_popup.js":
/*!*************************************!*\
  !*** ./src/js/components/_popup.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setPopup: () => (/* binding */ setPopup)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");


const popups = document.querySelectorAll('.popup-item');

// эти попапы появляется только на ширине вьюпорта выше 1024px
const setPopup = () => {
  if (!popups || !popups.length) return;
  popups.forEach(popup => {
    const button = popup.querySelector('.popup-button');
    const popupList = popup.querySelector('.popup-list');
    let isPopup = false;
    if (!button) return;
    const popupLinks = popupList ? popupList.querySelectorAll('a, button') : null;
    const openPopup = () => {
      popup.classList.add('open');
      document.addEventListener('click', onDocumentClick);
      popup.addEventListener('focusout', onFocusOut);
      if (popupLinks && popupLinks.length) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.setTabIndex)(popupLinks);
      }
    };
    const closePopup = () => {
      popup.classList.remove('open');
      document.removeEventListener('click', onDocumentClick);
      popup.removeEventListener('focusout', onFocusOut);
      if (popupLinks && popupLinks.length) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeTabIndex)(popupLinks);
      }
    };
    const togglePopup = () => {
      if (popup.classList.contains('open')) {
        closePopup();
      } else {
        openPopup();
      }
    };
    let moveTimeout = null;
    const checkPopup = () => {
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && !isPopup) {
          button.addEventListener('click', togglePopup);
          isPopup = true;
        }
        if (!_vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.matches && isPopup) {
          button.removeEventListener('click', togglePopup);
          isPopup = false;
        }
      }, 10);
    };
    function onFocusOut(evt) {
      if (evt.relatedTarget === null || !popup.contains(evt.relatedTarget)) {
        popup.classList.remove('open');
      }
    }
    function onDocumentClick(evt) {
      const target = evt.target;
      if (!popup.contains(target)) {
        popup.classList.remove('open');
        return;
      }
      if (target.closest('a') && target !== button) {
        popup.classList.remove('open');
      }
    }
    checkPopup();
    if (popupLinks && popupLinks.length) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeTabIndex)(popupLinks);
    }
    _vars_js__WEBPACK_IMPORTED_MODULE_0__.SMALL_DESKTOP_WIDTH.addEventListener('change', checkPopup);
  });
};


/***/ }),

/***/ "./src/js/components/_rating.js":
/*!**************************************!*\
  !*** ./src/js/components/_rating.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRating: () => (/* binding */ setRating)
/* harmony export */ });
const ratings = document.querySelectorAll('.rating');
const setRating = () => {
  if (!ratings || !ratings.length) return;
  ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.rating__star');
    const hiddenInput = rating.querySelector('input');
    if (!stars || !stars.length || !hiddenInput) return;
    let currentRating = 0;
    const updateStars = value => {
      stars.forEach(star => {
        const starValue = parseInt(star.dataset.value);
        if (starValue <= value) {
          star.classList.add('rating__star--active');
        } else {
          star.classList.remove('rating__star--active');
        }
      });
    };
    stars.forEach(star => {
      const value = parseInt(star.dataset.value);
      star.addEventListener('mouseenter', () => {
        updateStars(value);
      });
      star.addEventListener('click', () => {
        currentRating = value;
        hiddenInput.value = currentRating;
        updateStars(currentRating);
      });
    });

    // Возврат к текущему рейтингу при уходе мыши
    rating.addEventListener('mouseleave', () => {
      updateStars(currentRating);
    });
  });
};


/***/ }),

/***/ "./src/js/components/_show-more.js":
/*!*****************************************!*\
  !*** ./src/js/components/_show-more.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onTabChange: () => (/* binding */ onTabChange),
/* harmony export */   showAllTags: () => (/* binding */ showAllTags)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const activeLists = document.querySelectorAll('.js-show-more-list-active');
const getVisibleCount = container => {
  const dataCount = container.dataset.count;
  if (dataCount) {
    const count = parseInt(dataCount, 10);
    if (!isNaN(count) && count > 0) return count;
  }
  return _vars_js__WEBPACK_IMPORTED_MODULE_0__.COUNT_VISIBLE_TAGS; // значение по умолчанию
};
const onButtonClick = evt => {
  const showButton = evt.target;
  const span = showButton.querySelector('span');
  const container = showButton.closest('.js-show-more');
  const activeList = container ? container.querySelector('.js-show-more-list-active') : null;
  const tags = activeList ? activeList.querySelectorAll('.js-show-more-tag') : null;
  if (!tags || !tags.length) return;
  const visibleCount = getVisibleCount(container);
  if (!showButton.classList.contains('js-hide-all')) {
    tags.forEach((tag, index) => {
      if (index >= visibleCount) {
        tag.classList.remove('hidden');
      }
    });
    showButton.classList.add('js-hide-all');
    if (span) {
      span.textContent = 'Скрыть';
    } else {
      showButton.textContent = 'Скрыть';
    }
  } else {
    tags.forEach((tag, index) => {
      if (index >= visibleCount) {
        tag.classList.add('hidden');
      }
    });
    showButton.classList.remove('js-hide-all');
    if (span) {
      span.textContent = 'Показать еще';
    } else {
      showButton.textContent = 'Показать еще';
    }
  }
};
const showAllTags = list => {
  const container = list.closest('.js-show-more');
  const buttonMore = container ? container.querySelector('.js-show-more-button') : null;
  if (!list || !buttonMore) return;
  const tags = list.querySelectorAll('.js-show-more-tag');
  if (!tags || !tags.length) return;
  const visibleCount = getVisibleCount(container);

  // если скрытие нужно только на моб.версии, а открыт десктоп - показывает все теги и выходит из функции
  if (list.classList.contains('js-show-more-mobile-only') && _vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches) {
    buttonMore.classList.add('hidden');
    tags.forEach(tag => {
      tag.classList.remove('hidden');
    });
    return;
  }
  ;
  if (tags.length <= visibleCount) {
    buttonMore.classList.add('hidden');
    return;
  }
  list.appendChild(buttonMore);
  buttonMore.classList.remove('hidden');
  tags.forEach((tag, index) => {
    if (index >= visibleCount) {
      tag.classList.add('hidden');
    }
  });
  buttonMore.removeEventListener('click', onButtonClick);
  buttonMore.addEventListener('click', onButtonClick);
};
const onTabChange = list => {
  const currentContainer = list.closest('.js-show-more');
  const buttonMore = currentContainer ? currentContainer.querySelector('.js-show-more-button') : null;
  if (buttonMore) {
    const span = buttonMore.querySelector('span');
    buttonMore.classList.remove('js-hide-all');
    if (span) {
      span.textContent = 'Показать еще';
    } else {
      buttonMore.textContent = 'Показать еще';
    }
  }
};
let moveTimeout = null;
const onWindowChange = () => {
  clearTimeout(moveTimeout);
  moveTimeout = setTimeout(() => {
    const activeLists = document.querySelectorAll('.js-show-more-list-active');
    activeLists.forEach(list => {
      if (list.classList.contains('js-show-more-mobile-only') && _vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches) {
        const currentContainer = list.closest('.js-show-more');
        const buttonMore = currentContainer ? currentContainer.querySelector('.js-show-more-button') : null;
        const tags = list.querySelectorAll('.js-show-more-tag');
        if (buttonMore) {
          const span = buttonMore.querySelector('span');
          buttonMore.classList.add('hidden');
          buttonMore.classList.remove('js-hide-all');
          if (span) {
            span.textContent = 'Показать еще';
          } else {
            buttonMore.textContent = 'Показать еще';
          }
        }
        if (tags && tags.length) {
          tags.forEach(tag => {
            tag.classList.remove('hidden');
          });
        }
      }
      ;
      if (list.classList.contains('js-show-more-mobile-only') && !_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches) {
        showAllTags(list);
      }
    });
  }, 10);
};

// скрытие табов на мобильной версии (добавление кнопки "показать все")
if (activeLists && activeLists.length) {
  activeLists.forEach(list => {
    showAllTags(list);
  });
}
_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.addEventListener('change', onWindowChange);


/***/ }),

/***/ "./src/js/components/_tabs.js":
/*!************************************!*\
  !*** ./src/js/components/_tabs.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTabs: () => (/* binding */ setTabs)
/* harmony export */ });
/* harmony import */ var _show_more_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_show-more.js */ "./src/js/components/_show-more.js");

const tabs = document.querySelectorAll('.tabs');
const setTabs = () => {
  if (!tabs || !tabs.length) return;
  tabs.forEach(tab => {
    const tabLinkContainer = tab.querySelector('.tabs__tablinks');
    const tabContentContainer = tab.querySelector('.tabs__tabcontents');
    if (!tabLinkContainer) return;
    const tabLinks = [...tabLinkContainer.children].map(item => item.querySelector('.tabs__tablink'));
    const tabContents = tabContentContainer ? [...tabContentContainer.children].filter(el => el.classList.contains('tabs__tabcontent')) : null;
    const openTabs = evt => {
      const btnTarget = evt.currentTarget;
      const section = btnTarget.dataset.tab;
      tabLinks.forEach(link => {
        link.classList.remove('tabs__tablink--active');
      });
      if (tabContents && tabContents.length) {
        tabContents.forEach(item => {
          item.classList.remove('tabs__tabcontent--active');
        });
      }
      const activeList = tab.querySelector('.js-show-more-list-active');
      if (activeList) {
        activeList.classList.remove('js-show-more-list-active');
      }
      const newContent = tab.querySelector(`[data-tab-content="${section}"]`);

      // проверяет, есть ли у табконтента функция "показать все"
      if (newContent) {
        const listElement = newContent.classList.contains('js-show-more-list') ? newContent : newContent.querySelector('.tabs__tabcontent--active.js-show-more-list');
        if (listElement) {
          listElement.classList.add('js-show-more-list-active');
          (0,_show_more_js__WEBPACK_IMPORTED_MODULE_0__.showAllTags)(listElement);
          (0,_show_more_js__WEBPACK_IMPORTED_MODULE_0__.onTabChange)(listElement);
        }
        newContent.classList.add('tabs__tabcontent--active');
      }
      btnTarget.classList.add('tabs__tablink--active');
    };
    tabLinks.forEach(tablink => {
      tablink.addEventListener('click', openTabs);
    });
  });
};


/***/ }),

/***/ "./src/js/components/_thumb-swiper.js":
/*!********************************************!*\
  !*** ./src/js/components/_thumb-swiper.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setThumbSwiper: () => (/* binding */ setThumbSwiper)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_utils.js */ "./src/js/_utils.js");



const sections = document.querySelectorAll('[data-swiper="thumb"]');
const setThumbSwiper = () => {
  if (!sections || !sections.length) return;
  sections.forEach(section => {
    const mainSwiper = section.querySelector('.main-swiper');
    const thumbSwiper = section.querySelector('.thumb-swiper');
    let mainSwiperContainer = null;
    const sectionClass = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSwiperClass)(mainSwiper);
    const thumbSwiperContainer = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](thumbSwiper, {
      slidesPerView: 4,
      spaceBetween: 5,
      watchSlidesProgress: true,
      centeredSlidesBounds: true,
      breakpoints: {
        768: {
          spaceBetween: 10,
          direction: 'vertical',
          watchSlidesProgress: false,
          centeredSlidesBounds: false
        }
      }
    });
    const initMainSwiper = () => {
      if (!mainSwiper) return;
      mainSwiperContainer = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](mainSwiper, {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade],
        direction: 'horizontal',
        speed: 500,
        allowTouchMove: true,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: `.${sectionClass}swiper-button-container .button-swiper--next`,
          prevEl: `.${sectionClass}swiper-button-container .button-swiper--prev`
        },
        thumbs: {
          swiper: thumbSwiperContainer,
          slideThumbActiveClass: `${sectionClass}thumb-slide--active`
        }
      });
    };
    initMainSwiper();
  });
};


/***/ }),

/***/ "./src/js/components/_video.js":
/*!*************************************!*\
  !*** ./src/js/components/_video.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initVideo: () => (/* binding */ initVideo),
/* harmony export */   playVideo: () => (/* binding */ playVideo)
/* harmony export */ });
const initVideo = videoWrapper => {
  const video = videoWrapper.querySelector('video');
  const playButton = videoWrapper.querySelector('.video__button-play');
  if (!video || !playButton) return;
  playButton.addEventListener('click', () => {
    const isVideoPlaying = playButton.classList.contains('playing');
    if (!isVideoPlaying) {
      video.play().then(() => {
        playButton.classList.add('playing');
        playButton.classList.add('hidden');
        video.setAttribute('controls', '');
      }).catch(err => {
        console.warn('Не удалось воспроизвести видео:', err);
      });
    } else {
      video.pause();
      playButton.classList.remove('playing');
    }
  });
  video.addEventListener('ended', () => {
    playButton.classList.remove('playing');
  });
  video.addEventListener('pause', () => {
    playButton.classList.remove('playing');
  });
  video.addEventListener('play', () => {
    playButton.classList.add('playing');
  });
  video.addEventListener('error', () => {
    playButton.classList.remove('playing');
  });
};
const playVideo = () => {
  const videoWrappers = document.querySelectorAll('.video');
  if (!videoWrappers || !videoWrappers.length) return;
  videoWrappers.forEach(wrapper => {
    initVideo(wrapper);
  });
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map