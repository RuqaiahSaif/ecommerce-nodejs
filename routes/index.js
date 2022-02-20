const express = require('express');
const router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'roqia here' });
});

/* product page. */
router.get('/products', function (req, res, next) {
  axios.get("https://dummyjson.com/products").then(data => {
    res.render('products', { title: 'products here', products: data.data.products });
  });

});

// router.get('/products/search', async (req, res, next) => {
//   try {
//     const query = req.query.q;
//     let response = await axios.get(
//       `https://dummyjson.com/products/search?q=${query}`
//     );

//     res.render('search', {
//       products: response.data.products,
//     });
//   } catch (err) {
//     console.log(err);
//     res.send('sorry man we have error')
//   }
// });

// router.get('/products/:id', async (req, res, next) => {
//   try {
//     const productId = req.params.id;
//     let response = await axios.get(
//       `https://dummyjson.com/products/${productId}`
//     );

//     res.render('product', {
//       product: response.data,
//     });
//   } catch (err) {
//     console.log(err);
//     res.send('sorry man we have error')
//   }
// });

module.exports = router;
