import { writable } from 'svelte/store';

    export let cptVar = writable(0);
	export let categorie = writable(0);
	export let csp_moins = writable(0);
	export let csp_med = writable(0);
	export let csp_plus = writable(0);
	export let moins_15_ans = writable(0);
	export let entre_16_25_ans = writable(0);
	export let entre_26_45_ans = writable(0);
	export let plus_46 = writable(0);
	export let homme = writable(0);
	export let femme = writable(0);


    export let products = [
		{
			id: 1,
			name: "Pantalon de dressage femme",
			price: 25,
			image: "https://contents.mediadecathlon.com/p2257760/k$d92cad6be1ff4be06fdfb70d21b2f90f/sq/pantalon-dressage-femme-marine-100.jpg?format=auto&f=969x969",
			categorie : "femme",
			csp_moins : 4,
			csp_med : 5,
			csp_plus : 2,
			moins_15_ans : 6,
			entre_16_25_ans : 4,
			entre_26_45_ans : 3,
			plus_46 : 3,
			homme : 3,
			femme : 9

		},
		{
			id: 2,
			name: "Gilet de protection airbag femme",
			price: 449,
			image: "https://contents.mediadecathlon.com/p2306616/k$ccaa070d746cec52de5e1496641da7b7/sq/gilet-de-protection-airbag-segura-femme-bleu.jpg?format=auto&f=480x480",
			categorie : "femme",
			csp_moins : 4,
			csp_med : 5,
			csp_plus : 9,
			moins_15_ans : 2,
			entre_16_25_ans : 4,
			entre_26_45_ans : 6,
			plus_46 : 8,
			homme : 3,
			femme : 9
		},
		{
			id: 3,
			name: "Chaussures de running Adidas",
			price: 199.50,
			image: "https://contents.mediadecathlon.com/m10507821/k$ad8314ee3fde8fca7fdb95283ad3ff82/sq/chaussures-de-running-adidas-ultraboost-22-colddry-20.jpg?format=auto&f=480x480",
			categorie : "homme",
			csp_moins : 4,
			csp_med : 5,
			csp_plus : 9,
			moins_15_ans : 5,
			entre_16_25_ans : 8,
			entre_26_45_ans : 3,
			plus_46 : 3,
			homme : 7,
			femme : 5
		},
		{
			id: 4,
			name: "Draisienne enfant",
			price: 35.90,
			image: "https://contents.mediadecathlon.com/m7069147/k$c3b4c2f57aea6aa86c9abb998fd05140/sq/draisienne-enfant-selle-hauteur-reglable-acier.jpg?format=auto&f=480x480",
			categorie : "enfant",
			csp_moins : 6,
			csp_med : 6,
			csp_plus : 2,
			moins_15_ans : 6,
			entre_16_25_ans : 4,
			entre_26_45_ans : 3,
			plus_46 : 3,
			homme : 5,
			femme : 6
		},
		{
			id: 5,
			name: "Valise lithium lifepo4 36 V 100 amp",
			price: 3950,
			image: "https://contents.mediadecathlon.com/m6318559/k$c7dee1a7edfc8b28a2072e66fb8899e0/sq/valise-lithium-lifepo4-36-v-100-amp-2-sorties-sondeur-20amp.jpg?format=auto&f=969x969",
			categorie : "enfant",
			csp_moins : 1,
			csp_med : 1,
			csp_plus : 9,
			moins_15_ans : 2,
			entre_16_25_ans : 4,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 8,
			femme : 4
		},
		{
			id: 6,
			name: "Valise lithium lifepo4 36 V 100 amp",
			price: 3950,
			image: "https://contents.mediadecathlon.com/m6318559/k$c7dee1a7edfc8b28a2072e66fb8899e0/sq/valise-lithium-lifepo4-36-v-100-amp-2-sorties-sondeur-20amp.jpg?format=auto&f=969x969",
			categorie : "enfant",
			csp_moins : 1,
			csp_med : 1,
			csp_plus : 9,
			moins_15_ans : 2,
			entre_16_25_ans : 4,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 8,
			femme : 4
		},
		{
			id: 7,
			name: "Chaussures de running Sadida",
			price: 699.50,
			image: "https://contents.mediadecathlon.com/m10507821/k$ad8314ee3fde8fca7fdb95283ad3ff82/sq/chaussures-de-running-adidas-ultraboost-22-colddry-20.jpg?format=auto&f=480x480",
			categorie : "homme",
			csp_moins : 4,
			csp_med : 5,
			csp_plus : 9,
			moins_15_ans : 5,
			entre_16_25_ans : 8,
			entre_26_45_ans : 3,
			plus_46 : 3,
			homme : 7,
			femme : 5
		}
	];

