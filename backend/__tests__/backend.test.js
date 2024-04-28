const { single_nest, nest } = require("../routes/routes");

// All tests for the nest function
describe("nest function", () => {
  // Test when all comments are top-level (no parent)
  test("should handle top-level comments", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: null },
    ];
    const nestedComments = nest(comments);
    expect(nestedComments).toEqual(comments);
  });

  // Test when all comments are nested under a single parent
  test("should handle nested comments", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: 1 },
      { commentId: 3, parentcommentid: 1 },
    ];
    const nestedComments = nest(comments);
    expect(nestedComments).toEqual([
      {
        commentId: 1,
        parentcommentid: null,
        children: [
          { commentId: 2, parentcommentid: 1 },
          { commentId: 3, parentcommentid: 1 },
        ],
      },
    ]);
  });

  // Test when the comments array is empty
  test("should handle empty array", () => {
    const comments = [];
    const nestedComments = nest(comments);
    expect(nestedComments).toEqual([]);
  });

  // Test when comments are nested at multiple levels
  test("should handle multi-level nested comments", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: 1 },
      { commentId: 3, parentcommentid: 2 },
    ];
    const nestedComments = nest(comments);
    expect(nestedComments).toEqual([
      {
        commentId: 1,
        parentcommentid: null,
        children: [
          {
            commentId: 2,
            parentcommentid: 1,
            children: [{ commentsid: 3, parentcommentid: 2 }],
          },
        ],
      },
    ]);
  });

  // Test when there are multiple top-level comments
  test("should handle multiple top-level comments", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: null },
      { commentId: 3, parentcommentid: 1 },
    ];
    const nestedComments = nest(comments);
    expect(nestedComments).toEqual([
      {
        commentId: 1,
        parentcommentid: null,
        children: [{ commentsid: 3, parentcommentid: 1 }],
      },
      { commentId: 2, parentcommentid: null },
    ]);
  });
});

// All tests for the single_nest function
describe("single_nest function", () => {
  // Test when the commentID does not exist in the comments
  test("should handle non-existent commentID", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: 1 },
    ];
    const nestedComments = single_nest(comments, 3);
    expect(nestedComments).toEqual([]);
  });

  // Test when the commentID is a top-level comment
  test("should handle top-level commentID", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: 1 },
    ];
    const nestedComments = single_nest(comments, 1);
    expect(nestedComments).toEqual([
      {
        commentsid: 1,
        parentcommentid: null,
        children: [{ commentsid: 2, parentcommentid: 1 }],
      },
    ]);
  });

  // Test when the commentID is a nested comment
  test("should handle nested commentID", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: 1 },
    ];
    const nestedComments = single_nest(comments, 2);
    expect(nestedComments).toEqual([{ commentsid: 2, parentcommentid: 1 }]);
  });

  // Test when the commentID has children
  test("should handle commentID with children", () => {
    const comments = [
      { commentId: 1, parentcommentid: null },
      { commentId: 2, parentcommentid: 1 },
      { commentId: 3, parentcommentid: 2 },
    ];
    const nestedComments = single_nest(comments, 2);
    expect(nestedComments).toEqual([
      {
        commentsid: 2,
        parentcommentid: 1,
        children: [{ commentsid: 3, parentcommentid: 2 }],
      },
    ]);
  });

  // Test when the commentID is null
  test("should handle null commentID", () => {
    const comments = [
      { commentsid: 1, parentcommentid: null },
      { commentsid: 2, parentcommentid: 1 },
    ];
    const nestedComments = single_nest(comments, null);
    expect(nestedComments).toEqual([]);
  });

  // Test when the comments array is empty
  test("should handle empty array", () => {
    const comments = [];
    const nestedComments = single_nest(comments, 1);
    expect(nestedComments).toEqual([]);
  });
});
