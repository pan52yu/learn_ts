// 「类型 + 方括号」表示法
let friends: string[] = ['bob', 'tom']
// friends.push(12)

// 数组泛型
// let ages: Array<number> = [18, 19, 'old']

// 类数组
function sum() {
    let args: IArguments = arguments
    console.log(args.length)
}

sum()

// any在数组中的应用

const arrList: any[] = [1, '2', ['arr']]
