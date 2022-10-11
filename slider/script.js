let num = 0;
let spans =[];

function move_next() {
    stop();
    let elem = sliders[num];
    let elem2;
    if (num + 1 == sliders.length) {
        num = 0;
        elem2 = sliders[num];
    } else {
        elem2 = sliders[num + 1];
    }
    elem2.style.right = -660;
    let i = 0, j = -660;
    setTimeout(function (){
        elem2.classList.add('display');
    }, 150)
    let id = setInterval(frame, 50);

    function frame() {
        if (i == 660) {
            clearInterval(id);
        } else {
            i = i + 15;
            j = j + 15;
            elem2.style.right = j + 'px';
            elem.style.right = i + 'px';
        }
    }

    num++;

    setTimeout(function () {
            if (elem2.classList.contains('first')) {
                elem2.classList.remove('first');
                num = 0;
                span_back(spans.length-1, num)
            }else {
                span_back(num-1,num)
            }
            elem.classList.remove('display');
            elem.style.right = 0;
            start()
        }
        , 2500)
}

function span_back(prev, next) {
    spans[prev].style.backgroundColor = '';
    spans[next].style.backgroundColor = 'blue';
}

function move_prev() {
    stop();
    let elem = sliders[num];
    let elem2;
    if (num == 0) {
        num = sliders.length;
    }
    elem2 = sliders[num - 1];
    elem2.style.left = -650;
    let i = 0, j = -660;
    elem2.classList.add('display');

    let id = setInterval(frame, 50);

    function frame() {
        if (i == 660) {
            clearInterval(id);
        } else {
            i = i + 15;
            j = j + 15;
            elem2.style.left = j + 'px';
            elem.style.left = i + 'px';
        }
    }

    num--;
    setTimeout(function () {
            if (elem.classList.contains('first')) {
                span_back(spans.length-1-num, num)
            }else {
                span_back(num+1,num)
            }
            elem.classList.remove('display');
            elem.style.left = 0;
            start();
        }
        , 2500)

}



function stop() {
    document.getElementById('next').disabled = true;
    document.getElementById('prev').disabled = true;
}

function start(){
    document.getElementById('next').disabled = false;
    document.getElementById('prev').disabled = false;
}

let sliders = [];

function display(number){

    stop();
    let elem2=sliders[number-1], elem, elem_num;
    for (let i = 0; i < sliders.length ; i++) {
        if (sliders[i].classList.contains('display')){
            elem = sliders[i];
            elem_num= i;
            break;
        }
    }
    if(elem_num!= number-1){

    elem2.style.right = -660;
    let i = 0, j = -660;
    elem2.classList.add('display');
    let id = setInterval(frame, 50);

    function frame() {
        if (i == 660) {
            clearInterval(id);
        } else {
            i = i + 15;
            j = j + 15;
            elem2.style.right = j + 'px';
            elem.style.right = i + 'px';
        }
    }

    num = number-1;
    setTimeout(function () {
            if (elem2.classList.contains('first')) {
                elem2.classList.remove('first');
                num = 0;
            }
            elem.classList.remove('display');
            elem.style.right = 0;
            start()
            spans[num].style.backgroundColor = 'blue';
            spans[elem_num].style.backgroundColor = '';
        }
        , 2500)
    }else {
        start()
    }

}


function init() {
    sliders = document.querySelectorAll('.slider_elem');
    sliders[0].classList.add('display');

    for (let i = 0; i < sliders.length; i++) {
        let span = document.createElement("span");
        span.classList.add('dot');
        span.id = i;
        span.onclick = function (){
            display(i+1);
        }
        document.getElementById('box_spans').appendChild(span);
    }

    spans = document.querySelectorAll('.dot');
    spans[0].style.backgroundColor = 'blue';

}

init();