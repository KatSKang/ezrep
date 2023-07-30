const { Schema, model } = require('mongoose')
const applianceSchema = {
    manufacturer: { type: String, required: true },
    modelNumber: { type: String, required: true },
    serialNumber: { type: String, required: true },
    manufactureDate: { type: String, required: true },
}