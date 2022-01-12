import * as GETanime from '../requests/GETchar.request';

describe('Procurar página de episódios', () => {
    it('Procurar o anime 1 e a página 1 de episódios', () => {
        GETanime.takeAnime().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })
})