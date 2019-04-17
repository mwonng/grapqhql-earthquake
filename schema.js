const { gql } = require('apollo-server');

module.exports = gql`
scalar Long

type Query {
  hello: String
  fetchResultByTime(starttime: String!, endtime: String): [FormatedResult]
  prefetchByTimeRange(starttime: String!, endtime: String): FeatureCollection
}

type FormatedResult {
    place: String
    magnitude: Float
    time: Long
    felt: Int
    sources: String
    longitude: Float
    latitude: Float
    depth: Float
    radius: Float
    location: String
    direction: String
    hasTsunami: Boolean
}

type FeatureCollection {
  type: String
  metadata: Meta
  bbox: [Float]
  features: [Feature]
}

type Meta {
  generated: Long
  url: String
  title: String
  status: Int
  api: String
  count: Int
}

type Property {
  mag: Float
  place: String
  time: Long
  updated: Long
  tz: Int
  url: String
  detail: String
  felt: Int
  cdi: Float
  mmi: Float
  alert: String
  status: String
  tsunami: Int
  sig: Int
  net: String
  code: String
  ids: String
  sources: String
  types: String
  nst: Int
  dmin: Float
  rms: Float
  gap: Float
  magType: String
  type: String
  title: String
}

type Feature {
  type: String
  properties: Property
  geometry: Geometry
  id: ID
}

type Geometry {
  type: String
  coordinates: [Float]
}
`;
