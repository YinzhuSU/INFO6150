const sum = require("./sum.js");

test("properly add two numbers", () =>{
    expect(sum(1,2)).toBe(3);
    expect(sum(5,2)).toBe(7);
    expect(sum(100,2)).toBe(102);

});