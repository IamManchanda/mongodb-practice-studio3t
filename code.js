let db;

db.movies
  .find({
    $nor: [
      {
        "rating.average": {
          $lt: 5,
        },
      },
      {
        "rating.average": {
          $gt: 9.3,
        },
      },
    ],
  })
  .count();
