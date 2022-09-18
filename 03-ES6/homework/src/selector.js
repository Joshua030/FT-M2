var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {

  // tu código aquí
 let firstLetter=selector[0];
 if(firstLetter==='#') return "id";
 else if(firstLetter==='.') return "class";
 for (let i= 0 ; i<selector.length ;i++) {
  if (selector[i]===".") return "tag.class";
 }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function (element) {
    return '#'+ element.id ===selector;
   }
  }else if (selectorType === "class") {
    matchFunction = function (element) {
     for(let i= 0; i<element.classList[i].length ; i++){
      if('.' + element.classList[i]  ===selector) return true;
     }
     return false;
    }
  } else if (selectorType ==='Tag.class'){
    matchFunction = function (element) {
    let[tagBuscada, clasBuscada] = selector.split(".");
    return (
      matchFunctionMaker(tagBuscada)(element) && 
      matchFunctionMaker("." + clasBuscada)(element)
    );
    };
  }  else if (selectorType ==='Tag'){
    matchFunction = function (element) {
     return element.tagName.toLowerCase() === selector.toLowerCase();
      }
}
return matchFunction;
}

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
