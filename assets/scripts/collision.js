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

    // use this for initialization
    onLoad: function () {
        this.bunny = this.node.getChildByName('bunny_idle');
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

      if(!this.bunny){
          return;
      }
      
      var bunnyBox = this.bunny.getBoundingBox();
      var carrotBox = this.node.getBoundingBox();
      if(cc.rectIntersectsRect(bunnyBox, carrotBox)){
            this.bunny.setOpacity(0);
            var action = cc.blink(2, 10);
            this.bunny.runAction(action);
       }
    },
});
