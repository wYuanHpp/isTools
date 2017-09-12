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
     * @param {(HTMLElement|string)} el 需要金乡计算的dom对象或对于的选择器字符串
     * @returns {object} 返回一个含有left 和 top的对象,对应目标元素到最外成元素的left和top值
     */
    function getOffset(el) {
        var left = 0, top = 0;
        var dom = typeof el == "string" ? document.querySelector(el) : el;
        while (dom) {
            left += dom.offsetLeft;
            top += dom.offsetTop;
            dom = dom.offsetParent;
        }
        return {
            left: left,
            top: top
        };
    }
    exports.getOffset = getOffset;
});
//# sourceMappingURL=css.js.map