// const mongoose = require("mongoose");

// const category = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('Category', category);

const query = require('../database');

module.exports = class Category {
    constructor(nama, jenis){
        this.nama = nama;
        this.jenis = jenis;
    }
    save(){
        return query.execute(`
            INSERT INTO categories
            (nama, jenis)
            VALUES(?, ?)
        `, [
            this.nama,
            this.jenis
        ]);
    }
    static getAll() {
        return query.execute(`
            SELECT *
            FROM categories
            ORDER BY nama ASC
        `);
    }
    static getById(id) {
        return query.execute(`
            SELECT * 
            FROM categories
            WHERE id = ?
        `, [id]);
    }
    static update(nama, jenis, id) {
        return query.execute(`
            UPDATE categories 
            SET nama = ?, jenis = ? 
            WHERE id = ?
        `, [
            nama,
            jenis,
            id
        ]);
    }
    static delete(id) {
        return query.execute(`
            DELETE
            FROM categories
            WHERE id = ?
        `, [id]);
    }
}