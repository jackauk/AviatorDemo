
const Primitive = require('./primitive');

cc.Class({
    extends: Primitive,

    properties: {
        radius: {
            default: 25,
            notify () {
                this.delayInit();
            }
        },

        tube : {
            default: 32,
            notify () {
                this.delayInit();
            }
        },
        radialSegments  : {
            default: 32,
            notify () {
                this.delayInit();
            }
        },
        tubularSegments  : {
            default: 32,
            notify () {
                this.delayInit();
            }
        } ,
        arc   : {
            default: 32,
            notify () {
                this.delayInit();
            }
        }
    },

    _createData () {
        return cc.primitive.torus(this.radius,this.tube, {
            radialSegments: this.radialSegments ,
            tubularSegments: this.tubularSegments ,
            arc: this.arc ,
            });
    }
});
