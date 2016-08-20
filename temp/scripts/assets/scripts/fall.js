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