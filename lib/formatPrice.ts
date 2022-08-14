import currencySymbols from "@/json/currency-symbols.json";

function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function currencySymbol(currencyCode: string) {
  const currencyData = currencySymbols.filter(
    (currencyItem) => currencyItem.code === currencyCode
  );
  return currencyData[0].symbol;
}

export default function formatPrice(givenPrice: number, currencyCode: string) {
  const price = Number(givenPrice / 100);
  const priceFixed2 = price?.toFixed(2);
  const formattedPrice = numberWithCommas(priceFixed2);
  return `${currencySymbol(currencyCode)}${formattedPrice}`;
}
