const axios = require('axios');
const func = require('../helpers/func');
const ENDPOINT="https://earthquake.usgs.gov/fdsnws/event/1";

module.exports = {
    prefetchByTimeRange: async (obj, args, ctx, info) => {
        let querStr = func.mergeQuery(args);
        let strQuery = `${ENDPOINT}/query?format=geojson${querStr}`;

        try {
            let res = await axios.get(strQuery);
            return res.data;
        } catch (err) {
            throw new Error(err);
        }
    },

    fetchResultByTime: async (obj, args, ctx, info) => {
        let querStr = func.mergeQuery(args);
        let strQuery = `${ENDPOINT}/query?format=geojson${querStr}`;
        try {
            let res = await axios.get(strQuery);
            if (res.data) {
                let results = func.formatResult(res.data.features);
                return results;
            }
        } catch (err) {
            throw new Error(err);
        }
    }
}