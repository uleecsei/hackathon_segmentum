Crafty.c('GC', {
    init: function(data) {
        console.log(data);
        this.requires("SpaceObject");
        this.requires("gc"); // подключаем спрайт игрока

        this.time = false;

        this.onHit("trash", function(e) {
            let object = e[0].obj;

            if (!this.time) {
                this.time = Date.now();
            } else {
                let diff = Date.now() - this.time;
                if (diff > 3000) {
                    object.destroy();
                    this.time = false;
                }
            }
        });

    },

    initMove: function(radiusIndex) {
        this.fourway_ai(this.speed, Crafty.viewport.width / 2, Crafty.viewport.height / 2, this.radiusArray[radiusIndex]);
        return this;

    }
})