db.friends.aggregate([
  {
    $unwind: "$examScores",
  },
  {
    $project: {
      _id: 1,
      name: 1,
      age: 1,
      score: "$examScores.score",
    },
  },
  {
    $sort: {
      score: -1,
    },
  },
  {
    $group: {
      _id: "$_id",
      maxScore: {
        $max: "$score",
      },
    },
  },
  {
    $sort: {
      maxScore: -1,
    },
  },
]);
