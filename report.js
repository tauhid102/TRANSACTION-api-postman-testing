const newman = require("newman");

newman.run(
  {
    collection: require("./collection/collection.json"),
    // environment: require(""),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/reports.html",
        title: "Domeny API Testing",
      },
    },
  },
  function (err) {
    if (err) throw err;
    console.log("Collection run completed");
  }
);