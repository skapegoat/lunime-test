# lunime-test
teste simples pra usar o Jikan, API não oficial do myanimelist
a única função testada nesse caso foi para fazer o request da primeira página de um anime específico
o primeiro número descrito na url ('1') é referente ao primeiro anime cadastrado na base de dados myanimelist (Cowboy Bebop), mas pode ser usado com qualquer outro número descritivo usado para qualquer anime cadastrado na base
o segundo número seguido de 'episodes' (episodes/1) é para acessar a primeira página de episódios do anime em questão e conferir se a resposta retorna o esperado ('200')
se outras páginas fossem buscadas, o teste nesse caso exibiria um erro '500' por não encontrar demais páginas de episódios para o anime em questão
