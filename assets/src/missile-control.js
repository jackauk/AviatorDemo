
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

    },
    
    onLoad () {
        this.reset();
    },
    reset () {
        this.angles = cc.v3();
        this.node.position = cc.v3(0, game.playerDefaultY, 0);
        this.touchPos = cc.v2();

        // this.planeCollisionDisplacementX = 0;
        // this.planeCollisionSpeedX = 0;
        // this.planeCollisionDisplacementY = 0;
        // this.planeCollisionSpeedY = 0;
    },

    start () {
        window.game.node.on('collide-enemy-missile', this.onCollider, this);
        window.game.player.on('launch-missile', this.onLaunch, this);
        this.launching = false;
    },

    onCollider ({dif, distance}) {
        this.launching = false;
        this.node.visible =false;
    },
    onLaunch({startingPoint}){
        this.launching = true;
        this.node.opacity =255;
        this.node.y = startingPoint.y;
        this.node.x = startingPoint.x;
        console.log("onLaunch");
    },


    update (dt) {
        // let touchPos = this.touchPos;

        // let targetY = normalize(touchPos.y, -.75,.75, game.playerDefaultY-game.playerYRange, game.playerDefaultY+game.playerYRange);
        // let targetX = normalize(touchPos.x, -1,1, -game.playerXRange*0.7, -game.playerXRange);

        // this.planeCollisionDisplacementX += this.planeCollisionSpeedX;
        // targetX += this.planeCollisionDisplacementX;

        // this.planeCollisionDisplacementY += this.planeCollisionSpeedY;
        // targetY += this.planeCollisionDisplacementY;
        
        // this.node.y += (targetY - this.node.y) * dt * this.moveSensivity;
        // this.node.x += (targetX - this.node.x) * dt * this.moveSensivity;

        // this.angles.z = (targetY - this.node.y) * dt * this.rotZSensivity;
        // this.angles.x = (this.node.y - targetY) * dt * this.rotXSensivity;
        // this.node.eulerAngles = this.angles;

        // this.planeCollisionSpeedX += (0-this.planeCollisionSpeedX)*dt * 30;
        // this.planeCollisionDisplacementX += (0-this.planeCollisionDisplacementX)*dt *10;
        // this.planeCollisionSpeedY += (0-this.planeCollisionSpeedY)*dt * 30;
        // this.planeCollisionDisplacementY += (0-this.planeCollisionDisplacementY)*dt *10;

        this.angles.x += this.rotateSpeed * dt;
        this.node.eulerAngles = this.angles;
    }
});
