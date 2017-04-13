class Hash{
    constructor(object){
        this.object = object;
    }
}

Hash.prototype.isEmpty = function(){
    if(Object.keys(this.object).length < 1){
        return true;
    }else{
       return false;
    }
};

Hash.prototype.merge = function(obj){
  let returnHash = {};
  return new Hash(Object.assign(returnHash, this.storedObject, obj.object));
};

// Hash.prototype.merge = function(newHash){
//   let returnHash = {};
//   return new Hash(Object.assign(returnHash, this.storedObject, newHash.storedObject));
// };


Hash.prototype.hasKey = function(a){
    if(this.object.hasOwnProperty(a) === true){
        return true;
    }else{
        return false;
    }
};

Hash.prototype.invert = function(){
    let result = {};
  for (let item in this.object) {
    if(this.object.hasOwnProperty(item)) {
      result[this.object[item]] = item;
    }
  }
  return result;
}

Hash.prototype.inspect = function(){
   return JSON.stringify(this.object).replace(/:/g,"=>");
}

Hash.prototype.keys = function(){
  return Object.keys(this.object);
}

Hash.prototype.values = function(){
  return Object.values(this.object);
}


let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

console.log(hash.isEmpty()); // returns false
console.log(emptyHash.isEmpty()); // returns true

let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// should not mutate original hash

console.log(merged !== hash); // should be true

console.log(hash.hasKey('a')); // returns true
console.log(hash.hasKey('bob')); // returns false
console.log(merged.hasKey('bob')); // returns true

// // Values will have to made into strings
console.log(hash.invert()); // returns Hash {'1':'a', '2':'b', '3':'c'}

console.log(hash.inspect()); // returns "{'a' => 1, 'b' => 2, 'c' => 3}"

console.log(hash.keys()); // returns ['a', 'b', 'c']
console.log(hash.values()); // returns [1, 2, 3]
