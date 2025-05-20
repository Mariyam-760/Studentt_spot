const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

router.post('/recipe/delete/:id', recipeController.deleteRecipe);
router.get('/recipe/update/:id', recipeController.updateRecipePage);
router.post('/recipe/update/:id', recipeController.updateRecipe);


router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
  });
  
  router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
  });
  
module.exports = router;