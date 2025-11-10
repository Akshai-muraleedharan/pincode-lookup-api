import express from "express"
import type { Router } from "express"
import { pincodeLookup } from "../controller/pincodeLookupController"


export const router: Router = express()

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

router.get("/pincode", pincodeLookup)