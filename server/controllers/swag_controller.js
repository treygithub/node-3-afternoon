//Now that we have access to the swag array, let's use module.exports to export an object with a read method. This method should capture req, res, and next as parameters. We'll then use res to send a status of 200 and the entire swag array.

const swag = require('../models/swag');

module.exports = {
    read: ( req,res,next ) => {
        res.status(200).send( swag );
    }
};

