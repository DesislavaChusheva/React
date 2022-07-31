
const baseUrl = "http://localhost:3030/data/pets"

export const getAllPets = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
}

export const getPetById = async (petId) => {
    const response = await fetch(`${baseUrl}/${petId}`);
    const result = await response.json();

    return result;
}