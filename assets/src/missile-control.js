
function normalize(v,vmin,vmax,tmin, tmax){
    let nv = Math.max(Math.min(v,vmax), vmin);
    let dv = vmax-vmin;
    let pc = (nv-vmin)/dv;
    let dt = tmax-tmin;
    let tv = tmin + (pc*dt);
    return tv;
}

cc.Class({
    extends: cc.Component,

    properties: {
        moveSensivity: 5,
        rotXSensivity: 0.8,
        rotZSensivity: 0.4,
        afterburn: cc.Node

    },
    
    onLoad () {
        this.reset();
    },
    reset () {
        this.angles = cc.v3();
        this.touchPos = cc.v2();

    },

    start () {
        window.game.node.on('collide-enemy-missile', this.onCollider, this);
          this.afterburn.opacity=0;
        this.timeCount = 0;
        this.afterburn.opacity=0;
    },

    onCollider ({dif, distance}) {
        this.launching = false;
        this.node.visible =false;
    },
    update (dt) {
        if( this.timeCount < 0.2)
        {
            this.timeCount+=dt;

            this.node.y -= dt *200;
            this.node.x -=  dt * this.moveSensivity;
            return;
        }
        this.afterburn.opacity=255;
        // let touchPos = this.touchPos;

        // let targetY = normalize(touchPos.y, -.75,.75, game.playerDefaultY-game.playerYRange, game.playerDefaultY+game.playerYRange);
        // let targetX = normalize(touchPos.x, -1,1, -game.playerXRange*0.7, -game.playerXRange);

        // this.planeCollisionDisplacementX += this.planeCollisionSpeedX;
        // targetX += this.planeCollisionDisplacementX;

        // this.planeCollisionDisplacementY += this.planeCollisionSpeedY;
        // targetY += this.planeCollisionDisplacementY;
        
        this.node.y -= dt;
        this.node.x +=  dt * this.moveSensivity;

       //  this.angles.y +=  dt * this.rotZSensivity;
        this.angles.x +=  dt * this.rotXSensivity;
        // this.node.eulerAngles = this.angles;

        // this.planeCollisionSpeedX += (0-this.planeCollisionSpeedX)*dt * 30;
        // this.planeCollisionDisplacementX += (0-this.planeCollisionDisplacementX)*dt *10;
        // this.planeCollisionSpeedY += (0-this.planeCollisionSpeedY)*dt * 30;
        // this.planeCollisionDisplacementY += (0-this.planeCollisionDisplacementY)*dt *10;

    //    this.angles.x += this.rotateSpeed * dt;
      //   this.node.eulerAngles = this.angles;
    }
});
