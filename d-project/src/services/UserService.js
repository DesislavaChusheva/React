import * as request from "./requester";

const baseUrl = "http://localhost:3030/users"

export const getAllUsers = async () => request.get(baseUrl);
export const getUserById = async (userId) => request.get(`${baseUrl}/${userId}`);