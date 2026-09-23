const productVariants = {
  100: {
    article: '01306',
    oldPrice: '349,20 ₽',
    price: '326,40 ₽',
  },
  500: {
    article: '01307',
    oldPrice: '1 646 ₽',
    price: '1 432 ₽',
  },
  1000: {
    article: '01308',
    oldPrice: '2 592 ₽',
    price: '2 064 ₽',
  },
  5000: {
    article: '01309',
    oldPrice: '8 710 ₽',
    price: '6 320 ₽',
  },
};

const weightsContainer = document.querySelector('.product__weights');
const articleElement = document.querySelector('[data-product-article]');
const oldPriceElement = document.querySelector('[data-old-price]');
const currentPriceElement = document.querySelector('[data-current-price]');

const updateProductVariant = (button) => {
  const { weight } = button.dataset;
  const variant = productVariants[weight];

  if (!variant) {
    return;
  }

  const activeButton = weightsContainer.querySelector(
    '.product__weight--active'
  );

  if (activeButton) {
    activeButton.classList.remove('product__weight--active');
    activeButton.setAttribute('aria-pressed', 'false');
  }

  button.classList.add('product__weight--active');
  button.setAttribute('aria-pressed', 'true');

  articleElement.textContent = variant.article;
  oldPriceElement.textContent = variant.oldPrice;
  currentPriceElement.textContent = variant.price;
};

if (
  weightsContainer &&
  articleElement &&
  oldPriceElement &&
  currentPriceElement
) {
  weightsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.product__weight');

    if (!button || !weightsContainer.contains(button)) {
      return;
    }

    updateProductVariant(button);
  });
}
