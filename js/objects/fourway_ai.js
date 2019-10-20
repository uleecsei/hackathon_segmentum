Crafty.c('FourwayAI', {
    _speed: 3,
    _interval: null,
    _Lx: null,
    _Ly: null,
    _angel: null,
    _radius: 262,
    _isinterval: false,

    init: function() {
        this._movement = { x: 0, y: 0 };

        this.bind("EnterFrame", function() {
            if (this.disableControls) return;

            if (this._movement.x !== 0) {
                this.x = this._movement.x;
            }
            if (this._movement.y !== 0) {
                this.y = this._movement.y;
            }
        });
    },

    fourway_ai: function(speed, x, y, radius) {
        console.log("Speed : " + speed);
        this._speed = speed;
        this._Ly = y;
        this._Lx = x;
        this._radius = radius;

        var kclass = this;
        if (!this._interval) {
            this.make_step();
            this._angel = Crafty.randRange(0, 628) / 100;
            this._interval = setInterval(function() {
                kclass.make_step();
            }, 1000 * this._speed);
        }
    },

    make_step: function() {
        this._movement.x = Math.cos(this._angel) * this._radius + this._Lx + 72 - 30;
        this._movement.y = Math.sin(this._angel) * this._radius + this._Ly + 22 - 30;

        this._angel += 0.005;


        //this.trigger('NewDirection', this._movement);
    }
});