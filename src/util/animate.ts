
function Animate(el) {
    if (el.length) {
        this.el = [].slice.apply(el)
        return;
    }
    this.el = el;
    console.log(el);
}
Animate.prototype.init = function () {
    if (this.el.length) {
        this.el.forEach(function (ele) {
            ele.originState = ele.getBoundingClientRect();
        })
        return;
    }
    this.el.originState = this.el.getBoundingClientRect();
};
Animate.prototype.action = function (fn) {
    if (fn instanceof Function !== true) return;
    fn();
    if (this.el.length) {
        this.el.forEach(function (ele) {
            var finalState = ele.getBoundingClientRect();
            ele.style.transform = `translateY(${ele.originState.top - finalState.top}px)`;
            ele.style.transform = `translateX(${ele.originState.left - finalState.left}px)`;
        })
        return;
    }
    var finalState = this.el.getBoundingClientRect();
    this.el.style.transform = `translateY(${this.el.originState.top - finalState.top}px)`;
    this.el.style.transform = `translateX(${this.el.originState.left - finalState.left}px)`;
}
Animate.prototype.invert = function (time, callback) {
    var that = this;
    setTimeout(function () {
        if (that.el.length) {
            that.el.forEach(function (ele) {
                ele.style.transition = time + "s";
                ele.style.transform = '';
                ele.addEventListener("transitionend", function () {
                    ele.style.transition = '';
                });
            });
        } else {
            that.el.style.transition = time + "s";
            that.el.style.transform = '';
            that.el.addEventListener("transitionend", function () {
                that.el.style.transition = '';
            });
        }
        if (callback instanceof Function === true) {
           var delay = setTimeout(function(){
                callback();
                delay = null;
            }, time * 1000);
        }
    }, 0);
};

exports.createAnimate = function(el, time, fn, callback) {
    var ani = new Animate(el);
    ani.init();
    ani.action(fn);
    ani.invert(time, callback);
    ani = null;
    console.log(ani);

}
