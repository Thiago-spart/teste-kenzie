//váriaveis
const EXPLORADOR = Thiago
let bolsaDeItens = [],
	moedas = 0,
	energia = 5,
	recompensas = [
		'Chave',
		'Duck, o Pato de Borracha',
		'moeada',
		'moeada',
		'moeada',
		'moeada',
		'moeada'
	]

function taverna() {
	console.log(EXPLORADOR + ' entrou na caverna.')

	if (energia < 5) {
		console.log(EXPLORADOR + ' está descansando.')
		while (energia < 5) {
			energia++
		}
	} else {
		return energia
		console.log(EXPLORADOR + ' está revitalizado.')
	}
}

function pegarItem(item) {
	if (item == 'moeda') {
		console.log(EXPLORADOR +' ganhou uma moeda')
		moedas ++
	} else {
		console.log(EXPLORADOR +' ganhou um item')
		bolsaDeItens[] = item 
	}
}

function batalha() {
	console.log(EXPLORADOR + ' encontrou um monstro')
	if (energia < 1) {
		console.log(EXPLORADOR + ' fugiu para a Taverna')
		return false
	} else {
		console.log(EXPLORADOR + ' derrotou o monstro')
		energia--
		return true
		if (energia < 1) {
			console.log(EXPLORADOR + ' fugiu para a Taverna') 
			return false
		}
	}
}

function explorar() {
	console.log(EXPLORADOR + ' saiu para explorar')
	if (energia < 1) {
		console.log(EXPLORADOR + ' não pode explorar')
		taverna()
		return false
	} else {
		batalha()
		if (batalha()) {
			roletarRecompensas() //função externa
			return true;
		} else {
			taverna()
			return false
		}
	} 
}

function abrirBau() {
	let pesquisa = bolsaDeItens.indexOf('Chave')
	if (pesquisa == 1) {
		console.log("Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!")
		return true
	} else {
		return false
	}
}
