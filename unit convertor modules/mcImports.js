const metricConverion = require('./metricConverions');


const CovertToMetric = (value, unit) => {
    switch (unit) {
        case 'in':
            return metricConverion.inchesToCentimeters(value);
        case 'gl':
            return metricConverion.gallonsToLiters(value);
        case 'lb':
            return metricConverion.poundsToKilograms(value);
        case 'mi':
            return metricConverion.milesToKilometers(value)
    }
}