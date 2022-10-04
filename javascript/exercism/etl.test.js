const transform = require("./etl");

test("single letter", () => {
	const old = { 1: ["A"] };
	const expected = { a: 1 };
	expect(transform(old)).toEqual(expected);
});
