import type { Request, Response } from "express"
import { pincodeValidate } from "../utils/joiValidate"
import axios from "axios"

export const pincodeLookup = async (req: Request<{}, null, {}, { pincode: string }>, res: Response<{ success: boolean, message: string, data?: any }>): Promise<void> => {
    try {
        const { error, value } = pincodeValidate.validate(req.query)


        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message })
            return
        }


        const config = {
            method: "get",
            url: `${process.env.INDIA_POST_BASE_URL}/${value.pincode}`
        }

        const axiosResponse: any = await axios(config)


        if (axiosResponse.data[0].Message === "No records found") {
            res.status(400).json({ success: false, message: "No records found for this Pincode" })
            return
        }
        if (axiosResponse.data[0].Message === "The requested resource is not found") {
            res.status(400).json({ success: false, message: "The requested resource is not found" })
            return
        }

        res.status(200).json({ success: true, message: "Fetched successfully", data: axiosResponse.data[0].PostOffice })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "internal server error" })
        return
    }
}