const axios = require("axios");

const create = async (url, data) => {
    const response = await axios.post(url, data);
    return response;
};

const exists = async (url, id) => {
    console.log(`${url}/exists/${id}`);
    const response = await axios.get(`${url}/exist/${id}`);
    return response;
};

module.exports.create = create;
module.exports.exists = exists;