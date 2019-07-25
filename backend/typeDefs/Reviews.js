const Reviews = `
  type Reviews {
    id: Int,
    page: Int,
    results: [ReviewResult],
    total_pages: Int,
    total_results: Int
  }
`;

const ReviewResult = `
  type ReviewResult {
    id: Int,
    author: String,
    content: String,
    url: String,
  }
`;

module.exports = { Reviews, ReviewResult };