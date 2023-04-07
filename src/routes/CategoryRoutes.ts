import express from 'express';
import SubCategoryRoutes from './SubCategoryRoutes';
import {
  createCategoryValidator,
  deleteCategoryValidator,
  getCategoryValidator,
  updateCategoryValidator,
} from './../utils/validators/CategoryValidators';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getSingleCategory,
  resizeImage,
  updateCategory,
  uploadCategoryImage,
} from '../services/CategoryServices';

const router = express.Router();

router.use('/:categoryId/subcategories', SubCategoryRoutes);

router
  .route('/')
  .get(getCategories)
  .post(
    uploadCategoryImage,
    resizeImage,
    createCategoryValidator,
    createCategory,
  );
router
  .route('/:id')
  .get(getCategoryValidator, getSingleCategory)
  .put(
    uploadCategoryImage,
    resizeImage,
    updateCategoryValidator,
    updateCategory,
  )
  .delete(deleteCategoryValidator, deleteCategory);

export default router;
