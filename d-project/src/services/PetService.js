import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/pets"

export const getAllPets = async () => request.get(baseUrl);
export const getPetById = async (petId) => request.get(`${baseUrl}/${petId}`);
export const editPet = async (petId, petData) => request.put(`${baseUrl}/${petId}`, petData);
export const createPet = async (petData) => request.post(baseUrl, petData);
export const deletePet = async (petId) => request.del(`${baseUrl}/${petId}`);