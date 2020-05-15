const { User } = require('../src/models/user_model');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');


describe('api/users', () => {
    beforeEach(async () =>{
        await User.deleteMany({});
    });


    describe("GET /",  () => {
        it("espera retornar todos usuários", async () => {
            const users =[
                { name: "test", email: "teste1@gmail.com" },
                { name: "test1", email: "teste2@gmail.com" },
                { name: "test2", email: "teste3@gmail.com" },
                { name: "test3", email: "teste4@gmail.com" },
            ];
            await User.insertMany(users);
            console.log(users);
            const res = await request(app).get('/api/users');
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(4);
        });
    });

    describe("GET/:id", () => {
        it("espera receber o usuário com o mesmo id passado,", async () =>{
            const user = new User({
                name: 'test', 
                email: 'teste@gmail.com'                
            });
            await user.save();
            const res = await request(app).get('/api/users/' + user._id);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('name', user.name);
        });

        it('Quando retorna erro 400 por passar um id inválido', async () =>{
            const res = await request(app).get('/api/users/1');
            expect(res.status).to.equal(400);

        });

        it('quando o id passado é valido porém não existe', async ()=> {
            const res = await request(app).get("/api/users/111111111111");
            expect(res.status).to.equal(404)
        });
    });

});