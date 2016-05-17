namespace FortuneCookie {
    
    angular.module('FortuneCookie', []);

    // Class that will be added as a controller
    class FortuneCookieController {
        public fortune;

        constructor(private fortuneCookieService: FortuneCookieService) {   //Has access to FortuneCookieService
            this.fortune = fortuneCookieService.getRandomFortune();
        }
    }
    // Add FortuneCookieController class to the controller while naming it fortuneCookieController)
    angular.module('FortuneCookie').controller('FortuneCookieController', FortuneCookieController);

    class FortuneCookieService {
        fortunes = [
            'Good news, Everyone',
            'Great news, Everyone',
            'What in the world'
        ];

        getRandomFortune() {
            return this.fortunes[Math.floor(Math.random() * this.fortunes.length)];
        }
    }
    angular.module('FortuneCookie').service('fortuneCookieService', FortuneCookieService);
}

//namespace TaxApp {
//    // Class that will be added as a service
//    // adds a service named taxService to the TaxApp module
//    class TaxService {
//        CalculateTax(price) {
//            return price * .08; //Todo - Calculate for each state
//        }
//    }

//    // Add service controller
//    angular.module('TaxModule', []).service('TaxService', TaxService);

//     /*
//    Add the TaxModule as a dependency for the MyApp module
//  */
//  angular.module('MyApp', ['TaxModule']);

//    // Class that will be added as a controller
//    class ProductsController {
//        public product;

//        constructor(TaxService:TaxService) {
//            this.product = {
//                name: 'milk',
//                price: 8.99,
//                tax: TaxService.CalculateTax(8.99)
//            };
//        }
//    }
//    // Add ProductsController class to the controller while naming it productsController
//    angular.module('MyApp').controller('productsController', ProductsController);
//}

//namespace MyContactApp {
//    angular.module("MyApp", []);

//    // Class that will be added as a controller
//    class ContactController {
//        public contacts;

//        constructor() {
//            this.contacts = [
//                { name: "Matthew", phone: "111-111-1111", email: "matt@aol.com" },
//                { name: "Mark", phone: "222-222-2222", email: "mark@aol.com" },
//                { name: "Luke", phone: "333-333-3333", email: "luke@aol.com" },
//                { name: "John", phone: "444-444-4444", email: "john@aol.com" }
//            ];
//        }
//    }
//    // Add ContactController class to the controller while naming it contactController
//    angular.module("MyApp").controller("contactController", ContactController);
//}

//namespace MyApp {
//    angular.module("MyApp", []);

//    // Class that will be added as a controller
//    class HomeController {
//        public cars;

//        constructor() {
//            this.cars = [
//                { year: 1989, make: "VW", model: "Fox" },
//                { year: 1988, make: "Nissan", model: "Sentra" },
//                { year: 1996, make: "Ford", model: "Explorer" },
//                { year: 2009, make: "BMW", model: "i325" },
//                { year: 2016, make: "Tesla", model: "Model S" }
//            ];
//        }
//    }
//    // Add HomeController class to the controller while naming it homeController
//    angular.module("MyApp").controller("homeController", HomeController);
//}

//namespace MyApp {
//    angular.module("MyApp", []);

//    // Class that will be added as a controller
//    class HomeController {
//        public friends;

//        constructor() {
//            this.friends = ["Cartman","Kyle","Timmy","Stan","Kenny"];
//        }
//    }
//    // Add HomeController class to the controller while naming it homeController
//    angular.module("MyApp").controller("homeController", HomeController);
//}

//namespace MyApp {
//    // Angular Module
//    angular.module("MyApp", []);

//    // Class that will be added as a controller
//    class HomeController {
//        // public field that will be exposed to the view
//        public message = "Welcome!";
//    }

//    // Add HomeController class to the controller while naming it homeController
//    angular.module("MyApp").controller("homeController", HomeController);
//}