// Formato do Usario na base de dados

const { Model, DataTypes } = require('sequelize');

class User extends Model
{
    static init(sequelize) //(connection)
    {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize //ou sequelize: connection
            //Conexão com o banco de dados
        }
            
        )
    }
}

module.exports = User;