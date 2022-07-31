import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/pets"

export const getAllPets = async () => request.get(baseUrl);
export const getPetById = async (petId) => request.get(`${baseUrl}/${petId}`);