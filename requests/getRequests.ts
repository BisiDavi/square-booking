import axios from "axios";

export function listServices() {
  return axios.get("/api/catalog/search-catalog-items");
}

export function listUsers() {
  return axios.get("/api/custom");
}
