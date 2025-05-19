const MONGO_URL = process.env.MONGO_URL || undefined
const REDIS_URL = process.env.REDIS_URL || undefined
console.log(MONGO_URL, REDIS_URL)
module.exports = {
  MONGO_URL: 'mongodb://root:example@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}