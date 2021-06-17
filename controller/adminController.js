const Category = require('../models/Category');

module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard');
    },
    viewCategory: async (req, res) => {
        try {
            let message = req.flash('error');
                if (message.length > 0) {
                    message = message[0];
                } else {
                    message = null;
                }
            const data = await Category.getAll();
            res.render('admin/category/view_category', {
                categories: data[0],
                msgSuccess: null,
                msgDelete: message,
                msgUpdate: message
            });
        } catch (err) {
            console.log(err);
        }
    },
    insertCategory: (req, res) => {
        const nama = req.body.nama;
        const jenis = req.body.jenis;

        const saveCategory = new Category(nama, jenis);

        saveCategory.save()
        .then(result => {
            return Category.getAll()
        })
        .then(data => {
            res.render('admin/category/view_category', {
                categories: data[0],
                msgSuccess: true,
                msgDelete: null,
                msgUpdate: null
            });
        })
        .catch(err =>{ 
            console.log(err)
        })
    },
    viewTable: (req, res) => {
        res.render('admin/table/view_table');
    },

    updatePage: (req, res) => {
        const id = req.params.id;

        Category.getById(id)
        .then(data => {
            res.render('admin/category/update', {
                category: data[0][0]
                
            });
        })
        .catch(err =>{ 
            console.log(err)
        })
    },
    update: (req, res) => {
        const id = req.params.id;
        const nama = req.body.nama;
        const jenis = req.body.jenis;

        Category.update(nama, jenis, id)
        .then(result => {
            req.flash('error', 'update data berhasil');
            res.redirect('/admin/category');
        })
        
        .catch(err =>{ 
            console.log(err)
        })
    },
    
    deleteCategory: (req, res) => {
        const id = req.params.id;

        Category.delete(id)
        .then(result => {
            req.flash('error', 'delete data berhasil');
            res.redirect('/admin/category');
        })
        .catch(err =>{ 
            console.log(err)
        })
    }
}
