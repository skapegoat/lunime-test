// request para encontar o anime 1 (Cowboy Bebop) e chegar à página 1 de episódios
/// <reference types="cypress" />

function takeAnime() {
    return cy.request({
        method: 'GET',
        url: '1/episodes/1',
        failsOnStatusCode: false,
    })
}

export {takeAnime};