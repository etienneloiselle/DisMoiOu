function redimensionnerCarte(){$("#map").height($(window).height())}function afficheLorsZoom(){map.getZoom()>=19&&""!==libelleEtageUrl&&map.addLayer(libelleEtage),map.getZoom()<19&&map.removeLayer(libelleEtage),map.getZoom()>=20&&map.addLayer(numeroLocauxEtage),map.getZoom()<20&&map.removeLayer(numeroLocauxEtage)}function changerEtage(e){$("#indicateurEtage").text(e),$("#controlleEtage").is(":visible")&&(console.log("controle visible"),$("#controlleEtage").fadeTo(150,0,function(){$(this).hide()})),map.removeLayer(planEtage),map.removeLayer(numeroLocauxEtage),map.removeLayer(libelleEtage),map.removeLayer(marqueurs),map.removeLayer(iconesEtage),-1==e?(imageUrl="images/etages/etage0_locaux.svg",imageBounds=[[46.8294243,-71.2286517],[46.8314,-71.2256881]],planEtage=L.imageOverlay(imageUrl,imageBounds),imageLocauxUrl="images/etages/etage0_numero.svg",numeroLocauxEtage=L.imageOverlay(imageLocauxUrl,imageBounds),iconesEtageUrl="images/etages/etage0_icones.svg",iconesEtage=L.imageOverlay(iconesEtageUrl,imageBounds),map.addLayer(iconesEtage),libelleEtageUrl="images/etages/etage0_libelle.svg",libelleEtage=L.imageOverlay(libelleEtageUrl,imageBounds),map.addLayer(planEtage),planEtage.bringToBack(),afficheLorsZoom()):1==e?(imageUrl="images/etages/etage1_locaux.svg",imageBounds=[[46.8288074,-71.2289322],[46.8316386,-71.2252248]],planEtage=L.imageOverlay(imageUrl,imageBounds),imageLocauxUrl="images/etages/etage1_numero.svg",numeroLocauxEtage=L.imageOverlay(imageLocauxUrl,imageBounds),iconesEtageUrl="images/etages/etage1_icones.svg",iconesEtage=L.imageOverlay(iconesEtageUrl,imageBounds),map.addLayer(iconesEtage),libelleEtageUrl="images/etages/etage1_libelle.svg",libelleEtage=L.imageOverlay(libelleEtageUrl,imageBounds),map.addLayer(planEtage),planEtage.bringToBack(),afficheLorsZoom()):2==e?(imageUrl="images/etages/etage2_locaux.svg",imageBounds=[[46.8291313,-71.228653],[46.831318,-71.225684]],iconesEtageUrl="images/etages/etage2_icones.svg",iconesEtage=L.imageOverlay(iconesEtageUrl,imageBounds),map.addLayer(iconesEtage),imageLocauxUrl="images/etages/etage2_numero.svg",numeroLocauxEtage=L.imageOverlay(imageLocauxUrl,imageBounds),libelleEtageUrl="images/etages/etage2_libelle.svg",libelleEtage=L.imageOverlay(libelleEtageUrl,imageBounds),planEtage=L.imageOverlay(imageUrl,imageBounds),map.addLayer(planEtage),planEtage.bringToBack(),afficheLorsZoom()):3==e?(imageUrl="images/etages/etage3_locaux.svg",imageBounds=[[46.8291017,-71.2283308],[46.830922,-71.2258206]],iconesEtageUrl="images/etages/etage3_icones.svg",iconesEtage=L.imageOverlay(iconesEtageUrl,imageBounds),map.addLayer(iconesEtage),imageLocauxUrl="images/etages/etage3_numero.svg",numeroLocauxEtage=L.imageOverlay(imageLocauxUrl,imageBounds),libelleEtageUrl="images/etages/etage3_libelle.svg",libelleEtage=L.imageOverlay(libelleEtageUrl,imageBounds),planEtage=L.imageOverlay(imageUrl,imageBounds),map.addLayer(planEtage),planEtage.bringToBack(),afficheLorsZoom()):4==e?(imageUrl="images/etages/etage4_locaux.svg",imageBounds=[[46.829521,-71.228328],[46.8306627,-71.2263944]],iconesEtageUrl="images/etages/etage4_icones.svg",iconesEtage=L.imageOverlay(iconesEtageUrl,imageBounds),map.addLayer(iconesEtage),imageLocauxUrl="images/etages/etage4_numero.svg",numeroLocauxEtage=L.imageOverlay(imageLocauxUrl,imageBounds),libelleEtageUrl="images/etages/vide.svg",libelleEtage=L.imageOverlay(libelleEtageUrl,imageBounds),planEtage=L.imageOverlay(imageUrl,imageBounds),map.addLayer(planEtage),planEtage.bringToBack(),afficheLorsZoom()):5==e&&(imageUrl="images/etages/etage5_locaux.svg",imageBounds=[[46.8297179,-71.2283872],[46.8306298,-71.2269909]],iconesEtageUrl="images/etages/etage5_icones.svg",iconesEtage=L.imageOverlay(iconesEtageUrl,imageBounds),map.addLayer(iconesEtage),imageLocauxUrl="images/etages/etage5_numero.svg",numeroLocauxEtage=L.imageOverlay(imageLocauxUrl,imageBounds),libelleEtageUrl="",libelleEtage=L.imageOverlay(libelleEtageUrl,imageBounds),planEtage=L.imageOverlay(imageUrl,imageBounds),map.addLayer(planEtage),planEtage.bringToBack(),afficheLorsZoom()),map.panTo([46.8302871,-71.227337])}function afficherMarqueur(e,a,o){map.removeLayer(marqueur),positionMarqueur=JSON.parse(e),changerEtage(a),marqueur=L.marker(positionMarqueur,{bounceOnAdd:!0,bounceOnAddOptions:{duration:500,height:200}}).bindPopup(o),map.addLayer(marqueur),marqueur.openPopup(),$("#modalRechercher").modal("hide"),map.panTo(positionMarqueur)}var imageUrl="",imageBounds="",planEtage="",lc="",marqueurs="",libelleEtage="",iconesEtage="",numeroLocauxEtage="",marqueur="",etageActuel=1,southWest=L.latLng(46.828064,-71.230556),northEast=L.latLng(46.832086,-71.224612),bounds=L.latLngBounds(southWest,northEast);map=new L.Map("map",{center:new L.LatLng(46.8302871,-71.227337),zoom:18,minZoom:17,maxZoom:25,zoomControl:!1,scrollWheelZoom:"center"}),lc=L.control.locate({position:"topleft",drawCircle:!1,follow:!1,setView:!1,keepCurrentZoomLevel:!0,stopFollowingOnDrag:!0,remainActive:!1,markerClass:L.circleMarker,circleStyle:{},markerStyle:{},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",circlePadding:[0,0],metric:!0,onLocationError:function(e){alert("Impossible de déterminer votre position")},onLocationOutsideMapBounds:function(e){alert("Impossible de déterminer votre position")},showPopup:!1,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{enableHighAccuracy:!0}}),lc.addTo(map),lc.start(),$("#controlleEtage ul li").click(function(e){$("#controlleEtage ul li").removeClass("etageActif"),$(this).addClass("etageActif")});var positionMarqueur="";$(function(){$("#boutonAfficherEtage").click(function(){$("#controlleEtage").is(":visible")?(console.log("controle visible"),$("#controlleEtage").fadeTo(150,0,function(){$(this).hide()})):($(this).show(),$("#controlleEtage").fadeTo(150,1))}),redimensionnerCarte(),changerEtage(1),lc.start(),$(window).resize(function(){redimensionnerCarte()}),map.on("zoomend",afficheLorsZoom),$("#boutonRechercher").click(function(e){e.preventDefault(),$("#modalRechercher").modal("show"),$("#modalRechercher").on("shown.bs.modal",function(){$("#listeLocaux").liveFilter("#inputRechercherModal","li",{filterChildSelector:"a",after:function(){$("#listeLocaux li:visible").length>0&&$("#aucunResultat").remove(),$("#inputRechercherModal").val().length>0?($("#listePoi").toggle(!1),$("#containerResultatRecherche").toggle(!0),0==$("#listeLocaux li:visible").length&&0==$("#aucunResultat").length&&$("#containerResultatRecherche").append("<li id='aucunResultat'>Aucun résultat</li>")):0==$("#inputRechercherModal").val().length&&($("#listePoi").toggle(!0),$("#containerResultatRecherche").toggle(!1))}})})}),$("#boutonInformations").click(function(e){e.preventDefault(),$("#modalInformations").modal("show")});var e=$("#listeLocaux");$.ajax({url:"data/listelocaux.json",context:document.body,dataType:"json"}).success(function(a){var o="",l,t,r,g,s;for(console.dir("Nombre de locaux à ajouter: "+a.length),i=0;i<a.length;i++)l=a[i].nom,t=a[i].local,r=a[i].position,g=a[i].etage,s=a[i].message,-1==g?o+="<li><a href=\"javascript:afficherMarqueur('"+r+"',"+g+",'<strong>"+l+"</strong><br>"+s+'\')"><h3 class="nomLocal">'+l+'</h3><br><h6 class="etage">Sous-sol</h6><span class="codeLocalQ">Q'+t+'</span><i class="material-icons pull-right">pin_drop</i></a></li>':1==g?o+="<li><a href=\"javascript:afficherMarqueur('"+r+"',"+g+",'<strong>"+l+"</strong><br>"+s+'\')"><h3 class="nomLocal">'+l+'</h3><br><h6 class="etage">1er étage</h6><span class="codeLocalQ">Q'+t+'</span><i class="material-icons pull-right">pin_drop</i></a></li>':2==g?o+="<li><a href=\"javascript:afficherMarqueur('"+r+"',"+g+",'<strong>"+l+"</strong><br>"+s+'\')"><h3 class="nomLocal">'+l+'</h3><br><h6 class="etage">2e étage</h6><span class="codeLocalQ">Q'+t+'</span><i class="material-icons pull-right">pin_drop</i></a></li>':3==g?o+="<li><a href=\"javascript:afficherMarqueur('"+r+"',"+g+", '<strong>"+l+"</strong><br>"+s+'\')"><h3 class="nomLocal">'+l+'</h3><br><h6 class="etage">3e étage</h6><span class="codeLocalQ">Q'+t+'</span><i class="material-icons pull-right">pin_drop</i></a></li>':4==g?o+="<li><a href=\"javascript:afficherMarqueur('"+r+"',"+g+",'<strong>"+l+"</strong><br>"+s+'\')"><h3 class="nomLocal">'+l+'</h3><br><h6 class="etage">4e étage</h6><span class="codeLocalQ">Q'+t+'</span><i class="material-icons pull-right">pin_drop</i></a></li>':5==g&&(o+="<li><a href=\"javascript:afficherMarqueur('"+r+"',"+g+",'<strong>"+l+"</strong><br>"+s+'\')"><h3 class="nomLocal">'+l+'</h3><br><h6 class="etage">5e étage</h6><span class="codeLocalQ">Q'+t+'</span><i class="material-icons pull-right">pin_drop</i></a></li>');e.append(o),$("#containerResultatRecherche").toggle(!1)}).complete(function(){console.log("TERMINER - Chargement des locaux dans la liste"),pourcentageProgres+=17,progressBar.css("width",pourcentageProgres+"%")});var a="images/etages/routes.svg",o=[[46.8274718,-71.2311092],[46.8333687,-71.2232114]],l=L.imageOverlay(a,o).addTo(map)});