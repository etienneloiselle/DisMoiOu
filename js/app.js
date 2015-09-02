        // Créé la carte avec les données de Open Street Map
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osm = new L.TileLayer(osmUrl, {
            maxZoom: 22,
            reuseTiles: true, 
        });

        // Limite de la carte
        var southWest = L.latLng(46.828064, -71.230556),
            northEast = L.latLng(46.832086, -71.224612),
            bounds = L.latLngBounds(southWest, northEast);

        // Affiche la carte
        map = new L.Map('map', {
            layers: [osm],
            center: new L.LatLng(46.8302871, -71.227337),
            zoom: 19,
            minZoom: 4,
            //maxBounds: bounds,
            zoomControl:false
        });

        // S'assure que la carte prend tout l'espace restant dans la fenêtre du navigateur
        function redimensionnerCarte(){

            // La taille de la zone d'affichage du navigateur
            var viewportHeight = $(window).height();

            // Soustrait la hauteur du footer
            var mapHeight = viewportHeight - $("footer").height();

            // Redimensionne la carte
            //$("#map").height(mapHeight);
        }
                        
            

            // Initialisation de quelque variable, pour régler certain problème en rapport avec leur scope
            var imageUrl = "";
            var imageBounds = "";
            var planEtage = "";
            var lc = "";
            var marqueurs = "";


            // Icone pour les marqueurs des portes, escaliers, ascenseurs, etc.

            // Icônes pour les portes
            var iconePortes = L.icon({
                                iconUrl: 'images/markers/portes.png',
                                iconSize:     [32, 29], // size of the icon
                                iconAnchor:   [16, 15], // point of the icon which will correspond to marker's location
                                popupAnchor:  [2, -13] // point from which the popup should open relative to the iconAnchor
                                });

            // Icône pour les escalier
            var iconeEscalier = L.icon({
                                iconUrl: 'images/markers/escaliers.png',
                                iconSize:     [32, 32], // size of the icon
                                iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                                popupAnchor:  [2, -13] // point from which the popup should open relative to the iconAnchor
                                });


            


                // Geolocalisation de l'utilisateur
                lc = L.control.locate({
                                    position: 'topleft',  // set the location of the control
                                    drawCircle: false,  // controls whether a circle is drawn that shows the uncertainty about the location
                                    follow: false,  // follow the user's location
                                    setView: false, // automatically sets the map view to the user's location, enabled if `follow` is true
                                    keepCurrentZoomLevel: true, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
                                    stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
                                    remainActive: false, // if true locate control remains active on click even if the user's location is in view.
                                    markerClass: L.circleMarker, // L.circleMarker or L.marker
                                    circleStyle: {},  // change the style of the circle around the user's location
                                    markerStyle: {},
                                    followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
                                    followMarkerStyle: {},
                                    icon: 'fa fa-map-marker',  // class for icon, fa-location-arrow or fa-map-marker
                                    iconLoading: 'fa fa-spinner fa-spin',  // class for loading icon
                                    circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
                                    metric: true,  // use metric or imperial units
                                    onLocationError: function(err) {alert(err.message)},  // define an error callback function
                                    onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
                                        alert(context.options.strings.outsideMapBoundsMsg);
                                    },
                                    showPopup: true, // display a popup when the user click on the inner marker
                                    strings: {
                                        title: "Show me where I am",  // title of the locate control
                                        metersUnit: "meters", // string for metric units
                                        feetUnit: "feet", // string for imperial units
                                        popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
                                        outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
                                    },
                                    locateOptions: {
                                      enableHighAccuracy: true
                                    }  // define location options e.g enableHighAccuracy: true or maxZoom: 10
                                });

                                lc.addTo(map);
                                lc.start();


            // Fonction pour changer les plans des étages selon le besoin.
            function changerEtage(etage){

                // Efface la calque qui contient l'image du plan de l'étage
                map.removeLayer(planEtage);

                if(etage == 1){

                    // Efface le calque qui contient tout les marqueurs (portes, escalier, etc.) de l'étage 1
                    map.removeLayer(marqueurs);

                    imageUrl = 'images/etage1.svg';
                    imageBounds = [[46.8291960, -71.229300],[46.8312300, -71.2251100]];

                    planEtage = L.imageOverlay(imageUrl, imageBounds);

                    // Ajoute et affiche l'image du plan de l'étage 1
                    map.addLayer(planEtage);

                    // Défini tous les marqueur sur l'étage 1
                    porte1Icone = L.marker([46.8300549, -71.2277955], {icon: iconePortes}).bindPopup("Entrée principale");
                    porte2Icone = L.marker([46.8297739, -71.2265661], {icon: iconePortes}).bindPopup("Entrée principale");
                    porte3Icone = L.marker([46.8298144, -71.2264637], {icon: iconePortes}).bindPopup("Entrée principale");

                    escalier1Icone = L.marker([46.8303292, -71.2271596], {icon: iconeEscalier}).bindPopup("Grand escalier");
                    escalier2Icone = L.marker([46.8306716, -71.2274705], {icon: iconeEscalier}).bindPopup("Escalier 1E02");
                    escalier3Icone = L.marker([46.8309851, -71.2277563], {icon: iconeEscalier}).bindPopup("Escalier 1E01");
                    escalier4Icone = L.marker([46.8300009, -71.2268951], {icon: iconeEscalier}).bindPopup("Escalier 1E05");

                    // Créé un "Layer Group" avec tout les marqueurs et les affiches sur la carte
                    marqueurs = L.layerGroup([porte1Icone, porte2Icone, porte3Icone, escalier1Icone, escalier2Icone, escalier3Icone, escalier4Icone]);

                    // Affiche la carte en arrière-plan de tout les autres calque. Nécésaire pour voir le point de géolocalisation après avoir changer d'étage
                    planEtage.bringToBack();



                }


                // Change pour le 2e étage
                else if (etage == 2){
                    map.removeLayer(planEtage);
                    map.removeLayer(marqueurs);
                    imageUrl = 'images/etage2.svg';
                    imageBounds = [[46.8291920, -71.2288570],[46.8312300, -71.2255300]];

                    planEtage = L.imageOverlay(imageUrl, imageBounds)
                    map.addLayer(planEtage);
                    planEtage.bringToBack();
                }


                // Change pour le 3e étage
                else if (etage == 3){
                    map.removeLayer(planEtage);
                    map.removeLayer(marqueurs);
                    imageUrl = 'images/etage3.svg';
                    imageBounds = [[46.8291920, -71.2288570],[46.8312300, -71.2255300]];

                    planEtage = L.imageOverlay(imageUrl, imageBounds)
                    map.addLayer(planEtage);
                    planEtage.bringToBack();
                }
            } // Fin fonction changerEtage()



            var marqueur = "";

            // Ca contenir la postion du marqueur en object javascript dans le format ---> [lat, long]
            var positionMarqueur = "";

            // Fonction appellé chaque fois que l'on veux afficher un marqueur sur la carte pour montrer l'emplacement d'un local
            function afficherMarqueur(position, etage, message){

                // Suprime le calque "marqueur" qui contient le ou les marqueurs
                map.removeLayer(marqueur);

                // Transforme le string "postition" en objet pour être capable de l'afficher
                positionMarqueur = JSON.parse(position);


                map.panTo(new L.LatLng(46.8302871, -71.227337));

                // Zoom la carte pour afficher tout le cégep
                map.setZoom(19);

                // Crée un marqueur et le fait rebondir selon les paramètres "duration" et "height"
                marqueur = L.marker(positionMarqueur, {bounceOnAdd: true, bounceOnAddOptions: {duration: 500, height: 200}}).bindPopup(message)

                // Créé un nouveau calque, ajoute le marqueur puis l'affiche sur la carte
                map.addLayer(marqueur);

                //Ouvre le popup du marqueur automatiquement (Contient la variable "message" de la fonction afficheMarqueur())
                marqueur.openPopup();

                // Ferme la fênetre modale
                $('#modalRechercher').modal('hide')
            };


            // Document ready function
            $(function(){

                        redimensionnerCarte();

                        // Cache tout les élément de la liste avec la classe "cacher"
                        $(".cacher").hide();

                        // Affiche le plan du 1er étage par defaut
                        changerEtage(1);

                        // Démare le service de géolcalisation
                        lc.start();

                        // Appellé lorsque la fenêtre est redimensionner
                        $( window ).resize(function() {
                            redimensionnerCarte();
                        });


                        // Affiche les marqueurs du premier étage lors du chargemment du site
                        porte1Icone = L.marker([46.8300549, -71.2277955], {icon: iconePortes}).bindPopup("Entrée principale");
                        porte2Icone = L.marker([46.8297739, -71.2265661], {icon: iconePortes}).bindPopup("Entrée principale");
                        porte3Icone = L.marker([46.8298144, -71.2264637], {icon: iconePortes}).bindPopup("Entrée principale");

                        escalier1Icone = L.marker([46.8303292, -71.2271596], {icon: iconeEscalier}).bindPopup("Grand escalier");
                        escalier2Icone = L.marker([46.8306716, -71.2274705], {icon: iconeEscalier}).bindPopup("Escalier 1E02");
                        escalier3Icone = L.marker([46.8309851, -71.2277563], {icon: iconeEscalier}).bindPopup("Escalier 1E01");
                        escalier4Icone = L.marker([46.8301899, -71.2277011], {icon: iconeEscalier}).bindPopup("Escalier 1E07");
                        escalier5Icone = L.marker([46.8300009, -71.2268951], {icon: iconeEscalier}).bindPopup("Escalier 1E05");

                        marqueurs = L.layerGroup([porte1Icone, porte2Icone, porte3Icone, escalier1Icone, escalier2Icone, escalier3Icone, escalier4Icone, escalier5Icone]);

                        // Affiche seulement les marqueurs des portes si la carte est asser zoomer (Level 19)
                        map.on('zoomend', function() {
                        if (map.getZoom() > 19) {
                            map.addLayer(marqueurs);
                        } else if (map.getZoom() < 20){
                            map.removeLayer(marqueurs);
                        }
                        });



                        // Ouvre la fenêtre modale avec le bouton dans le menu de navigation
                        $("#boutonRechercher").click(function(event){
                            console.log("Ovrir modale");
                            event.preventDefault();
                            $("#modalRechercher").modal('show')
                            $('#modalRechercher').on('shown.bs.modal', function () {
                                $('#inputRechercherModal').focus()
                            })
                        });


                        // Recherche d'un local
                        // Filtre la liste dynamiquement selon la vauleur du champ de texte
                        $('#listeRechercheLocal').liveFilter('#inputRechercherModal', 'li', {
                            filterChildSelector: 'a',
                        });


            }); // Document ready function