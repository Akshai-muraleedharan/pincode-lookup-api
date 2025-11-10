"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const pincodeLookupController_1 = require("../controller/pincodeLookupController");
exports.router = (0, express_1.default)();
/**
 * @swagger
 * /pincode:
 *    get:
 *      summary: Get pincode data
 *      tags:
 *        - Pincode lookup api
 *      parameters:
 *           - name: pincode
 *             in: query
 *             schema:
 *               type: string
 *               default: 685512
 *      responses:
 *       200:
 *          description: verify Voter ID
 *
 */
exports.router.get("/pincode", pincodeLookupController_1.pincodeLookup);
