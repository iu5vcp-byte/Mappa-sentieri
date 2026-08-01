var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1 = format_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.readFeatures(json_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.addFeatures(features_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1);
var lyr_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1, 
                style: style_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1,
                popuplayertitle: 'Sentieri_monte_morello — 600-Ceppeto-CrocidiCalenzano — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.png" /> Sentieri_monte_morello — 600-Ceppeto-CrocidiCalenzano — tracks'
            });
var format_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2 = format_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.readFeatures(json_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.addFeatures(features_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2);
var lyr_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2, 
                style: style_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2,
                popuplayertitle: 'Sentieri_monte_morello — 600A-PiazzaleL.daVinci-PoggioalGiro_quota — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.png" /> Sentieri_monte_morello — 600A-PiazzaleL.daVinci-PoggioalGiro_quota — tracks'
            });
var format_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3 = format_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.readFeatures(json_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.addFeatures(features_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3);
var lyr_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3, 
                style: style_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3,
                popuplayertitle: 'Sentieri_monte_morello — 601_sesto-fiorentino-via-veronelli-selletta — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.png" /> Sentieri_monte_morello — 601_sesto-fiorentino-via-veronelli-selletta — tracks'
            });
var format_Sentieri_monte_morello601BViadiIsolaCollinatracks_4 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello601BViadiIsolaCollinatracks_4 = format_Sentieri_monte_morello601BViadiIsolaCollinatracks_4.readFeatures(json_Sentieri_monte_morello601BViadiIsolaCollinatracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello601BViadiIsolaCollinatracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello601BViadiIsolaCollinatracks_4.addFeatures(features_Sentieri_monte_morello601BViadiIsolaCollinatracks_4);
var lyr_Sentieri_monte_morello601BViadiIsolaCollinatracks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello601BViadiIsolaCollinatracks_4, 
                style: style_Sentieri_monte_morello601BViadiIsolaCollinatracks_4,
                popuplayertitle: 'Sentieri_monte_morello — 601B-ViadiIsola-Collina — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello601BViadiIsolaCollinatracks_4.png" /> Sentieri_monte_morello — 601B-ViadiIsola-Collina — tracks'
            });
var format_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5 = format_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.readFeatures(json_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.addFeatures(features_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5);
var lyr_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5, 
                style: style_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5,
                popuplayertitle: 'Sentieri_monte_morello — 602-LeMulina-SelladegliScollini — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.png" /> Sentieri_monte_morello — 602-LeMulina-SelladegliScollini — tracks'
            });
var format_Sentieri_monte_morello602Btracks_6 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello602Btracks_6 = format_Sentieri_monte_morello602Btracks_6.readFeatures(json_Sentieri_monte_morello602Btracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello602Btracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello602Btracks_6.addFeatures(features_Sentieri_monte_morello602Btracks_6);
var lyr_Sentieri_monte_morello602Btracks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello602Btracks_6, 
                style: style_Sentieri_monte_morello602Btracks_6,
                popuplayertitle: 'Sentieri_monte_morello — 602B — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello602Btracks_6.png" /> Sentieri_monte_morello — 602B — tracks'
            });
var format_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7 = format_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.readFeatures(json_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.addFeatures(features_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7);
var lyr_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7, 
                style: style_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7,
                popuplayertitle: 'Sentieri_monte_morello — 602C-ViadelPolverificio-FontedeiSeppi — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.png" /> Sentieri_monte_morello — 602C-ViadelPolverificio-FontedeiSeppi — tracks'
            });
var format_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8 = format_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.readFeatures(json_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.addFeatures(features_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8);
var lyr_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8, 
                style: style_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8,
                popuplayertitle: 'Sentieri_monte_morello — 603-Colonnata-PiazzaleLeonardodaVinci — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.png" /> Sentieri_monte_morello — 603-Colonnata-PiazzaleLeonardodaVinci — tracks'
            });
var format_Sentieri_monte_morello603AColonnataCarmignanellotracks_9 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello603AColonnataCarmignanellotracks_9 = format_Sentieri_monte_morello603AColonnataCarmignanellotracks_9.readFeatures(json_Sentieri_monte_morello603AColonnataCarmignanellotracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello603AColonnataCarmignanellotracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello603AColonnataCarmignanellotracks_9.addFeatures(features_Sentieri_monte_morello603AColonnataCarmignanellotracks_9);
var lyr_Sentieri_monte_morello603AColonnataCarmignanellotracks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello603AColonnataCarmignanellotracks_9, 
                style: style_Sentieri_monte_morello603AColonnataCarmignanellotracks_9,
                popuplayertitle: 'Sentieri_monte_morello — 603A-Colonnata-Carmignanello — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello603AColonnataCarmignanellotracks_9.png" /> Sentieri_monte_morello — 603A-Colonnata-Carmignanello — tracks'
            });
var format_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10 = format_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.readFeatures(json_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.addFeatures(features_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10);
var lyr_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10, 
                style: style_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10,
                popuplayertitle: 'Sentieri_monte_morello — 603B-Colonnata-CasaSolatio — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.png" /> Sentieri_monte_morello — 603B-Colonnata-CasaSolatio — tracks'
            });
var format_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11 = format_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.readFeatures(json_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.addFeatures(features_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11);
var lyr_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11, 
                style: style_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11,
                popuplayertitle: 'Sentieri_monte_morello — 604-ParcheggiocampoAtletica-PonteSpartimoglie — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.png" /> Sentieri_monte_morello — 604-ParcheggiocampoAtletica-PonteSpartimoglie — tracks'
            });
var format_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12 = format_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.readFeatures(json_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.addFeatures(features_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12);
var lyr_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12, 
                style: style_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12,
                popuplayertitle: 'Sentieri_monte_morello — 604A-ParcheggioviaGramsci-Sentiero604 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.png" /> Sentieri_monte_morello — 604A-ParcheggioviaGramsci-Sentiero604 — tracks'
            });
var format_Sentieri_monte_morello605Serpiollesentiero604tracks_13 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello605Serpiollesentiero604tracks_13 = format_Sentieri_monte_morello605Serpiollesentiero604tracks_13.readFeatures(json_Sentieri_monte_morello605Serpiollesentiero604tracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello605Serpiollesentiero604tracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello605Serpiollesentiero604tracks_13.addFeatures(features_Sentieri_monte_morello605Serpiollesentiero604tracks_13);
var lyr_Sentieri_monte_morello605Serpiollesentiero604tracks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello605Serpiollesentiero604tracks_13, 
                style: style_Sentieri_monte_morello605Serpiollesentiero604tracks_13,
                popuplayertitle: 'Sentieri_monte_morello — 605-Serpiolle-sentiero604 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello605Serpiollesentiero604tracks_13.png" /> Sentieri_monte_morello — 605-Serpiolle-sentiero604 — tracks'
            });
var format_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14 = format_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.readFeatures(json_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.addFeatures(features_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14);
var lyr_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14, 
                style: style_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14,
                popuplayertitle: 'Sentieri_monte_morello — 605B via-di-malafrasca-piazzale-l-da-vinci — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.png" /> Sentieri_monte_morello — 605B via-di-malafrasca-piazzale-l-da-vinci — tracks'
            });
var format_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15 = format_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.readFeatures(json_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.addFeatures(features_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15);
var lyr_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15, 
                style: style_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15,
                popuplayertitle: 'Sentieri_monte_morello — 606 Da Paterno a Sella Scollini — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.png" /> Sentieri_monte_morello — 606 Da Paterno a Sella Scollini — tracks'
            });
var format_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16 = format_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.readFeatures(json_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.addFeatures(features_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16);
var lyr_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16, 
                style: style_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16,
                popuplayertitle: 'Sentieri_monte_morello — 606B-Sentiero606-SelladegliScollini — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.png" /> Sentieri_monte_morello — 606B-Sentiero606-SelladegliScollini — tracks'
            });
var format_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17 = format_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.readFeatures(json_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.addFeatures(features_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17);
var lyr_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17, 
                style: style_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17,
                popuplayertitle: 'Sentieri_monte_morello — 607-CerretoMaggio-SelladelleColline — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.png" /> Sentieri_monte_morello — 607-CerretoMaggio-SelladelleColline — tracks'
            });
var format_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18 = format_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.readFeatures(json_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.addFeatures(features_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18);
var lyr_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18, 
                style: style_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18,
                popuplayertitle: 'Sentieri_monte_morello — 607B capannaccia-sella-delle-colline — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.png" /> Sentieri_monte_morello — 607B capannaccia-sella-delle-colline — tracks'
            });
var format_Sentieri_monte_morello608LegriPoggioallAiatracks_19 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello608LegriPoggioallAiatracks_19 = format_Sentieri_monte_morello608LegriPoggioallAiatracks_19.readFeatures(json_Sentieri_monte_morello608LegriPoggioallAiatracks_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello608LegriPoggioallAiatracks_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello608LegriPoggioallAiatracks_19.addFeatures(features_Sentieri_monte_morello608LegriPoggioallAiatracks_19);
var lyr_Sentieri_monte_morello608LegriPoggioallAiatracks_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello608LegriPoggioallAiatracks_19, 
                style: style_Sentieri_monte_morello608LegriPoggioallAiatracks_19,
                popuplayertitle: 'Sentieri_monte_morello — 608-Legri-Poggioall\'Aia — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello608LegriPoggioallAiatracks_19.png" /> Sentieri_monte_morello — 608-Legri-Poggioall\'Aia — tracks'
            });
var format_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20 = format_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.readFeatures(json_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.addFeatures(features_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20);
var lyr_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20, 
                style: style_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20,
                popuplayertitle: 'Sentieri_monte_morello — 608A-Carraia-LagodiLegri-Incrociosentiero608 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.png" /> Sentieri_monte_morello — 608A-Carraia-LagodiLegri-Incrociosentiero608 — tracks'
            });
var format_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21 = format_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.readFeatures(json_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.addFeatures(features_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21);
var lyr_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21, 
                style: style_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21,
                popuplayertitle: 'Sentieri_monte_morello — 608B-QuerciaMencola-PoggioLeccio(m.590-sent.8e9) — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.png" /> Sentieri_monte_morello — 608B-QuerciaMencola-PoggioLeccio(m.590-sent.8e9) — tracks'
            });
var format_Sentieri_monte_morello608CLaCassianaCollinatracks_22 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello608CLaCassianaCollinatracks_22 = format_Sentieri_monte_morello608CLaCassianaCollinatracks_22.readFeatures(json_Sentieri_monte_morello608CLaCassianaCollinatracks_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello608CLaCassianaCollinatracks_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello608CLaCassianaCollinatracks_22.addFeatures(features_Sentieri_monte_morello608CLaCassianaCollinatracks_22);
var lyr_Sentieri_monte_morello608CLaCassianaCollinatracks_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello608CLaCassianaCollinatracks_22, 
                style: style_Sentieri_monte_morello608CLaCassianaCollinatracks_22,
                popuplayertitle: 'Sentieri_monte_morello — 608C-LaCassiana-Collina — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello608CLaCassianaCollinatracks_22.png" /> Sentieri_monte_morello — 608C-LaCassiana-Collina — tracks'
            });
var format_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23 = format_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.readFeatures(json_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.addFeatures(features_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23);
var lyr_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23, 
                style: style_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23,
                popuplayertitle: 'Sentieri_monte_morello — 609-PontesulChiosina-PoggioLeccio(m.590sent.8e8B) — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.png" /> Sentieri_monte_morello — 609-PontesulChiosina-PoggioLeccio(m.590sent.8e8B) — tracks'
            });
var format_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24 = format_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.readFeatures(json_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.addFeatures(features_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24);
var lyr_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24, 
                style: style_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24,
                popuplayertitle: 'Sentieri_monte_morello — 609A-LaChiusa-Incrociosent.609 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.png" /> Sentieri_monte_morello — 609A-LaChiusa-Incrociosent.609 — tracks'
            });
var format_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25 = format_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.readFeatures(json_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.addFeatures(features_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25);
var lyr_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25, 
                style: style_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25,
                popuplayertitle: 'Sentieri_monte_morello — 609B-Leccio-Quota590sentiero9 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.png" /> Sentieri_monte_morello — 609B-Leccio-Quota590sentiero9 — tracks'
            });
var format_Sentieri_monte_morello610MorelloPoggioallAiatracks_26 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello610MorelloPoggioallAiatracks_26 = format_Sentieri_monte_morello610MorelloPoggioallAiatracks_26.readFeatures(json_Sentieri_monte_morello610MorelloPoggioallAiatracks_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello610MorelloPoggioallAiatracks_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello610MorelloPoggioallAiatracks_26.addFeatures(features_Sentieri_monte_morello610MorelloPoggioallAiatracks_26);
var lyr_Sentieri_monte_morello610MorelloPoggioallAiatracks_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello610MorelloPoggioallAiatracks_26, 
                style: style_Sentieri_monte_morello610MorelloPoggioallAiatracks_26,
                popuplayertitle: 'Sentieri_monte_morello — 610-Morello-Poggioall\'Aia — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello610MorelloPoggioallAiatracks_26.png" /> Sentieri_monte_morello — 610-Morello-Poggioall\'Aia — tracks'
            });
var format_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27 = format_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.readFeatures(json_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.addFeatures(features_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27);
var lyr_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27, 
                style: style_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27,
                popuplayertitle: 'Sentieri_monte_morello — 611-FontedelVecciolino-Quota855sentiero12 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.png" /> Sentieri_monte_morello — 611-FontedelVecciolino-Quota855sentiero12 — tracks'
            });
var format_Sentieri_monte_morello611BPercorso611Sellettatracks_28 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello611BPercorso611Sellettatracks_28 = format_Sentieri_monte_morello611BPercorso611Sellettatracks_28.readFeatures(json_Sentieri_monte_morello611BPercorso611Sellettatracks_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello611BPercorso611Sellettatracks_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello611BPercorso611Sellettatracks_28.addFeatures(features_Sentieri_monte_morello611BPercorso611Sellettatracks_28);
var lyr_Sentieri_monte_morello611BPercorso611Sellettatracks_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello611BPercorso611Sellettatracks_28, 
                style: style_Sentieri_monte_morello611BPercorso611Sellettatracks_28,
                popuplayertitle: 'Sentieri_monte_morello — 611B-Percorso611-Selletta — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello611BPercorso611Sellettatracks_28.png" /> Sentieri_monte_morello — 611B-Percorso611-Selletta — tracks'
            });
var format_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29 = format_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.readFeatures(json_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.addFeatures(features_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29);
var lyr_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29, 
                style: style_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29,
                popuplayertitle: 'Sentieri_monte_morello — 612 fonte-del-vecciolino-poggio-casaccia — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.png" /> Sentieri_monte_morello — 612 fonte-del-vecciolino-poggio-casaccia — tracks'
            });
var format_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30 = format_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.readFeatures(json_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.addFeatures(features_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30);
var lyr_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30, 
                style: style_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30,
                popuplayertitle: 'Sentieri_monte_morello — 612B-FontedelCiliegio-FontedelNocciolo — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.png" /> Sentieri_monte_morello — 612B-FontedelCiliegio-FontedelNocciolo — tracks'
            });
var format_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31 = format_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.readFeatures(json_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.addFeatures(features_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31);
var lyr_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31, 
                style: style_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31,
                popuplayertitle: 'Sentieri_monte_morello — 615 Pieve di Sant\'Andrea a Cercina — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.png" /> Sentieri_monte_morello — 615 Pieve di Sant\'Andrea a Cercina — tracks'
            });
var format_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32 = format_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.readFeatures(json_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.addFeatures(features_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32);
var lyr_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32, 
                style: style_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32,
                popuplayertitle: 'Sentieri_monte_morello — 615A-ViadiDocciola(m.300)-Incrociosentiero15(m.335) — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.png" /> Sentieri_monte_morello — 615A-ViadiDocciola(m.300)-Incrociosentiero15(m.335) — tracks'
            });
var format_Sentieri_monte_morello616_percorso5casellinetracks_33 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello616_percorso5casellinetracks_33 = format_Sentieri_monte_morello616_percorso5casellinetracks_33.readFeatures(json_Sentieri_monte_morello616_percorso5casellinetracks_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello616_percorso5casellinetracks_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello616_percorso5casellinetracks_33.addFeatures(features_Sentieri_monte_morello616_percorso5casellinetracks_33);
var lyr_Sentieri_monte_morello616_percorso5casellinetracks_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello616_percorso5casellinetracks_33, 
                style: style_Sentieri_monte_morello616_percorso5casellinetracks_33,
                popuplayertitle: 'Sentieri_monte_morello — 616_percorso-5-caselline — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello616_percorso5casellinetracks_33.png" /> Sentieri_monte_morello — 616_percorso-5-caselline — tracks'
            });
var format_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34 = format_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.readFeatures(json_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.addFeatures(features_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34);
var lyr_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34, 
                style: style_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34,
                popuplayertitle: 'Sentieri_monte_morello — 616A-PiazzaleLeonardodaVinci-PodereCasaccia — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.png" /> Sentieri_monte_morello — 616A-PiazzaleLeonardodaVinci-PodereCasaccia — tracks'
            });
var format_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35 = format_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.readFeatures(json_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.addFeatures(features_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35);
var lyr_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35, 
                style: style_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35,
                popuplayertitle: 'Sentieri_monte_morello — 620-Collina-Torricella-Incr.sentiero600 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.png" /> Sentieri_monte_morello — 620-Collina-Torricella-Incr.sentiero600 — tracks'
            });
var format_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36 = new ol.format.GeoJSON();
var features_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36 = format_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.readFeatures(json_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.addFeatures(features_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36);
var lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36, 
                style: style_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36,
                popuplayertitle: 'Sentieri_monte_morello — 620A-CaseCutriolo-Incr.sent.608A-CollinadiSopra-Incr.sent.620 — tracks',
                interactive: true,
                title: '<img src="styles/legend/Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.png" /> Sentieri_monte_morello — 620A-CaseCutriolo-Incr.sent.608A-CollinadiSopra-Incr.sent.620 — tracks'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.setVisible(true);lyr_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.setVisible(true);lyr_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.setVisible(true);lyr_Sentieri_monte_morello601BViadiIsolaCollinatracks_4.setVisible(true);lyr_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.setVisible(true);lyr_Sentieri_monte_morello602Btracks_6.setVisible(true);lyr_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.setVisible(true);lyr_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.setVisible(true);lyr_Sentieri_monte_morello603AColonnataCarmignanellotracks_9.setVisible(true);lyr_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.setVisible(true);lyr_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.setVisible(true);lyr_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.setVisible(true);lyr_Sentieri_monte_morello605Serpiollesentiero604tracks_13.setVisible(true);lyr_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.setVisible(true);lyr_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.setVisible(true);lyr_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.setVisible(true);lyr_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.setVisible(true);lyr_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.setVisible(true);lyr_Sentieri_monte_morello608LegriPoggioallAiatracks_19.setVisible(true);lyr_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.setVisible(true);lyr_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.setVisible(true);lyr_Sentieri_monte_morello608CLaCassianaCollinatracks_22.setVisible(true);lyr_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.setVisible(true);lyr_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.setVisible(true);lyr_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.setVisible(true);lyr_Sentieri_monte_morello610MorelloPoggioallAiatracks_26.setVisible(true);lyr_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.setVisible(true);lyr_Sentieri_monte_morello611BPercorso611Sellettatracks_28.setVisible(true);lyr_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.setVisible(true);lyr_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.setVisible(true);lyr_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.setVisible(true);lyr_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.setVisible(true);lyr_Sentieri_monte_morello616_percorso5casellinetracks_33.setVisible(true);lyr_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.setVisible(true);lyr_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.setVisible(true);lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1,lyr_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2,lyr_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3,lyr_Sentieri_monte_morello601BViadiIsolaCollinatracks_4,lyr_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5,lyr_Sentieri_monte_morello602Btracks_6,lyr_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7,lyr_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8,lyr_Sentieri_monte_morello603AColonnataCarmignanellotracks_9,lyr_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10,lyr_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11,lyr_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12,lyr_Sentieri_monte_morello605Serpiollesentiero604tracks_13,lyr_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14,lyr_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15,lyr_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16,lyr_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17,lyr_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18,lyr_Sentieri_monte_morello608LegriPoggioallAiatracks_19,lyr_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20,lyr_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21,lyr_Sentieri_monte_morello608CLaCassianaCollinatracks_22,lyr_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23,lyr_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24,lyr_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25,lyr_Sentieri_monte_morello610MorelloPoggioallAiatracks_26,lyr_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27,lyr_Sentieri_monte_morello611BPercorso611Sellettatracks_28,lyr_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29,lyr_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30,lyr_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31,lyr_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32,lyr_Sentieri_monte_morello616_percorso5casellinetracks_33,lyr_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34,lyr_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35,lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36];
lyr_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Sentieri_monte_morello601BViadiIsolaCollinatracks_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello602Btracks_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello603AColonnataCarmignanellotracks_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Sentieri_monte_morello605Serpiollesentiero604tracks_13.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello608LegriPoggioallAiatracks_19.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello608CLaCassianaCollinatracks_22.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'twonav_TwoNavExtension': 'twonav_TwoNavExtension', });
lyr_Sentieri_monte_morello610MorelloPoggioallAiatracks_26.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello611BPercorso611Sellettatracks_28.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello616_percorso5casellinetracks_33.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_Sentieri_monte_morello601BViadiIsolaCollinatracks_4.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello602Btracks_6.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello603AColonnataCarmignanellotracks_9.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_Sentieri_monte_morello605Serpiollesentiero604tracks_13.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello608LegriPoggioallAiatracks_19.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello608CLaCassianaCollinatracks_22.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'twonav_TwoNavExtension': 'TextEdit', });
lyr_Sentieri_monte_morello610MorelloPoggioallAiatracks_26.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello611BPercorso611Sellettatracks_28.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello616_percorso5casellinetracks_33.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.set('fieldImages', {'fid': '', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Sentieri_monte_morello600CeppetoCrocidiCalenzanotracks_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello600APiazzaleLdaVinciPoggioalGiro_quotatracks_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Sentieri_monte_morello601_sestofiorentinoviaveronellisellettatracks_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Sentieri_monte_morello601BViadiIsolaCollinatracks_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Sentieri_monte_morello602LeMulinaSelladegliScollinitracks_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello602Btracks_6.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello602CViadelPolverificioFontedeiSeppitracks_7.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello603ColonnataPiazzaleLeonardodaVincitracks_8.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello603AColonnataCarmignanellotracks_9.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello603BColonnataCasaSolatiotracks_10.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello604ParcheggiocampoAtleticaPonteSpartimoglietracks_11.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello604AParcheggioviaGramsciSentiero604tracks_12.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Sentieri_monte_morello605Serpiollesentiero604tracks_13.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello605Bviadimalafrascapiazzaleldavincitracks_14.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello606DaPaternoaSellaScollinitracks_15.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Sentieri_monte_morello606BSentiero606SelladegliScollinitracks_16.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello607CerretoMaggioSelladelleCollinetracks_17.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello607Bcapannacciaselladellecollinetracks_18.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello608LegriPoggioallAiatracks_19.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello608ACarraiaLagodiLegriIncrociosentiero608tracks_20.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello608BQuerciaMencolaPoggioLecciom590sent8e9tracks_21.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello608CLaCassianaCollinatracks_22.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello609PontesulChiosinaPoggioLecciom590sent8e8Btracks_23.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello609ALaChiusaIncrociosent609tracks_24.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello609BLeccioQuota590sentiero9tracks_25.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', 'gpxx_TrackExtension': 'no label', 'twonav_TwoNavExtension': 'no label', });
lyr_Sentieri_monte_morello610MorelloPoggioallAiatracks_26.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello611FontedelVecciolinoQuota855sentiero12tracks_27.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello611BPercorso611Sellettatracks_28.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello612fontedelvecciolinopoggiocasacciatracks_29.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello612BFontedelCiliegioFontedelNocciolotracks_30.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello615PievediSantAndreaaCercinatracks_31.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Sentieri_monte_morello615AViadiDocciolam300Incrociosentiero15m335tracks_32.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello616_percorso5casellinetracks_33.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello616APiazzaleLeonardodaVinciPodereCasacciatracks_34.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello620CollinaTorricellaIncrsentiero600tracks_35.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Sentieri_monte_morello620ACaseCutrioloIncrsent608ACollinadiSopraIncrsent620tracks_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});