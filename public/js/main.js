/* globals Navigo */

import { home } from 'homeController';
import { productDetails } from 'productDetailsController';

(function routing() {

    let router = new Navigo(null, true);
    router.on('/', home)
        .on('/product/:id', productDetails)
        .resolve();
}());