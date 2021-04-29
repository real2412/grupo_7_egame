module.exports = function(sequelize, dataTypes){
    let alias = "Producto"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.DECIMAL(10,2),
        },
        creado_por: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config)

    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        })

        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "creado_por"
        })
    }

    return Producto
}