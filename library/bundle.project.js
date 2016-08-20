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
        var point = touch.getLocation();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL3NjcmlwdHMvSGVsbG9Xb3JsZC5qcyIsImFzc2V0cy9zY3JpcHRzL2ZhbGwuanMiLCJhc3NldHMvc2NyaXB0cy9tb3ZlX2J1bm55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNjLl9SRnB1c2gobW9kdWxlLCAnMjgwYzNyc1pKSktuWjlScWJBTFZ3dEsnLCAnSGVsbG9Xb3JsZCcpO1xuLy8gc2NyaXB0cy9IZWxsb1dvcmxkLmpzXG5cbid1c2Ugc3RyaWN0JztcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBXb3JsZCEnXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiY2MuX1JGcHVzaChtb2R1bGUsICdiMTM4ZXhVNmdKS1FMWHhTY01oRHl6eCcsICdmYWxsJyk7XG4vLyBzY3JpcHRzL2ZhbGwuanNcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtb3ZlID0gY2MubW92ZVRvKDQsIHRoaXMubm9kZS5nZXRQb3NpdGlvblgoKSwgLTc4MCk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZSk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsImNjLl9SRnB1c2gobW9kdWxlLCAnM2IyYmQ1U0lYaEhYYXp0anNlUG1hU3MnLCAnbW92ZV9idW5ueScpO1xuLy8gc2NyaXB0cy9tb3ZlX2J1bm55LmpzXG5cblwidXNlIHN0cmljdFwiO1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmhhbmRsZVRvdWNoKCk7XG4gICAgfSxcbiAgICB3aWxsTW92ZTogZmFsc2UsXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZSh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LmdldEN1cnJlbnRUYXJnZXQoKTtcbiAgICAgICAgdmFyIGJveCA9IHRhcmdldC5ub2RlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgIHZhciBwb2ludCA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLndpbGxNb3ZlKSB7XG4gICAgICAgICAgICB0YXJnZXQubm9kZS5zZXRQb3NpdGlvblgocG9pbnQueCAtIDM4NCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgdG91Y2g6IGZ1bmN0aW9uIHRvdWNoKF90b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy53aWxsTW92ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuZ2V0Q3VycmVudFRhcmdldCgpO1xuICAgICAgICB2YXIgYm94ID0gdGFyZ2V0Lm5vZGUuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgdmFyIHBvaW50ID0gX3RvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGlmIChjYy5yZWN0Q29udGFpbnNQb2ludChib3gsIGNjLnAocG9pbnQueCAtIDM4NCwgcG9pbnQueSAtIDY0MCkpKSB7XG4gICAgICAgICAgICB0aGlzLndpbGxNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2g6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoKCkge1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIoe1xuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuVE9VQ0hfT05FX0JZX09ORSxcbiAgICAgICAgICAgIHN3YWxsb3dUb3VjaGVzOiBmYWxzZSxcbiAgICAgICAgICAgIG9uVG91Y2hCZWdhbjogdGhpcy50b3VjaCxcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlZDogdGhpcy5tb3ZlXG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
