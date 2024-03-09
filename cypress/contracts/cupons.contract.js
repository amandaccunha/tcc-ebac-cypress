const Joi = require ('joi')

const cuponsSchema = Joi.object({
    quantidade: Joi.number(), 
    produtos: Joi.array().items({
        code: Joi.string(),
        amount: Joi.number(),
        discount_type: Joi.string(),
        description: Joi.string(),
        _id: Joi.string()
    })
})
export default cuponsSchema;
