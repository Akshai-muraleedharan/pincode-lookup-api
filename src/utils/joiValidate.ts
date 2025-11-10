import Joi from "joi"
import { Pincode } from "../interface/interface"

export const pincodeValidate = Joi.object<Pincode>({
    pincode: Joi.string().required().pattern(/^[1-9][0-9]{5}$/).messages({
        "string.pattern.base": "Invalid Pincode. Must be 6 digits and not start with 0",
        "any.required": "Pincode is required"
    })
})   