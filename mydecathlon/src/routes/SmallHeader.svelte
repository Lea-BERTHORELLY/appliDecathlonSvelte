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

    import { categorie, sport } from '$lib/store';
    categorie.subscribe($ => $categorie)()
    sport.subscribe($ => $sport)()
</script>

<div id="mySidenav" class="sidenav" class:open={navOpen}>
    <a href="#a" class="closebtn" on:click={handleNav}>&times;</a>
    <a class="active" on:click={() => {categorie.update(categorie => categorie="" ), sport.update(sport => sport="");}}>Tous nos produits</a>
    <a  on:click={() => {categorie.update(categorie => categorie="homme" );}}>Homme</a>
    <a on:click={() => {categorie.update(categorie => categorie="femme" );}}>Femme</a>
    <a on:click={() => {categorie.update(categorie => categorie="enfant" );}}>Enfant</a>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={handleNav}></span>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container" class:change={navOpen} on:click={handleNav}>
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>

<style>
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
	
.open {
	width: 40%;
}	

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>