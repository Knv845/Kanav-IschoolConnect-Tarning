"use strict";
let message = "";
function saymessage(part1, part2, part3) {
    return part1 + "" + part2;
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".log").innerHTML = saymessage("hello", "wrold");
});
