const MONGO_URL = process.env.MONGO_URL || undefined
const REDIS_URL = process.env.REDIS_URL || undefined
console.log(MONGO_URL, REDIS_URL)
module.exports = {
  MONGO_URL, //: 'mongodb://root:example@localhost:27017/the_database',
  REDIS_URL //: 'redis://localhost:6379'
}