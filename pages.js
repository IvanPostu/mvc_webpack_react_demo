const {libraies} = require('./libraries')

var pages = {
    page1: {
        libs: {
            jquery: 'jquery',
            lodash_es: 'lodash-es',
        }
    },
    page2: {
        libs: {
            react: 'react',
            react_dom: 'react-dom',
            jquery: 'jquery',
            lodash_es: 'lodash-es',
            datatables_net: 'datatables.net',
        }
    },
    page3: {
        libs: {
            moment: 'moment',
        }
    }
}

module.exports.pages = pages