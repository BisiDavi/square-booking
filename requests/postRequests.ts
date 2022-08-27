import axios from "axios";

import type { createCustomerType } from "@/types/request-types";

export function getTeam(team: string) {
  return axios.post("/api/team/retrieve-team-member", { teamMemberId: team });
}

export function getLocation(location: string) {
  return axios.post("/api/locations/retrieve-location", {
    locationId: location,
  });
}

export function createCustomer({
  email,
  firstName,
  lastName,
}: createCustomerType) {
  return axios.post("/api/customer/create-customer", {
    email,
    firstName,
    lastName,
    idempotencyKey: email,
  });
}

export function getACatalogObject(catalogObjectId: string) {
  return axios.post("/api/catalog/retrieve-catalog-object", {
    catalogObjectId,
  });
}

export function obtainAccessToken(
  squareCode: string,
  email: string,
  isPremium: boolean
) {
  return axios.post("/api/oauth/obtain-access-token", {
    squareCode,
    email,
    isPremium,
  });
}

export function onboardUser(email: string) {
  return axios.post("/api/onboard-user", { email });
}

export function searchCatalogObject(searchQuery: any) {
  return axios.post("/api/catalog/search-catalog-objects", { searchQuery });
}

export function createCatalogCategory(category: string) {
  return axios.post("/api/catalog/create-catalog-category", { category });
}

export function searchTeam(query: any) {
  return axios.post("/api/team/list-team-member", { query });
}

export function retrieveCustomer(id: string) {
  return axios.post("/api/customer/retrieve-customer", { id });
}

export function businessBookingProfile(accesstoken: string) {
  return axios.post("/api/booking/retrieve-booking-profile", {
    token: accesstoken,
  });
}

export function createBooking(bookingData: any) {
  console.log("bookingData-createBooking", bookingData);
  return axios.post("/api/booking/create-booking", { bookingData });
}

export function createTeam(teamMember: any) {
  return axios.post("/api/team/create-team-member", {
    teamMember,
  });
}

export function createService(formData: any) {
  return axios.post("/api/catalog/create-catalog-service", { formData });
}

export function searchCustomer(email: string) {
  return axios.post("/api/customer/search-customer", { email });
}

export function searchBookingAvailability(formData: any) {
  return axios.post("/api/booking/search-booking-availablity", { formData });
}

export function deleteCustomer(id: string) {
  return axios.post("/api/customer/delete-customer", { id });
}

export function deleteService(id: string) {
  return axios.post("/api/catalog/delete-catalog-service", { id });
}

export function getImages() {
  return axios.post("/api/catalog/search-catalog-objects", {
    searchQuery: {
      objectTypes: ["IMAGE"],
    },
  });
}
