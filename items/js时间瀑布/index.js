let minute = document.getElementsByClassName('minute')[0];
let second = document.getElementsByClassName('second')[0];
let hour = document.getElementsByClassName('hour')[0];
let one = document.getElementsByClassName('one');
let two = document.getElementsByClassName('two');
let createDom = (str, n, parent) => {
    for(var i = 0; i < n; i ++){
        let dom = document.createElement(str);
        dom.innerText = i + '';
        dom.classList.add('num');
        parent.appendChild(dom);
    }
}

createDom('div', 6, one[0]);
createDom('div', 10, two[0]);
createDom('div', 6, one[1]);
createDom('div', 10, two[1]);
createDom('div', 10, two[2]);
let s1 = second.getElementsByClassName('one')[0];                
let s2 = second.getElementsByClassName('two')[0];
let d1 = minute.getElementsByClassName('one')[0];
let d2 = minute.getElementsByClassName('two')[0];
let h1 = document.getElementsByClassName('column')[0];
let h2 = hour.getElementsByClassName('two')[0];
var timer = null;        
timer = setInterval(() => {
        s2.style.top = s2.offsetTop - 50 + 'px';
    if(s2.offsetTop === -500){
        s2.style.top = 0;
        s1.style.top = s1.offsetTop - 50 + 'px';
        if(s1.offsetTop === -300){
            s1.style.top = 0;
            d2.style.top = d2.offsetTop - 50 + 'px';
            if(d2.offsetTop === -500){
                d2.style.top = 0;
                d1.style.top = d1.offsetTop - 50 + 'px';
                if(d1.offsetTop === -300){
                    d1.style.top = 0;
                    h2.style.top = h2.offsetTop - 50 + 'px';
                    if(h2.offsetTop === -300){
                        h2.style.top = 0;
                        h1.style.top = h1.offsetTop - 50 + 'px';
                        if(h1.offsetTop === -150){
                            h1.style.top = 0;
                        }
                    }
                }
            }
        }
    }
    
}, 1000);
