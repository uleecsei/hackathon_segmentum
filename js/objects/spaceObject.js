Crafty.c('SpaceObject', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("FourwayAI"); // подключаем компонент движения
        this.requires("Collision");
        this.radiusArray = [226, 262, 292, 342, 388, 429];

        this.speed = Crafty.randRange(50, 100) / 6000;

        this.collision();
    },
    initMove: function(radiusIndex) {
        this.fourway_ai(this.speed, Crafty.viewport.width / 2, Crafty.viewport.height / 2, this.radiusArray[radiusIndex]);
        this.radiusIndex = radiusIndex;
        return this;
    }
})