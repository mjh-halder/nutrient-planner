var app = angular.module('app', [])
    .run(
        console.log("Now i'm running")
    )

app.controller("Controller", function () {
    console.log("now the controller is running");


    this.getNumber = function () {
        return 123;
    }

    this.greetings = [
        {
            greeting: "Hello",
            lng: "en"
        },
        {
            greeting: "Bonjour",
            lng: "fr"
        },
        {
            greeting: "Hallo",
            lng: "de"
        }

    ]

    this.newValue = "heo"

    this.add = function (newValue) {

        var tmp = {
            greeting: newValue,
            lng: "custom"
        }

        this.greetings.push(tmp);

    }

    this.remove = function (obsoleteValue) {

        var index = this.greetings.indexOf(obsoleteValue);

        if (index > -1) {
            this.greetings.splice(index, 1);
        }

    }

})


;

