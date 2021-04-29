module.exports = function(sequelize, dataTypes){
    let alias = "Usuario"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        image: {
            type: dataTypes.STRING
        },
        username: {
            type: dataTypes.STRING,
            unique: true
        },
        password: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "creado_por"
        })
    }

    return Usuario
}