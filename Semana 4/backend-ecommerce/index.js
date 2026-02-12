const express = require('express')
const Producto = require('./Modelos/Producto')

const app = express()

app.use(express.json())


//CRUD

//punto de entrada 
//req, resp 
// codigos de estatus 200,202,500,404,

app.get('/api/producto', async (req, resp) => {

    try {

        //select *from productos

        const producto = await Producto.findAll();

        if (producto.length > 0) {
            resp.status(200).json(producto)
        }
        else {
            resp.status(400).json(producto)
        }

    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio' })
    }

});

app.post('/api/producto', async (req, resp) => {

    try {

        //insert into producto values(?,?,?)
        const producto = await Producto.create(req.body)

        if (producto != null) {
            resp.status(200).json(producto)
        }
        else {
            resp.status(400).json({ menshaje: 'Producto no ha sido creado' })
        }


    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio' })
    }
})


app.put('/api/producto/:idproducto', async (req, resp) => {
    try {

        let id = req.params.idproducto
        //update producto set nmbre=? where d=?
        const [updated] = await Producto.update(req.body, {
            where: { id: id }
        });

        if (updated) {
            resp.status(200).json({mensahe: 'Actuaizado'})
        }
        else {
            resp.status(400).json({ menshaje: 'Producto no ha sido actualizado'  })
        }

    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio' + error })
    }
});

app.delete('/api/producto/:idproducto', async (req,resp)=>{

    try {

        const deleted= await Producto.destroy({
            where: {id: req.params.idproducto}
        })

          if (deleted) {
            resp.status(200).json({mensaje:'Producto eliminado'})
        }
        else {
            resp.status(400).json({ menshaje: 'Producto no ha sido actualizado'  })
        }

        //delete from table where 
        
    } catch (error) {
        resp.status(500).json({ error: 'Ocurrio un error en el servicio' + error })
    }
})
app.listen(5000, () => {
    console.log('Aplicacion ejecutando en puerto 50000')
})