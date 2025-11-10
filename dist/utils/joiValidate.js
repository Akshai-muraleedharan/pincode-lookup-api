"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pincodeValidate = void 0;
const joi_1 = __importDefault(require("joi"));
exports.pincodeValidate = joi_1.default.object({
    pincode: joi_1.default.string().required().pattern(/^[1-9][0-9]{5}$/).messages({
        "string.pattern.base": "Invalid Pincode. Must be 6 digits and not start with 0",
        "any.required": "Pincode is required"
    })
});
