var matrix = []
var side = 10;
var xotArr = [];
var eatArr = [];
var gaylArr = [];
var arjArr = [];
var vorsArr = [];



var bardz = 40;
var layn = 60;
var grassCount = 60;
var eatgrassCount = 35;
var gaylCount = 15;
var arjCount = 8;
var vorsordCount = 8;
var matrix = [];

for (var i = 0; i < bardz; i++) {
    matrix.push([]);
    for (var j = 0; j < layn; j++) {
        matrix[i].push(0);
    }
}



function setup() {

    for (var i = 0; i < grassCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 1;
    }

    for (var i = 0; i < eatgrassCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 2;
    }

    for (var i = 0; i < gaylCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 3;
    }

    for (var i = 0; i < vorsordCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 4;
    }

    for (var i = 0; i < arjCount; i++) {
        var x = Math.floor(random(0, layn));
        var y = Math.floor(random(0, bardz));
        matrix[y][x] = 5;
    }


    noStroke()
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var gayl = new Gayl(j, i, 3);
                gaylArr.push(gayl);
            } else if (matrix[i][j] == 4) {
                var vors = new Vorsord(j, i, 4);
                vorsArr.push(vors);
            } else if (matrix[i][j] == 5) {
                var arj = new Arj(j, i, 5);
                arjArr.push(arj);
            }
        }
    }

}

function draw() {
    console.log(frameCount)
    var color = "green";
    if (frameCount <= 60) {
        color = "green";
    }
    else if (frameCount >= 61 && frameCount <= 120) {
        color = "white";
    }
    else {
        frameCount === 0;
    }
    background('#acacac');

    
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill(color);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('blue');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill('brown');
                rect(j * side, i * side, side, side);
            }
        }
    }



    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in gaylArr) {
        gaylArr[i].eat();
    }

    for (var i in vorsArr) {
        vorsArr[i].kill();
    }

    if (frameCount <= 60) {
        for (var i in arjArr) {
            arjArr[i].eat();
        }
    }
    else if (frameCount >= 61 && frameCount <= 120) {
        return false;
    }
}
