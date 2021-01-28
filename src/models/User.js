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

    static associate(models)
    {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        //No caso do 'hasMany', a foreign key é a coluna q está armazenada no Address
    }
}

module.exports = User;