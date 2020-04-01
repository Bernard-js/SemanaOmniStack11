const generateUniqueId = require('../utils/generateUniqueId')
const connection = require("../database/connection")

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body

        const id = generateUniqueId()

        await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
        })

        return response.json({ id })
    }

}

//insere os dados do corpo da requisição no banco de dados e retorna o id da ong no formato JSON (método create)
//lista todos os dados da tabela ongs no formato JSON(método index)
