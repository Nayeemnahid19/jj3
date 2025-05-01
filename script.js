function applyFilters() {
    const selectedCategory = document.getElementById('category').value;
    const selectedPrice = document.getElementById('price').value;

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const categoryMatch = selectedCategory === 'all' || product.classList.contains(selectedCategory);
      const price = parseInt(product.getAttribute('data-price'));
      let priceMatch = false;

      if (selectedPrice === 'all') {
        priceMatch = true;
      } else if (selectedPrice === 'low') {
        priceMatch = price < 500;
      } else if (selectedPrice === 'mid') {
        priceMatch = price >= 500 && price <= 999;
      } else if (selectedPrice === 'high') {
        priceMatch = price >= 1000;
      }

      if (categoryMatch && priceMatch) {
        product.classList.add('show');
      } else {
        product.classList.remove('show');
      }
    });
  }

  window.onload = applyFilters;