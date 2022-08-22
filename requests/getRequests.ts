import axios from "axios";

export function listServices() {
  return axios.get("/api/catalog/search-catalog-items");
}

export function listUsers() {
  return axios.get("/api/custom");
}

export function listLocations() {
  return axios.get("/api/locations/list-location");
}

export function listBookings() {
  return axios.get("/api/booking/list-bookings");
}

export function getCategories() {
  return axios.get("/api/category/list-category");
}

export function getCustomers() {
  return axios.get("/api/customer/list-customer");
}

export function getBusinessBookingProfile() {
  return axios.get("/api/booking/retrieve-a-business-booking-profile");
}
