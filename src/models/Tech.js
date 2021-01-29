// Formato do Usario na base de dados

const { Model, DataTypes } = require('sequelize');

class Tech extends Model
{
    static init(sequelize) //(connection)
    {
        super.init({
            name: DataTypes.STRING,
            
        },{
            sequelize, //ou sequelize: connection
            //Conexão com o banco de dados
            tableName: 'techs'
        })
    }

    static associate(models)
    {
        // Relação N para N
        this.belongsToMany(models.User, { 
            foreignKey: 'tech_id', // Qual a coluna na tabela user_techs
            through: 'user_techs', as: 'users' // Nome da tabela q vai ser salva a associação
        });
        // Precisa fazer a associação contraria
    }
}

module.exports = Tech;