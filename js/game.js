var Settings = {
    width: 1920, // ширина игрового поля
    height: 1080, // высота
    poligon: 16, // размер полигона 16x16
    level: 1, // текущий уровень
    flower_count: 0 // цветоков на уровне
};

var isPlay = false;

window.onload = function() {
    Crafty.extend({
        /**@
         * #Crafty.randRange
         * @category Misc
         * @sign public Number Crafty.randRange(Number from, Number to)
         * @param from - Lower bound of the range
         * @param to - Upper bound of the range
         * Returns a random number between (and including) the two numbers.
         */
        randRange: function(from, to) {
            return Math.round(Math.random() * (to - from) + from);
        },
    });

    // запускаем первую сцену
    $("body").keydown(function() {
        if (isPlay) {
            return;
        }
        Crafty.init(Settings.width, Settings.height); // инизиализируем игровое поле

        // подгружаем спрайт
        Crafty.sprite(60, "images/sat.png", {
            satellite1: [0, 0],
            satellite2: [1, 0],
            trash1: [2, 0],
            trash2: [3, 0],
            trash3: [4, 0],
            gc: [5, 0]

        });

        Crafty.scene("main");

        isPlay = true;

        $(".hello-wrapper").hide();

        $(".interface-wrapper").show();
    });
};