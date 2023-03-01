interface Person3 {
    gender?: string
    age: number
}

const jerrey: Person3 = {
    age: 13,
    friends: ['tom']
}

// 定义好之后 不能多也不能少 否则都会报错
// 可以使用 ？ 表明为可选属性

interface Person {
    readonly name: string // readonly 只读属性 不能修改
    gender: string
    age: number
    [anyname: string]: string | number
}

let tom: Person = {
    name: 'Tom',
    age: 18,
    gender: 'male',
}
tom.age = 99
tom.fridens = 'bob'
tom.name = 'uu' // 因为 定义了name 为readonly 只读 所以不能修改

type Person2 = {
    name?: string
    age: number
}

const bob: Person2 = {
    age: 99,
}
