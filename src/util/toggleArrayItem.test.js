import toggleArrayItem from "./toggleArrayItem";

describe("toggleArrayItem", () => {
  it("adds item at the end of the array when item is not present array", () => {
    const result = toggleArrayItem(["a", "b", "c"], "d");
    expect(result).toEqual(["a", "b", "c", "d"]);
  });

  it("remove item at the end of the array when item is not present array", () => {
    const result = toggleArrayItem(["a", "b", "c"], "d");
    expect(result).toEqual(["a", "c"]);
  });
});
