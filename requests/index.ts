import axios from "axios";

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
