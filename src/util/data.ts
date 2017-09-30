import { log } from 'util';
/**
 * 对数字进行补零
 * @param {(string | number)} el 要进行操作的字符串或数字
 * @param {number} [num=2] 返回的字符长度 
 * @param {boolean} [isInteger=true] 返回的数字是整数部分为true 返回的是小数部分为false   
 * @returns {string} 
 */
export function addZero(el: string | number, num: number=2, isInteger: boolean=true): string {
    var result = typeof el == "number" ? el + "" : el;
    var len = result.length;
    if (len >= num) return result;
    if (isInteger) {
        for (var i = 0; i < num - len; i++) {
            result = "0" + result;
        }
    } else {
        for (var i = 0; i < num - len; i++) {
            result = result + "0";
        }
    }
    return result;
}

/**
 * @param {Date} date 要格式化的Date对象
 * @param {string} format example:"YYYY/mm/DD hh:MM:ss" 
 * @returns {string} 返回格式化后的日期字符串 
 */
export function simpleDateFormat (date:Date , format:string):string {
    var result = format;
    var year = date.getFullYear() + "";
    var month = addZero(date.getMonth() + 1 + "") 
    var day = addZero(date.getDate() + ""); 
    var hours = addZero(date.getHours() + "");
    var minutes = addZero(date.getMinutes() + "");
    var seconds = addZero(date.getSeconds() + "");
    result = result.replace(/YYYY/, year).replace(/mm/, month).replace(/DD/, day).replace(/hh/, hours).replace(/MM/, minutes).replace(/ss/, seconds);
    return result;
}
/**
 * 
 * 
 * @export
 * @param {any} collection 需要进行深拷贝的数组或对象 
 * @returns  
 */
export function deepCopy(collection) {
    var obj;
    //参数为数组
    if (collection instanceof Array) {
        obj=[];
        for(let i = 0; i < collection.length ; i ++){
            obj[i] = deepCopy(collection[i]);
        }
        return obj;
    //参数为函数
    }else if(collection instanceof Function) {
        return collection;
    //参数为对象
    } else if (collection instanceof Object) {
        obj = {};
        for(var item in collection){
            if(collection.hasOwnProperty(item)){
                obj[item] = deepCopy(collection[item]);
            }
        }
        return obj;
    //参数为其他数据类型
    } else {
        obj = collection;
        return obj;
    }
}