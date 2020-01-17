const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async getDevsInArea(req, res) {
        const { latitude, longitude, techs } = req.query
        const techsAsArray = parseStringAsArray(techs)
        const devs = await Dev.find({
            techs: {
                $in: techsAsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [latitude, longitude]
                    },
                    $maxDistance: 10000
                }
            }
        })
        return res.json({ devs })
    }
}