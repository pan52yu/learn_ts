// 类型断言
interface AType {
    name: string
    age: number
}

const obj = {
    a: [] as AType[],
}

obj.a = [
    {
        name: 'bob',
        age: 36,
    },
]
