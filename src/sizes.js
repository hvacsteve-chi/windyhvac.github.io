var docEl = document.documentElement;
var pageWidth = docEl.clientWidth;
console.log(pageWidth + "px wide");

var h = document.querySelector("header");
var m = document.querySelector("main");
var f = document.querySelector("footer");

var hh = h.clientHeight;
var mm = m.clientHeight;
var ff = f.clientHeight;

var hw = h.clientWidth;
var mw = m.clientWidth;
var fw = f.clientWidth;

var headerSpan = document.querySelector("#headerHeight");
var mainSpan = document.querySelector("#mainHeight");
var footerSpan = document.querySelector("#footerHeight");

export default function sizes() {
  headerSpan.innerText = hh + "px";
  mainSpan.innerText = mh + "px";
  footerSpan.innerText = fh + "px";
}
