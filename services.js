var app = angular.module('CCDModule', []);
app.run(function ($rootScope) {
    $rootScope.config = {
        "daysPerGrade": 3,
        "defaults": {
            "grade": "red",
            "day": 1
        }
    };

    $rootScope.grades = {
        "red": {
            "principles": [
                {"id": 1, "text": "Don´t Repeat Yourself (DRY)"},
                {"id": 2, "text": "Keep it simple, stupid (KISS)"},
                {"id": 3, "text": "Vorsicht vor Optimierungen!"},
                {"id": 4, "text": "Favour Composition over Inheritance (FCoI)"}
            ],
            "practices": [
                {"id": 5, "text": "Die Pfadfinderregel beachten"},
                {"id": 6, "text": "Root Cause Analysis"},
                {"id": 7, "text": "Ein Versionskontrollsystem einsetzen"},
                {"id": 8, "text": "Einfache Refaktorisierungsmuster anwenden"},
                {"id": 9, "text": "Täglich reflektieren"}
            ],
            "next": "orange",
            "htmlColor": "red"
        },
        "orange": {
            "principles": [
                {"id": 1, "text": "Single Level of Abstraction (SLA)"},
                {"id": 2, "text": "Single Responsibility Principle (SRP)"},
                {"id": 3, "text": "Separation of Concerns (SoC)"},
                {"id": 4, "text": "Source Code Konventionen"}
            ],
            "practices": [
                {"id": 5, "text": "Issue Tracking"},
                {"id": 6, "text": "Automatisierte Integrationstests"},
                {"id": 7, "text": "Lesen, Lesen, Lesen"},
                {"id": 8, "text": "Reviews"}
            ],
            "next": "yellow",
            "htmlColor": "orange"
        },
        "yellow": {
            "principles": [
                {"id": 1, "text": "Interface Segregation Principle (ISP)"},
                {"id": 2, "text": "Dependency Inversion Principle"},
                {"id": 3, "text": "Liskov Substitution Principle"},
                {"id": 4, "text": "Principle of Least Astonishment"},
                {"id": 5, "text": "Information Hiding Principle"}
            ],
            "practices": [
                {"id": 11, "text": "Automatisierte Unit Tests"},
                {"id": 12, "text": "Mockups (Testattrappen)"},
                {"id": 13, "text": "Code Coverage Analyse"},
                {"id": 14, "text": "Teilnahme an Fachveranstaltungen"},
                {"id": 15, "text": "Komplexe Refaktorisierungen"}
            ],
            "next": "green",
            "htmlColor": "yellow"
        },
        "green": {
            "principles": [
                {"id": 1, "text": "Open Closed Principle"},
                {"id": 2, "text": "Tell, don´t ask"},
                {"id": 3, "text": "Law of Demeter"}
            ],
            "practices": [
                {"id": 5, "text": "Continuous Integration"},
                {"id": 6, "text": "Statische Codeanalyse (Metriken)"},
                {"id": 7, "text": "Inversion of Control Container"},
                {"id": 8, "text": "Erfahrung weitergeben"},
                {"id": 9, "text": "Messen von Fehlern"}
            ],
            "next": "blue",
            "htmlColor": "green"
        },
        "blue": {
            "principles": [
                {"id": 1, "text": "Entwurf und Implementation überlappen nicht"},
                {"id": 2, "text": "Implementation spiegelt Entwurf"},
                {"id": 3, "text": "You Ain´t Gonna Need It (YAGNI)"}
            ],
            "practices": [
                {"id": 5, "text": "Continuous Delivery"},
                {"id": 6, "text": "Iterative Entwicklung"},
                {"id": 7, "text": "Komponentenorientierung"},
                {"id": 8, "text": "Test first"}
            ],
            "next": "white",
            "htmlColor": "blue"
        },
        "white": {
            "principles": [
                {"id": 1, "text": "All that you know"}
            ],
            "practices": [
                {"id": 5, "text": "All that you know"}
            ],
            "next": "red",
            "htmlColor": "white"
        }
    };
});

app.factory('ccdStorage', function ($rootScope) {
    function supports_html5_storage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    var sharedService = {};

    if (!supports_html5_storage()) {
        alert("your browser does not support Local Storage");
        return false;
    }

    function localStorageHasSavedStats() {
        return !(localStorage["ccd.current.grade"] === undefined || localStorage["ccd.current.day"] === undefined);
    }

    if (!localStorageHasSavedStats()) {
        localStorage["ccd.current.grade"] = $rootScope.config.defaults.grade;
        localStorage["ccd.current.day"] = $rootScope.config.defaults.day;
    }

    sharedService.store = function (currentGrade, currentDay) {
        localStorage["ccd.current.grade"] = currentGrade;
        localStorage["ccd.current.day"] = currentDay;
    };

    sharedService.loadCurrentGrade = function () {
        var currentGrade = localStorage["ccd.current.grade"];
        if (currentGrade === undefined) {
            alert("Error: current grade is not in local storage");
        }
        return currentGrade;
    };

    sharedService.loadCurrentDay = function () {
        var currentDay = localStorage["ccd.current.day"];
        if (currentDay === undefined) {
            alert("Error: Current day is not in local storage!")
        }
        return parseInt(currentDay, 10);
    };

    return sharedService;
});
