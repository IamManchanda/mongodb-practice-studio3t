db.persons.aggregate([
  {
    $bucketAuto: {
      groupBy: "$dob.age",
      buckets: 5,
      output: {
        numPersons: {
          $sum: 1,
        },
        averageAge: {
          $avg: "$dob.age",
        },
      },
    },
  },
]);
