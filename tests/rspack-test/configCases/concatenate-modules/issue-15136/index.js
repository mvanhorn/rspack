import { chunk, startsWith, uniq } from "lodash-es";

it("should concatenate modules when tree-shaken modules are not in chunks", () => {
	expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
	expect(startsWith("rspack", "rsp")).toBe(true);
	expect(uniq([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
});
