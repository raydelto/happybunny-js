cc.Class({
    extends: cc.Component,

    onLoad: function () {
        this.handleTouch();
    },
    willMove: false,
    move:function(touch, event){
        var target = event.getCurrentTarget();
        var box = target.node.getBoundingBox();
        // console.log(box);
        var point = touch.getLocation();
        // console.log(point);
        if(this.willMove){
            target.node.setPositionX(point.x - 384);
        }
        return false;
    },
    touch:function(touch, event){
      this.willMove = false;
      var target = event.getCurrentTarget();
      var box = target.node.getBoundingBox();
      var point = touch.getLocation();
      if(cc.rectContainsPoint(box,cc.p(point.x - 384, point.y - 640))){
            this.willMove = true;
       }

      return true;
    },

    handleTouch:function(){
      cc.eventManager.addListener({
          event: cc.EventListener.TOUCH_ONE_BY_ONE,
          swallowTouches: false,
          onTouchBegan: this.touch,
          onTouchMoved: this.move
      },this);  
    }
});