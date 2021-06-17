const router = require('express').Router();
const adminController = require('../controller/adminController');

router.get('/dashboard', adminController.viewDashboard);
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.insertCategory);
router.get('/category/:id', adminController.updatePage);
router.post('/category/:id', adminController.update);
router.get('/table', adminController.viewTable);
router.get('/category/delete/:id', adminController.deleteCategory);

module.exports = router;