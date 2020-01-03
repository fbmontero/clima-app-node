const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e35e85f8fc1b6231d714ae7910b2fbc8&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}