import * as requestAdmin from "./requesterAdmin";

const baseUrl = "http://localhost:3030/users"

export const getAllUsers = async () => requestAdmin.getAdmin(baseUrl);
export const getUserById = async (userId) => requestAdmin.getAdmin(`${baseUrl}/${userId}`);