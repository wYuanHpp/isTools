(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 对数字进行补零
     * @param {(string | number)} el 要进行操作的字符串或数字
     * @param {number} [num=2] 返回的字符长度
     * @param {boolean} [isInteger=true] 返回的数字是整数部分为true 返回的是小数部分为false
     * @returns {string}
     */
    function addZero(el, num, isInteger) {
        if (num === void 0) { num = 2; }
        if (isInteger === void 0) { isInteger = true; }
        var result = typeof el == "number" ? el + "" : el;
        var len = result.length;
        if (len >= num)
            return result;
        if (isInteger) {
            for (var i = 0; i < num - len; i++) {
                result = "0" + result;
            }
        }
        else {
            for (var i = 0; i < num - len; i++) {
                result = result + "0";
            }
        }
        return result;
    }
    exports.addZero = addZero;
    /**
     * @param {Date} date 要格式化的Date对象
     * @param {string} format example:"YYYY/mm/DD hh:MM:ss"
     * @returns {string} 返回格式化后的日期字符串
     */
    function dateFormat(date, format) {
        var result = format;
        var year = date.getFullYear() + "";
        var month = addZero(date.getMonth() + 1 + "");
        var day = addZero(date.getDate() + "");
        var hours = addZero(date.getHours() + "");
        var minutes = addZero(date.getMinutes() + "");
        var seconds = addZero(date.getSeconds() + "");
        result = result.replace(/YYYY/, year).replace(/mm/, month).replace(/DD/, day).replace(/hh/, hours).replace(/MM/, minutes).replace(/ss/, seconds);
        console.log(result);
        return result;
    }
    exports.dateFormat = dateFormat;
});
//# sourceMappingURL=data.js.map