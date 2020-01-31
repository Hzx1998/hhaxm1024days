var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
W = canvas.width = window.innerWidth;
H = canvas.height = window.innerHeight;
gridY = 6, gridX = 6;

type = "ball";

colors = [
    '#00FFFF', '#FFAEB9'
];

var message = document.getElementById('message'),
    gravity = document.getElementById('gra'),
    duration = document.getElementById('dur'),
    speed = document.getElementById('speed'),
    radius = document.getElementById('rad'),
    resolution = document.getElementById('res');

graVal = 0;
durVal = 0.3;
spdVal = 0;
radVal = 1;
resVal = 1;
if (IsPC()) {
    radVal = 1;
} else {
    radVal = 0.1
}
var word = new Shape(W / 2, H / 2, '滑滑♥爱♥小眉的');
word.getValue()

function Change() {
    spdVal = 2;
    radVal = 4;
}


var worda = ""

function ChangeYears() {
    spdVal = 0;
    radVal = 1;
    var firstd = '2017/04/13 00:00:00';
    var secondd = new Date();
    var subdate = secondd.getTime() - new Date(firstd).getTime();
    var days = Math.floor(subdate / (24 * 60 * 60 * 1000)) + 1
    var hours = Math.floor(subdate / (60 * 60 * 1000)) + 1;
    worda = "第" + days + "天";
    context.clearRect(0, 0, W, H);
    word.placement = [];
    word.text = worda;
    word.getValue()
}

function ChangeHours() {
    radVal = 1.1;
    var firstd = '2017/04/13 00:00:00';
    var secondd = new Date();
    var subdate = secondd.getTime() - new Date(firstd).getTime();
    var hours = Math.floor(subdate / (60 * 60 * 1000)) + 1;
    worda = hours + "小时";
    context.clearRect(0, 0, W, H);
    word.placement = [];
    word.text = worda;
    word.getValue()
}

function ChangeMinutes() {
    radVal = 1.2;
    var firstd = '2017/04/13 00:00:00';
    var secondd = new Date();
    var subdate = secondd.getTime() - new Date(firstd).getTime();
    var minutes = Math.floor(subdate / (60 * 1000)) + 1;
    worda = minutes + "分钟";
    context.clearRect(0, 0, W, H);
    word.placement = [];
    word.text = worda;
    word.getValue()
}

function ChangeSeconds() {
    radVal = 1.5;
    var firstd = '2017/04/13 00:00:00';
    var secondd = new Date();
    var subdate = secondd.getTime() - new Date(firstd).getTime();
    var minutes = Math.floor(subdate / 1000) + 1;
    worda = minutes + "♡秒";
    context.clearRect(0, 0, W, H);
    word.placement = [];
    word.text = worda;
    word.getValue()
}

function Changeword() {
    context.clearRect(0, 0, W, H);
    word.placement = [];
    word.text = worda;
    spdVal = 0;
    radVal = 1;
    word.getValue()
}
setTimeout("Change()", "2000");
setTimeout(() => {
    graVal = 0.05;
    ChangeYears()
}, 3000);
setTimeout(() => {
    graVal = -0.05
    ChangeHours()
}, 5000);
setTimeout(() => {
    graVal = 0.05
    ChangeMinutes()
}, 7000);
setTimeout(() => {
    graVal = 0.02;
    setInterval(() => {
        graVal = -graVal;
        ChangeSeconds()
    }, 999);
}, 9000);
(function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, W, H);

    for (var i = 0; i < word.placement.length; i++) {
        word.placement[i].update();
    }
}())

//resize
function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}