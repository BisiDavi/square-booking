import axios from "axios";

export function listServices() {
  return axios.get("/api/catalog/search-catalog-items");
}
