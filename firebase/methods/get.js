module.exports = (q,endpoint,req, res, next) =>  {
  if (/^\/api\/item\//.test(req.originalUrl) && req.params.id) {
    q(endpoint, req.query).then((r) => {
      if(r.ok) {
        res.send(r.body)
      } else {
        res.json({status: 500, statusText: 'error with items store.'})
      }
    })
  } else if (/^\/api\/items\/?/.test(req.originalUrl)) {
    q(endpoint, req.query).then((r) => {
      if(r.ok) {
        res.send(r.body)
      } else {
        res.json({status: 500, statusText: 'error with items store.'})
      }
    })
  } else {
      res.json({status: 404, statusText: 'endpoint not found: ' + req.url})
  } 
}