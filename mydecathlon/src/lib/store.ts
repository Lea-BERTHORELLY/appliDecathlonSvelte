import { writable } from 'svelte/store';

    export let cptVar = writable(0);
	export let categorie = writable("");
	export let csp_moins = writable(0);
	export let csp_med = writable(0);
	export let csp_plus = writable(0);
	export let moins_15_ans = writable(0);
	export let entre_16_25_ans = writable(0);
	export let entre_26_45_ans = writable(0);
	export let plus_46 = writable(0);
	export let homme = writable(0);
	export let femme = writable(0);
	export let sport = writable("");


    export let products = [
		{
			id: 8,
			name: "doudoune en duvet d'alpinisme homme",
			price: 150,
			image: "https://contents.mediadecathlon.com/p1149575/k$2c3a3957d466a50a5d7ffbe0bd7b2b66/sq/doudoune-en-duvet-dalpinisme-homme-makalu-rouge.jpg?format=auto&f=646x646",
			categorie : "homme",
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 7,
			moins_15_ans : 3,
			entre_16_25_ans : 5,
			entre_26_45_ans : 7,
			plus_46 : 5,
			homme : 9,
			femme : 3,
			sport : "Alpinisme"
		},
		{
			id: 9,
			name: "Lunettes de soleil haute montagne",
			price: 45,
			image: "https://contents.mediadecathlon.com/p1805897/k$e9070095c87742a84f126961955b066d/sq/lunettes-de-soleil-haute-montagne-photochromiques-categorie-2-4-alpi-noire.jpg?format=auto&f=969x969",
			categorie : "homme", // avoir si mixe existe
			csp_moins : 4,
			csp_med : 5,
			csp_plus : 6,
			moins_15_ans : 6,
			entre_16_25_ans : 4,
			entre_26_45_ans : 5,
			plus_46 : 5,
			homme : 6,
			femme : 6,
			sport : "Alpinisme"
		},
		{
			id: 10,
			name: "ac à dos d'alpinisme 22 litres",
			price: 30,
			image: "https://contents.mediadecathlon.com/p1548908/k$80efccd3dff928d4055d3bb04c457ee7/sq/sac-a-dos-dalpinisme-22-litres-alpinism-22-noir.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 5,
			csp_med : 6,
			csp_plus : 4,
			moins_15_ans : 4,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 5,
			homme : 6,
			femme : 6,
			sport : "Alpinisme"
		},
		{
			id: 11,
			name: "Masque de chasse sous-marine en apnée petit volume SPF 900 noir",
			price: 22,
			image: "https://contents.mediadecathlon.com/p1286273/k$e7310dcad698386349b2928d488b4933/sq/masque-de-chasse-sous-marine-en-apnee-petit-volume-spf-900-noir.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 7,
			csp_med : 4,
			csp_plus : 2,
			moins_15_ans : 5,
			entre_16_25_ans : 6,
			entre_26_45_ans : 4,
			plus_46 : 3,
			homme : 6,
			femme : 6,
			sport : "Apnée"
		},
		{
			id: 12,
			name: "Combinaison Néoprène glide 1,5mm d'apnée dynamique Femme SUBEA FRD",
			price: 145,
			image: "https://contents.mediadecathlon.com/p2150231/k$dd957a1f04d5c5cf92c1c783bb46656d/sq/combinaison-neoprene-glide-15mm-dapnee-dynamique-femme-subea-frd.jpg?format=auto&f=646x646",
			categorie : "femme",
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 8,
			moins_15_ans : 2,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 2,
			femme : 9,
			sport : "Apnée"
		},
		{
			id: 13,
			name: "Queue de sirène - Fin Fun - Fidji Fantasy-  Edition limitée  junior",
			price: 152,
			image: "https://contents.mediadecathlon.com/m5614280/k$f2869e7e96ad4a813849284528ed2809/sq/queue-de-sirene-fin-fun-fidji-fantasy-edition-limitee-junior.jpg?format=auto&f=969x969",
			categorie : "femme",
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 8,
			moins_15_ans : 7,
			entre_16_25_ans : 5,
			entre_26_45_ans : 3,
			plus_46 : 5,
			homme : 3,
			femme : 9,
			sport : "Apnée"
		},
		{
			id: 14,
			name: "Maillot de bain grossesse Aquagym AYA lica bleu foncé blanc",
			price: 20,
			image: "https://contents.mediadecathlon.com/p2192789/k$99ef746e761dce36947d779b7fe90636/sq/maillot-de-bain-grossesse-aquagym-aya-lica-bleu-fonce-blanc.jpg?format=auto&f=969x969",
			categorie : "femme",
			csp_moins : 6,
			csp_med : 5,
			csp_plus : 4,
			moins_15_ans : 2,
			entre_16_25_ans : 3,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 3,
			femme : 9,
			sport : "Aquagym"
		},
		{
			id: 15,
			name: "Frite piscine en mousse bleu - taille 118 cm",
			price: 4,
			image: "https://contents.mediadecathlon.com/p1983491/k$9333bcbb25c96a17707166114ec64ccc/sq/frite-piscine-en-mousse-bleu-taille-118-cm.jpg?format=auto&f=969x969",
			categorie : "enfant",
			csp_moins : 7,
			csp_med : 5,
			csp_plus : 5,
			moins_15_ans : 8,
			entre_16_25_ans : 3,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Aquagym"
		},
		{
			id: 16,
			name: "Bonnet de bain en tissu maille noir taille S et L",
			price: 2,
			image: "https://contents.mediadecathlon.com/p154768/k$3260d83d5b0da3ba397001eda43a4ce3/sq/bonnet-de-bain-en-tissu-maille-noir-taille-s-et-l.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 8,
			csp_med : 4,
			csp_plus : 2,
			moins_15_ans : 6,
			entre_16_25_ans : 6,
			entre_26_45_ans : 5,
			plus_46 : 5,
			homme : 6,
			femme : 6,
			sport : "Aquagym"
		},
		{
			id: 17,
			name: "Baby foot Catenaccio Sportivo bois foncé",
			price: 800,
			image: "https://contents.mediadecathlon.com/m8235044/k$9b8cc9036dae54af1f267b58445c8eb7/sq/baby-foot-catenaccio-sportivo-bois-fonce.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 7,
			moins_15_ans : 5,
			entre_16_25_ans : 8,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 7,
			femme : 2,
			sport : "Baby foot"
		},
		{
			id: 18,
			name: "Accessoires (poignées allongées) pour babyfoot Bistrot et Scudetto - Noir et",
			price: 180,
			image: "https://contents.mediadecathlon.com/m4499824/k$a59bcb592d26ddf91f9a13a5ad5c436b/sq/accessoires-poignees-allongees-pour-babyfoot-bistrot-et-scudetto-noir-et.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 7,
			moins_15_ans : 2,
			entre_16_25_ans : 7,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 7,
			femme : 2,
			sport : "Baby foot"
		},
		{
			id: 19,
			name: "Stick entretien barre pour Baby foot",
			price: 29,
			image: "https://contents.mediadecathlon.com/m6980476/k$b2e299480356f3a1a75a96c6b4cd81a2/sq/stick-entretien-barre-pour-babyfoot.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 3,
			csp_med : 5,
			csp_plus : 5,
			moins_15_ans : 2,
			entre_16_25_ans : 7,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 7,
			femme : 2,
			sport : "Baby foot"
		},
		{
			id: 20,
			name: "Raquette Yonex Astrox TX + cordage BG 65",
			price: 55,
			image: "https://contents.mediadecathlon.com/p2397437/k$9b8e196c61a8aabf274be9305713f525/sq/raquette-yonex-astrox-tx-cordage-bg-65.jpg?format=auto&f=646x646",
			categorie : "homme",
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 7,
			moins_15_ans : 2,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Badminton"
		},
		{
			id: 21,
			name: "T-Shirt Femme 560 Rouge/Marine",
			price: 10,
			image: "https://contents.mediadecathlon.com/p1930652/k$8436062aecce966fe2aac2ea4be3893a/sq/t-shirt-femme-560-rougemarine.jpg?format=auto&f=969x969",
			categorie : "femme",
			csp_moins : 6,
			csp_med : 4,
			csp_plus : 3,
			moins_15_ans : 2,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 2,
			femme : 9,
			sport : "Badminton"
		},
		{
			id: 22,
			name: "Ballon de basket BT100 de taille 7 orange pour les hommes à partir de 13 ans .",
			price: 20,
			image: "https://contents.mediadecathlon.com/p2154429/k$2fc1fe4d01a5e4dbaea0aa9ece21ad8d/sq/ballon-de-basket-bt100-de-taille-7-orange-pour-les-hommes-a-partir-de-13-ans.jpg?format=auto&f=969x969",
			categorie : "enfent",
			csp_moins : 3,
			csp_med : 5,
			csp_plus : 3,
			moins_15_ans : 8,
			entre_16_25_ans : 7,
			entre_26_45_ans : 5,
			plus_46 : 5,
			homme : 6,
			femme : 6,
			sport : "Basketball"
		},
		{
			id: 23,
			name: "Panier de basket sur pied pliable réglable de 2,40m à 3,05m - B500 Easy Box Gris",
			price: 450,
			image: "https://contents.mediadecathlon.com/p2420027/k$8680399be25fdbaf98b18c8173812570/sq/panier-de-basket-sur-pied-pliable-reglable-de-240m-a-305m-b500-easy-box-gris.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 2,
			csp_med : 4,
			csp_plus : 8,
			moins_15_ans : 3,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 7,
			homme : 6,
			femme : 6,
			sport : "Basketball"
		},
		{
			id: 24,
			name: "ARBALETE DE CHASSE SOUS MARINE CHEROKEE FAST 100CM",
			price: 220,
			image: "https://contents.mediadecathlon.com/p2140809/k$68f97945edc572e62637e7dfd431bd0d/sq/arbalete-de-chasse-sous-marine-cherokee-fast-100cm.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 2,
			csp_med : 4,
			csp_plus : 8,
			moins_15_ans : 3,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 7,
			homme : 6,
			femme : 6,
			sport : "Chasse pêche sous-marine"
		},
		{
			id: 25,
			name: "Planche gonflable de chasse sous-marine avec filet amovible SPF 540",
			price: 85,
			image: "https://contents.mediadecathlon.com/p1772693/k$a738b54ff53e9be806f899d44054f4a8/sq/planche-gonflable-de-chasse-sous-marine-avec-filet-amovible-spf-540.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 6,
			moins_15_ans : 3,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 7,
			homme : 6,
			femme : 6,
			sport : "Chasse pêche sous-marine"
		},
		{
			id: 26,
			name: "CERF- VOLANT PILOTABLE '3D PLANE 180' pour enfants - coloris Aventure",
			price: 35,
			image: "https://contents.mediadecathlon.com/p1303932/k$50272116ceafc2c5797d20c183a70ff9/sq/cerf-volant-pilotable-3d-plane-180-pour-enfants-coloris-aventure.jpg?format=auto&f=969x969",
			categorie : "enfant", // mixe ?
			csp_moins : 3,
			csp_med : 5,
			csp_plus : 5,
			moins_15_ans : 8,
			entre_16_25_ans : 2,
			entre_26_45_ans : 5,
			plus_46 : 5,
			homme : 6,
			femme : 6,
			sport : "Cerf volants"
		},
		{
			id: 27,
			name: "AILE DE TRACTION Zeruko 2.5 m2 + poignées de pilotage bleue",
			price: 120,
			image: "https://contents.mediadecathlon.com/p1807040/k$7f82a80582d8a795cf5aa3d660a9e02c/sq/aile-de-traction-zeruko-25-m2-poignees-de-pilotage-bleue.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 7,
			moins_15_ans : 3,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 7,
			homme : 6,
			femme : 6,
			sport : "Cerf volants"
		},
		{
			id: 28,
			name: "CANOE KAYAK GONFLABLE DE RANDONNEE 2/3 PLACES ORANGE",
			price: 330,
			image: "https://contents.mediadecathlon.com/p1146854/k$b3fafef048706486e09a9a7561c387d9/sq/canoe-kayak-gonflable-de-randonnee-23-places-orange.jpg?format=auto&f=646x646",
			categorie : "homme", // mixe ?
			csp_moins : 2,
			csp_med : 5,
			csp_plus : 7,
			moins_15_ans : 3,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Canoe Kayak"
		},
		{
			id: 29,
			name: "Gilet d'aide à la flottabilité BA 50 Newtons DTC kayak stand up paddle dériveur",
			price: 20,
			image: "https://contents.mediadecathlon.com/p1820354/k$388329140c56ac8e23c0baf651813bde/sq/gilet-daide-a-la-flottabilite-ba-50-newtons-dtc-kayak-stand-up-paddle-deriveur.jpg?format=auto&f=646x646",
			categorie : "homme", // mixe ?
			csp_moins : 8,
			csp_med : 4,
			csp_plus : 3,
			moins_15_ans : 5,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Cerf volants"
		},
		{
			id: 30,
			name: "hemise extérieur imperméable équitation cheval et poney ALLWEATHER LIGHT marron",
			price: 65,
			image: "https://contents.mediadecathlon.com/p482234/k$c679e99806f61af18f7e0fd0e96e685b/sq/chemise-exterieur-impermeable-equitation-cheval-et-poney-allweather-light-marron.jpg?format=auto&f=646x646",
			categorie : "homme", // mixe ?
			csp_moins : 3,
			csp_med : 5,
			csp_plus : 6,
			moins_15_ans : 2,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Equitation"
		},
		{
			id: 31,
			name: "Graisse pour sabots équitation cheval et poney ONGUENT HYDRATANT vert 750 ML",
			price: 10,
			image: "https://contents.mediadecathlon.com/p2229402/k$2e828db6f62f3843929a7ade7caa4f4e/sq/graisse-pour-sabots-equitation-cheval-et-poney-onguent-hydratant-vert-750-ml.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 8,
			csp_med : 4,
			csp_plus : 3,
			moins_15_ans : 2,
			entre_16_25_ans : 5,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Equitation"
		},
		{
			id: 32,
			name: "CHAUSSON D'ESCALADE - FIRST KLIMB GRIS",
			price: 45,
			image: "https://contents.mediadecathlon.com/p2416925/k$d0209553b7dcbedb1b8215549b6f021b/sq/chausson-descalade-first-klimb-gris.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 3,
			csp_med : 5,
			csp_plus : 4,
			moins_15_ans : 6,
			entre_16_25_ans : 6,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Escalade"
		},
		{
			id: 33,
			name: "CASQUE D'ESCALADE ET D'ALPINISME - ROCK BLEU",
			price: 28,
			image: "https://contents.mediadecathlon.com/p708214/k$ab7a5fdfbc6ce2a91549caf854e92ec1/sq/casque-descalade-et-dalpinisme-rock-bleu.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 8,
			csp_med : 4,
			csp_plus : 3,
			moins_15_ans : 6,
			entre_16_25_ans : 6,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Escalade"
		},
		{
			id: 34,
			name: "Veste d'escrime homme droitier 800N",
			price: 210,
			image: "https://contents.mediadecathlon.com/p1687570/k$d1b096145afacd5420464d5e858f6ed6/sq/veste-descrime-homme-droitier-800n.jpg?format=auto&f=969x969",
			categorie : "homme", 
			csp_moins : 2,
			csp_med : 4,
			csp_plus : 8,
			moins_15_ans : 2,
			entre_16_25_ans : 4,
			entre_26_45_ans : 7,
			plus_46 : 7,
			homme : 8,
			femme : 2,
			sport : "Escalade"
		},
		{
			id: 35,
			name: "Fleuret électrique APEX 90cm",
			price: 200,
			image: "https://contents.mediadecathlon.com/p2216198/k$81cb09f0187b047b2182e3c0171f32d8/sq/fleuret-electrique-apex-90cm.jpg?format=auto&f=969x969",
			categorie : "homme", // mixe ?
			csp_moins : 2,
			csp_med : 4,
			csp_plus : 8,
			moins_15_ans : 2,
			entre_16_25_ans : 6,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 6,
			femme : 6,
			sport : "Escalade"
		},

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
			femme : 9,
			sport : "Equitation"

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
			femme : 9,
			sport : "Equitation"
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
			femme : 5,
			sport : "Running"
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
			femme : 6,
			sport : "Velo"
		},
		{
			id: 5,
			name: "Valise lithium lifepo4 36 V 100 amp",
			price: 3950,
			image: "https://contents.mediadecathlon.com/m6318559/k$c7dee1a7edfc8b28a2072e66fb8899e0/sq/valise-lithium-lifepo4-36-v-100-amp-2-sorties-sondeur-20amp.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 1,
			csp_med : 1,
			csp_plus : 9,
			moins_15_ans : 2,
			entre_16_25_ans : 4,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 8,
			femme : 4,
			sport : "Velo"
		},
		{
			id: 6,
			name: "Valise lithium lifepo4 36 V 100 amp",
			price: 3950,
			image: "https://contents.mediadecathlon.com/m6318559/k$c7dee1a7edfc8b28a2072e66fb8899e0/sq/valise-lithium-lifepo4-36-v-100-amp-2-sorties-sondeur-20amp.jpg?format=auto&f=969x969",
			categorie : "homme",
			csp_moins : 1,
			csp_med : 1,
			csp_plus : 9,
			moins_15_ans : 2,
			entre_16_25_ans : 4,
			entre_26_45_ans : 6,
			plus_46 : 6,
			homme : 8,
			femme : 4,
			sport : "Velo"
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
			femme : 5,
			sport : "Running"
		}
	];

