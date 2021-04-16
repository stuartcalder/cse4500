// Copyright 2021 Stuart Calder.
const person = {
	name: 'Stuart',
	age: 24,
	major: 'Computer Science'
}
console.log("person is of type", typeof person, "with value", person)
const person_string = JSON.stringify(person)
console.log("person_string is of type", typeof person_string, "with value", person_string)
const person_json = JSON.parse(person_string)
console.log("person_json is of type ", typeof person_json, "with value", person_json)
