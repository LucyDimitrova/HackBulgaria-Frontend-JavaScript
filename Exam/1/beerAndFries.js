"use strict";

var beerAndFries = function (items){

if (items === [])
  return 0;

else

{var items_beer = items.filter(function (item){
  return item["type"] === "beer";
});

var items_fries = items.filter(function (item){
  return item["type"] === "fries";
});

items_beer.sort(function (a,b){
  return a.score - b.score;
});

items_fries.sort(function (a,b){
  return a.score - b.score;
});

var max = 0;

items_beer.forEach(function (item){
  items_fries.forEach(function (item1){

    if (items_beer.indexOf(item) === items_fries.indexOf(item1))
      max += item.score*item1.score;
  });
});

return max;
}

};
exports.beerAndFries = beerAndFries;
