let myFavoriteNumber2: string | number
myFavoriteNumber2 = 'seven'
myFavoriteNumber2 = 7
// myFavoriteNumber2 = true // 不能将类型“boolean”分配给类型“string | number”。ts(2322)

// function getLength(doSomething: string | number): string {
//     return doSomething.length
// }
// 类型“string | number”上不存在属性“length”。
//   类型“number”上不存在属性“length”。ts(2339)

function getLength(doSomething: string | number): string {
    return doSomething.toString()
}

let myFavoriteNumber3: string | number
myFavoriteNumber3 = 'seven'
console.log(myFavoriteNumber3.length) // 5
myFavoriteNumber3 = 7
console.log(myFavoriteNumber3.length) // 编译时报错 类型“number”上不存在属性“length”。
