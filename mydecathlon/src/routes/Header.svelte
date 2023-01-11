<svelte:head>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<script>
  import { categorie, sport } from '$lib/store';
  categorie.subscribe($ => $categorie)()
  sport.subscribe($ => $sport)()
</script>
  
  <div class="navbar">
    <a class="active" on:click={() => {categorie.update(categorie => categorie="" ), sport.update(sport => sport="");}}>Tous nos produits</a> 
    <div class="topnav-right">
      <a  on:click={() => {categorie.update(categorie => categorie="homme" );}}>Homme</a>
      <a on:click={() => {categorie.update(categorie => categorie="femme" );}}>Femme</a>
      <a on:click={() => {categorie.update(categorie => categorie="enfant" );}}>Enfant</a>
      <div class="dropdown">
        <button class="dropbtn">Sport 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              A
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Alpinisme" );}}>Alpinisme</a>
              <a on:click={() => {sport.update(sport => sport="Apnée" );}}>Apnée</a>
              <a on:click={() => {sport.update(sport => sport="Aquagym" );}}>Aquagym</a>
              <a on:click={() => {sport.update(sport => sport="Arts du cirque" );}}>Arts du cirque</a>
              <a on:click={() => {sport.update(sport => sport="Athlétisme" );}}>Athlétisme</a>
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              B
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Baby foot" );}}>Baby foot</a>
              <a on:click={() => {sport.update(sport => sport="Baby gym" );}}>Baby gym</a>
              <a on:click={() => {sport.update(sport => sport="Badminton" );}}>Badminton</a>
              <a on:click={() => {sport.update(sport => sport="Baseball" );}}>Baseball</a>
              <a on:click={() => {sport.update(sport => sport="Basketball" );}}>Basketball</a>
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              C
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Canoe kayak" );}}>Canoë kayak</a> 
              <a on:click={() => {sport.update(sport => sport="Cerf volants" );}}>Cerf volants</a>
              <a on:click={() => {sport.update(sport => sport="Chasse pêche sous-marine" );}}>Chasse pêche sous-marine</a>
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              D
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Danses" );}}>Danses</a>   
            </div>
          </div> 
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              E
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Escalade" );}}>Escalade</a>
              <a on:click={() => {sport.update(sport => sport="Escrime" );}}>Escrime</a>
              <a on:click={() => {sport.update(sport => sport="Equitation" );}}>Equitation</a>
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              F
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Fitness" );}}>Fitness</a>
              <a on:click={() => {sport.update(sport => sport="Fléchettes" );}}>Fléchettes</a>
              <a on:click={() => {sport.update(sport => sport="Floorball" );}}>Floorball</a> 
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              G
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a on:click={() => {sport.update(sport => sport="Golf" );}}>Golf</a>
              <a on:click={() => {sport.update(sport => sport="Gymnastique artistique et rythmique" );}}>Gymnastique artistique et rythmique</a>
              <a on:click={() => {sport.update(sport => sport="CGymnastique éducative et sportive" );}}>Gymnastique éducative et sportive</a>  
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>

<style>
/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}
/* Responsive navigation menu - display links on top of each other instead of next to each other (for mobile devices) */
@media screen and (max-width: 600px) {
  .topnav a, .topnav-right {
    float: none;
    display: block;
  }
}
.navbar a.active {
  background-color: #1083b8;
  color: white;
}
.navbar {
  overflow: hidden;
  background-color: transparent;
}
.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}
.dropdown {
  float: left;
  overflow: hidden;
  cursor: pointer;
}

.dropdown button{
  cursor: pointer;
}

.dropdown .dropbtn,.dropbtn-sub {
  font-size: 16px;  
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar a:hover, .dropdown:hover .dropbtn .dropdown-content a:hover{
  background-color: #1083b8;
  color: white;
}
.dropdown-content, .dropdown-content-sub {
  display: none;
  position: absolute;
  background-color: transparent;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
  z-index: 1;
}
.dropdown-content-sub{
  left: -160px;
  margin-top: -50px;
  float: left;
  width: 50%;
}
.dropdown-content a,.dropbtn-sub {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropbtn-sub{
  color: #1083b8;
  font-weight: bold;
}
.dropdown-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1083b8;
  font-weight: bold;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-sub:hover .dropdown-content-sub {
  display: block;
}
</style>
