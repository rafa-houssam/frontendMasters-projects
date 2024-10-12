function createCounter() {
    let counter = 0
    const myFunction = function () {
        // let counter=4; this has the priority to see first (local scope)
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3);
