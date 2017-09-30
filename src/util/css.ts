/**
 * @param {(HTMLElement|string)} el 需要金乡计算的dom对象或对于的选择器字符串
 * @returns {object} 返回一个含有left 和 top的对象,对应目标元素到最外成元素的left和top值 
 */
export function getOffset(el: HTMLElement|string):object {
    var left = 0,
        top = 0;
    var dom: HTMLElement = typeof el == "string" ? <HTMLElement>document.querySelector(el) : el;
    while (dom) {
        left += dom.offsetLeft;
        top += dom.offsetTop;
        dom = <HTMLElement>dom.offsetParent;
    }
    return {
        left: left,
        top: top
    }
}

export function setCssPrefix(name:string):string{
    var result = "";
    
    return result;
}