/**
 * @fileoverview Tests for our NPM package. Ensures that it is requirable and contains our data.
 */

let simpleIcons;
/**
 * Ensures that the package is actually loadable.
 */
test("is requirable", () => {
    simpleIcons = require("../index");
});

/**
 * Tests that all the data from our JSON is exported.
 */
test("contains expected icons", () => {
    const json = require("../_data/simple-icons.json");
    expect(Object.keys(simpleIcons)).toHaveLength(json.icons.length);
});

/**
 * Tests that the returned data contains all the properties we expect.
 * Note that this is also checked by JSONLint.
 * This simply ensures that the data is exposed through our JS API.
 */
test("contains expected properties", () => {
    const props = ["title", "hex", "source", "svg"];
    Object.keys(simpleIcons).forEach(
        key => {
            const icon = simpleIcons[key];
            props.forEach(prop => {
                expect(icon).toHaveProperty(prop);
                expect(icon[prop]).toBeTruthy();
            });
        }
    );
});
