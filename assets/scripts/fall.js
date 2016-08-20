cc.Class({
    extends: cc.Component,

    onLoad: function () {
        var move = cc.moveTo(4, this.node.getPositionX(), -780);
        this.node.runAction(move);

    }
});
