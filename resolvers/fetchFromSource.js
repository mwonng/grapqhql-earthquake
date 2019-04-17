const axios = require('axios');
const func = require('../helpers/func');
module.exports = {
    prefetchByTimeRange: async (obj, args, context, info) => {
        let querStr = func.mergeQuery(args);
        let strQuery = `${process.env.ENDPOINT}/query?format=geojson${querStr}`
        let res = await axios.get(strQuery);
        return res.data
    },
}