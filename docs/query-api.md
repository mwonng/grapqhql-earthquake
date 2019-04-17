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

> this query fetch result between starttime and endtime. It will get all location during this period, for frontend filter, you can save it into context or Redux/Mobx to filter your result while user add more condition e.g.:
- Location name
- Magnitude Range
- Has tsunami
- Radius
- Date range

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
### explaination:

- location name is in the place field.
- radius is in the place field.
- time using Unix time to compare.

considering the place field response have not unique string formate, we can not split radius and location name directly. You can use filter or fuzzy search to match part of the string to filter your result in frontend.


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