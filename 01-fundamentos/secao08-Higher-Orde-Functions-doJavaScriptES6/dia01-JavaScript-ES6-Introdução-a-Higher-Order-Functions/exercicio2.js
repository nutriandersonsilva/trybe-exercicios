/* Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15(dano mínimo) e o valor do atributo strength(dano máximo).
Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength(dano mínimo) e o valor de strength * weaponDmg(dano máximo).
Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence(dano mínimo) e o valor de intelligence * 2(dano máximo).

A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem(Ex: “Não possui mana suficiente”) e a mana gasta é 0. */
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttk = dragon => {
    const danoMin = 15
    const danoMax = Math.floor(Math.random() * strength);

    const dragonDano = danoMax > danoMin ? danoMax : danoMin;

    return dragonDano;
}

const warriorAttk = warrior => {
    const danoMin = warrior.strength
    const danoMax = Math.floor(Math.random() * (danoMin * warrior.weaponDmg));

    const warriorDano = danoMax > danoMin ? danoMax : danoMin;

    return warriorDano;
}

const mageAttk = mage => {
    const mana = mage.mana;
    const danoMin = mage.intelligence
    const danoMax = danoMin * 2
    const manaTurno = {
        turnoMana: 0,
        semMana: 'Não possui mana suficiente',
    }

    if (mana > 15) {
        const danoMagico = danoMin < danoMax ? danoMax : danoMin;
        manaTurno.turnoMana = 15
        manaTurno.semMana = danoMagico;
        return manaTurno;
    }
    return manaTurno;
}


/* Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe - as como parâmetro para outras funções que irão compor um objeto gameActions.O objeto será composto por ações do jogo e cada ação é por definição uma HOF, pois, neste caso, são funções que recebem como parâmetro outra função. */


/* Crie a primeira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem warrior.Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon.Além disso, ela também deve atualizar o valor da chave damage do warrior.

Crie a segunda HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem mage.Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon.Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.

Crie a terceira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do monstro dragon.Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior.Além disso, ela também deve atualizar o valor da chave damage do monstro.

Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
    Solução:

Parte I

Crie uma função que retorna o dano do dragão. */

