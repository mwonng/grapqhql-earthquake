const axios = require('axios');
const func = require('../helpers/func');
module.exports = {
    prefetchByTimeRange: async (obj, args, context, info) => {
        let querStr = func.mergeQuery(args);
        let strQuery = `${process.env.ENDPOINT}/query?format=geojson${querStr}`
        let res = await axios.get(strQuery);
        return res.data
    },

    fetchResultByTime: async (obj, args, context, info) => {
        let querStr = func.mergeQuery(args);
        let strQuery = `${process.env.ENDPOINT}/query?format=geojson${querStr}`
        let res = await axios.get(strQuery);

        if (res.data) {
            let features = res.data.features.map( feature => {

                return {
                    place      : feature.properties.place,
                    magnitude  : feature.properties.mag,
                    time       : feature.properties.time,
                    felt       : feature.properties.felt,
                    sources    : feature.properties.sources,
                    longitude  : feature.geometry.coordinates[0],
                    latitude   : feature.geometry.coordinates[1],
                    depth      : feature.geometry.coordinates[2],
                    hasTsunami : feature.properties.tsunami,
                }
            })
            return features;
        }
        return res;
    }
}