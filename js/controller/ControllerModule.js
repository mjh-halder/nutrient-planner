function Controller($scope) {

    console.log("Controller has started");
    $scope.IngridientCounter = 1;




    $scope.click = function () {
        console.log("hello world 400")
    }

    $scope.removeLine = function() {
        $scope.IngridientCounter --
        console.log("IngridientCounter is now: " & $scope.IngridientCounter)
    }

    $scope.addLine = function() {
        $scope.IngridientCounter ++
        console.log("IngridientCounter is now: " && $scope.IngridientCounter)
        //console.log(IngridientCounter)

    }

    return {

        click : function () {
        console.log("hello world")
    }
    }



}

var p = Controller.prototype;

p.click = function () {
    console.log("hello world2")
}


var ctrl = angular.module('app.ctrl', [])

    .controller('Controller', Controller)

;

