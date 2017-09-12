import *  as data from "./util/data"
import *  as css from "./util/css"
(function(global){
    var tool = Object.assign({}, data, css);
    !global["T"] && (global["T"] = tool);
    global["isTools"] = tool;
})(typeof window == "object"?window:global)
console.log(global["T"])

