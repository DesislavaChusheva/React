import * as requestAdmin from "./requesterAdmin";
import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/donations"

export const getAllDonations = async () => request.get(baseUrl);
export const getDonationById = async (donationId) => request.get(`${baseUrl}/${donationId}`);
export const createDonation = async (donationData) => request.post(baseUrl, donationData)