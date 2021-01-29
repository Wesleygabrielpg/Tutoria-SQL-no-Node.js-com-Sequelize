const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = 
{
    async show(req, res)
    {
        // Encontrar todos os usuarios que tem email que termina com @gmail.com
        // Desses usuarios eu quero buscar todos os moram na rua "Travessa Nove de Janeiro"
        // Desses usuarios eu quero buscar as tecnologias que começão com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include:[ 
                { association: 'addresses', where: { street: 'Travessa Nove de Janeiro' } }, // addresses
                { association: 'techs',
                required: false,
                where: { 
                    name: {
                        [Op.iLike]: 'React%'
                    }
                 } } // techs
            ]
        })

        return res.json(users);
    }

    
}