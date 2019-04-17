module.exports = {
    mergeQuery: (args) => {
        let str = ""
        Object.keys(args).forEach(key => {
            if (args[key] !== undefined) {
                let value = args[key].toString();
                str += `&${key}=${value}`
            }
        })
        return str;
    }
}