<svelte:head>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<script>
	import { page } from '$app/stores';

</script>

  <div class="navbar">
    <a href="/" class="active">Tous nos produits</a>    
    <div class="topnav-right">
      <a href="/homme" class:active={$page.url.pathname === '/homme'}>Homme</a>
      <a href="/femme" class:active={$page.url.pathname === '/femme'}>Femme</a>
      <a href="/enfant" class:active={$page.url.pathname === '/enfant'}>Enfant</a>
      
      <div class="dropdown">
        <button class="dropbtn">Sport 
          <i class="fa fa-caret-down"></i>
        </button>
        <!-- <div class="dropdown-content">
          <a href="#">Alpinisme</a>
          <a href="#">Apnée</a>
          <a href="#">Aquagym</a>
        </div> -->
        <div class="dropdown-content">
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              A
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a href="#">Alpinisme</a>
              <a href="#">Apnée</a>
              <a href="#">Aquagym</a>
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              B
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a href="#">Baby foot</a>
              <a href="#">Badminton</a>
              <a href="#">Basketball</a>
            </div>
          </div>
          <div class="dropdown-sub">
            <button class="dropbtn-sub">
              C
              <i class="fa fa-caret-left"></i>
            </button>
            <div class="dropdown-content-sub">
              <a href="#">Chasse pêche sous-marine</a>
              <a href="#">Cerf volants</a>
              <a href="#">Canoe Kayak</a>
            </div>
          </div>          
        </div>
        <!-- <ul class="drowdown-content">
          <li herf="#"> Alpinisme</li>
        </ul> -->
      </div>
    </div> 
  </div>
  
<!--   
  <div class="navbar">
    <ul>
        <li class="topmenu">
            <a>file</a>
            <ul class="submenu">
                <li><a>browse</a></li>
                <li><a>new file</a></li>
                <li><a>new folder</a></li>
                <li class="divider"></li>
                <li><a>save</a></li>
                <li><a>save as</a></li>
                <li><a>save all</a></li>
                <li class="divider"></li>
                <li><a>rename</a></li>
                <li><a>delete</a></li>
                <li class="divider"></li>
                <li>
                    <a>close</a>
                    <ul class="submenu">
                        <li><a>current file</a></li>
                        <li class="divider"></li>
                        <li><a>files to the right</a></li>
                        <li><a>files to the left</a></li>
                        <li class="divider"></li>
                        <li>
                            <a>all open files</a>
                            <ul class="submenu">
                                <li><a>current file</a></li>
                                <li class="divider"></li>
                                <li><a>files to the right</a></li>
                                <li><a>files to the left</a></li>
                                <li class="divider"></li>
                                <li>
                                    <a>all open files</a>
                                    <ul class="submenu">
                                        <li><a>current file</a></li>
                                        <li class="divider"></li>
                                        <li><a>files to the right</a></li>
                                        <li><a>files to the left</a></li>
                                        <li class="divider"></li>
                                        <li><a>all open files</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a>download</a>
                    <ul class="submenu">
                        <li><a>all files</a></li>
                        <li><a>current file</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="topmenu">
            <a>edit</a>
            <ul class="submenu">
                <li><a>undo</a></li>
                <li><a>redo</a></li>
                <li class="divider"></li>
                <li><a>copy</a></li>
                <li><a>cut</a></li>
                <li><a>paste</a></li>
                <li class="divider"></li>
                <li><a>select all</a></li>
                <li><a>select line</a></li>
            </ul>
        </li>
        <li class="topmenu">
            <a>view</a>
            <ul class="submenu">
                <li><a>hide tabs</a></li>
                <li><a>hide menu</a></li>
                <li class="divider"></li>
                <li><a>wordwrap</a></li>
                <li><a>line numbers</a></li>
                <li><a>fullscreen</a></li>
                <li class="divider"></li>
                <li><a>highlight active line</a></li>
                <li>
                    <a>sidebar</a>
                    <ul class="submenu">
                        <li><a>hide sidebar</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="topmenu"><a>find</a></li>
        <li class="topmenu">
            <a>help</a>
            <ul class="submenu">
                <li><a>support</a></li>
                <li><a>documentation</a></li>
                <li class="divider"></li>
                <li><a>bug report</a></li>
            </ul>
        </li>
        <li class="topmenu">
            <a>settings</a>
            <ul class="submenu">
                <li>
                    <a>font</a>
                    <ul class="submenu">
                        <li><a>larger</a></li>
                        <li><a>smaller</a></li>
                        <li class="divider"></li>
                        <li><a>default</a></li>
                    </ul>
                </li>
                <li>
                    <a>indentation</a>
                    <ul class="submenu">
                        <li><a>+1 space</a></li>
                        <li><a>-1 space</a></li>
                        <li class="divider"></li>
                        <li><a>default</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div> -->


<style>
/* Add a black background color to the top navigation
.topnav {
  position: relative;
  background-color: transparent;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
/* .topnav a {
  float: left;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
} */

/* Change the color of links on hover */
/* .topnav a:hover {
  background-color: #1083b8;
  color: white;
} */

/* Add a color to the active/current link */
/* .topnav a.active {
  background-color: #1083b8;
  color: white;
} */

/* Centered section inside the top navigation */
/* .topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

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

/* Dropdown Button */
/* .dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;} */




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
}

.dropdown {
  float: left;
  overflow: hidden;
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

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #1083b8;
  color: white;
}

.dropdown-content, .dropdown-content-sub {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content-sub{
  left: -160px;
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

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-sub:hover .dropdown-content-sub {
  display: block;
}





/* 

.navbar {
	background-color: #222;
	position: relative;
	z-index: 1000;
	color: #fff;
	font-weight: 200;
	box-shadow: 0 0 10px black;
	}
.navbar ul {
	margin: 0; padding: 0;
}
.navbar li {
	position: relative;
	white-space: nowrap;
	cursor: pointer;
	text-transform: capitalize !important;
	list-style: none;

	-webkit-transition: background-color ease-in 300ms;
	-moz-transition: background-color ease-in 300ms;
	-ms-transition: background-color ease-in 300ms;
	-o-transition: background-color ease-in 300ms;
	transition: background-color ease-in 300ms;
}
.navbar li:hover {
	background-color: #3d3d3d;
	text-shadow: 0 10px 10px #222;
}
.navbar ul li.topmenu {
	display: inline-table;
	padding: .3em 1em;
}
.navbar .topmenu ul {
	display:none;
	position: absolute;
	background-color: #222;
}
.navbar li:hover > ul {
	display: table;
}
.navbar ul.submenu {
	top: 100%; left: 0;
	padding-top: .5em;
	padding-bottom: .5em;	
	box-shadow: 0 0 10px black;
}
.navbar ul.submenu .submenu {
	top: -.5em; left: 100%;
	font-size: 1em
}
.navbar ul.submenu li {
	padding: .2em 1.5em;
	font-size: .9rem;
}
.navbar li.divider {
	padding: 0;
	border-top: 1px solid #343434;
	margin: .5rem auto .3rem;
	cursor: default;
}
.navbar li.divider:hover {
	background-color: transparent;
} */
</style>