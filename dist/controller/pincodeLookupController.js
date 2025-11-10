"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pincodeLookup = void 0;
const joiValidate_1 = require("../utils/joiValidate");
const axios_1 = __importDefault(require("axios"));
const pincodeLookup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = joiValidate_1.pincodeValidate.validate(req.query);
        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message });
            return;
        }
        const config = {
            method: "get",
            url: `${process.env.INDIA_POST_BASE_URL}/${value.pincode}`
        };
        const axiosResponse = yield (0, axios_1.default)(config);
        if (axiosResponse.data[0].Message === "No records found") {
            res.status(400).json({ success: false, message: "No records found for this Pincode" });
            return;
        }
        if (axiosResponse.data[0].Message === "The requested resource is not found") {
            res.status(400).json({ success: false, message: "The requested resource is not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Fetched successfully", data: axiosResponse.data[0].PostOffice });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "internal server error" });
        return;
    }
});
exports.pincodeLookup = pincodeLookup;
