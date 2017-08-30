/*globals System */

System.config({
    'transpiler': 'plugin-babel',
    map: {
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // External Libraries
        'jquery': '/libs/jquery/dist/jquery.min.js',
        'bootstrap-js': '/libs/bootstrap/dist/js/bootstrap.min.js',

        // App files
        'main': '/public/js/main.js',
        'templates': '/public/js/templates.js',
        'requester': '/public/js/requester.js',

        //Controllers
        'homeController': '/public/js/controllers/homeController.js',
        'productDetailsController': '/public/js/controllers/productDetailsController.js',
        'reviewsController': '/public/js/controllers/reviewsController.js',

        //Helpers
        'handlebarsForLoop': '/public/js/helpers/handlebarsForLoop.js',
        'validateData': '/public/js/helpers/validateData.js',

        //Data interaction
        'productData': '/public/js/data/productData.js'
    }
});