function CCDCtrl($scope, ccdStorage ) {

    $scope.currentGrade = ccdStorage.loadCurrentGrade();
    $scope.currentDay = ccdStorage.loadCurrentDay();
    $scope.config.daysPerGrade = ccdStorage.loadDaysPerGrade();

    $scope.selected = {};

    $scope.evaluate = function () {
        var complete = true;
        $scope.grades[$scope.currentGrade].principles.forEach(function (entry) {
            if ($scope.selected[entry.id] != true) {
                complete = false;
            }
        });
        $scope.grades[$scope.currentGrade].practices.forEach(function (entry) {
            if ($scope.selected[entry.id] != true) {
                complete = false;
            }
        });
        if (complete) {
            $scope.currentDay += 1;
            if ($scope.currentDay > $scope.config.daysPerGrade) {
                $scope.currentDay = 1;
                gotoNextGrade();
                toast('Get started for the next grade!');
            } else {
                toast('Good work and continue on the next day');
            }
        } else {
            $scope.currentDay = 1;
            toast('Don\'t get all, try again!');
        }
        $scope.selected = {};
        ccdStorage.store($scope.currentGrade, $scope.currentDay);
    };

    var gotoNextGrade = function () {
        $scope.currentGrade = $scope.grades[$scope.currentGrade].next;
    };

    $scope.saveConfig = function () {
        ccdStorage.saveConfig($scope.config);
    };

    var toast = function(msg){
        $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>"+msg+"</h3></div>")
            .css({ display: "block",
                opacity: 0.90,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                left: ($(window).width() - 284)/2,
                top: $(window).height()/2 })
            .appendTo( $.mobile.pageContainer ).delay( 1500 )
            .fadeOut( 400, function(){
                $(this).remove();
            });
    };
}