import * as requestAdmin from "./requesterAdmin";
import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/adoptions"

export const getAllAdoptionRequests = async () => request.get(baseUrl);
export const getAdoptionRequestById = async (adoptionRequestId) => request.get(`${baseUrl}/${adoptionRequestId}`);
export const createAdoptionRequest = async (adoptionData) => request.post(baseUrl, adoptionData);
export const editAdoptionRequest = async (requestId, requestData) => requestAdmin.putAdmin(`${baseUrl}/${requestId}`, requestData);
export const removeAdoptionRequest = async (requestId) => requestAdmin.delAdmin(`${baseUrl}/${requestId}`);