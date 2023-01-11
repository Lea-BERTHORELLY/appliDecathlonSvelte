<svelte:head>
	<title>MyDecathlon</title>
	<meta name="description" content="Application Decathlon" />
	<!-- <meta charset="UTF-8"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-win8.css">
	<style>
	.w3-sidebar a {font-family: "Roboto", sans-serif}
	body,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}
	</style>
</svelte:head>

<script>
    import Header from "./Header.svelte";
	import SmallHeader from "./SmallHeader.svelte";	
	import MediaQuery from "./MediaQuery.svelte";
	import {categorie, csp_med, csp_moins, csp_plus, entre_16_25_ans, entre_26_45_ans, femme, homme, moins_15_ans, plus_46, products, sport} from "$lib/store";
	import {cptVar} from "$lib/store";
	export async function load() {
        return {
            stuff: {
                products 
            }
        }
    }

	/**
     * @type {number}
     */

	cptVar.subscribe($ => $cptVar)()

	categorie.subscribe($ => $categorie)()
	csp_moins.subscribe($ => $csp_moins)()
	csp_med.subscribe($ => $csp_med)()
	csp_plus.subscribe($ => $csp_plus)()
	moins_15_ans.subscribe($ => $moins_15_ans)()
	entre_16_25_ans.subscribe($ => $entre_16_25_ans)()
	entre_26_45_ans.subscribe($ => $entre_26_45_ans)()
	plus_46.subscribe($ => $plus_46)()
	homme.subscribe($ => $homme)()
	femme.subscribe($ => $femme)()

	sport.subscribe($ => $sport)()
	
	
	$: variable=$csp_moins+""+$csp_med+""+$csp_plus+""+$moins_15_ans+""+$entre_16_25_ans+""+$entre_26_45_ans+""+$plus_46+""+$homme+""+$femme
	$: console.log('variable: ', variable)


	function moyenne(){
		csp_moins.update($csp_moins => Math.floor($csp_moins/$cptVar));
		csp_med.update($csp_med => Math.floor($csp_med/$cptVar));
		csp_plus.update($csp_plus => Math.floor($csp_plus/$cptVar));
		moins_15_ans.update($moins_15_ans => Math.floor($moins_15_ans/$cptVar));
		entre_16_25_ans.update($entre_16_25_ans => Math.floor($entre_16_25_ans/$cptVar));
		entre_26_45_ans.update($entre_26_45_ans => Math.floor($entre_26_45_ans/$cptVar));
		plus_46.update($plus_46 => Math.floor($plus_46/$cptVar));
		homme.update($homme => Math.floor($homme/$cptVar));
		femme.update($femme => Math.floor($femme/$cptVar));
		variable=$csp_moins+""+$csp_med+""+$csp_plus+""+$moins_15_ans+""+$entre_16_25_ans+""+$entre_26_45_ans+""+$plus_46+""+$homme+""+$femme		
	}


	$: ($cptVar==3) && (moyenne(),($cptVar=4));
	$: console.log('cpt: ', $cptVar);
	$: console.log('csp_moins: ', $csp_moins);

	</script>

<MediaQuery query="(min-width: 481px)" let:matches> <!-- le site est ouvert sur tablette ou pc -->
	{#if matches}
	<div class="root tablet and pc">
		<!-- on importe le header -->
		<Header />
	</div>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches> <!-- le site est ouvert sur mobile -->
	{#if matches}
	<div class="root mobile">
		<SmallHeader />
	</div>
	{/if}
</MediaQuery>

	<div class="w3-content w3-padding" style="max-width:1564px">
		<div class="w3-container w3-content w3-center w3-padding-32" id="products">
			<h1 class="w3-center ">Nos produits</h1>	
		</div>	
			<p style="text-align:center">{variable}</p>
			<div class="w3-row-padding ">

				{#if $categorie==""} <!-- Si la catégorie n'est pas renseignée: aka on est sur la page d'accueil ou sur la page d'un sport -->
					{#if $cptVar < 3}
						{#if $sport==""} <!-- Si le sport n'est pas renseigné: aka on est sur la page d'accueil -->
							{#each products as product}
								<div class="w3-third w3-container w3-margin-bottom">
									<a on:click={() => { variable = ((product.csp_moins+$csp_moins)+""+(product.csp_med+$csp_med)+""+(product.csp_plus+$csp_plus)+""+(product.moins_15_ans+$moins_15_ans)+""+(product.entre_16_25_ans+$entre_16_25_ans)+""+(product.entre_26_45_ans+$entre_26_45_ans)+""+(product.plus_46+$plus_46)+""+(product.homme+$homme)+""+(product.femme+$femme)), csp_moins.update(csp_moins=>product.csp_moins+csp_moins),csp_med.update(csp_med=>product.csp_med+csp_med),csp_plus.update(csp_plus=> product.csp_plus+csp_plus),moins_15_ans.update(moins_15_ans => product.moins_15_ans+moins_15_ans),entre_16_25_ans.update(entre_16_25_ans => product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans.update(entre_26_45_ans => product.entre_26_45_ans+entre_26_45_ans),plus_46.update(plus_46 => product.plus_46+plus_46),homme.update(homme => product.homme+homme),femme.update(femme=>product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><img src={product.image} width=400 height=auto style="width:100%"></a>
									<p style="font-size: smaller;">{product.name}<br><b>{product.price}€</b></p>	
									<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
									<p><a on:click={() => { variable = ((product.csp_moins+$csp_moins)+""+(product.csp_med+$csp_med)+""+(product.csp_plus+$csp_plus)+""+(product.moins_15_ans+$moins_15_ans)+""+(product.entre_16_25_ans+$entre_16_25_ans)+""+(product.entre_26_45_ans+$entre_26_45_ans)+""+(product.plus_46+$plus_46)+""+(product.homme+$homme)+""+(product.femme+$femme)), csp_moins.update(csp_moins=>product.csp_moins+csp_moins),csp_med.update(csp_med=>product.csp_med+csp_med),csp_plus.update(csp_plus=> product.csp_plus+csp_plus),moins_15_ans.update(moins_15_ans => product.moins_15_ans+moins_15_ans),entre_16_25_ans.update(entre_16_25_ans => product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans.update(entre_26_45_ans => product.entre_26_45_ans+entre_26_45_ans),plus_46.update(plus_46 => product.plus_46+plus_46),homme.update(homme => product.homme+homme),femme.update(femme=>product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><button class="w3-button w3-block" style="color: white;background-color: #1083b8;">Ajouter au panier</button></a></p>
								</div>
							{/each}
						{:else}
							{#each products as product}
								{#if product.sport==$sport}
									<div class="w3-third w3-container w3-margin-bottom">
										<a on:click={() => { variable = ((product.csp_moins+$csp_moins)+""+(product.csp_med+$csp_med)+""+(product.csp_plus+$csp_plus)+""+(product.moins_15_ans+$moins_15_ans)+""+(product.entre_16_25_ans+$entre_16_25_ans)+""+(product.entre_26_45_ans+$entre_26_45_ans)+""+(product.plus_46+$plus_46)+""+(product.homme+$homme)+""+(product.femme+$femme)), csp_moins.update(csp_moins=>product.csp_moins+csp_moins),csp_med.update(csp_med=>product.csp_med+csp_med),csp_plus.update(csp_plus=> product.csp_plus+csp_plus),moins_15_ans.update(moins_15_ans => product.moins_15_ans+moins_15_ans),entre_16_25_ans.update(entre_16_25_ans => product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans.update(entre_26_45_ans => product.entre_26_45_ans+entre_26_45_ans),plus_46.update(plus_46 => product.plus_46+plus_46),homme.update(homme => product.homme+homme),femme.update(femme=>product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><img src={product.image} width=400 height=auto style="width:100%"></a>
										<p style="font-size: smaller;">{product.name}<br><b>{product.price}€</b></p>	
										<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
										<p><a on:click={() => { variable = ((product.csp_moins+$csp_moins)+""+(product.csp_med+$csp_med)+""+(product.csp_plus+$csp_plus)+""+(product.moins_15_ans+$moins_15_ans)+""+(product.entre_16_25_ans+$entre_16_25_ans)+""+(product.entre_26_45_ans+$entre_26_45_ans)+""+(product.plus_46+$plus_46)+""+(product.homme+$homme)+""+(product.femme+$femme)), csp_moins.update(csp_moins=>product.csp_moins+csp_moins),csp_med.update(csp_med=>product.csp_med+csp_med),csp_plus.update(csp_plus=> product.csp_plus+csp_plus),moins_15_ans.update(moins_15_ans => product.moins_15_ans+moins_15_ans),entre_16_25_ans.update(entre_16_25_ans => product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans.update(entre_26_45_ans => product.entre_26_45_ans+entre_26_45_ans),plus_46.update(plus_46 => product.plus_46+plus_46),homme.update(homme => product.homme+homme),femme.update(femme=>product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><button class="w3-button w3-block" style="color: white;background-color: #1083b8;">Ajouter au panier</button></a></p>
									</div>
								{/if}
							{/each}				
						{/if}		
					{:else} <!-- On a déjà cliqué sur 3 produits, on affiche les produits qui correspondent à la variable -->
						{#if $sport==""}
							{#each products as product}
								{#if (Math.abs((product.csp_moins-$csp_moins))+Math.abs((product.csp_med-$csp_med))+Math.abs((product.csp_plus-$csp_plus))+Math.abs((product.moins_15_ans-$moins_15_ans))+Math.abs((product.entre_16_25_ans-$entre_16_25_ans))+Math.abs((product.entre_26_45_ans-$entre_26_45_ans))+Math.abs((product.plus_46-$plus_46))+Math.abs((product.homme-$homme))+Math.abs((product.femme-$femme)))<=15}
									<div class="w3-third w3-container w3-margin-bottom">
										<a href="#"><img src={product.image} width=400 height=auto style="width:100%"> </a>
										<p style="font-size: smaller;">{product.name}<br><b>{product.price}€</b></p>	
										<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
										<p><button class="w3-button w3-block" style="color: white;background-color: #1083b8;">Ajouter au panier</button></p>
									</div>
								{/if}
							{/each}
						{:else}
							{#each products as product}
								{#if product.sport==$sport}
									{#if (Math.abs((product.csp_moins-$csp_moins))+Math.abs((product.csp_med-$csp_med))+Math.abs((product.csp_plus-$csp_plus))+Math.abs((product.moins_15_ans-$moins_15_ans))+Math.abs((product.entre_16_25_ans-$entre_16_25_ans))+Math.abs((product.entre_26_45_ans-$entre_26_45_ans))+Math.abs((product.plus_46-$plus_46))+Math.abs((product.homme-$homme))+Math.abs((product.femme-$femme)))<=15}
										<div class="w3-third w3-container w3-margin-bottom">
											<a href="#"><img src={product.image} width=400 height=auto style="width:100%"> </a>
											<p style="font-size: smaller;">{product.name}<br><b>{product.price}€</b></p>	
											<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
											<p><button class="w3-button w3-block" style="color: white;background-color: #1083b8;">Ajouter au panier</button></p>
										</div>
									{/if}
								{/if}
							{/each}
						{/if}
					{/if}
				{:else} 
					{#if $cptVar < 3} 
						{#each products as product}
							{#if product.categorie==$categorie}
								<div class="w3-third w3-container w3-margin-bottom">
									<a on:click={() => { variable = ((product.csp_moins+$csp_moins)+""+(product.csp_med+$csp_med)+""+(product.csp_plus+$csp_plus)+""+(product.moins_15_ans+$moins_15_ans)+""+(product.entre_16_25_ans+$entre_16_25_ans)+""+(product.entre_26_45_ans+$entre_26_45_ans)+""+(product.plus_46+$plus_46)+""+(product.homme+$homme)+""+(product.femme+$femme)), csp_moins.update(csp_moins=>product.csp_moins+csp_moins),csp_med.update(csp_med=>product.csp_med+csp_med),csp_plus.update(csp_plus=> product.csp_plus+csp_plus),moins_15_ans.update(moins_15_ans => product.moins_15_ans+moins_15_ans),entre_16_25_ans.update(entre_16_25_ans => product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans.update(entre_26_45_ans => product.entre_26_45_ans+entre_26_45_ans),plus_46.update(plus_46 => product.plus_46+plus_46),homme.update(homme => product.homme+homme),femme.update(femme=>product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><img src={product.image} width=400 height=auto style="width:100%"></a>
									<p style="font-size: smaller;">{product.name}<br><b>{product.price}€</b></p>	
									<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
									<p><a on:click={() => { variable = ((product.csp_moins+$csp_moins)+""+(product.csp_med+$csp_med)+""+(product.csp_plus+$csp_plus)+""+(product.moins_15_ans+$moins_15_ans)+""+(product.entre_16_25_ans+$entre_16_25_ans)+""+(product.entre_26_45_ans+$entre_26_45_ans)+""+(product.plus_46+$plus_46)+""+(product.homme+$homme)+""+(product.femme+$femme)), csp_moins.update(csp_moins=>product.csp_moins+csp_moins),csp_med.update(csp_med=>product.csp_med+csp_med),csp_plus.update(csp_plus=> product.csp_plus+csp_plus),moins_15_ans.update(moins_15_ans => product.moins_15_ans+moins_15_ans),entre_16_25_ans.update(entre_16_25_ans => product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans.update(entre_26_45_ans => product.entre_26_45_ans+entre_26_45_ans),plus_46.update(plus_46 => product.plus_46+plus_46),homme.update(homme => product.homme+homme),femme.update(femme=>product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><button class="w3-button w3-block" style="color: white;background-color: #1083b8;">Ajouter au panier</button></a></p>
								</div>
							{/if}
						{/each}
					{:else} 
						{#each products as product}
							{#if product.categorie==$categorie} 
								{#if (Math.abs((product.csp_moins-$csp_moins))+Math.abs((product.csp_med-$csp_med))+Math.abs((product.csp_plus-$csp_plus))+Math.abs((product.moins_15_ans-$moins_15_ans))+Math.abs((product.entre_16_25_ans-$entre_16_25_ans))+Math.abs((product.entre_26_45_ans-$entre_26_45_ans))+Math.abs((product.plus_46-$plus_46))+Math.abs((product.homme-$homme))+Math.abs((product.femme-$femme)))<=15}
									<div class="w3-third w3-container w3-margin-bottom">
										<a href="#"><img src={product.image} width=400 height=auto style="width:100%"> </a>
										<p style="font-size: smaller;">{product.name}<br><b>{product.price}€</b></p>	
										<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
										<p><button class="w3-button w3-block" style="color: white;background-color: #1083b8;">Ajouter au panier</button></p>
									</div>
								{/if}
							{/if}
						{/each}
					{/if}
				{/if}
			</div>
		</div>

<style>	
h1 {
	width: 100%;
}
</style>
