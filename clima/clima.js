const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=73544270f7e47f034b5baf7dd20c4f52`)

    if (resp.data.message === 'Nothing to geocode') {
        throw new Error(`El lugar con coordenadas lat=${lat} y long=${lng} no existe`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}