// Implement a Ruby like Hash in Javascript. You will be able to use Object as a base to get most of the behaviour.
//
// Name the class Hash.
// Its constructor will take an object as argument.
// It should add support for the following ruby Hash methods as prototype methods:
// .empty (name it .isEmpty in Javascript)
// .merge (merges both hashes into a new hash and returns it)
// .hasKey (checks if key is in hash)
// .invert (returns a new Hash with keys & their values and vice versa)
// .inspect(display the hash ruby style as a string)
// .keys (returns all hash keys in an array)
// .values (returns all hash values in an array)
// All methods that return a hash must return a new Hash object.
// Don't overthink this. Javascript Objects and Ruby Hashes are similar.

class Hash {
  constructor(x) {
    this.storedObject = x;
  }

  isEmpty() {
    if (Object.keys(this.storedObject).length < 1) {
      return true;
    } else {
      return false;
    }
  }
  merge(newHash) {
    let returnHash = {};
    return new Hash(Object.assign(returnHash, this.storedObject, newHash.storedObject));
  }
  hasKey(key) {
    return this.storedObject.hasOwnProperty(key);
  }
  invert() {
    let inverted = {};
    Object.entries(this.storedObject).forEach(function(array) {
      inverted[array[1].toString()] = array[0];
    });
    return inverted;
  }
  inspect() {
    let result = [];
    Object.entries(this.storedObject).forEach(function(array) {
      result.push(`'${array[0]}' => ${array[1]}`);
    });
    return `{ ${result.join(", ")} }`;
  }
  keys() {
    return Object.keys(this.storedObject);
  }
  values() {
    return Object.values(this.storedObject);
  }
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
