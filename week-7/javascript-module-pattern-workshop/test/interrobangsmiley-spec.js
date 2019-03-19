describe("interrobangsmiley", function() {
  it("should add two question marks and an exclamation mark to passed string", function() {
    // expect(interrobangsmiley(exclaim, question, "hello")).toEqual("hello??!");
    expect(interrobangsmiley(Smiley, exclaim, question, "david")).toEqual ("david??! :)");
  });
});