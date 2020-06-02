const Travel = require('../models/Travels');
const Experience = require('../models/Experience');

exports.queriesHomepage = async (req, res) => {
    const travels = await Travel.findAll({ limit: 3 });
    const experience = await Experience.findAll({limit: 3});

    res.render('index', {
        page: 'Next trips',
        clas: 'home',
        travels,
        experience
    })
}