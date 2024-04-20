const Joi = require('joi');



const postUserValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required()
    })
    
    const value = schema.validate(req.body);

    if(value.error) {
        return res.status(400).json({ error: value.error.details[0].message });
    }

    next();
}

const getUserValidation = (req, res, next) => {

    const schema = Joi.object({
        id: Joi.number().integer().required()
    });

    const value = schema.validate({ id: req.params.id }, { convert: true });

    if(value.error) {
        return res.status(400).json({ error: value.error.details[0].message });
    }

    next();
}

module.exports = {
    postUserValidation,
    getUserValidation
}