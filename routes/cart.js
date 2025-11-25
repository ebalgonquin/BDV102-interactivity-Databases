// Add product to cart
router.post('/add', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cartItem = new Cart({ product: productId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Remove product from cart
router.delete('/remove/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// List all items in cart
router.get('/', async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('product');
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});