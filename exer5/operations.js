import mongoose from "mongoose"
import Dog from "./models/dog.js"

/** 
Get a dog from the db based on a specific attribute

    @async
    @function readDog
    @param {Object} identifier - the field and value to search by
    @return {[Dog]} - an array of Dog objects that satisfy the query

*/
const readDog = async (identifier) => {
    try {
        const dog = await Dog.findOne(identifier)
        return dog
    } catch (e) {
        console.log('Error:', e.message);
    }
}

/** 
Get all dogs from the db

    @async
    @function readDogs
    @return {[Dog]} - an array of Dog objects

*/
const readDogs = async () => {
    try {
        const dogs = await Dog.find()
        return dogs
    } catch (e) {
        console.log('Error:', e.message);
    }
}

/** 
Create a new dog and save it to the db

    @async
    @function createDog
    @param {Object} newDogData - the Dog object to be added to the db
    @return {boolean} - true if the query was successful, false otherwise

*/
const createDog = async (newDogData) => {
    try {
        const newDog = await new Dog(newDogData)
        await newDog.save()
    } catch (e) {
        console.log(e.message)
        return false;
    }
    return true;
}

/** 
Edit a dog from the db based on a specific attribute.
This should work like a PATCH request, meaning the original
Dog object should remain but the specificed attributes should be changed. 

    @async
    @function updateDog
    @param {Object} identifier - the field and value to search by (used to identify the dog we want to edit)
    @param {Object} newDogData - the fields that should change and their new values 
    @return {boolean} - true if the update was sucessful, false otherwise

*/
const updateDog = async (identifier, newDogData) => {
    try {
        await Dog.findOneAndUpdate(identifier, newDogData)
        return true
    } catch (e) {
        console.log('Error: ', e.message)
        return false
    }
}
/** 
Remove a dog from the db based on a specific attribute

    @async
    @function deleteDog
    @param {Object} identifier - the field and value to search by
    @return {boolean} - true if the update was sucessful, false otherwise

*/
const deleteDog = async (identifier) => {
    try {
        await Dog.findOneAndDelete(identifier)
        return true
    } catch (e) {
        console.log('Error: ', e.message)
        return false
    }
}

export { readDog, readDogs, createDog, updateDog, deleteDog }