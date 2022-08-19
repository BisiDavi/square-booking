import axios from "axios";

import type { createCustomerType } from "@/types/request-types";

export function listServices() {
  return axios.get("/api/catalog/search-catalog-items");
}

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

export function obtainAccessToken(squareCode: string, email: string) {
  return axios.post("/api/oauth/obtain-access-token", { squareCode, email });
}

export function listUsers() {
  return axios.get("/api/custom");
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
