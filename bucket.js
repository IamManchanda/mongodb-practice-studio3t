db.persons.aggregate([
  {
    $bucket: {
      groupBy: "$dob.age",
      boundaries: [18, 30, 40, 50, 60, 120],
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
