const arr = [1,2,3]
console.log(`Original array is: ${arr}`)
console.log(`length of array is: ${arr.length}`)

arr.unshift(0)
console.log(`add element using unshift(will insert at 0th index): ${arr}`)

arr.shift()
console.log(`removing element from first index using shift: ${arr}`)

arr.push(4)
console.log(`adding element at last using push: ${arr}`)

arr.pop()
console.log(`deleting element from last using pop: ${arr}`)

arr.splice(0,0,9)
console.log(`adding at particular index using splice: ${arr}`)

arr.splice(2,2,7)
console.log(`adding at index 2 using splice and deleting two elements ${arr}`);
