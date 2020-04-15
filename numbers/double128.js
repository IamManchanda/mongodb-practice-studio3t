db.science.insertOne({
  a: NumberDecimal("0.3"),
  b: NumberDecimal("0.1"),
});

/* 
db.science.updateOne(
  {},
  {
    $inc: {
      a: NumberDecimal("0.1"),
    },
  },
);
*/

/* 
db.science.aggregate([
  {
    $project: {
      result: {
        $subtract: ["$a", "$b"],
      },
    },
  },
]); 
*/
