cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },
    bunny: null,
    carrot: null,

    // use this for initialization
    onLoad: function () {
        cc.log('papa');
        this.bunny = this.node.getChildByName('bunny_idle');
        this.carrot = this.node.getChildByName('carrot_left');
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
      if(!this.bunny || !this.carrot){
          return;
      }
      
      if(this.carrot.y < -770){
          this.carrot.y = 711;
          this.carrot.stopAllActions();
          var move = cc.moveTo(Math.floor((Math.random() * 5) + 2), this.carrot.getPositionX(), -780);
          this.carrot.runAction(move);
      }
      
      var bunnyBox = this.bunny.getBoundingBox();
      var carrotBox = this.carrot.getBoundingBox();
      if(cc.rectIntersectsRect(bunnyBox, carrotBox)){
            var action = cc.blink(1, 3);
            this.bunny.runAction(action);
       }
    },
});
