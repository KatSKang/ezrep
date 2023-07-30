const { Schema, model } = require('mongoose');

const applianceSchema = require('./Appliance')
const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    email: { type: String, required: false },

    Appliances: [applianceSchema],
  });

module.exports = Customer;