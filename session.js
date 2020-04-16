const session = db.getMongo().startSession();
const postsCollection = session.getDatabase("my_blog_data_transaction_usecase")
  .posts;
const usersCollection = session.getDatabase("my_blog_data_transaction_usecase")
  .users;
session.startTransaction();
usersCollection.deleteOne({ _id: ObjectId("5e9717200d71835f0544d47b") });
db.users.find();
postsCollection.deleteMany({ userId: ObjectId("5e9717200d71835f0544d47b") });
db.posts.find();
session.commitTransaction();
db.posts.find();
db.users.find();
