const axios = require("axios");

const create = async (url, data) => {
    const response = await axios.post(url, data);
    return response;
};

module.exports.create = create;