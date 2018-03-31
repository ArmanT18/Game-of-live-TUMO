class Vorsord extends Supers {
    constructor(x, y, ind, energy) {
        super(x, y, ind, energy);
        this.energy == 10;
    }

    kill() {

        var vorsCord = this.getDirections(3);
        var eatgCord = this.getDirections(2);
        var arjCord = this.getDirections(5);
        var cord = random(vorsCord);
        var egcord = random(eatgCord);
        var acord = random(arjCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gaylArr) {
                if (x == gaylArr[i].x && y == gaylArr[i].y) {
                    gaylArr.splice(i, 1);
                }
            }
        }
        else if (acord) {

            this.multiply++;

            var x = acord[0];
            var y = acord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in arjArr) {
                if (x == arjArr[i].x && y == arjArr[i].y) {
                    arjArr.splice(i, 1);
                }
            }
        }

        else if (egcord) {

            this.multiply++;

            var x = egcord[0];
            var y = egcord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
        }

        else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();

            }
        }
    }
}