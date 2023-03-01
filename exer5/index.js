import { connectDB, closeDB } from "./utils/db.js"
import { readDog, readDogs, createDog, updateDog, deleteDog } from "./operations.js"

connectDB() // function that creates a connection to your db

// tests - feel free to change these or add more
const createTest1 = await createDog({ name: "Casey", age: 10, breed: "Pomeranian", dateEnter: Date.now() })
const createTest2 = await createDog({ name: "Doggy", age: 3, breed: "Poodle", dateEnter: Date.now() + 1000, })
const createTest3 = await createDog({ name: "Dots", age: 3, breed: "Poodle", dateEnter: Date.now(), dateAdopt: Date.now() + 1000 })
const test2 = await readDog({ age: 3 })
const test3 = await readDogs({ age: 3 })
const test4 = await updateDog({ name: "Casey" }, { age: 3 })
const test5 = await deleteDog({ name: "Casey" })
const test = await readDogs({})


console.log(createTest1)
console.log(createTest2)
console.log(createTest3)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
console.log(test)

closeDB() // function that closes the connection to your db

