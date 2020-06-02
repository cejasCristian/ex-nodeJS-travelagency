const Experience = require('../models/Experience');

exports.showExperience = async (req, res) => {
    const experience = await Experience.findAll()
        res.render('experience', {
            page: 'Experience',
            experience
        });
}

exports.addExperience = async (req, res) => {
    let {name, mail, message} = req.body;

    let errors = [];
    if(!name) {
        errors.push({'message': 'Add your name'})
    }
    if(!mail) {
        errors.push({'message': 'Add your e-mail'})
    }
    if(!message) {
        errors.push({'message': 'Add your message'})
    }

    //check for errors
    if(errors.length > 0) {
        const experience = await Experience.findAll()
        res.render('experience', {
            errors,
            name,
            mail,
            message,
            page: 'Experience',
            experience
        })
    }else{
        Experience.create({
            name,
            mail,
            message
        })
        .then(experience => res.redirect('/experience'))
        .catch(error => console.log(error));
    }
}