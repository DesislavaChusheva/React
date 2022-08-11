import * as request from "./requester";
import * as requestAdmin from "./requesterAdmin";


const baseUrl = "http://localhost:3030/data/pets"

export const getAllPets = async () => request.get(baseUrl);
export const getPetById = async (petId) => request.get(`${baseUrl}/${petId}`);
export const editPet = async (petId, petData) => request.put(`${baseUrl}/${petId}`, petData);
export const createPet = async (petData) => request.post(baseUrl, petData);
export const deletePet = async (petId) => request.del(`${baseUrl}/${petId}`);


export const deletePetAdmin = async (petId) => requestAdmin.delAdmin(`${baseUrl}/${petId}`);