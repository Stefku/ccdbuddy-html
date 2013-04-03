var app = angular.module('CCDModule', []);
app.run(function ($rootScope) {
    $rootScope.config = {
        "defaults": {
            "grade": "red",
            "day": 1,
            "daysPerGrade": 15,
            "language": "en"
        }
    };

    $rootScope.grades = {
        "red": {
            "principles": [
                {"id": 1, "text": "red.key1"},
                {"id": 2, "text": "red.key2"},
                {"id": 3, "text": "red.key3"},
                {"id": 4, "text": "red.key4"}
            ],
            "practices": [
                {"id": 5, "text": "red.key5"},
                {"id": 6, "text": "red.key6"},
                {"id": 7, "text": "red.key7"},
                {"id": 8, "text": "red.key8"},
                {"id": 9, "text": "red.key9"}
            ],
            "next": "orange",
            "htmlColor": "red"
        },
        "orange": {
            "principles": [
                {"id": 1, "text": "orange.key1"},
                {"id": 2, "text": "orange.key2"},
                {"id": 3, "text": "orange.key3"},
                {"id": 4, "text": "orange.key4"}
            ],
            "practices": [
                {"id": 5, "text": "orange.key5"},
                {"id": 6, "text": "orange.key6"},
                {"id": 7, "text": "orange.key7"},
                {"id": 8, "text": "orange.key8"}
            ],
            "next": "yellow",
            "htmlColor": "orange"
        },
        "yellow": {
            "principles": [
                {"id": 1, "text": "yellow.key1"},
                {"id": 2, "text": "yellow.key2"},
                {"id": 3, "text": "yellow.key3"},
                {"id": 4, "text": "yellow.key4"},
                {"id": 5, "text": "yellow.key5"}
            ],
            "practices": [
                {"id": 11, "text": "yellow.key6"},
                {"id": 12, "text": "yellow.key7"},
                {"id": 13, "text": "yellow.key8"},
                {"id": 14, "text": "yellow.key9"},
                {"id": 15, "text": "yellow.key10"}
            ],
            "next": "green",
            "htmlColor": "yellow"
        },
        "green": {
            "principles": [
                {"id": 1, "text": "green.key1"},
                {"id": 2, "text": "green.key2"},
                {"id": 3, "text": "green.key3"}
            ],
            "practices": [
                {"id": 5, "text": "green.key4"},
                {"id": 6, "text": "green.key5"},
                {"id": 7, "text": "green.key6"},
                {"id": 8, "text": "green.key7"},
                {"id": 9, "text": "green.key8"}
            ],
            "next": "blue",
            "htmlColor": "green"
        },
        "blue": {
            "principles": [
                {"id": 1, "text": "blue.key1"},
                {"id": 2, "text": "blue.key2"},
                {"id": 3, "text": "blue.key3"}
            ],
            "practices": [
                {"id": 5, "text": "blue.key4"},
                {"id": 6, "text": "blue.key5"},
                {"id": 7, "text": "blue.key6"},
                {"id": 8, "text": "blue.key7"}
            ],
            "next": "white",
            "htmlColor": "blue"
        },
        "white": {
            "principles": [
                {"id": 1, "text": "white.key1"}
            ],
            "practices": [
                {"id": 5, "text": "white.key1"}
            ],
            "next": "red",
            "htmlColor": "white"
        }
    };

    $rootScope.translations = {
        "de": {
            "red.key1": "Don´t Repeat Yourself (DRY)",
            "red.key2": "Keep it simple, stupid (KISS)",
            "red.key3": "Vorsicht vor Optimierungen!",
            "red.key4": "Favour Composition over Inheritance (FCoI)",
            "red.key5": "Die Pfadfinderregel beachten",
            "red.key6": "Root Cause Analysis",
            "red.key7": "Ein Versionskontrollsystem einsetzen",
            "red.key8": "Einfache Refaktorisierungsmuster anwenden",
            "red.key9": "Täglich reflektieren",
            "orange.key1": "Single Level of Abstraction (SLA)",
            "orange.key2": "Single Responsibility Principle (SRP)",
            "orange.key3": "Separation of Concerns (SoC)",
            "orange.key4": "Source Code Konventionen",
            "orange.key5": "Issue Tracking",
            "orange.key6": "Automatisierte Integrationstests",
            "orange.key7": "Lesen, Lesen, Lesen",
            "orange.key8": "Reviews",
            "yellow.key1": "Interface Segregation Principle (ISP)",
            "yellow.key2": "Dependency Inversion Principle",
            "yellow.key3": "Liskov Substitution Principle",
            "yellow.key4": "Principle of Least Astonishment",
            "yellow.key5": "Information Hiding Principle",
            "yellow.key6": "Automatisierte Unit Tests",
            "yellow.key7": "Mockups (Testattrappen)",
            "yellow.key8": "Code Coverage Analyse",
            "yellow.key9": "Teilnahme an Fachveranstaltungen",
            "yellow.key10": "Komplexe Refaktorisierungen",
            "green.key1": "Open Closed Principle",
            "green.key2": "Tell, don´t ask",
            "green.key3": "Law of Demeter",
            "green.key4": "Continuous Integration",
            "green.key5": "Statische Codeanalyse (Metriken)",
            "green.key6": "Inversion of Control Container",
            "green.key7": "Erfahrung weitergeben",
            "green.key8": "Messen von Fehlern",
            "blue.key1": "Entwurf und Implementation überlappen nicht",
            "blue.key2": "Implementation spiegelt Entwurf",
            "blue.key3": "You Ain´t Gonna Need It (YAGNI)",
            "blue.key4": "Continuous Delivery",
            "blue.key5": "Iterative Entwicklung",
            "blue.key6": "Komponentenorientierung",
            "blue.key7": "Test first",
            "white.key1": "All you know",
            "label.principles": "Prinzipien",
            "label.practices": "Praktiken",
            "label.options": "Optionen",
            "label.back": "Zurück",
            "label.day": "Tag",
            "label.daysPerGrade": "Tage pro Grad",
            "label.language": "Sprache",
            "label.submit": "submit",
            "grade.red": "Rot",
            "grade.orange": "Orange",
            "grade.yellow": "Gelb",
            "grade.green": "Grün",
            "grade.blue": "Blau",
            "grade.white": "Weiss"
        },
        "en": {
            "red.key1": "Don´t Repeat Yourself (DRY)",
            "red.key2": "Keep it simple, stupid (KISS)",
            "red.key3": "Beware of Optimizations!",
            "red.key4": "Favour Composition over Inheritance (FCoI)",
            "red.key5": "Follow the Boy Scouts Rule",
            "red.key6": "Root Cause Analysis",
            "red.key7": "Use a Version Control System",
            "red.key8": "Apply Simple Refactoring Patterns",
            "red.key9": "Reflect Daily",
            "orange.key1": "Single Level of Abstraction (SLA)",
            "orange.key2": "Single Responsibility Principle (SRP)",
            "orange.key3": "Separation of Concerns (SoC)",
            "orange.key4": "Source Code conventions",
            "orange.key5": "Issue Tracking",
            "orange.key6": "Automated Integration Tests",
            "orange.key7": "Read, Read, Read",
            "orange.key8": "Reviews",
            "yellow.key1": "Interface Segregation Principle (ISP)",
            "yellow.key2": "Dependency Inversion Principle",
            "yellow.key3": "Liskov Substitution Principle",
            "yellow.key4": "Principle of Least Astonishment",
            "yellow.key5": "Information Hiding Principle",
            "yellow.key6": "Automatisierte Unit Tests",
            "yellow.key7": "Mockups (Testattrappen)",
            "yellow.key8": "Code Coverage Analyse",
            "yellow.key9": "Teilnahme an Fachveranstaltungen",
            "yellow.key10": "Komplexe Refaktorisierungen",
            "green.key1": "Open Closed Principle",
            "green.key2": "Tell, don´t ask",
            "green.key3": "Law of Demeter",
            "green.key4": "Continuous Integration",
            "green.key5": "Statische Codeanalyse (Metriken)",
            "green.key6": "Inversion of Control Container",
            "green.key7": "Erfahrung weitergeben",
            "green.key8": "Messen von Fehlern",
            "blue.key1": "Entwurf und Implementation überlappen nicht",
            "blue.key2": "Implementation spiegelt Entwurf",
            "blue.key3": "You Ain´t Gonna Need It (YAGNI)",
            "blue.key4": "Continuous Delivery",
            "blue.key5": "Iterative Entwicklung",
            "blue.key6": "Komponentenorientierung",
            "blue.key7": "Test first",
            "white.key1": "All you know",
            "label.principles": "Principles",
            "label.practices": "Practices",
            "label.options": "Options",
            "label.back": "Back",
            "label.day": "day",
            "label.daysPerGrade": "Days per grade",
            "label.language": "Language",
            "label.submit": "submit",
            "grade.red": "Red",
            "grade.orange": "Orange",
            "grade.yellow": "Yellow",
            "grade.green": "Green",
            "grade.blue": "Blue",
            "grade.white": "White"
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
        return !(localStorage["ccd.current.grade"] === undefined
            || localStorage["ccd.current.day"] === undefined
            || localStorage["ccd.config.daysPerGrade"] === undefined
            || localStorage["ccd.config.language"] === undefined);
    }

    if (!localStorageHasSavedStats()) {
        localStorage["ccd.current.grade"] = $rootScope.config.defaults.grade;
        localStorage["ccd.current.day"] = $rootScope.config.defaults.day;
        localStorage["ccd.config.daysPerGrade"] = $rootScope.config.defaults.daysPerGrade;
        localStorage["ccd.config.language"] = $rootScope.config.defaults.language;
    }

    sharedService.store = function (currentGrade, currentDay) {
        localStorage["ccd.current.grade"] = currentGrade;
        localStorage["ccd.current.day"] = currentDay;
    };

    sharedService.saveConfig = function (config) {
        localStorage["ccd.config.daysPerGrade"] = config.daysPerGrade;
        localStorage["ccd.config.language"] = config.language;
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

    sharedService.loadDaysPerGrade = function () {
        var daysPerGrade = localStorage["ccd.config.daysPerGrade"];
        if (daysPerGrade === undefined) {
            alert("Error: Days per grade is not in local storage!")
        }
        return parseInt(daysPerGrade, 10);
    };

    sharedService.loadLanguage = function () {
        var language = localStorage["ccd.config.language"];
        if (language === undefined) {
            alert("Error: Language is not in local storage!")
        }
        return language;
    };

    return sharedService;
});
