const {Sequelize} =require('sequelize')

const sequelize= new Sequelize(
    'ecomerse',
    'root',
    'admin123',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(()=> console.log('Conexion Exitosa'))
    .catch((err)=> console.log('Ocurrio un error en la conexion de BD', err));

module.exports=sequelize