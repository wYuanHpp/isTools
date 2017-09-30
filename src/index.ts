import *  as data from "./util/data"
import *  as css from "./util/css"
import * as animate from './util/animate'
(function(global){
    var tool = Object.assign({}, data, css, animate);
    !global["T"] && (global["T"] = tool);
    global["isTools"] = tool;
})(typeof window == "object"?window:global)

