import { getTemplate } from 'templates';
import { products } from 'productData';
import { reviews } from 'reviewsController';
import { handlebarsForLoop } from 'handlebarsForLoop';
export function productDetails(){

    // Get product id
    let currentUrl = $(location).attr('href'),
        id = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
        
    getTemplate('productDetails')
        .then((template) => {
            
        let dataInfo = products(),
            foundObject;

            for(let i = 0; i < dataInfo.length; i += 1){
                if(dataInfo[i].id === parseInt(id)){
                    foundObject = dataInfo[i];
                    break;
                }
            }
            
            // Pass to handlebars only the wanted product
            let productsInfo = template(foundObject);
            
            $('#dynamic-container').html(productsInfo);

    }, (error) => {
        console.log(error);
    });

    reviews();
    
    //Used to create a for loop in productDetails.hbs, thanks to custom handlebars helper
    handlebarsForLoop();
}