var t1_01 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r1_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t1_01").value;
  var print = document.getElementsByClassName("t1_r1_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t1_02 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r2_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t1_02").value;
  var print = document.getElementsByClassName("t1_r2_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t1_03 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r3_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t1_03").value;
  var print = document.getElementsByClassName("t1_r3_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t1_04 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r4_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t1_04").value;
  var print = document.getElementsByClassName("t1_r4_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t1_05 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r5_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t1_05").value;
  var print = document.getElementsByClassName("t1_r5_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t1_sum = function () {
  var print1 = document.getElementsByClassName("t1_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t1_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t1_r3_05")[0].innerText;
  var print4 = document.getElementsByClassName("t1_r4_05")[0].innerText;
  var print5 = document.getElementsByClassName("t1_r5_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print5 = print5.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);
  print5 = Number(print5);
  var print = document.getElementsByClassName("t1_sum")[0];
  print.innerHTML =
    (print1 + print2 + print3 + print4 + print5 ).toLocaleString();
};

var t1_input = function(){
  var display1 = document.getElementById("t1_01").value;
  var display2 = document.getElementById("t1_02").value;
  var display3 = document.getElementById("t1_03").value;
  var display4 = document.getElementById("t1_04").value;
  var display5 = document.getElementById("t1_05").value;
  display1 = Number(display1)
  display2 = Number(display2)
  display3 = Number(display3)
  display4 = Number(display4)
  display5 = Number(display5)
  var print = document.getElementsByClassName("t1_input")[0];
  print.innerHTML =
    (display1 + display2 + display3 + display4 + display5 ).toLocaleString();
}

var t2_01 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r1_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t2_01").value;
  var print = document.getElementsByClassName("t2_r1_05")[0];
  print.innerHTML = ( t1_r1 * display).toLocaleString();
};

var t2_02 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r2_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t2_02").value;
  var print = document.getElementsByClassName("t2_r2_05")[0];
  print.innerHTML = ( t1_r1 * display).toLocaleString();
};

var t2_03 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r3_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t2_03").value;
  var print = document.getElementsByClassName("t2_r3_05")[0];
  print.innerHTML = ( t1_r1 * display).toLocaleString();
};

var t2_sum = function () {
  var print1 = document.getElementsByClassName("t2_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t2_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t2_r3_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  var print = document.getElementsByClassName("t2_sum")[0];
  print.innerHTML = (print1 + print2 + print3).toLocaleString();
};

var t2_input = function(){
  var display1 = document.getElementById("t2_01").value;
  var display2 = document.getElementById("t2_02").value;
  var display3 = document.getElementById("t2_03").value;
  display1 = Number(display1)
  display2 = Number(display2)
  display3 = Number(display3)
  var print = document.getElementsByClassName("t2_input")[0];
  print.innerHTML =
    (display1 + display2 + display3 ).toLocaleString();
}

var t3_01 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r1_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t3_01").value;
  var print = document.getElementsByClassName("t3_r1_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t3_02 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r2_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t3_02").value;
  var print = document.getElementsByClassName("t3_r2_05")[0];
print.innerHTML = (t1_r1 * display).toLocaleString();
};

var t3_03 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r3_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t3_03").value;
  var print = document.getElementsByClassName("t3_r3_05")[0];
print.innerHTML = (t1_r1 * display).toLocaleString();
};


var t3_sum = function () {
  var print1 = document.getElementsByClassName("t3_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t3_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t3_r3_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);

  var print = document.getElementsByClassName("t3_sum")[0];
  print.innerHTML = (print1 + print2 + print3 ).toLocaleString();
};

var t3_input = function(){
  var display1 = document.getElementById("t3_01").value;
  var display2 = document.getElementById("t3_02").value;
  var display3 = document.getElementById("t3_03").value;
  display1 = Number(display1)
  display2 = Number(display2)
  display3 = Number(display3)
  var print = document.getElementsByClassName("t3_input")[0];
  print.innerHTML =
    (display1 + display2 + display3 ).toLocaleString();
}

var t4_01 = function () {
  var t1_r1 = document.getElementsByClassName("t4_r1_01")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t4_01").value;
  var print = document.getElementsByClassName("t4_r1_05")[0];
  print.innerHTML = (t1_r1 * display).toLocaleString();
};


var t4_sum = function () {
  var print1 = document.getElementsByClassName("t4_r1_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print1 = Number(print1);

  var print = document.getElementsByClassName("t4_sum")[0];
  print.innerHTML = (print1).toLocaleString();
};

var t4_input = function(){
  var display1 = document.getElementById("t4_01").value;
  display1 = Number(display1)
  var print = document.getElementsByClassName("t4_input")[0];
  print.innerHTML =
    (display1).toLocaleString();
}

var all_sum = function () {
  var print1 = document.getElementsByClassName("t1_sum")[0].innerText;
  var print2 = document.getElementsByClassName("t2_sum")[0].innerText;
  var print3 = document.getElementsByClassName("t3_sum")[0].innerText;
  var print4 = document.getElementsByClassName("t4_sum")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);
  var print = document.getElementsByClassName("all_sum")[0];
  print.innerHTML = (print1 + print2 + print3 + print4).toLocaleString();
};

var all_sum2 = function () {
  var print1 = document.getElementsByClassName("t1_sum")[0].innerText;
  var print2 = document.getElementsByClassName("t2_sum")[0].innerText;
  var print3 = document.getElementsByClassName("t3_sum")[0].innerText;
  var print4 = document.getElementsByClassName("t4_sum")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);
  var print = document.getElementsByClassName("all_sum2")[0];
  print.innerHTML = (Math.round(print1 + print2 + print3 + print4) * 1.1).toLocaleString();
};

var all_input = function () {
  var print1 = document.getElementsByClassName("t1_input")[0].innerText;
  var print2 = document.getElementsByClassName("t2_input")[0].innerText;
  var print3 = document.getElementsByClassName("t3_input")[0].innerText;
  var print4 = document.getElementsByClassName("t4_input")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);
  var print = document.getElementsByClassName("all_input")[0];
  print.innerHTML = (print1).toLocaleString();
};

function show01() {
  $(".t1").toggleClass("on");
}
function show02() {
  $(".t2").toggleClass("on");
}
function show03() {
  $(".t3").toggleClass("on");
}
function show04() {
  $(".t4").toggleClass("on");
}

var t1_l1 = function(){
  var t1_r1 = document.getElementsByClassName("t1_r1_01")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display1 = document.getElementById("t1_01").value;

  var t1_r2 = document.getElementsByClassName("t1_r2_01")[0].innerText;
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r2 = Number(t1_r2);
  var display2 = document.getElementById("t1_02").value;

  var t1_r3 = document.getElementsByClassName("t1_r3_01")[0].innerText;
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r3 = Number(t1_r3);
  var display3 = document.getElementById("t1_03").value;

  var t1_r4 = document.getElementsByClassName("t1_r4_01")[0].innerText;
  t1_r4 = t1_r4.replace(/,/g, '');
  t1_r4 = Number(t1_r4);
  var display4 = document.getElementById("t1_04").value;

  var t1_r5 = document.getElementsByClassName("t1_r5_01")[0].innerText;
  t1_r5 = t1_r5.replace(/,/g, '');
  t1_r5 = Number(t1_r5);
  var display5 = document.getElementById("t1_05").value;

  var print = document.getElementsByClassName("t1_l1")[0];
  print.innerHTML = ((t1_r1 * display1) + (t1_r2 * display2) +(t1_r3 * display3) +(t1_r4 * display4) +(t1_r5 * display5)).toLocaleString();
}

var t1_l2 = function(){
  var t1_r1 = document.getElementsByClassName("t1_r1_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display1 = document.getElementById("t1_01").value;

  var t1_r2 = document.getElementsByClassName("t1_r2_02")[0].innerText;
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r2 = Number(t1_r2);
  var display2 = document.getElementById("t1_02").value;

  var t1_r3 = document.getElementsByClassName("t1_r3_02")[0].innerText;
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r3 = Number(t1_r3);
  var display3 = document.getElementById("t1_03").value;

  var t1_r4 = document.getElementsByClassName("t1_r4_02")[0].innerText;
  t1_r4 = t1_r4.replace(/,/g, '');
  t1_r4 = Number(t1_r4);
  var display4 = document.getElementById("t1_04").value;

  var t1_r5 = document.getElementsByClassName("t1_r5_02")[0].innerText;
  t1_r5 = t1_r5.replace(/,/g, '');
  t1_r5 = Number(t1_r5);
  var display5 = document.getElementById("t1_05").value;

  var print = document.getElementsByClassName("t1_l2")[0];
  print.innerHTML = ((t1_r1 * display1) + (t1_r2 * display2) +(t1_r3 * display3) +(t1_r4 * display4) +(t1_r5 * display5)).toLocaleString();
}

var t2_l1 = function(){
  var t1_r1 = document.getElementsByClassName("t2_r1_01")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display1 = document.getElementById("t2_01").value;

  var t1_r2 = document.getElementsByClassName("t2_r2_01")[0].innerText;
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r2 = Number(t1_r2);
  var display2 = document.getElementById("t2_02").value;

  var t1_r3 = document.getElementsByClassName("t2_r3_01")[0].innerText;
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r3 = Number(t1_r3);
  var display3 = document.getElementById("t2_03").value;

  var print = document.getElementsByClassName("t2_l1")[0];
  print.innerHTML = ((t1_r1 * display1) + (t1_r2 * display2) +(t1_r3 * display3) ).toLocaleString();
}

var t2_l2 = function(){
  var t1_r1 = document.getElementsByClassName("t2_r1_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display1 = document.getElementById("t2_01").value;

  var t1_r2 = document.getElementsByClassName("t2_r2_02")[0].innerText;
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r2 = Number(t1_r2);
  var display2 = document.getElementById("t2_02").value;

  var t1_r3 = document.getElementsByClassName("t2_r3_02")[0].innerText;
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r3 = Number(t1_r3);
  var display3 = document.getElementById("t2_03").value;

  var print = document.getElementsByClassName("t2_l2")[0];
  print.innerHTML = ((t1_r1 * display1) + (t1_r2 * display2) +(t1_r3 * display3) ).toLocaleString();
}

var t3_l1 = function(){
  var t1_r1 = document.getElementsByClassName("t3_r1_01")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display1 = document.getElementById("t3_01").value;

  var t1_r2 = document.getElementsByClassName("t3_r2_01")[0].innerText;
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r2 = Number(t1_r2);
  var display2 = document.getElementById("t3_02").value;

  var t1_r3 = document.getElementsByClassName("t3_r3_01")[0].innerText;
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r3 = Number(t1_r3);
  var display3 = document.getElementById("t3_03").value;

  var print = document.getElementsByClassName("t3_l1")[0];
  print.innerHTML = ((t1_r1 * display1) + (t1_r2 * display2) +(t1_r3 * display3) ).toLocaleString();
}

var t3_l2 = function(){
  var t1_r1 = document.getElementsByClassName("t3_r1_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display1 = document.getElementById("t3_01").value;

  var t1_r2 = document.getElementsByClassName("t3_r2_02")[0].innerText;
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r2 = Number(t1_r2);
  var display2 = document.getElementById("t3_02").value;

  var t1_r3 = document.getElementsByClassName("t3_r3_02")[0].innerText;
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r3 = Number(t1_r3);
  var display3 = document.getElementById("t3_03").value;

  var print = document.getElementsByClassName("t3_l2")[0];
  print.innerHTML = ((t1_r1 * display1) + (t1_r2 * display2) +(t1_r3 * display3) ).toLocaleString();
}

var all_l1 = function(){
  var print1 = document.getElementsByClassName("t1_l1")[0].innerText;
  var print2 = document.getElementsByClassName("t2_l1")[0].innerText;
  var print3 = document.getElementsByClassName("t3_l1")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  var print = document.getElementsByClassName("all_l1")[0];
  print.innerHTML = (print1 + print2 + print3).toLocaleString();
}

var all_l2 = function(){
  var print1 = document.getElementsByClassName("t1_l2")[0].innerText;
  var print2 = document.getElementsByClassName("t2_l2")[0].innerText;
  var print3 = document.getElementsByClassName("t3_l2")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  var print = document.getElementsByClassName("all_l2")[0];
  print.innerHTML = (print1 + print2 + print3).toLocaleString();
}

function show05() {
  $(".toggle").toggleClass("on");
}