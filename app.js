// solving leet_code javascript problems

// 1:   Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld(params) {
    return function(params) {
        return 'Hello World';
    }
}

const f = createHelloWorld();
// alert(f('hi'));


// 2: Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n) {
    let count = n;
    return function () {
        return count++;
    }
}

const counter = createCounter(20);
// alert(counter());
// alert(counter());


//3:  Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
    return {
        toBe: function(expected) {
            if(val === expected) {
                return true;
            } else {
                throw new Error('Not Equal');
            }
        },
        notToBe: function(expected) {
            if(val !== expected) {
                return true;
            } else {
                throw new Error('Equal');
            }
        }
    }
}

// alert(expect(5).toBe(5));
// alert(expect(5).notToBe(3));