'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var JiLog = /** @class */ (function () {
    function JiLog() {
        this.logCount = 0;
        this.infoLogCount = 0;
        this.warnLogCount = 0;
        this.errorLogCount = 0;
        this.logTime = performance.now();
        this.infoTime = performance.now();
        this.warnTime = performance.now();
        this.errorTime = performance.now();
    }
    JiLog.prototype.log = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = ''; }
        console.log("%c[".concat(label, "][LOG: ").concat(this.logCount, "][TIME: ").concat(this.calcPerformance(this.logTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.updateMeta('log');
    };
    JiLog.prototype.info = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = 'green'; }
        console.log("%c[".concat(label, "][INFO: ").concat(this.infoLogCount, "][TIME: ").concat(this.calcPerformance(this.infoTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.updateMeta('info');
    };
    JiLog.prototype.warn = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = 'yellow'; }
        console.log("%c[".concat(label, "][WARN: ").concat(this.warnLogCount, "][TIME: ").concat(this.calcPerformance(this.warnTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.warnLogCount += 1;
        this.warnTime = window.performance.now();
        this.updateMeta('warn');
    };
    JiLog.prototype.error = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = 'red'; }
        console.log("%c[".concat(label, "][ERROR: ").concat(this.errorLogCount, "][TIME: ").concat(this.calcPerformance(this.errorTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.errorLogCount += 1;
        this.errorTime = window.performance.now();
        this.updateMeta('error');
    };
    JiLog.prototype.calcPerformance = function (time) {
        var performance = window.performance.now();
        return "".concat(performance - time, " milliseconds");
    };
    JiLog.prototype.updateMeta = function (type) {
        switch (type) {
            case 'log':
                this.logCount = this.logCount + 1;
                this.logTime = window.performance.now();
                return;
            case 'info':
                this.infoLogCount += 1;
                this.infoTime = window.performance.now();
                return;
            case 'warn':
                this.warnLogCount += 1;
                this.warnTime = window.performance.now();
                return;
            case 'error':
                this.errorLogCount += 1;
                this.errorTime = window.performance.now();
                return;
        }
    };
    return JiLog;
}());
var jilog = new JiLog();
var jiLog = function (value, label, color) {
    return jilog.log(value, label, color);
};
var jiInfo = function (value, label, color) {
    return jilog.info(value, label, color);
};
var jiWarn = function (value, label, color) {
    return jilog.warn(value, label, color);
};
var jiError = function (value, label, color) {
    return jilog.error(value, label, color);
};

exports.jiError = jiError;
exports.jiInfo = jiInfo;
exports.jiLog = jiLog;
exports.jiWarn = jiWarn;
