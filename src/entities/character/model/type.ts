export type Character = {
	id: number
	name: string
	status: CharacterStatus
	species: string
	type: string
	gender: CharacterGender
	origin: CharacterOrigin
	location: CharacterLocation
	image: string
	episode: string[]
	url: string
	created: string
}

type CharacterOrigin = {
	name: string,
	url: string
}

type CharacterLocation = {
	name: string
	url: string
}

type CharacterGender = "Male" | "Female" | "unknown" | "Genderless"
type CharacterStatus = "Alive" | "Dead" | "unknown"
