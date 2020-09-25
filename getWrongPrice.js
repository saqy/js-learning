


function createArrObj(products, productPrices){
    let arr = [];
    for(i = 0; i < products.length; i++){
        let obj = {};
        obj.name = products[i];
        obj.price = productPrices[i];
        arr.push(obj)
    }
    
    return arr;
}

const products = ['eggs', 'milk', 'cheese'];
const productPrices = [2.89, 3.29, 5.79];

const soldProducts = ['eggs', 'eggs', 'cheese', 'milk']
const soldPrices = [2.89, 2.99, 5.97, 3.29];

const actualPrice = createArrObj(products, productPrices);
const soldPrice = createArrObj(soldProducts, soldPrices);

console.log({actualPrice, soldPrice})

function getWrongPrice(arr1, arr2){
    const len1 = arr1.length;
    const len2 = arr2.length;
    let count = 0;
    let text = '';
    for(n = 0; n < len1; n++){
        for(m = 0; m < len2; m++){
            if(arr1[n].name === arr2[m].name){
                if(arr1[n].price !== arr2[m].price){
                    text += `${arr1[n].name} has ${arr2[m].price} which is not a actual price, `;
                    count++;
                } 
            }   
        }
    }

    console.log(text, `${count} wrong product price`)
}

getWrongPrice(actualPrice, soldPrice);
