const Primitive = require('./primitive');

cc.Class({
    extends: Primitive,

    properties: {
        width: {
            default: 100,
            notify () {
                this.delayInit();
            }
        },
        length: {
            default: 100,
            notify () {
                this.delayInit();
            }
        },
        widthSegments: {
            default: 100,
            notify () {
                this.delayInit();
            }
        },
        lengthSegments: {
            default: 100,
            notify () {
                this.delayInit();
            }
        },
    },
    _createData () {
        return cc.primitive.quad();
    }
});
