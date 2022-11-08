const subtract = require("./subtract.js");

test("properly subtract two numbers", () => {
    expect(subtract(1, 2)).not.toBe(-2);    
    expect(subtract(1, 2)).toBe(-1);

});