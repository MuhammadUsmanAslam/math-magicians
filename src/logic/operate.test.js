import operate from "./operate";

test("Test for operate.js", () => {
    expect(operate("80", "5", "÷")).toEqual("16");
})