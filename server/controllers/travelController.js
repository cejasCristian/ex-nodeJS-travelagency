const Travel = require('../models/Travels');

exports.showTravels = async (req, res) => {
    const travels = await Travel.findAll()
        res.render('travels', {
            page: 'Next trips',
            travels
        });
}

exports.showTravel = async (req, res) => {
    const travel = await Travel.findByPk(req.params.id)
        res.render('travel', {
            travel
        });
};