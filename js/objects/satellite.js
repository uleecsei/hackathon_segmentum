Crafty.c('Satellite', {
    init: function(data) {
        console.log(data);
        this.requires("SpaceObject");
        this.requires("satellite" + Crafty.randRange(1, 2)); // подключаем спрайт игрока
        this.time = false

        this.onHit('trash', function(e) {
            let object = e[0].obj;
            if (!this.time) {
                this.time = Date.now();
            } else {
                let diff = Date.now() - this.time;
                if (diff > 100) {
                    console.log("colision");
                    object.initMove(--object.radiusIndex);
                    this.time = false;
                }
            }
        });

    }
})