class Gayl extends Supers {
    constructor(x, y, ind, energy) {
        super(x, y, ind, energy);
        this.energy == 20;
    }



    eat() {

        var gaylCord = this.getDirections(2);
        var cord = random(gaylCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
            }
        }
    }






    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norgayl = new Gayl(x, y, this.index);
            eatArr.push(norgayl);

            matrix[y][x] = 2;
            this.multiply = 0;
        }
    }






    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gaylArr) {
            if (this.x == gaylArr[i].x && this.y == gaylArr[i].y) {
                gaylArr.splice(i, 1);
            }
        }
    }
}
