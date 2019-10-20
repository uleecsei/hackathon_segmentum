Crafty.scene("main", function() {
    Crafty.background(" url(images/background.jpg)");
    Crafty.e("Satellite").attr({ x: 200 }).initMove(5);
    Crafty.e("GC").attr({ x: 0 }).initMove(0);

    Crafty.e("Trash").attr({ x: 100 }).initMove(4);

});