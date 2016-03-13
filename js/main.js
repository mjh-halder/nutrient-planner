var IntervalID

IntervalID = setInterval( function () {
    if (/loaded|complete/i.test(document.readyState)) {
        // console.log ("doc ready");
        angular.bootstrap( document, ['app'])
        clearInterval(IntervalID);
    }

}, 10);