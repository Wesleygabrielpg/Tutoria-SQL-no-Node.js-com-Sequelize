const User = require("../models/User");

module.exports =
{
    async index(req, res)
    {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) //Metodo store para armazenar o user no banco
    {
        const { name, email } = req.body; // Corpo da requisição aka o que vai ser enviado

        const user = await User.create({ name, email });

        return res.json(user); //Retornar em formato json
    }
}