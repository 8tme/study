var hasimg = document.getElementsByClassName('hasimg')[0];
var img = hasimg.getElementsByClassName('img')[0];
hasimg.onclick = function () { 
    console.log(this);
    img.classList.toggle('fadeout');
 }


