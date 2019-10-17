const bd = document.getElementsByClassName('board')[0];
const can = document.getElementById('can');
const pen = can.getContext('2d');
const rangeInput = document.getElementById('wd');
const colorInput = document.getElementById('color');


let key = false;
    can.onmousedown = (e) => {
        pen.beginPath();
        pen.lineWidth = rangeInput.value * 0.2;
        pen.strokeStyle = colorInput.value;
        key = true;
        let x = e.pageX - 30;
        let y = e.pageY - 30;
        pen.moveTo(x, y);
        can.onmousemove = (e) =>{
            if(key){
                    pen.lineTo(e.pageX-30, e.pageY-30);
                    pen.stroke();
                    // pen.closePath();
                   
                }
            }     
        can.onmouseup = () =>{
            key = false;
        }  
    }
 

const clearA = document.getElementById('cA');
const clearP = document.getElementById('cP');
const revoke = document.getElementById('revoke');
let imgsArr = [];
clearA.onclick = () => {
    pen.clearRect(0, 0, 700, 340);
}
clearP.onclick = () => {
    let lock = false;
    can.onmousedown = (e) => {
        let x = e.pageX - 30;
        let y = e.pageY - 30;
        pen.moveTo(x, y);
        lock = true;
        var img = pen.getImageData(0, 0, can.offsetWidth, can.offsetHeight);
            imgsArr.push(img);
        can.onmousemove = (e) => {
            if(lock){
                pen.clearRect(e.pageX-30, e.pageY-30, 2, 2);
            }
        }
        can.onmouseup = () => {
            lock = false;
        }
    }
}
revoke.onclick = () => {
    if (imgsArr.length > 0) {
        pen.putImageData(imgsArr.pop(), 0, 0);
    }
}