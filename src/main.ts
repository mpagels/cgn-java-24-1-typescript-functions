function greetingsByString(): void {
    console.log("hello world")
}

greetingsByString()
greetingsByString()
greetingsByString()
greetingsByString()


function greetUserByName(name: string, age: number): void {
    console.log("Hello " + name + ", you are " + age + " old.")
}

// 500 zeilen code

greetUserByName(
    "Martin", 38
)


// arrow function

const add = (a: number, b: number): number => {
    return a +b
}

console.log(add(5,6))

const greetUserByNameArrowFunction = (name: string, age: number): void => {
    console.log("Hello " + name + ", you are " + age + " old.")
}


function myFunctionWithDefaultValue(name: string = "Martin") {
    console.log(name)
}

// array methods


// map
const numbers: number[] = [1,2,3,4,5,6]
const doubledNumbers: number[] = numbers.map((number: number) => {return number * 2}
)
console.log(doubledNumbers)
console.log(numbers)

// filter
const evenNumbers: number[] = numbers.filter((number: number) => number % 2 === 0 )
console.log(evenNumbers)









