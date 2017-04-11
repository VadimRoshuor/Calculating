/**
 * Created by В on 14.02.2016.
 * Vadim Roshuor
 */

//var button = document.getElementById('but');

window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
//    ctx.lineWidth = 5;
    ctx.strokeStyle = '#00D2FF'
    ctx.font = '25px Arial'
    ctx.fillText('a',175, 55 );
    ctx.fillText('b',195, 120);
    ctx.fillText('c',120, 90);
    ctx.moveTo(130, 50);
    ctx.lineTo(240, 75);
    ctx.lineTo(150, 120);
    ctx.lineTo(130, 50);
    ctx.stroke();
//    ctx.fill();
//    ctx.closePath();

}
    function chet() {

        var P;
        var s;

        var a = Number(document.getElementById("a").value);
        var b = Number(document.getElementById("b").value);
        var c = Number(document.getElementById("c").value);

        if (isNaN(a)) {
            alert('введите ЧИСЛА!!!')
        }
        else if (isNaN(b)) {
            alert('введите ЧИСЛА!!!')
        }
        else if (isNaN(c)) {
            alert('введите ЧИСЛА!!!')

        } else {
            if (a < b + c && b < c + a && c < a + b) {
                P = a + b + c;
                var p = P / 2;
                s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
                s = s.toFixed(2);

            } else {
                alert("такого треугольника не существует")
            }


//        alert('Периметр треугольника ' + '=' + P);
//        console.log(s)
            var wrapper = document.getElementsByClassName('wrapper')[0];
            var result = document.createElement('div');
            result.className = 'alert';
            wrapper.appendChild(result);

            var paragraph1 = document.createElement('p');
            result.appendChild(paragraph1);
            var paragraph2 = document.createElement('p');
            result.appendChild(paragraph2);


            paragraph1.innerHTML = ('периметр треугольника' + '=' + P);
            paragraph2.innerHTML = ('площадь треугольника' + '=' + s);


        }
    }

function reset(){
    var res = document.getElementById('reset');
    a.value = "";
    b.value = "";
    c.value = "";

}
