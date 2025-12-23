console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];
const maxItems = 5;



function addItem(item)
{
basket.push(item)


return true;
}

console.log(addItem("sambusa"))
console.log(addItem("milk"))


function listItems(item)
{
    for(i=0; i<=basket.length;i++){
        console.log(`item in the bascket is`,item)
    }
}

console.log(listItems(basket))

function empty() {
    if (Array.isArray(basket)) {
        basket.length = 0;
    }
}

console.log(empty(basket)[i])


// function isFull(basket, maxItems) {
//   if (basket.length < maxItems) {
//     return false;
//   }
//   return true;
// }
function isFull() {
  if (basket.length < maxItems) {
    return false;
  }
  return true;
}

function addItem(item) {
  if (isFull()) {
    // basket is full → do not add item
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

function removeItem(item) {
  const index = basket.indexOf(item);

  if (index === -1) {
    return null;
  }

  const removedItems = basket.splice(index, 1);
  return removedItems[0];
}





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
