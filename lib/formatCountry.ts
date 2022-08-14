import countries from "@/json/countries.json";

export default function formatCountry(countryCode: string) {
  const filterCountries = countries.filter(
    (country) => country.Iso2 === countryCode
  );
  const selectedCountry: string = filterCountries[0].name;
  return selectedCountry;
}
