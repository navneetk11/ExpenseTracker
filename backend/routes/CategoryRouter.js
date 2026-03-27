const express = require('express');
const usersController = require('../controllers/userCtrl');
const isAuthenticated = require('../middlewares/isAuth');
const categoryController = require('../controllers/CategoryCtrl');

const CategoryRouter = express.Router();
//add category
CategoryRouter.post("/api/v1/categories/create",isAuthenticated, categoryController.create);
//list categories
CategoryRouter.get("/api/v1/categories/lists", isAuthenticated, categoryController.lists);



module.exports = CategoryRouter;