(function () {
	let appareil = {
		type: "Ordinateur",
		marque: "Apple",
		prix: 1500
	};

	console.log(typeof appareil);
	console.log(`Votre appareil ${appareil.type} ${appareil.marque}  ${appareil.prix}`);

	let personne = [{
		nom: "Heich",
		prenom: "Brandan",
		ville: "New York"

	}, {
		nom: "Ledorf",
		prenom: "Rasmus",
		ville: "Amstardam"
	}, famille = [{
		nom: "Concepteurs"
	}, {
		msg: () => {
			console.log('pret');
		}
	}]];
	console.log(typeof personne);
	console.log(famille[0].nom);
	famille[1].msg();
	/*objet variante*/
	let produits = { //racine

		marque: { //1er objet
			first: "Azus",
			second: "Packard",
			last: "Apple"
		},
		device_1: "pc",
		device_2: "mobile",
		device_3: "Bureau",

		user: { //2eme objet
			nom: "Mili",
			prenom: "Gius"
		},
		msgs: () => {
			console.log(personne[1].ville);
		},
		pays: {
			nom: "USA"
		}
	};

	produits.msgs();
	console.log(`Produit ${produits.marque.first} type ${produits.device_1} Pays ${produits.pays.nom}`);
	console.log(produits);
	//pour finir
	let supeVoiture = "bmw";
	let voiture = {
		marque: {
			fr: "Renault",
			it: "Ferrari",
			al: supeVoiture
		},
		user: {
			nom: "Mili",
			prenom: "Gius"
		},
		message: () => {
			console.log(`Bienvenue ${voiture.user.nom} vous avez une ${voiture.marque.it}`);
		}
	};
	console.log(voiture.marque.al);
})();
let prod = {
	director: "Giusmili",
	webdesigner: "tom",
	app: "",
	page: {
		msg: "i'm ready"
	}
};
console.log(`message ${prod.page.msg}`);
let printOut = document.querySelector('ul');
printOut.innerHTML += `<li>${prod.director}</li>
					<li>${prod.webdesigner}</li>
					<li>${prod.page.msg}</li>
					`;

console.log(`l'objet : ${prod.director}`);