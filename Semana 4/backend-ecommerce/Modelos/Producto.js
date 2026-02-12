
const {  DataTypes } = require('sequelize')
const sequelize  = require('../db/connetion');

const Producto = sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    nombreProducto: {
        type: DataTypes.STRING
    },
    precioProducto: {
        type: DataTypes.NUMBER
    },
    isvProducto: {
        type: DataTypes.NUMBER
    },
    stockProducto: {
        type: DataTypes.INTEGER
    },
    urlImageProducto: {
        type: DataTypes.STRING
    }
},{
    tableName: 'producto',
    timestamps: false
})

module.exports=Producto