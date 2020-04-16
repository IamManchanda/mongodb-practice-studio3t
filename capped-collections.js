db.capped.insertOne({
  name: "Harry again",
});

db.capped.find().sort({
  $natural: -1,
});
