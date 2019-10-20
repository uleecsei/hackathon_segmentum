Crafty.c('Trash', {
    init: function(data) {
        console.log(data);
        this.requires("SpaceObject");
        this.requires("trash" + Crafty.randRange(1, 3)); // подключаем спрайт игрока
        this.requires("trash");
    }
})