const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(32.549999, -114.860001)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const datosLugar = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(datosLugar.lat, datosLugar.lng);

        return `La temperatura de ${datosLugar.direccion} es de ${temperatura}`;

    } catch (error) {
        return `No se pudo determinar la temperatura de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);