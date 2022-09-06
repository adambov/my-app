export default function Listrenderingwithindex() {
    const fruits = ['apple', 'banana', 'mango', 'lemon'];

    const fruitList = fruits.map((fruit, index) => console.log({index, fruit}))

}