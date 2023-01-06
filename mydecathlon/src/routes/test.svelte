<svelte:head>
	<title>MyDecathlon</title>
	<meta name="description" content="Application Decathlon" />
	<!-- <meta charset="UTF-8"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style>
	.w3-sidebar a {font-family: "Roboto", sans-serif}
	body,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}
	</style>
</svelte:head>

<script>
    import Header from "./Header.svelte";
// @ts-nocheck

		let navOpen = false;
		
		function handleNav() {
			navOpen = !navOpen;
	// 		navWidth === 0 ? navWidth = 40 : navWidth = 0;
		}
		
	/**
     * @param {{ code: string; }} e
     */
	function handleNavWithKey(e) {
		console.log(e.code);
		if (e.code === "F1") {
			navOpen = !navOpen;
		}
	}	
	import MediaQuery from "./MediaQuery.svelte";

	import {products} from "$lib/store";
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
	let cpt;
	cptVar.subscribe($ => cpt = $cptVar)()
	// console.log(cpt);
	// let categorie = ""
	let csp_moins = 0
	let csp_med = 0
	let csp_plus = 0
	let moins_15_ans = 0
	let entre_16_25_ans = 0
	let entre_26_45_ans = 0
	let plus_46 = 0
	let homme = 0
	let femme = 0
	
	$:variable=csp_moins+""+csp_med+""+csp_plus+""+moins_15_ans+""+entre_16_25_ans+""+entre_26_45_ans+""+plus_46+""+homme+""+femme
	// let variable = 0
	// let cpt = 0
	// let distance = 0
	$: console.log('variable: ', variable)


	function moyenne(){
		csp_moins = Math.floor(csp_moins/$cptVar);
		csp_med = Math.floor(csp_med/$cptVar);
		csp_plus = Math.floor(csp_plus/$cptVar);
		moins_15_ans = Math.floor(moins_15_ans/$cptVar);
		entre_16_25_ans = Math.floor(entre_16_25_ans/$cptVar);
		entre_26_45_ans = Math.floor(entre_26_45_ans/$cptVar);
		plus_46 = Math.floor(plus_46/$cptVar);
		homme = Math.floor(homme/$cptVar);
		femme = Math.floor(femme/$cptVar);
		variable = csp_moins+""+csp_med+""+csp_plus+""+moins_15_ans+""+entre_16_25_ans+""+entre_26_45_ans+""+plus_46+""+homme+""+femme
		
	}


	$: ($cptVar==3) && moyenne();

	</script>

<MediaQuery query="(min-width: 1281px)" let:matches> <!-- le site est ouvert sur pc -->
	{#if matches}
	<div class="root default">
		<!-- on importe le header -->
		<Header />

	</div>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches> <!-- le site est ouvert sur tablette -->
	{#if matches}
	<div class="root tablet">
		<!-- on importe le header -->
		<Header />
	</div>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 480px)" let:matches> <!-- le site est ouvert sur mobile -->
	{#if matches}
	<div class="root mobile">
		<div id="mySidenav" class="sidenav" class:open={navOpen}>
			<a href="#a" class="closebtn" on:click={handleNav}>&times;</a>
			<a href="#all">Tous nos produits</a>
			<a href="#homme">Homme</a>
			<a href="#femme">Femme</a>
			<a href="#enfant">Enfant</a>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span on:click={handleNav}></span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="container" class:change={navOpen} on:click={handleNav}>
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
	</div>
	{/if}
</MediaQuery>

	  <!-- Add some margin-left to this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page) -->
	  <!-- <div id="main" class:pushMainToRight={navOpen}> -->

	<body class="w3-content" >
		<!-- !PAGE CONTENT! -->
		<div class="w3-main" >
		
		  <!-- Push down content on small screens -->
		  <!-- <div class="w3-hide-large" style="margin-top:83px"></div> -->
			<div class="w3-container w3-content w3-center w3-padding-64" id="near">
				<h1 class="w3-center ">Nos produits</h1>	
			</div>	
		  <p style="text-align:center">{variable}</p>
				<!-- svelte-ignore a11y-missing-attribute -->
				{#if $cptVar < 3}
				{#each products as product}
				<div class="w3-col l3 s6 w3-white">
					<div class="w3-container">
						<!-- if condition -->
						<!-- <a href="#" on:click={() => { variable=Math.abs((product.csp_moins-csp_moins))+Math.abs((product.csp_med-csp_med))+Math.abs((product.csp_plus-csp_plus))+Math.abs((product.moins_15_ans-moins_15_ans))+Math.abs((product.entre_16_25_ans-entre_16_25_ans))+Math.abs((product.entre_26_45_ans-entre_26_45_ans))+Math.abs((product.plus_46-plus_46))+Math.abs((product.homme-homme))+Math.abs((product.femme-femme)),csp_moins=Math.abs((product.csp_moins-csp_moins)),csp_med=Math.abs((product.csp_med-csp_med)),csp_plus=Math.abs((product.csp_plus-csp_plus)),moins_15_ans=Math.abs((product.moins_15_ans-moins_15_ans)),entre_16_25_ans=Math.abs((product.entre_16_25_ans-entre_16_25_ans)),entre_26_45_ans=Math.abs((product.entre_26_45_ans-entre_26_45_ans)),plus_46=Math.abs((product.plus_46-plus_46)),homme=Math.abs((product.homme-homme)),femme=Math.abs((product.femme-femme)) }}><img src={product.image} style="width:100%"> </a> -->
						<!-- Attention ! ici on va faire la moyenne au lieu de la distance, il faut donc tout changer :( -->
						<!-- <a href="#" on:click={() => { variable = (Math.abs((product.csp_moins-csp_moins))+""+Math.abs((product.csp_med-csp_med))+""+Math.abs((product.csp_plus-csp_plus))+""+Math.abs((product.moins_15_ans-moins_15_ans))+""+Math.abs((product.entre_16_25_ans-entre_16_25_ans))+""+Math.abs((product.entre_26_45_ans-entre_26_45_ans))+""+Math.abs((product.plus_46-plus_46))+""+Math.abs((product.homme-homme))+""+Math.abs((product.femme-femme))), csp_moins=Math.abs((product.csp_moins-csp_moins)),csp_med=Math.abs((product.csp_med-csp_med)),csp_plus=Math.abs((product.csp_plus-csp_plus)),moins_15_ans=Math.abs((product.moins_15_ans-moins_15_ans)),entre_16_25_ans=Math.abs((product.entre_16_25_ans-entre_16_25_ans)),entre_26_45_ans=Math.abs((product.entre_26_45_ans-entre_26_45_ans)),plus_46=Math.abs((product.plus_46-plus_46)),homme=Math.abs((product.homme-homme)),femme=Math.abs((product.femme-femme)), distance=Math.abs((product.csp_moins-csp_moins))+Math.abs((product.csp_med-csp_med))+Math.abs((product.csp_plus-csp_plus))+Math.abs((product.moins_15_ans-moins_15_ans))+Math.abs((product.entre_16_25_ans-entre_16_25_ans))+Math.abs((product.entre_26_45_ans-entre_26_45_ans))+Math.abs((product.plus_46-plus_46))+Math.abs((product.homme-homme))+Math.abs((product.femme-femme)),cpt+=1}}><img src={product.image} width=400 height=auto style="width:100%"> </a> -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" on:click={() => { variable = ((product.csp_moins+csp_moins)+""+(product.csp_med+csp_med)+""+(product.csp_plus+csp_plus)+""+(product.moins_15_ans+moins_15_ans)+""+(product.entre_16_25_ans+entre_16_25_ans)+""+(product.entre_26_45_ans+entre_26_45_ans)+""+(product.plus_46+plus_46)+""+(product.homme+homme)+""+(product.femme+femme)), csp_moins=(product.csp_moins+csp_moins),csp_med=(product.csp_med+csp_med),csp_plus=(product.csp_plus+csp_plus),moins_15_ans=(product.moins_15_ans+moins_15_ans),entre_16_25_ans=(product.entre_16_25_ans+entre_16_25_ans),entre_26_45_ans=(product.entre_26_45_ans+entre_26_45_ans),plus_46=(product.plus_46+plus_46),homme=(product.homme+homme),femme=(product.femme+femme),cptVar.update(cptVar => cptVar+ 1);}}><img src={product.image} width=400 height=auto style="width:100%"> </a>
						<p>{product.name}<br><b>{product.price}</b></p>	
						<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
					</div>
				</div>
				{/each}
				
				{:else}
				<!-- {moyenne()}  -->
				{#each products as product}

					<!-- {#if (Math.abs((product.csp_moins-csp_moins))+Math.abs((product.csp_med-csp_med))+Math.abs((product.csp_plus-csp_plus))+Math.abs((product.moins_15_ans-moins_15_ans))+Math.abs((product.entre_16_25_ans-entre_16_25_ans))+Math.abs((product.entre_26_45_ans-entre_26_45_ans))+Math.abs((product.plus_46-plus_46))+Math.abs((product.homme-homme))+Math.abs((product.femme-femme)))<=20} -->
					<!-- {#if (Math.max(csp_moins,csp_med, csp_plus) == csp_moins)&&((product.csp_moins=csp_moins-1)||(product.csp_moins=csp_moins+1)) || (Math.max(csp_moins,csp_med, csp_plus) == csp_med)&&((product.csp_med=csp_med-1)||(product.csp_med=csp_med+1)) || (Math.max(csp_moins,csp_med, csp_plus) == csp_plus)&&((product.csp_plus=csp_plus-1)||(product.csp_plus=csp_plus+1)) || (Math.max(moins_15_ans,entre_16_25_ans, entre_26_45_ans, plus_46) == moins_15_ans)&&((product.moins_15_ans=moins_15_ans-1)||(product.moins_15_ans=moins_15_ans+1)) || (Math.max(moins_15_ans,entre_16_25_ans, entre_26_45_ans, plus_46) == entre_16_25_ans)&&((product.entre_16_25_ans=entre_16_25_ans-1)||(product.entre_16_25_ans=entre_16_25_ans+1)) || (Math.max(moins_15_ans,entre_16_25_ans, entre_26_45_ans, plus_46) == entre_26_45_ans)&&((product.entre_26_45_ans=entre_26_45_ans-1)||(product.entre_26_45_ans=entre_26_45_ans+1)) || (Math.max(moins_15_ans,entre_16_25_ans, entre_26_45_ans, plus_46) == plus_46)&&((product.plus_46=plus_46-1)||(product.plus_46=plus_46+1)) || (Math.max(homme,femme) == homme)&&((product.homme=homme-1)||(product.homme=homme+1)) || (Math.max(homme,femme) == femme)&&((product.femme=femme-1)||(product.femme=femme+1)) } -->

					{#if (Math.abs((product.csp_moins-csp_moins))+Math.abs((product.csp_med-csp_med))+Math.abs((product.csp_plus-csp_plus))+Math.abs((product.moins_15_ans-moins_15_ans))+Math.abs((product.entre_16_25_ans-entre_16_25_ans))+Math.abs((product.entre_26_45_ans-entre_26_45_ans))+Math.abs((product.plus_46-plus_46))+Math.abs((product.homme-homme))+Math.abs((product.femme-femme)))<=20}
					<div class="w3-col l3 s6">
						<div class="w3-container">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#"><img src={product.image} width=400 height=auto style="width:100%"> </a>
							<p>{product.name}<br><b>{product.price}</b></p>
							<p>{product.csp_moins} {product.csp_med} {product.csp_plus} {product.moins_15_ans} {product.entre_16_25_ans} {product.entre_26_45_ans} {product.plus_46} {product.homme} {product.femme}</p>
						</div>
					</div>
					{/if}

				

				{/each}
				{/if}

		  <!-- End page content -->
		</div>
	</body>
	<!-- </div> -->
<style>

	/* Hamburger Menu icon */	
.container {
	position: absolute;
	left: 10%;
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

/* The side navigation menu */
.sidenav {
  height: 100%; 
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px;
  transition: 0.5s;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
/* #main {
  transition: all .5s;
  padding: 20px;
}
	
.pushMainToRight {
	margin-left: 40%
}	 */
	
.open {
	width: 40%;
}	

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>