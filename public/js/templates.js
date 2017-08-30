/* globals Handlebars, HandlebarsIntl */
import { requester } from 'requester';
export function getTemplate(templateName) {
    
    HandlebarsIntl.registerWith(Handlebars);

    return requester.get(`/public/templates/${templateName}.hbs`)

            .then((template) => {
                
                let compileToHandlebars = Handlebars.compile(template);

                return Promise.resolve(compileToHandlebars);

            }, (reject) => {
                console.log(reject);
            })

}