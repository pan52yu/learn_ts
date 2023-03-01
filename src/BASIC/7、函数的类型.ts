// http://ts.xcatliu.com/basics/type-of-function.html
// 函数的类型

const sum2 = (a: number, b: number): number => {
    return a + b
}

// 输入两个值 两个值都必须为数字 输出的结果也是数字
const num = sum2(1, 1)
console.log(num)

// 用接口形式定义函数的类型

interface Number2 {
    (num1: number, num2: number): number
}

let num3: Number2
num3 = (num1: number, num2: number): number => {
    return num1 + num2
}

// 同样 也是可以配置可选参数的
// !! 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了

// 参数默认值

const sum3 = (n1: number, n2: number = 2, n3?: number): number => {
    return n3 ? n1 + n2 + n3 : n1 + n2
}

console.log(sum3(1))
console.log(sum3(1, 2))
console.log(sum3(1, 2, 3))

// 剩余参数 ...

const pushArr = (arr: any[], ...items: any[]) => {
    items.forEach(ite => {
        arr.push(ite)
    })
}

const nullArr: any[] = []
pushArr(nullArr, 1, 2, 3, 4, 5, 6, 7, 8)

console.log(nullArr, '44行')

// 重载 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}

console.log(reverse('前端已死'))
console.log(reverse(123215415))
