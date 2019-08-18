const Joke = require('../models/Joke');

module.exports = {
    async index(req, res) {
        //const count = await Joke.countDocuments();
        const jk = await Joke.findRandom({ status: true }).limit(1).exec();

        return res.json(jk);
    },
    async store(req, res) {
        const { joke } = req.body;

        const jk = await Joke.create({
            joke,
            status: false
        })

        return res.json(jk);
    },
    async destroy(req, res) {
        await Joke.findByIdAndDelete(req.params.id);

        return res.send();
    }

}