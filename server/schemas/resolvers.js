const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // find customer info
        customer: async (parent, args, context) => {
            if (context.user) {
                // select returns everything except for the password and version
                const userData = await User.findOne({ _id: context.user._id }).select('__v -password');
                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        appliance: async (parent, args, context)
    }
}
