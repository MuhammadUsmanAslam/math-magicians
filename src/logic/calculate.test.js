import calculate from "./calculate";

const givenObj = {
    total: "5",
    next: "3",
    operation: "+"
}

const expectedObj = { "next": null, "operation": null, "total": "8" };

test("Test calculate function", () => {
    expect(calculate(givenObj, "=")).toEqual(expectedObj);
})