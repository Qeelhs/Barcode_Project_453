const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  url: String,
  creator: String,
  created_t: Number,
  created_datetime: String,
  last_modified_t: Number,
  last_modified_datetime: String,
  product_name: String,
  generic_name: String,
  quantity: String,
  packaging: String,
  packaging_tags: [String],
  brands: String,
  brands_tags: [String],
  categories: String,
  categories_tags: [String],
  origins: String,
  origins_tags: [String],
  labels: String,
  labels_tags: [String],
  emb_codes: String,
  emb_codes_tags: [String],
  cities_tags: [String],
  purchase_places: String,
  stores: String,
  countries: String,
  countries_tags: [String],
  ingredients_text: String,
  traces: String,
  traces_tags: [String],
  serving_size: String,
  no_nutriments: String,
  additives_n: Number,
  additives_tags: [String],
  ingredients_from_palm_oil_n: Number,
  ingredients_from_palm_oil_tags: [String],
  ingredients_that_may_be_from_palm_oil_n: Number,
  ingredients_that_may_be_from_palm_oil_tags: [String],
  nutrition_grade_fr: String,
  main_category: String,
  main_category_fr: String,
  image_url: String,
  image_small_url: String,
  energy_100g: Number,
  energy_kj_100g: Number,
  energy_kcal_100g: Number,
  proteins_100g: Number,
  carbohydrates_100g: Number,
  sugars_100g: Number,
  fat_100g: Number,
  saturated_fat_100g: Number,
  fiber_100g: Number,
  sodium_100g: Number,
  vitamin_c_100g: Number,
});

module.exports = mongoose.model('Product', productSchema);
