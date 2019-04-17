# API description

* [Query API](#query-api)


## connect to ENDPOINT
You can change endpoint setting on `.env`

## Query API

 - `fetchResultByTime(starttime: $starttime, endtime: $endtime)`
 - `prefetchByTimeRange(starttime: $starttime, endtime: $endtime)`

_Note: if endtime is not given, it will default to present time._

## How to use this response:

### formated result query:

```graphql
{
    fetchResultByTime(starttime: "2019-04-11T13:37:43", endtime: "2019-04-11T14:37:43"){
    location
    magnitude
    time
    felt
    sources
    longitude
    latitude
    depth
    hasTsunami
    radius
  }
}

```
### Description:

According to the requirement, the city list need to be auto-complete if user select the time range. In this case, after time set, it need to load all locations as possible only by time range.

After that, user can add more criteria to filter the result. so it doesn't need to call API again with more criteria, the results with time range can be reused in frontend.

This query fetch result between **starttime** and **endtime**. It will get **ALL location** during this period, for frontend filter request according to the requirement, you can save it into context or Redux/Mobx first and if user filling more condtion, your can filter the results and re-rendering to user agai

Search condition:
- Location name: location name is in the `place` field.
- Magnitude Range: magnitude value is in the `magnitude` field
- Has tsunami: tsunami value in the `hasTsunami` field.
- Radius: radius is in the `place` field. e.g. 5km
- Date range: earthquake time is the `time` in Unix formate which will better for compare in range.

_Considering the `place` field response have not unique string format, we can not split radius and location name directly from `place` (sonme response doesn't have radius or direction). You have to use filter or fuzzy search to match part of the string to filter your result in frontend._

### formated response :
```json
{
    "data": {
        "fetchResultByTime": [
            {
                "place": "5km ENE of Mammoth Lakes, CA",
                "magnitude": 0.54,
                "time": 1554991597290,
                "felt": null,
                "sources": ",nc,",
                "longitude": -118.9205,
                "latitude": 37.6461667,
                "depth": -0.27,
                "hasTsunami": false,
                "radius": null
            },
        ]
    }
}

```


## Assistant Query
its raw API from earthquake.usgs.gov which match the structure, if you want to handle all detail from raw data, you can use this GraphQL query if you want to get more detail.

```graphql
{
    prefetchByTimeRange(starttime: $starttime, endtime: $endtime) {
        type
        metadata {
            generated
            url
            title
            status
            api
            count
        }
        bbox
        features {
            type
            properties {
                mag
                place
                time
                updated
                tz
                url
                detail
                felt
                cdi
                mmi
                alert
                status
                tsunami
                sig
                net
                code
                ids
                sources
                types
                nst
                dmin
                rms
                gap
                magType
                type
                title
            }
            geometry {
                type
                coordinates
            }
            id
        }
    }
}
```