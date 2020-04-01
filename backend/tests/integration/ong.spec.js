const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    
    beforeEach(async () => {
        await connection.migrate.rollback();
        // await connection.migrate.latest(); //SQLite error: table 'ongs' already exists (tentar resolver posteriormente)
        // estudar o conceito de migrations no knex query builder e SQLite3
    })
    
    
    afterAll(async () => {
        await connection.destroy();
    })
    
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name : "AACD",
                email: "contato@aacd.com",
                whatsapp : "81998786653",
                city : "Recife",
                uf: "PE"
            })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});