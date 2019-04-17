const test = require('ava');
const func = require('../../helpers/func');

test("merge all query parameters", t => {
    let args = {
        "location"  : "Idyllwild",
        "radius"    : 12.2,
        "starttime" : "2019-04-11T13:37:43",
        "endtime"   : "2019-04-11T14:37:43"
    }
    let str = func.mergeQuery(args);
    let expect = "&location=Idyllwild&radius=12.2&starttime=2019-04-11T13:37:43&endtime=2019-04-11T14:37:43";

    t.is(str, expect);
})

test("merge query parameters without undefined", t => {
    let args = {
        "location"  : "Idyllwild",
        "radius"    : undefined,
        "starttime" : "2019-04-11T13:37:43",
        "endtime"   : "2019-04-11T14:37:43"
    }
    let str = func.mergeQuery(args);
    let expect = "&location=Idyllwild&starttime=2019-04-11T13:37:43&endtime=2019-04-11T14:37:43";

    t.is(str, expect);
})