const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

/* Params type
* Query Params: request.query
* Route Params: request.params
* Body: request.body
*/

routes.get('/devs',  DevController.list)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.getDevsInArea)

module.exports = routes