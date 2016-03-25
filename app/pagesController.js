'use strict';

module.exports = db => {
    let self = this
    self.db = db

    const getDB = () => _db

    const index = (request, response) => {
        response.json({
            msg: self.db
        })
    }

    return { getDB, index }
}
