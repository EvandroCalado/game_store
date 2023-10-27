export function calcDiscount(price: number, discount: number) {
  if (!discount) return price;

  const discountValue = (price * discount) / 100;

  const finalPrice = (price - discountValue).toFixed(2);

  return finalPrice;
}
