const { Channel } = require('../src/models/channel_model');
const { User } = require('../src/models/user_model');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');


describe('api/channels', () => {
    beforeEach(async () => {
        await Channel.deleteMany({});
        await User.deleteMany({});
    });

    describe('GET /', () => {
        it('espera retornar todos os canais do usuário', async () => {

            const user = new User({
                name: "teste",
                email: "email@teste.com"
            });

            await user.save();

            const channels = [
                {
                    title: 'Edição Brasil no EL PAÍS',
                    link: 'https://brasil.elpais.com/rss/brasil/portada_completo.xml',
                    user: user._id
                },
                {
                    title: 'Nexo Jornal ',
                    link: 'https://www.nexojornal.com.br/rss.xml',
                    user: user._id
                },
                {
                    title: 'UOL',
                    link: 'https://www.uol.com.br/rss.xml',
                    user: user._id
                }
            ];

            await Channel.insertMany(channels);

            const res = await request(app)
                .get('/api/channels')
                .set({ user_id: user._id });

            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(3);

        });
    });

    describe('GET /:id', async () => {

        const user = new User({
            name: "teste",
            email: "email@teste.com"
        });

        const channel = new Channel({
            title: 'Edição Brasil no EL PAÍS',
            link: 'https://brasil.elpais.com/rss/brasil/portada_completo.xml',
            user: user._id
        });

        await user.save();
        await channel.save();

        it('espera retornar um canal pelo id passar um canal pelo id passado', async () => {
            const res = await request(app)
                .get('/api/channels/111111111111')
                .set({ user_id: user._id });

            expect(res.status).to.equal(200);
        });

        it('espera retornar codigo http 400 ao passar id inválido'), async () => {
            const res = await request(app)
                .get('/api/channels/1')
                .set({ user_id: user._id });

            expect(res.status).to.equal(400);
        };

        it('espera retornar codigo http 404 ao passar um id inexistente', async () => {
            const res = await request(app)
                .get('/api/channels/1111')
                .set({ user_id: user._id });

            expect(res.status).to.equal(404);
        });

    });



    describe('POST /', async () => {

        const user = new User({
            name: "teste",
            email: "email@teste.com"
        });

        await user.save();


        it('espera retornar o canal quando o corpo da requisição for válida', async () => {
            const res = await request(app)
                .post('/api/channels')
                .set({ user_id: user._id })
                .send({
                    title: 'Edição Brasil no EL PAÍS',
                    link: 'https://brasil.elpais.com/rss/brasil/portada_completo.xml',
                    user: user._id
                });


            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('title', 'Edição Brasil no EL PAÍS');

        });


        it('espera retornar codigo http 401 quando id do usuário for inválido', async () => {
            const res = await request(app)
                .post('/api/channels')
                .send({
                    title: 'Edição Brasil no EL PAÍS',
                    link: 'https://brasil.elpais.com/rss/brasil/portada_completo.xml',
                    user: '11111'
                });

            expect(res.status).to.equal(401);
        });


        it('espera retornar codigo http 500 quando o corpo da requisição for inválido', async () => {
            const res = await request(app)
                .post('/api/channels')
                .set({ user_id: user._id })
                .send({
                    title: '1',
                    link: 'www',
                    user: user._id
                });

            expect(res.status).to.equal(500);
        });
    });


    describe('DELETE /',  async () => {

        const user = new User({
            name: "teste",
            email: "email@teste.com"
        });
        
        await user.save();


        it('espera retornar codigo http 204 quando excluir o canal', async () => {
            
            const res = await request(app)
                .post('/api/channels')
                .set({ user_id: user._id})
                .send({
                    title: 'Edição Brasil no EL PAÍS',
                    link: 'https://brasil.elpais.com/rss/brasil/portada_completo.xml',
                    user: user._id
                });

            const { channel } = res.body;
            const response = await request(app)
                .delete('/api/channels/' + channel._id);

            expect(response.status).to.equal(204);

        });

        it('espera retornar código http 404 ao passar id inexistente', async () => {
            const res = request(app).delete('/api/channels/1');
            expect(res.status).to.equal(404);
        });

    });

});