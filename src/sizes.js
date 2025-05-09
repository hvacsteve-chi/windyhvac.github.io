var docEl = document.documentElement;
var pageWidth = docEl.clientWidth;
alert(pageWidth + " px wide");

var h = document.querySelector("header");
var m = document.querySelector("main");
var f = document.querySelector("footer");
console.log(h, m, f);

var hh = h.clientHeight;
var mh = m.clientHeight;
var fh = f.clientHeight;
console.log(hh, mh, fh);

var hw = h.clientWidth;
var mw = m.clientWidth;
var fw = f.clientWidth;
console,log(hw, mw, fw);

var headerSpan = document.querySelector("#headerHeight");
var mainSpan = document.querySelector("#mainHeight");
var footerSpan = document.querySelector("#footerHeight");
console.log(headerSpan, mainSpan, footerSpan);

export default function sizes() {
  headerSpan.innerText = hh + "px";
  mainSpan.innerText = mh + "px";
  footerSpan.innerText = fh + "px";
};
