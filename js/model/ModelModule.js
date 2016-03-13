var Model = function ($log) {
    $log.warn("Model erzeugt");

    return {
        getSampleData: function () {
            return "Hello World";
        }
    }
}

var model = angular.module('app.model', [])
    .value("headline", "this is a test value")
    .factory("Model", Model)
    .value("currentIngridients", [
        {name: 'Ei', Menge: 30},
        {name: 'brot', Menge: 500},
        {name: 'Wasser', Menge: 420}])


