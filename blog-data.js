// blog-data.js - Single source of truth for all blog content.
// Both index.html and blog.html read from this file.
// To add a new post, add an entry to the top of the array.
//
// Two types:
//   "note"    - short text, shows inline (no separate page needed)
//   "post"    - long article with its own page in /blog/
//
// Fields:
//   type:     "note" or "post"
//   date:     display date string
//   text:     the note content (notes only)
//   image:    optional image/gif path (notes only)
//   title:    post title (posts only)
//   desc:     one-line description for the listing (posts only)
//   url:      link to the full post (posts only)

var blogData = [

  {
    type: "note",
    date: "June 26, 2026",
    text: "Another Prime Day in the books. First one live for the team! Day 1, built an in-event projection to give leadership a grounded read instead of gut feel for performance. Flagged my own upper-bound risk up front. Day 2, then walked it down when a second day of actuals came in, ended up 3bps off actuals for the week. That\u2019s the job."
  },

  {
    type: "post",
    date: "June 2026",
    title: "Leadership was spending hours debating whether KPI movements mattered. I built a model to answer the question.",
    desc: "Every week, leadership reviewed business metrics and spent time debating whether a movement was a real signal or just noise. The problem wasn\u2019t technical but, it was a decision-quality gap that happened to have a technical solution.",
    url: "blog/forecasting-model.html"
  },

  {
    type: "note",
    date: "June 20, 2026",
    text: "A product lead replied to my latest customer insights report: \u201cThanks for bringing voice of the customer to a new level.\u201d The best part? The headline I almost reported turned out to be sample noise but I caught an issue and fixed it. Killing your own finding when the data doesn\u2019t hold is how you earn that trust."
  },

  {
    type: "post",
    date: "June 2026",
    title: "Our customer insights program was almost sunsetted because it couldn\u2019t scale. Here\u2019s how I fixed that.",
    desc: "Leadership wanted to know what customers were experiencing but not at the expense of efficiency and scale and limited accuracy. The same dataset produced wildly different results depending on how you tuned the keywords.",
    url: "blog/voc-classification.html"
  },

  {
    type: "post",
    date: "July 2026",
    title: "How I turned an AI system leadership couldn\u2019t trust into one they stopped rewriting",
    desc: "Week one, leadership threw out the AI draft and rewrote it from scratch. The real question was how to systematically close the gap between what AI produces and what a VP will actually read.",
    url: "blog/llm-as-judge.html"
  }

];
