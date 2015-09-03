        // Initialisation de quelques variables, pour régler certains problèmes en rapport avec leurs scope dans les fonctions
        var imageUrl = "";
        var imageBounds = "";
        var planEtage = "";
        var lc = "";
        var marqueurs = "";
        var libelleEtage = "";
        var iconesEtage = "";
        var numeroLocauxEtage = "";
        // Limite de la carte
        var southWest = L.latLng(46.828064, -71.230556);
        var northEast = L.latLng(46.832086, -71.224612);
        var bounds = L.latLngBounds(southWest, northEast);


        // Affiche la carte
        map = new L.Map('map', {
            center: new L.LatLng(46.8302871, -71.227337),
            zoom: 18,
            minZoom: 17,
            maxZoom: 25,
            //maxBounds: bounds,
            zoomControl:false,
            scrollWheelZoom:'center'
        });
        




        // S'assure que la carte prend tout l'espace restant dans la fenêtre du navigateur
        function redimensionnerCarte(){
            // Redimensionne la carte
            $("#map").height($(window).height());
        }

            


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

            $("#controlleEtage ul li").click(function(event){
                    $("#controlleEtage ul li").removeClass("etageActif")
                    $(this).addClass("etageActif");
            });

            
            // Fonction pour changer les plans des étages selon le besoin.
            function changerEtage(etage){

                // Efface la calque qui contient l'image du plan de l'étage et
                map.removeLayer(planEtage);
                map.removeLayer(numeroLocauxEtage);
                map.removeLayer(libelleEtage);
                map.removeLayer(marqueurs);
                map.removeLayer(iconesEtage);

                if(etage == 1){
                    

                    // Le plan de base de l'étage 1
                    imageUrl = 'images/etages/etage1_locaux.svg';
                    imageBounds = [[46.8290877, -71.2286963],[46.8313316, -71.2254845]];
                    planEtage = L.imageOverlay(imageUrl, imageBounds);

                    // Calque des numéros des locaux sur l'étage (est seulement ajouter lorsque beacoup zoomer dans la carte)
                    imageLocauxUrl = 'images/etages/etage1_numero.svg'
                    numeroLocauxEtage = L.imageOverlay(imageLocauxUrl, imageBounds);

                    iconesEtageUrl = 'images/etages/etage1_icones.svg';
                    iconesEtage = L.imageOverlay(iconesEtageUrl, imageBounds);
                    map.addLayer(iconesEtage);

                    libelleEtageUrl = 'images/etages/etage1_libelle.svg';
                    libelleEtage = L.imageOverlay(libelleEtageUrl, imageBounds);

                    // Ajoute et affiche l'image du plan de l'étage 1
                    map.addLayer(planEtage);

                    // Affiche la carte en arrière-plan de tout les autres calque. Nécésaire pour voir le point de géolocalisation après avoir changer d'étage
                    planEtage.bringToBack();



                }


                // Change pour le 2e étage
                else if (etage == 2){

                    imageUrl = 'images/etages/etage2_locaux.svg';
                    imageBounds = [[46.8291226, -71.2286392],[46.8313158, -71.225786]];

                    iconesEtageUrl = 'images/etages/etage2_icones.svg';
                    iconesEtage = L.imageOverlay(iconesEtageUrl, imageBounds);
                    map.addLayer(iconesEtage);

                    // Calque des numéros des locaux sur l'étage (est seulement ajouter lorsque beacoup zoomer dans la carte)
                    imageLocauxUrl = 'images/etages/etage2_numero.svg'
                    numeroLocauxEtage = L.imageOverlay(imageLocauxUrl, imageBounds);

                    libelleEtageUrl = '';
                    libelleEtage = L.imageOverlay(libelleEtageUrl, imageBounds);

                    planEtage = L.imageOverlay(imageUrl, imageBounds)
                    map.addLayer(planEtage);

                    planEtage.bringToBack();
                }


                // Change pour le 3e étage
                else if (etage == 3){
                    map.removeLayer(planEtage);
                    map.removeLayer(libelleEtage);
                    map.removeLayer(iconesEtage);
                    map.removeLayer(marqueurs);
                    imageUrl = 'images/etages/etage3.svg';
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

                

                // Crée un marqueur et le fait rebondir selon les paramètres "duration" et "height"
                marqueur = L.marker(positionMarqueur, {bounceOnAdd: true, bounceOnAddOptions: {duration: 500, height: 200}}).bindPopup(message)

                // Créé un nouveau calque, ajoute le marqueur puis l'affiche sur la carte
                map.addLayer(marqueur);

                //Ouvre le popup du marqueur automatiquement (Contient la variable "message" de la fonction afficheMarqueur())
                marqueur.openPopup();

                // Ferme la fênetre modale
                $('#modalRechercher').modal('hide')

                // Centre le marqueur dans l'écran
                map.setView(positionMarqueur);
                
            };


            // Document ready function
            $(function(){

                        // Copie la position GPS lors du clic
                        map.on('click', function(e) {
                            var text = "[" + e.latlng.lat + "," + e.latlng.lng + "]";
                            window.prompt("Position: ", text);
                        });

                        redimensionnerCarte();

                        // Cache tout les élément de la liste avec la classe "cacher"
                        $(".cacher").hide();

                        // Affiche le plan du 1er étage par defaut
                        changerEtage(1);

                        // Démare le service de géolocalisation
                        lc.start();

                        // Appellé lorsque la fenêtre est redimensionner
                        $( window ).resize(function() {
                            redimensionnerCarte();
                        });

                        // Affiche seulement les marqueurs des portes si la carte est asser zoomer (Level 19)
                        map.on('zoomend', function() {
                        if (map.getZoom() >= 19) {
                            map.addLayer(libelleEtage);
                        }

                        if (map.getZoom() < 19) {
                            map.removeLayer(libelleEtage);
                        }

                        if (map.getZoom() >= 20) {
                            map.addLayer(numeroLocauxEtage);
                        } else if (map.getZoom() < 20){
                            map.removeLayer(numeroLocauxEtage);
                        }
                        });



                        // Ouvre la fenêtre modale avec le bouton dans le menu de navigation
                        $("#boutonRechercher").click(function(event){
                            event.preventDefault();
                            $("#modalRechercher").modal('show')
                            $('#modalRechercher').on('shown.bs.modal', function () {
                                $('#inputRechercherModal').focus()
                                // Recherche d'un local
                                // Filtre la liste dynamiquement selon la vauleur du champ de texte
                                $('#listeRechercheLocal').liveFilter('#inputRechercherModal', 'li', {
                                filterChildSelector: 'a h3',
                                });
                            })
                        });



                        // Ajoute via AJAX chaque locaux dans la liste de recherche (via le fichier listelocaux.json)
                        $.ajax({
                                url: "data/listelocaux.json",
                                context: document.body,
                                dataType: "json"
                                }).success(function(data) {
                                    console.dir("Nombre de locaux à ajouter: " + data.length);
                                    for (i=0; i < data.length; i++)
                                    {
                                        var nomLocal = data[i].nom;
                                        var numeroLocal = data[i].local;
                                        var positionLocal = data[i].position;
                                        var etageLocal = data[i].etage;

                                        var element = '<li><a href=\"javascript:afficherMarqueur(\'' + positionLocal  +'\'' + ', \'' + etageLocal + '\', ' + '\'' + nomLocal + '\')">' + nomLocal + '</h3> <h6 class="etage">1er étage</h6></a></li>';  
                                        $("#listeRechercheLocal").append(element);
                                    }

                            });



                                // Calque avec les routes
                                var routesUrl = 'images/etages/routes.svg';
                                var routesBounds = [[46.8274718,-71.2311092],[46.8333687,-71.2232114]];
                                var routes = L.imageOverlay(routesUrl, routesBounds).addTo(map);

            }); // Document ready function