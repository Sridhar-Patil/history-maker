module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<path class="outer" d="M 48.520822,0.99147164 C 30.680644,0.99194076 16.218458,15.454176 16.218024,33.294353 16.234248,45.800619 23.467749,57.173898 34.7874,62.491081 27.155919,65.540906 20.60422,70.54599 14.797954,77.765953 6.286586,88.349775 0.39257134,105.60483 1.0411826,118.04322 l 0.2092594,4.00588 3.6727363,1.81512 c 4.3479701,2.14906 14.9336687,4.34309 24.7041867,5.12003 4.604216,0.36612 9.358144,0.58283 14.108617,0.66248 20.781127,0.34845 41.496108,-1.92567 49.322305,-5.78634 3.441928,-1.6979 3.685672,-1.97917 3.891069,-4.48232 C 97.312112,114.95969 95.833742,104.755 93.977593,98.869628 88.435916,81.298492 77.241602,68.299442 62.631272,62.325825 73.750811,56.926624 80.814361,45.655395 80.824955,33.294353 80.824564,15.453652 66.361526,0.99121206 48.520822,0.99147164 Z"/><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Identity',
        size: {
            width: 100,
            height: 133,
        },
        attrs: {
            path: {
                fill: '#FFFFFF',
                stroke: '#1A1A1A',
            },
            text: {
                fill: '#1A1A1A',
                'ref-y': '70%',
            },
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});