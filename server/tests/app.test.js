const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')

dotenv.config()

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('test');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a mock doc into collection', async () => {
    const users = db.collection('userdatas');

    const mockUser = {_id: '4562728363434', name: 'John', email: 'jhon12@gmail.com', password: 'w6gwysgw5!'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: '4562728363434', name: 'John', email: 'jhon12@gmail.com', password: 'w6gwysgw5!'});
    expect(insertedUser).toEqual(mockUser);
    await users.deleteOne({_id: '4562728363434'})
  });
});