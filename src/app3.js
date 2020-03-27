import $ from "jquery";
import "./app3.css";

const $square = $("#app3 .square");

$square.on("click", () => {
  $square.toggleClass("active");
  // toggleClass 如果有这个class属性就删掉，如果没有就加上
});
