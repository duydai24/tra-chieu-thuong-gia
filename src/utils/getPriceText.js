export function getPriceText(price, suffix = 'đ') {
  return price
    ? price.toLocaleString('it-IT', {
      style: 'currency',
      currency: suffix
    })

    : '0' + suffix;
}

