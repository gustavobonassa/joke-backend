const Joke = require('../models/Joke');

module.exports = {
    async index(req, res) {
        const jk = await Joke.paginate({ status: false }, {
            page: req.query.page || 1,
            limit: 20,
            sort: '-createdAt'
        });
        return res.json(jk);
    },
    async update(req, res) {
        const jokeid = req.params.id;

        const jk = await Joke.findById(jokeid);

        jk.status = true;

        jk.save()

        return res.json(jk);
    }

}