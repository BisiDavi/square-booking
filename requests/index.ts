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
