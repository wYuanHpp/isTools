import *  as data from "./util/data"
import *  as css from "./util/css"
(function(window,global){
    var tool = Object.assign({}, data, css);
    if(window){
    window["T"] && (window["T"] = tool);
    window["isTools"] = tool;
    }else {
    global["T"] && (global["T"] = tool);
    global["isTools"] = tool;
    }
})(window,global)

