module.exports = {
    mergeQuery: (args) => {
        let str = "";
        Object.keys(args).forEach(key => {
            if (args[key] !== undefined) {
                let value = args[key].toString();
                str += `&${key}=${value}`;
            }
        })
        return str;
    },

    formatResult: (features) => {
        if (!features.length === 0) {
            throw new Error("Features in response is empty");
        } else {
            return features.map( feature => ({
                    place      : feature.properties.place,
                    magnitude  : feature.properties.mag,
                    time       : feature.properties.time,
                    felt       : feature.properties.felt,
                    sources    : feature.properties.sources,
                    longitude  : feature.geometry.coordinates[0],
                    latitude   : feature.geometry.coordinates[1],
                    depth      : feature.geometry.coordinates[2],
                    hasTsunami : feature.properties.tsunami,
                })
            );
        }

    }
}