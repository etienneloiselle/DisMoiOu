<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dis moi où</title>
    <!-- Sets initial viewport load and disables zooming  -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!-- Makes your prototype chrome-less once bookmarked to your phone's home screen -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <link href="css/app.css" rel="stylesheet">
    <link rel="stylesheet" href="css/leaflet.css" />

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/L.Control.Locate.css" />
    <!--[if lt IE 9]>
    <link rel="stylesheet" href="//rawgithub.com/domoritz/leaflet-locatecontrol/gh-pages/dist/L.Control.Locate.ie.min.css"/>
    <![endif]-->

    <script src="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
    <script src="js/L.Control.Locate.min.js"></script>

    <!--[if lte IE 8]><link rel="stylesheet" href="libs/leaflet.ie.css" /><![endif]-->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Notre feuille de styles -->
    <link rel="stylesheet" href="css/app.css">

    
</head>
<body>


<div class="container-fluid">
  <div class="row">
    <div class="col-xs-12">
        <div id="map"></div>

        <!-- Contrôle pour changer d'étage -->
        <div id="controlleEtage">
            <ul>
                <li><a href="javascript:changerEtage(5)">5</a></li>
                <li><a href="javascript:changerEtage(4)">4</a></li>
                <li><a href="javascript:changerEtage(3)">3</a></li>
                <li><a href="javascript:changerEtage(2)">2</a></li>
                <li><a href="javascript:changerEtage(1)">1</a></li>
            </ul>
        </div> <!-- #controlleEtage -->

    <!-- La barre de navigation dans le bas de l'écran, contient trois boutons -->
<footer class="footer">
      <div class="container-fluid">
          <div class="row">
            <ul id="navigationFooter">

                <div class="col-xs-4">
                    <!-- Apelle la fonction lc.start().....Geolocalisation de l'utilisateur -->
                    <li>
                    <a href="javascript:lc.start()"><i class="material-icons">location_searching</i></a>
                    </li>
                </div> <!-- .col-xs-4 -->
                

                <div class="col-xs-4">
                    <!-- Ouvre la fenêtre modale de recherche de locaux -->
                    <li>
                        <a id="boutonRechercher" href="javascript:"><i class="material-icons">search</i></a>
                    </li>
                </div> <!-- .col-xs-4 -->

                <div class="col-xs-4">
                    <!-- Ouvre la fenetre d'information sur le projet -->
                    <li>
                        <a href="javascript:"><i class="material-icons">info_outline</i></a>
                    </li>
                </div> <!-- .col-xs-4 -->
            </ul>
        </div> <!-- .row -->
      </div> <!-- .container-fluid -->
    </footer>

    </div>
</div>


<!-- Fenêtre modal pour rechercher un local, contient le champ de recherche et la longue liste de tout les locaux. Affiché via un bouton dans le menu de navigation et la fonction  $("#modalRechercher").modal('show') dans le fichier app.js-->
<div class="modal fade" id="modalRechercher" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title text-center" id="myModalLabel">Rechercher</h4>
    </div>
    <div class="modal-body">
        <div id="listeLocaux">

            <!-- Le champ de recherche, filtre dynamiquement la liste via le plugin jQuery LiveFilter-->
            <input id="inputRechercherModal" class="search form-control" placeholder="Local 2106, Cafétéria, Porte principale" autofocus tabindex="1" />

            <!-- La longue liste qui liste tout les locaux du cégep -->
            <ul id="listeRechercheLocal">
            
                <?php
                    include "listelocaux.html"
                ?>
                
            </ul>
        </div> <!--------  listeLocaux  -------->
    </div> <!--------  .modal-body  -------->
</div>
</div>
</div> <!--------  .modal  -------->


</div> <!--------  .container-fluid  -------->










<!-- Tous les scripts javascript nécéssaire pour notre application-->
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<!-- Pour faire bondir les petit markeur lors de leur ajout sur la carte -->
<script src="js/bouncemarker.js"></script>

<!-- Permet de filtrer dynamiquement la liste des locaux -->
<script src="js/jquery.liveFilter.js"></script>

<!---------------------------------------------------------------------->
<!------------------ Les scripts de notre application ------------------>
<!---------------------------------------------------------------------->
<script src="js/app.js"></script>


</script>
</body>
</html>
