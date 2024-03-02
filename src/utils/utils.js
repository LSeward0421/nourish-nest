export const organizeProducts = (products) => {
  const uniqueProducts = new Map();

  products.forEach((product) => {
    const key = `${product.label}-${product.brand || 'Generic'}`;
    if (!uniqueProducts.has(key)) {
      uniqueProducts.set(key, product);
    }
  });

  return Array.from(uniqueProducts.values()).sort((a, b) => a.label.localeCompare(b.label));
};

