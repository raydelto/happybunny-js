require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"HelloWorld":[function(require,module,exports){
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// scripts/HelloWorld.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();
},{}],"fall":[function(require,module,exports){
cc._RFpush(module, 'b138exU6gJKQLXxScMhDyzx', 'fall');
// scripts/fall.js

"use strict";

cc.Class({
    "extends": cc.Component,

    onLoad: function onLoad() {
        var move = cc.moveTo(4, this.node.getPositionX(), -780);
        this.node.runAction(move);
    }
});

cc._RFpop();
},{}],"move_bunny":[function(require,module,exports){
cc._RFpush(module, '3b2bd5SIXhHXaztjsePmaSs', 'move_bunny');
// scripts/move_bunny.js

"use strict";

cc.Class({
    "extends": cc.Component,

    onLoad: function onLoad() {
        this.handleTouch();
    },
    willMove: false,
    move: function move(touch, event) {
        var target = event.getCurrentTarget();
        var box = target.node.getBoundingBox();
        // console.log(box);
        var point = touch.getLocation();
        // console.log(point);
        if (this.willMove) {
            target.node.setPositionX(point.x - 384);
        }
        return false;
    },
    touch: function touch(_touch, event) {
        this.willMove = false;
        var target = event.getCurrentTarget();
        var box = target.node.getBoundingBox();
        var point = _touch.getLocation();
        if (cc.rectContainsPoint(box, cc.p(point.x - 384, point.y - 640))) {
            this.willMove = true;
        }

        return true;
    },

    handleTouch: function handleTouch() {
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: false,
            onTouchBegan: this.touch,
            onTouchMoved: this.move
        }, this);
    }
});

cc._RFpop();
},{}]},{},["HelloWorld","move_bunny","fall"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL3NjcmlwdHMvSGVsbG9Xb3JsZC5qcyIsImFzc2V0cy9zY3JpcHRzL2ZhbGwuanMiLCJhc3NldHMvc2NyaXB0cy9tb3ZlX2J1bm55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNjLl9SRnB1c2gobW9kdWxlLCAnMjgwYzNyc1pKSktuWjlScWJBTFZ3dEsnLCAnSGVsbG9Xb3JsZCcpO1xuLy8gc2NyaXB0cy9IZWxsb1dvcmxkLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBXb3JsZCEnXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICdiMTM4ZXhVNmdKS1FMWHhTY01oRHl6eCcsICdmYWxsJyk7XG4vLyBzY3JpcHRzL2ZhbGwuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtb3ZlID0gY2MubW92ZVRvKDQsIHRoaXMubm9kZS5nZXRQb3NpdGlvblgoKSwgLTc4MCk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnM2IyYmQ1U0lYaEhYYXp0anNlUG1hU3MnLCAnbW92ZV9idW5ueScpO1xuLy8gc2NyaXB0cy9tb3ZlX2J1bm55LmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmhhbmRsZVRvdWNoKCk7XG4gICAgfSxcbiAgICB3aWxsTW92ZTogZmFsc2UsXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZSh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LmdldEN1cnJlbnRUYXJnZXQoKTtcbiAgICAgICAgdmFyIGJveCA9IHRhcmdldC5ub2RlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJveCk7XG4gICAgICAgIHZhciBwb2ludCA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvaW50KTtcbiAgICAgICAgaWYgKHRoaXMud2lsbE1vdmUpIHtcbiAgICAgICAgICAgIHRhcmdldC5ub2RlLnNldFBvc2l0aW9uWChwb2ludC54IC0gMzg0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICB0b3VjaDogZnVuY3Rpb24gdG91Y2goX3RvdWNoLCBldmVudCkge1xuICAgICAgICB0aGlzLndpbGxNb3ZlID0gZmFsc2U7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC5nZXRDdXJyZW50VGFyZ2V0KCk7XG4gICAgICAgIHZhciBib3ggPSB0YXJnZXQubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICB2YXIgcG9pbnQgPSBfdG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgaWYgKGNjLnJlY3RDb250YWluc1BvaW50KGJveCwgY2MucChwb2ludC54IC0gMzg0LCBwb2ludC55IC0gNjQwKSkpIHtcbiAgICAgICAgICAgIHRoaXMud2lsbE1vdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoOiBmdW5jdGlvbiBoYW5kbGVUb3VjaCgpIHtcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcbiAgICAgICAgICAgIGV2ZW50OiBjYy5FdmVudExpc3RlbmVyLlRPVUNIX09ORV9CWV9PTkUsXG4gICAgICAgICAgICBzd2FsbG93VG91Y2hlczogZmFsc2UsXG4gICAgICAgICAgICBvblRvdWNoQmVnYW46IHRoaXMudG91Y2gsXG4gICAgICAgICAgICBvblRvdWNoTW92ZWQ6IHRoaXMubW92ZVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7Il19
