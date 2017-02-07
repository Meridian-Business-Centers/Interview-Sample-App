const FirebaseREST = require('firebase-rest').default
const config = require('./config')

const get = require('./methods/get')
const post = require('./methods/post')
const del = require('./methods/del')

const db = new FirebaseREST.JSONClient(
  'https://'+config.project+'.firebaseio.com', 
  { auth: config.auth })

const fb_map_rest = {
  get: 'get',
  put: 'set',
  patch: 'update',
  post: 'push',
  delete: 'remove'
}

const firebase = (req, res, next) => {
  const method = req.method.toLowerCase()
  const endpoint = req.originalUrl.replace(/^\/api\//, '').replace(/^items?/,'items')

  let q = db[fb_map_rest[method]].bind(db);
  switch(method) {
    case 'put':
    // configurable as needed
      break
    case 'patch':
      break
    case 'post':
      post(q, endpoint, req, res, next)
      break
    case 'delete':
      del(q, endpoint, req, res, next)
      break
    case 'get':
    default:
      get(q, endpoint, req, res, next)
      break
  }
}
module.exports = firebase