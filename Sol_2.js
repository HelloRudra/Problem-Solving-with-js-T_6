function calculateCartTotal(items, taxRate) {
  const subtotal = items.reduce((total, item) => {
    const discountedPrice =
      item.price * item.quantity * (1 - item.discount / 100);

    return total + discountedPrice;
  }, 0);

  const finalTotal = subtotal * (1 + taxRate / 100);

  return Math.round((finalTotal + Number.EPSILON) * 100) / 100;
}