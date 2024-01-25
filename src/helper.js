export function currencyFormatter(price) {
  let convertedPrice = new Intl.NumberFormat('en-IN').format(price);
  return convertedPrice;
}
