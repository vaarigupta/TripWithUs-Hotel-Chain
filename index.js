const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const hotels = require('./hotels');

const app = express();
const port = 3010;
app.use(cors());

//Endpoint 1: Get the hotels sorted by pricing
function SortByPricing(hotel1, hotel2, pricing) {
  if (pricing.toLowerCase() === 'low-to-high') {
    return hotel1.price - hotel2.price;
  } else {
    return hotel2.price - hotel1.price;
  }
}
app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let hotelsCopy = hotels.slice();
  let result = hotelsCopy.sort((hotel1, hotel2) =>
    SortByPricing(hotel1, hotel2, pricing)
  );
  res.json({ hotels: result });
});

//Endpoint 2: Get the hotels sorted based on their Ratings
function SortByRating(hotel1, hotel2, rating) {
  if (rating.toLowerCase() === 'low-to-high') {
    return hotel1.rating - hotel2.rating;
  } else {
    return hotel2.rating - hotel1.rating;
  }
}
app.get('/hotels/sort/rating', (req, res) => {
  let rating = req.query.rating;
  let hotelsCopy = hotels.slice();
  let result = hotelsCopy.sort((hotel1, hotel2) =>
    SortByRating(hotel1, hotel2, rating)
  );
  res.json({ hotels: result });
});

//Endpoint 3: Get the Hotels sorted based on their Reviews
function SortByReviews(hotel1, hotel2, reviews) {
  if (reviews.toLowerCase() === 'least-to-most') {
    return hotel1.reviews - hotel2.reviews;
  } else {
    return hotel2.reviews - hotel1.reviews;
  }
}
app.get('/hotels/sort/reviews', (req, res) => {
  let reviews = req.query.reviews;
  let hotelsCopy = hotels.slice();
  let result = hotelsCopy.sort((hotel1, hotel2) =>
    SortByReviews(hotel1, hotel2, reviews)
  );
  res.json({ hotels: result });
});

//Endpoint 4: Filter the hotels based on the Hotel Amenity
function filterByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity.toLowerCase();
}
app.get('/hotels/filter/amenity', (req, res) => {
  let amenity = req.query.amenity;
  let hotelsCopy = hotels.slice();
  let result = hotelsCopy.filter((hotel) => filterByAmenity(hotel, amenity));
  res.json({ hotels: result });
});

//Endpoint 5: Filter the hotels based on the selected Country
function filterByCountry(hotel, country) {
  return hotel.country.toLowerCase() === country.toLowerCase();
}
app.get('/hotels/filter/country', (req, res) => {
  let country = req.query.country;
  let hotelsCopy = hotels.slice();
  let result = hotelsCopy.filter((hotel) => filterByCountry(hotel, country));
  res.json({ hotels: result });
});

//Endpoint 6: Filter the hotels based on the selected Category
function filterByCategory(hotel, category) {
  return hotel.category.toLowerCase() === category.toLowerCase();
}
app.get('/hotels/filter/category', (req, res) => {
  let category = req.query.category;
  let hotelsCopy = hotels.slice();
  let result = hotelsCopy.filter((hotel) => filterByCategory(hotel, category));
  res.json({ hotels: result });
});

//Endpoint 7: Send all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
