var app = angular.module('app', ['app.model', 'app.ctrl'])

    .run(function ($log, Model) {
        $log.log("app started");
    })


function onClick() {
    console.log("hello world4")
}


app.directive("menuEditor", function () {
    return {
        restrict : "E",
        templateUrl: "../sites/meal-editor.html",
        controller: function () {
            this.ingridients = [
                {name: "apfel", amount: 200},
                {name: "banan", amount: 100}
            ];

            this.removeLine = function(ing) {
                var index = this.ingridients.indexOf(ing);
                console.log("will remove ingridient " + ing.name + " on index " + index );
                if (index > -1) {
                    this.ingridients.splice(index, 1);
                }
            };

            this.addLine = function() {
                console.log("was in function");
                this.ingridients.push({name:"", amount:null});
            };
        },
        controllerAs : "ctrl"
    };
});


;
