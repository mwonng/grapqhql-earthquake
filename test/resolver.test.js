require('dotenv').config();
const test = require('ava');
const axios = require('axios');
const rootQueryResolver = require('../resolvers/rootQueryResolver');

test('API should be ready', async t => {
    let endpoint = process.env.ENDPOINT;
    let starttime = '2019-04-11T13:37:43';
    let endtime = '2019-04-12T13:37:43';
    let strQuery = `${endpoint}/query?format=geojson&starttime=${starttime}&endtime=${endtime}`
    let res = await axios.get(strQuery);
    t.is(res.status, 200)
})

test('getFeatureCollection should return a FeatureCollection', async t => {
    let endpoint = process.env.ENDPOINT;
    let starttime = '2019-04-11T13:37:43';
    let endtime = '2019-04-12T13:37:43';
    let result = await rootQueryResolver.prefetchByTimeRange(null, {
        starttime,
        endtime,
    })
    t.is(result.type, 'FeatureCollection');
    t.is(result.metadata.status, 200);
})

test('fetchResultByTime should return same length as the raw response', async t => {
    let endpoint = process.env.ENDPOINT;
    let starttime = '2019-04-11T13:37:43';
    let endtime = '2019-04-11T14:37:43';
    let result = await rootQueryResolver.prefetchByTimeRange(null, {
        starttime,
        endtime,
    })

    let formatedResult = await rootQueryResolver.fetchResultByTime(null, {
        starttime,
        endtime,
    })

    t.is(result.features.length, formatedResult.length);
})