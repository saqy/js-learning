 /*
 Question 12
Given the list of items and their actual prices and sold prices. Find the number of items in sold products which has wrong prices
Example Input
Products = ['eggs', 'milk', 'cheese'];
productPrices = [2.89, 3.29, 5.79];
productSold = ['eggs', 'eggs', 'cheese', 'milk']
soldPrice = [2.89, 2.99, 5.97, 3.29];
Example Output Here
eggs has 2.99 price which is worng milk has 5.97 price which is worng So we will return 2 in this example.
*/

function checkPrices(items , itemscost , itemsold , soldcost){
    let incorrect = 0;
    for (let i = 0 ; i < itemsold.length ; i++){
            for (let j =0 ; j < items.length ; j++){
         if(itemsold[i] === items[j]){
              if(soldcost[i] !==  itemscost[j]){
           incorrect++
           }
         }
        }
        }
     console.log( incorrect + " Items have incorrect costs") 
    }
    Products = ['eggs', 'milk', 'cheese'];
    productPrices = [2.89, 3.29, 5.79];
    productSold = ['eggs', 'eggs', 'cheese', 'milk']
    soldPrice = [2.89, 2.99, 5.97, 3.29];
    
    checkPrices( Products ,productPrices , productSold, soldPrice)
    