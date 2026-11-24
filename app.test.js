const test = require("node:test");
const assert = require("node:assert");

const { add, greet } = require("./app");

test("should add two numbers", () => {
    assert.strictEqual(add(10, 20), 30);
});

test("should return a greeting", () => {
    assert.strictEqual(greet("Developer"), "Hello, Developer!");
});
