const metricConverion = require('./metricConverions');


const CovertToMetric = (value, unit) => {
    switch (unit) {
        case 'in':
            return metricConverion.inchesToCentimeters(value)
    }
}