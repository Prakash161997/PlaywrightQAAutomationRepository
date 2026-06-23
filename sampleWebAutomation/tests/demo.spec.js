
const{test, expect} = require('@playwright/test');


test("1st", function display() {
    console.log("Hello World");
})

test("2nd", function () {
    console.log(" 2ndHello World");
})

test("3rd", ()=> {
    console.log(" 3rd Hello World");
})