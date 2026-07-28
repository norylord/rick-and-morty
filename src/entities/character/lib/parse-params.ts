import {Character} from "@/entities/character";

export const parseStatus = (value: Character["status"]) => {
	const available = ['Alive', 'Dead', 'unknown']
	if (!value.length) return null
	return available.includes(value) ? value : null
}

export const parseGender = (value: Character['gender']) => {
	const available = ["unknown", "Male", "Female", "Genderless"]
	if (!value.length) return null
	return available.includes(value) ? value : null
}

export const parseSpecies = (value: Character['species']) => {
	if (!value || value == '') return null
	return value
}
