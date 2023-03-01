let myFavoriteNumber = 'seven'
myFavoriteNumber = 7

// error TS2322: Type 'number' is not assignable to type 'string'.

// 当声明一个变量并赋值时，此时就会被类型判断
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断为 any 类型
// TS会在没有指定类型的时候推断出一个类型，这个就是类型推论
