import { getTemplate } from 'templates';
import { products } from 'productData';
export function home() {
    
    getTemplate('home')
    .then((template) => {
        
        let productsInfo = template(products());
        
        $('#dynamic-container').html(productsInfo);

    }, (error) => {
        console.log(error);
    });
}

