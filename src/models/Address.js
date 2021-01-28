// Formato do Usario na base de dados

const { Model, DataTypes } = require('sequelize');

class Address extends Model
{
    static init(sequelize) //(connection)
    {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            
        },{
            sequelize //ou sequelize: connection
            //Conexão com o banco de dados
        })
    }

    static associate(models)
    {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        // Precisa fazer a associação contraria
    }
}

module.exports = Address;