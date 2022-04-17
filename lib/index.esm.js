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
    // FIXME: this.logCount / 2
    JiLog.prototype.log = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = ''; }
        var labelContent = label && "[".concat(label, "]");
        console.log("%c".concat(labelContent, "[LOG: ").concat(this.logCount / 2, "][TIME: ").concat(JiLog.calcPerformance(this.logTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.updateMeta('log');
    };
    // FIXME: this.infoLogCount / 2
    JiLog.prototype.info = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = 'green'; }
        var labelContent = label && "[".concat(label, "]");
        console.log("%c".concat(labelContent, "[INFO: ").concat(this.infoLogCount / 2, "][TIME: ").concat(JiLog.calcPerformance(this.infoTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.updateMeta('info');
    };
    // FIXME: this.warnLogCount / 2
    JiLog.prototype.warn = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = 'yellow'; }
        var labelContent = label && "[".concat(label, "]");
        console.log("%c".concat(labelContent, "[WARN: ").concat(this.warnLogCount / 2, "][TIME: ").concat(JiLog.calcPerformance(this.warnTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.updateMeta('warn');
    };
    // FIXME: this.errorLogCount / 2
    JiLog.prototype.error = function (value, label, color) {
        if (label === void 0) { label = ''; }
        if (color === void 0) { color = 'red'; }
        var labelContent = label && "[".concat(label, "]");
        console.log("%c".concat(labelContent, "[ERROR: ").concat(this.errorLogCount / 2, "][TIME: ").concat(JiLog.calcPerformance(this.errorTime), "]\n").concat(JSON.stringify(value), " "), "color: ".concat(color));
        this.updateMeta('error');
    };
    JiLog.calcPerformance = function (time) {
        var performance = window.performance.now();
        return "".concat(Math.floor(performance - time), " milliseconds");
    };
    JiLog.prototype.updateMeta = function (type) {
        switch (type) {
            case 'log':
                this.logCount += 1;
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

export { jiError, jiInfo, jiLog, jiWarn };
