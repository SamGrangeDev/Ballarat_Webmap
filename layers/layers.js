var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TRZ1StateTransportInfrastructure_2 = new ol.format.GeoJSON();
var features_TRZ1StateTransportInfrastructure_2 = format_TRZ1StateTransportInfrastructure_2.readFeatures(json_TRZ1StateTransportInfrastructure_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ1StateTransportInfrastructure_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ1StateTransportInfrastructure_2.addFeatures(features_TRZ1StateTransportInfrastructure_2);
var lyr_TRZ1StateTransportInfrastructure_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ1StateTransportInfrastructure_2, 
                style: style_TRZ1StateTransportInfrastructure_2,
                popuplayertitle: "TRZ1 - State Transport Infrastructure",
                interactive: true,
                title: '<img src="styles/legend/TRZ1StateTransportInfrastructure_2.png" /> TRZ1 - State Transport Infrastructure'
            });
var format_TRZ2PrincipalRoadNetwork_3 = new ol.format.GeoJSON();
var features_TRZ2PrincipalRoadNetwork_3 = format_TRZ2PrincipalRoadNetwork_3.readFeatures(json_TRZ2PrincipalRoadNetwork_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ2PrincipalRoadNetwork_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ2PrincipalRoadNetwork_3.addFeatures(features_TRZ2PrincipalRoadNetwork_3);
var lyr_TRZ2PrincipalRoadNetwork_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ2PrincipalRoadNetwork_3, 
                style: style_TRZ2PrincipalRoadNetwork_3,
                popuplayertitle: "TRZ2 - Principal Road Network",
                interactive: true,
                title: '<img src="styles/legend/TRZ2PrincipalRoadNetwork_3.png" /> TRZ2 - Principal Road Network'
            });
var format_TRZ3SignificantMunicipalRoad_4 = new ol.format.GeoJSON();
var features_TRZ3SignificantMunicipalRoad_4 = format_TRZ3SignificantMunicipalRoad_4.readFeatures(json_TRZ3SignificantMunicipalRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ3SignificantMunicipalRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ3SignificantMunicipalRoad_4.addFeatures(features_TRZ3SignificantMunicipalRoad_4);
var lyr_TRZ3SignificantMunicipalRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ3SignificantMunicipalRoad_4, 
                style: style_TRZ3SignificantMunicipalRoad_4,
                popuplayertitle: "TRZ3 - Significant Municipal Road",
                interactive: true,
                title: '<img src="styles/legend/TRZ3SignificantMunicipalRoad_4.png" /> TRZ3 - Significant Municipal Road'
            });
var format_TRZ4OtherTransportUse_5 = new ol.format.GeoJSON();
var features_TRZ4OtherTransportUse_5 = format_TRZ4OtherTransportUse_5.readFeatures(json_TRZ4OtherTransportUse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ4OtherTransportUse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ4OtherTransportUse_5.addFeatures(features_TRZ4OtherTransportUse_5);
var lyr_TRZ4OtherTransportUse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ4OtherTransportUse_5, 
                style: style_TRZ4OtherTransportUse_5,
                popuplayertitle: "TRZ4 - Other Transport Use",
                interactive: true,
                title: '<img src="styles/legend/TRZ4OtherTransportUse_5.png" /> TRZ4 - Other Transport Use'
            });
var format_PCRZPublicConservationandResourceZone_6 = new ol.format.GeoJSON();
var features_PCRZPublicConservationandResourceZone_6 = format_PCRZPublicConservationandResourceZone_6.readFeatures(json_PCRZPublicConservationandResourceZone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCRZPublicConservationandResourceZone_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCRZPublicConservationandResourceZone_6.addFeatures(features_PCRZPublicConservationandResourceZone_6);
var lyr_PCRZPublicConservationandResourceZone_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCRZPublicConservationandResourceZone_6, 
                style: style_PCRZPublicConservationandResourceZone_6,
                popuplayertitle: "PCRZ - Public Conservation and Resource Zone",
                interactive: true,
                title: '<img src="styles/legend/PCRZPublicConservationandResourceZone_6.png" /> PCRZ - Public Conservation and Resource Zone'
            });
var format_PPRZPublicParkandRecreationZone_7 = new ol.format.GeoJSON();
var features_PPRZPublicParkandRecreationZone_7 = format_PPRZPublicParkandRecreationZone_7.readFeatures(json_PPRZPublicParkandRecreationZone_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPRZPublicParkandRecreationZone_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPRZPublicParkandRecreationZone_7.addFeatures(features_PPRZPublicParkandRecreationZone_7);
var lyr_PPRZPublicParkandRecreationZone_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPRZPublicParkandRecreationZone_7, 
                style: style_PPRZPublicParkandRecreationZone_7,
                popuplayertitle: "PPRZ - Public Park and Recreation Zone",
                interactive: true,
                title: '<img src="styles/legend/PPRZPublicParkandRecreationZone_7.png" /> PPRZ - Public Park and Recreation Zone'
            });
var format_PUZ1PublicUseZoneServiceandUtility_8 = new ol.format.GeoJSON();
var features_PUZ1PublicUseZoneServiceandUtility_8 = format_PUZ1PublicUseZoneServiceandUtility_8.readFeatures(json_PUZ1PublicUseZoneServiceandUtility_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ1PublicUseZoneServiceandUtility_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ1PublicUseZoneServiceandUtility_8.addFeatures(features_PUZ1PublicUseZoneServiceandUtility_8);
var lyr_PUZ1PublicUseZoneServiceandUtility_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ1PublicUseZoneServiceandUtility_8, 
                style: style_PUZ1PublicUseZoneServiceandUtility_8,
                popuplayertitle: "PUZ1 - Public Use Zone-Service and Utility",
                interactive: true,
                title: '<img src="styles/legend/PUZ1PublicUseZoneServiceandUtility_8.png" /> PUZ1 - Public Use Zone-Service and Utility'
            });
var format_PUZ2PublicUseZoneEducation_9 = new ol.format.GeoJSON();
var features_PUZ2PublicUseZoneEducation_9 = format_PUZ2PublicUseZoneEducation_9.readFeatures(json_PUZ2PublicUseZoneEducation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ2PublicUseZoneEducation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ2PublicUseZoneEducation_9.addFeatures(features_PUZ2PublicUseZoneEducation_9);
var lyr_PUZ2PublicUseZoneEducation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ2PublicUseZoneEducation_9, 
                style: style_PUZ2PublicUseZoneEducation_9,
                popuplayertitle: "PUZ2 - Public Use Zone-Education",
                interactive: true,
                title: '<img src="styles/legend/PUZ2PublicUseZoneEducation_9.png" /> PUZ2 - Public Use Zone-Education'
            });
var format_PUZ3PublicUseZoneHealthCommunity_10 = new ol.format.GeoJSON();
var features_PUZ3PublicUseZoneHealthCommunity_10 = format_PUZ3PublicUseZoneHealthCommunity_10.readFeatures(json_PUZ3PublicUseZoneHealthCommunity_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ3PublicUseZoneHealthCommunity_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ3PublicUseZoneHealthCommunity_10.addFeatures(features_PUZ3PublicUseZoneHealthCommunity_10);
var lyr_PUZ3PublicUseZoneHealthCommunity_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ3PublicUseZoneHealthCommunity_10, 
                style: style_PUZ3PublicUseZoneHealthCommunity_10,
                popuplayertitle: "PUZ3 - Public Use Zone-Health & Community",
                interactive: true,
                title: '<img src="styles/legend/PUZ3PublicUseZoneHealthCommunity_10.png" /> PUZ3 - Public Use Zone-Health & Community'
            });
var format_PUZ6PublicUseZoneLocalGovernment_11 = new ol.format.GeoJSON();
var features_PUZ6PublicUseZoneLocalGovernment_11 = format_PUZ6PublicUseZoneLocalGovernment_11.readFeatures(json_PUZ6PublicUseZoneLocalGovernment_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ6PublicUseZoneLocalGovernment_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ6PublicUseZoneLocalGovernment_11.addFeatures(features_PUZ6PublicUseZoneLocalGovernment_11);
var lyr_PUZ6PublicUseZoneLocalGovernment_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ6PublicUseZoneLocalGovernment_11, 
                style: style_PUZ6PublicUseZoneLocalGovernment_11,
                popuplayertitle: "PUZ6 - Public Use Zone-Local Government",
                interactive: true,
                title: '<img src="styles/legend/PUZ6PublicUseZoneLocalGovernment_11.png" /> PUZ6 - Public Use Zone-Local Government'
            });
var format_PUZ7PublicUseZoneOtherPublicUse_12 = new ol.format.GeoJSON();
var features_PUZ7PublicUseZoneOtherPublicUse_12 = format_PUZ7PublicUseZoneOtherPublicUse_12.readFeatures(json_PUZ7PublicUseZoneOtherPublicUse_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ7PublicUseZoneOtherPublicUse_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ7PublicUseZoneOtherPublicUse_12.addFeatures(features_PUZ7PublicUseZoneOtherPublicUse_12);
var lyr_PUZ7PublicUseZoneOtherPublicUse_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ7PublicUseZoneOtherPublicUse_12, 
                style: style_PUZ7PublicUseZoneOtherPublicUse_12,
                popuplayertitle: "PUZ7 - Public Use Zone-Other Public Use",
                interactive: true,
                title: '<img src="styles/legend/PUZ7PublicUseZoneOtherPublicUse_12.png" /> PUZ7 - Public Use Zone-Other Public Use'
            });
var format_GWAZGreenWedgeAZone_13 = new ol.format.GeoJSON();
var features_GWAZGreenWedgeAZone_13 = format_GWAZGreenWedgeAZone_13.readFeatures(json_GWAZGreenWedgeAZone_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GWAZGreenWedgeAZone_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GWAZGreenWedgeAZone_13.addFeatures(features_GWAZGreenWedgeAZone_13);
var lyr_GWAZGreenWedgeAZone_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GWAZGreenWedgeAZone_13, 
                style: style_GWAZGreenWedgeAZone_13,
                popuplayertitle: "GWAZ - Green Wedge A Zone",
                interactive: true,
                title: '<img src="styles/legend/GWAZGreenWedgeAZone_13.png" /> GWAZ - Green Wedge A Zone'
            });
var format_GWZGreenWedgeZone_14 = new ol.format.GeoJSON();
var features_GWZGreenWedgeZone_14 = format_GWZGreenWedgeZone_14.readFeatures(json_GWZGreenWedgeZone_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GWZGreenWedgeZone_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GWZGreenWedgeZone_14.addFeatures(features_GWZGreenWedgeZone_14);
var lyr_GWZGreenWedgeZone_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GWZGreenWedgeZone_14, 
                style: style_GWZGreenWedgeZone_14,
                popuplayertitle: "GWZ - Green Wedge Zone",
                interactive: true,
                title: '<img src="styles/legend/GWZGreenWedgeZone_14.png" /> GWZ - Green Wedge Zone'
            });
var format_RAZRuralActivityZone_15 = new ol.format.GeoJSON();
var features_RAZRuralActivityZone_15 = format_RAZRuralActivityZone_15.readFeatures(json_RAZRuralActivityZone_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAZRuralActivityZone_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAZRuralActivityZone_15.addFeatures(features_RAZRuralActivityZone_15);
var lyr_RAZRuralActivityZone_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAZRuralActivityZone_15, 
                style: style_RAZRuralActivityZone_15,
                popuplayertitle: "RAZ - Rural Activity Zone",
                interactive: true,
                title: '<img src="styles/legend/RAZRuralActivityZone_15.png" /> RAZ - Rural Activity Zone'
            });
var format_RCZRuralConservationZone_16 = new ol.format.GeoJSON();
var features_RCZRuralConservationZone_16 = format_RCZRuralConservationZone_16.readFeatures(json_RCZRuralConservationZone_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCZRuralConservationZone_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCZRuralConservationZone_16.addFeatures(features_RCZRuralConservationZone_16);
var lyr_RCZRuralConservationZone_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCZRuralConservationZone_16, 
                style: style_RCZRuralConservationZone_16,
                popuplayertitle: "RCZ - Rural Conservation Zone",
                interactive: true,
                title: '<img src="styles/legend/RCZRuralConservationZone_16.png" /> RCZ - Rural Conservation Zone'
            });
var format_DZDocklandZone_17 = new ol.format.GeoJSON();
var features_DZDocklandZone_17 = format_DZDocklandZone_17.readFeatures(json_DZDocklandZone_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DZDocklandZone_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DZDocklandZone_17.addFeatures(features_DZDocklandZone_17);
var lyr_DZDocklandZone_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DZDocklandZone_17, 
                style: style_DZDocklandZone_17,
                popuplayertitle: "DZ - Dockland Zone",
                interactive: true,
                title: '<img src="styles/legend/DZDocklandZone_17.png" /> DZ - Dockland Zone'
            });
var format_PZPortZone_18 = new ol.format.GeoJSON();
var features_PZPortZone_18 = format_PZPortZone_18.readFeatures(json_PZPortZone_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PZPortZone_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PZPortZone_18.addFeatures(features_PZPortZone_18);
var lyr_PZPortZone_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PZPortZone_18, 
                style: style_PZPortZone_18,
                popuplayertitle: "PZ - Port Zone",
                interactive: true,
                title: '<img src="styles/legend/PZPortZone_18.png" /> PZ - Port Zone'
            });
var format_SUZSpecialUseZone_19 = new ol.format.GeoJSON();
var features_SUZSpecialUseZone_19 = format_SUZSpecialUseZone_19.readFeatures(json_SUZSpecialUseZone_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUZSpecialUseZone_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUZSpecialUseZone_19.addFeatures(features_SUZSpecialUseZone_19);
var lyr_SUZSpecialUseZone_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUZSpecialUseZone_19, 
                style: style_SUZSpecialUseZone_19,
                popuplayertitle: "SUZ - Special Use Zone",
                interactive: true,
                title: '<img src="styles/legend/SUZSpecialUseZone_19.png" /> SUZ - Special Use Zone'
            });
var format_UFZUrbanFloodwayZone_20 = new ol.format.GeoJSON();
var features_UFZUrbanFloodwayZone_20 = format_UFZUrbanFloodwayZone_20.readFeatures(json_UFZUrbanFloodwayZone_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UFZUrbanFloodwayZone_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFZUrbanFloodwayZone_20.addFeatures(features_UFZUrbanFloodwayZone_20);
var lyr_UFZUrbanFloodwayZone_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UFZUrbanFloodwayZone_20, 
                style: style_UFZUrbanFloodwayZone_20,
                popuplayertitle: "UFZ - Urban Floodway Zone",
                interactive: true,
                title: '<img src="styles/legend/UFZUrbanFloodwayZone_20.png" /> UFZ - Urban Floodway Zone'
            });
var format_C1ZCommercial1Zone_21 = new ol.format.GeoJSON();
var features_C1ZCommercial1Zone_21 = format_C1ZCommercial1Zone_21.readFeatures(json_C1ZCommercial1Zone_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C1ZCommercial1Zone_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C1ZCommercial1Zone_21.addFeatures(features_C1ZCommercial1Zone_21);
var lyr_C1ZCommercial1Zone_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C1ZCommercial1Zone_21, 
                style: style_C1ZCommercial1Zone_21,
                popuplayertitle: "C1Z - Commercial 1 Zone",
                interactive: true,
                title: '<img src="styles/legend/C1ZCommercial1Zone_21.png" /> C1Z - Commercial 1 Zone'
            });
var format_C2ZCommercial2Zone_22 = new ol.format.GeoJSON();
var features_C2ZCommercial2Zone_22 = format_C2ZCommercial2Zone_22.readFeatures(json_C2ZCommercial2Zone_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C2ZCommercial2Zone_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C2ZCommercial2Zone_22.addFeatures(features_C2ZCommercial2Zone_22);
var lyr_C2ZCommercial2Zone_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C2ZCommercial2Zone_22, 
                style: style_C2ZCommercial2Zone_22,
                popuplayertitle: "C2Z - Commercial 2 Zone",
                interactive: true,
                title: '<img src="styles/legend/C2ZCommercial2Zone_22.png" /> C2Z - Commercial 2 Zone'
            });
var format_IN1ZIndustrial1Zone_23 = new ol.format.GeoJSON();
var features_IN1ZIndustrial1Zone_23 = format_IN1ZIndustrial1Zone_23.readFeatures(json_IN1ZIndustrial1Zone_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN1ZIndustrial1Zone_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN1ZIndustrial1Zone_23.addFeatures(features_IN1ZIndustrial1Zone_23);
var lyr_IN1ZIndustrial1Zone_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN1ZIndustrial1Zone_23, 
                style: style_IN1ZIndustrial1Zone_23,
                popuplayertitle: "IN1Z - Industrial 1 Zone",
                interactive: true,
                title: '<img src="styles/legend/IN1ZIndustrial1Zone_23.png" /> IN1Z - Industrial 1 Zone'
            });
var format_IN2ZIndustrial2Zone_24 = new ol.format.GeoJSON();
var features_IN2ZIndustrial2Zone_24 = format_IN2ZIndustrial2Zone_24.readFeatures(json_IN2ZIndustrial2Zone_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN2ZIndustrial2Zone_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN2ZIndustrial2Zone_24.addFeatures(features_IN2ZIndustrial2Zone_24);
var lyr_IN2ZIndustrial2Zone_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN2ZIndustrial2Zone_24, 
                style: style_IN2ZIndustrial2Zone_24,
                popuplayertitle: "IN2Z - Industrial 2 Zone",
                interactive: true,
                title: '<img src="styles/legend/IN2ZIndustrial2Zone_24.png" /> IN2Z - Industrial 2 Zone'
            });
var format_IN3ZIndustrial3Zone_25 = new ol.format.GeoJSON();
var features_IN3ZIndustrial3Zone_25 = format_IN3ZIndustrial3Zone_25.readFeatures(json_IN3ZIndustrial3Zone_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN3ZIndustrial3Zone_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN3ZIndustrial3Zone_25.addFeatures(features_IN3ZIndustrial3Zone_25);
var lyr_IN3ZIndustrial3Zone_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN3ZIndustrial3Zone_25, 
                style: style_IN3ZIndustrial3Zone_25,
                popuplayertitle: "IN3Z - Industrial 3 Zone",
                interactive: true,
                title: '<img src="styles/legend/IN3ZIndustrial3Zone_25.png" /> IN3Z - Industrial 3 Zone'
            });
var format_RLZRuralLivingZone_26 = new ol.format.GeoJSON();
var features_RLZRuralLivingZone_26 = format_RLZRuralLivingZone_26.readFeatures(json_RLZRuralLivingZone_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLZRuralLivingZone_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLZRuralLivingZone_26.addFeatures(features_RLZRuralLivingZone_26);
var lyr_RLZRuralLivingZone_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RLZRuralLivingZone_26, 
                style: style_RLZRuralLivingZone_26,
                popuplayertitle: "RLZ - Rural Living Zone",
                interactive: true,
                title: '<img src="styles/legend/RLZRuralLivingZone_26.png" /> RLZ - Rural Living Zone'
            });
var format_FZFarmingZone_27 = new ol.format.GeoJSON();
var features_FZFarmingZone_27 = format_FZFarmingZone_27.readFeatures(json_FZFarmingZone_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FZFarmingZone_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FZFarmingZone_27.addFeatures(features_FZFarmingZone_27);
var lyr_FZFarmingZone_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FZFarmingZone_27, 
                style: style_FZFarmingZone_27,
                popuplayertitle: "FZ - Farming Zone",
                interactive: true,
                title: '<img src="styles/legend/FZFarmingZone_27.png" /> FZ - Farming Zone'
            });
var format_ACZActivityCentreZone_28 = new ol.format.GeoJSON();
var features_ACZActivityCentreZone_28 = format_ACZActivityCentreZone_28.readFeatures(json_ACZActivityCentreZone_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACZActivityCentreZone_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACZActivityCentreZone_28.addFeatures(features_ACZActivityCentreZone_28);
var lyr_ACZActivityCentreZone_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACZActivityCentreZone_28, 
                style: style_ACZActivityCentreZone_28,
                popuplayertitle: "ACZ - Activity Centre Zone",
                interactive: true,
                title: '<img src="styles/legend/ACZActivityCentreZone_28.png" /> ACZ - Activity Centre Zone'
            });
var format_CCZCapitalCityZone_29 = new ol.format.GeoJSON();
var features_CCZCapitalCityZone_29 = format_CCZCapitalCityZone_29.readFeatures(json_CCZCapitalCityZone_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCZCapitalCityZone_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCZCapitalCityZone_29.addFeatures(features_CCZCapitalCityZone_29);
var lyr_CCZCapitalCityZone_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCZCapitalCityZone_29, 
                style: style_CCZCapitalCityZone_29,
                popuplayertitle: "CCZ - Capital City Zone",
                interactive: true,
                title: '<img src="styles/legend/CCZCapitalCityZone_29.png" /> CCZ - Capital City Zone'
            });
var format_CDZComprehensiveDevelopmentZone_30 = new ol.format.GeoJSON();
var features_CDZComprehensiveDevelopmentZone_30 = format_CDZComprehensiveDevelopmentZone_30.readFeatures(json_CDZComprehensiveDevelopmentZone_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDZComprehensiveDevelopmentZone_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDZComprehensiveDevelopmentZone_30.addFeatures(features_CDZComprehensiveDevelopmentZone_30);
var lyr_CDZComprehensiveDevelopmentZone_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CDZComprehensiveDevelopmentZone_30, 
                style: style_CDZComprehensiveDevelopmentZone_30,
                popuplayertitle: "CDZ - Comprehensive Development Zone",
                interactive: true,
                title: '<img src="styles/legend/CDZComprehensiveDevelopmentZone_30.png" /> CDZ - Comprehensive Development Zone'
            });
var format_GRZGeneralResidentialZone_31 = new ol.format.GeoJSON();
var features_GRZGeneralResidentialZone_31 = format_GRZGeneralResidentialZone_31.readFeatures(json_GRZGeneralResidentialZone_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRZGeneralResidentialZone_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRZGeneralResidentialZone_31.addFeatures(features_GRZGeneralResidentialZone_31);
var lyr_GRZGeneralResidentialZone_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRZGeneralResidentialZone_31, 
                style: style_GRZGeneralResidentialZone_31,
                popuplayertitle: "GRZ - General Residential Zone",
                interactive: true,
                title: '<img src="styles/legend/GRZGeneralResidentialZone_31.png" /> GRZ - General Residential Zone'
            });
var format_LDRZLowDensityResidentialZone_32 = new ol.format.GeoJSON();
var features_LDRZLowDensityResidentialZone_32 = format_LDRZLowDensityResidentialZone_32.readFeatures(json_LDRZLowDensityResidentialZone_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LDRZLowDensityResidentialZone_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LDRZLowDensityResidentialZone_32.addFeatures(features_LDRZLowDensityResidentialZone_32);
var lyr_LDRZLowDensityResidentialZone_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LDRZLowDensityResidentialZone_32, 
                style: style_LDRZLowDensityResidentialZone_32,
                popuplayertitle: "LDRZ - Low Density Residential Zone",
                interactive: true,
                title: '<img src="styles/legend/LDRZLowDensityResidentialZone_32.png" /> LDRZ - Low Density Residential Zone'
            });
var format_MUZMixedUseZone_33 = new ol.format.GeoJSON();
var features_MUZMixedUseZone_33 = format_MUZMixedUseZone_33.readFeatures(json_MUZMixedUseZone_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUZMixedUseZone_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUZMixedUseZone_33.addFeatures(features_MUZMixedUseZone_33);
var lyr_MUZMixedUseZone_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUZMixedUseZone_33, 
                style: style_MUZMixedUseZone_33,
                popuplayertitle: "MUZ - Mixed Use Zone",
                interactive: true,
                title: '<img src="styles/legend/MUZMixedUseZone_33.png" /> MUZ - Mixed Use Zone'
            });
var format_NRZNeighbourhoodResidentialZone_34 = new ol.format.GeoJSON();
var features_NRZNeighbourhoodResidentialZone_34 = format_NRZNeighbourhoodResidentialZone_34.readFeatures(json_NRZNeighbourhoodResidentialZone_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRZNeighbourhoodResidentialZone_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NRZNeighbourhoodResidentialZone_34.addFeatures(features_NRZNeighbourhoodResidentialZone_34);
var lyr_NRZNeighbourhoodResidentialZone_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NRZNeighbourhoodResidentialZone_34, 
                style: style_NRZNeighbourhoodResidentialZone_34,
                popuplayertitle: "NRZ - Neighbourhood Residential Zone",
                interactive: true,
                title: '<img src="styles/legend/NRZNeighbourhoodResidentialZone_34.png" /> NRZ - Neighbourhood Residential Zone'
            });
var format_PDZPriorityDevelopmentZone_35 = new ol.format.GeoJSON();
var features_PDZPriorityDevelopmentZone_35 = format_PDZPriorityDevelopmentZone_35.readFeatures(json_PDZPriorityDevelopmentZone_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDZPriorityDevelopmentZone_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDZPriorityDevelopmentZone_35.addFeatures(features_PDZPriorityDevelopmentZone_35);
var lyr_PDZPriorityDevelopmentZone_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDZPriorityDevelopmentZone_35, 
                style: style_PDZPriorityDevelopmentZone_35,
                popuplayertitle: "PDZ - Priority Development Zone",
                interactive: true,
                title: '<img src="styles/legend/PDZPriorityDevelopmentZone_35.png" /> PDZ - Priority Development Zone'
            });
var format_RGZResidentialGrowthZone_36 = new ol.format.GeoJSON();
var features_RGZResidentialGrowthZone_36 = format_RGZResidentialGrowthZone_36.readFeatures(json_RGZResidentialGrowthZone_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RGZResidentialGrowthZone_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RGZResidentialGrowthZone_36.addFeatures(features_RGZResidentialGrowthZone_36);
var lyr_RGZResidentialGrowthZone_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RGZResidentialGrowthZone_36, 
                style: style_RGZResidentialGrowthZone_36,
                popuplayertitle: "RGZ - Residential Growth Zone",
                interactive: true,
                title: '<img src="styles/legend/RGZResidentialGrowthZone_36.png" /> RGZ - Residential Growth Zone'
            });
var format_TZTownshipZone_37 = new ol.format.GeoJSON();
var features_TZTownshipZone_37 = format_TZTownshipZone_37.readFeatures(json_TZTownshipZone_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TZTownshipZone_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TZTownshipZone_37.addFeatures(features_TZTownshipZone_37);
var lyr_TZTownshipZone_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TZTownshipZone_37, 
                style: style_TZTownshipZone_37,
                popuplayertitle: "TZ - Township Zone",
                interactive: true,
                title: '<img src="styles/legend/TZTownshipZone_37.png" /> TZ - Township Zone'
            });
var format_UGZUrbanGrowthZone_38 = new ol.format.GeoJSON();
var features_UGZUrbanGrowthZone_38 = format_UGZUrbanGrowthZone_38.readFeatures(json_UGZUrbanGrowthZone_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGZUrbanGrowthZone_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UGZUrbanGrowthZone_38.addFeatures(features_UGZUrbanGrowthZone_38);
var lyr_UGZUrbanGrowthZone_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UGZUrbanGrowthZone_38, 
                style: style_UGZUrbanGrowthZone_38,
                popuplayertitle: "UGZ - Urban Growth Zone",
                interactive: true,
                title: '<img src="styles/legend/UGZUrbanGrowthZone_38.png" /> UGZ - Urban Growth Zone'
            });
var format_WBWaterwaysBuffered_39 = new ol.format.GeoJSON();
var features_WBWaterwaysBuffered_39 = format_WBWaterwaysBuffered_39.readFeatures(json_WBWaterwaysBuffered_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterwaysBuffered_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysBuffered_39.addFeatures(features_WBWaterwaysBuffered_39);
var lyr_WBWaterwaysBuffered_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysBuffered_39, 
                style: style_WBWaterwaysBuffered_39,
                popuplayertitle: "WB - Waterways Buffered",
                interactive: true,
                title: '<img src="styles/legend/WBWaterwaysBuffered_39.png" /> WB - Waterways Buffered'
            });
var format_FOFloodwayOverlay_40 = new ol.format.GeoJSON();
var features_FOFloodwayOverlay_40 = format_FOFloodwayOverlay_40.readFeatures(json_FOFloodwayOverlay_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFloodwayOverlay_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFloodwayOverlay_40.addFeatures(features_FOFloodwayOverlay_40);
var lyr_FOFloodwayOverlay_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFloodwayOverlay_40, 
                style: style_FOFloodwayOverlay_40,
                popuplayertitle: "FO - Floodway Overlay",
                interactive: true,
                title: '<img src="styles/legend/FOFloodwayOverlay_40.png" /> FO - Floodway Overlay'
            });
var format_HeritageRegister_41 = new ol.format.GeoJSON();
var features_HeritageRegister_41 = format_HeritageRegister_41.readFeatures(json_HeritageRegister_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageRegister_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageRegister_41.addFeatures(features_HeritageRegister_41);
var lyr_HeritageRegister_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageRegister_41, 
                style: style_HeritageRegister_41,
                popuplayertitle: "Heritage Register",
                interactive: true,
                title: '<img src="styles/legend/HeritageRegister_41.png" /> Heritage Register'
            });
var format_HOHeritageOverlay_42 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_42 = format_HOHeritageOverlay_42.readFeatures(json_HOHeritageOverlay_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOHeritageOverlay_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_42.addFeatures(features_HOHeritageOverlay_42);
var lyr_HOHeritageOverlay_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_42, 
                style: style_HOHeritageOverlay_42,
                popuplayertitle: "HO - Heritage Overlay",
                interactive: true,
                title: '<img src="styles/legend/HOHeritageOverlay_42.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_43 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_43 = format_LSIOLandSubjecttoInundationOverlay_43.readFeatures(json_LSIOLandSubjecttoInundationOverlay_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_43.addFeatures(features_LSIOLandSubjecttoInundationOverlay_43);
var lyr_LSIOLandSubjecttoInundationOverlay_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_43, 
                style: style_LSIOLandSubjecttoInundationOverlay_43,
                popuplayertitle: "LSIO - Land Subject to Inundation Overlay",
                interactive: true,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_43.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_VPOVegetationProtectionOverlay_44 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_44 = format_VPOVegetationProtectionOverlay_44.readFeatures(json_VPOVegetationProtectionOverlay_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VPOVegetationProtectionOverlay_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_44.addFeatures(features_VPOVegetationProtectionOverlay_44);
var lyr_VPOVegetationProtectionOverlay_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_44, 
                style: style_VPOVegetationProtectionOverlay_44,
                popuplayertitle: "VPO - Vegetation Protection Overlay",
                interactive: true,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_44.png" /> VPO - Vegetation Protection Overlay'
            });
var format_BAOBufferAreaOverlay_45 = new ol.format.GeoJSON();
var features_BAOBufferAreaOverlay_45 = format_BAOBufferAreaOverlay_45.readFeatures(json_BAOBufferAreaOverlay_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAOBufferAreaOverlay_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAOBufferAreaOverlay_45.addFeatures(features_BAOBufferAreaOverlay_45);
var lyr_BAOBufferAreaOverlay_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAOBufferAreaOverlay_45, 
                style: style_BAOBufferAreaOverlay_45,
                popuplayertitle: "BAO - Buffer Area Overlay",
                interactive: true,
                title: '<img src="styles/legend/BAOBufferAreaOverlay_45.png" /> BAO - Buffer Area Overlay'
            });
var format_BMOBushfireManagementOverlay_46 = new ol.format.GeoJSON();
var features_BMOBushfireManagementOverlay_46 = format_BMOBushfireManagementOverlay_46.readFeatures(json_BMOBushfireManagementOverlay_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMOBushfireManagementOverlay_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfireManagementOverlay_46.addFeatures(features_BMOBushfireManagementOverlay_46);
var lyr_BMOBushfireManagementOverlay_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfireManagementOverlay_46, 
                style: style_BMOBushfireManagementOverlay_46,
                popuplayertitle: "BMO - Bushfire Management Overlay",
                interactive: true,
                title: '<img src="styles/legend/BMOBushfireManagementOverlay_46.png" /> BMO - Bushfire Management Overlay'
            });
var format_ESOEnvironmentalSignificanceOverlay_47 = new ol.format.GeoJSON();
var features_ESOEnvironmentalSignificanceOverlay_47 = format_ESOEnvironmentalSignificanceOverlay_47.readFeatures(json_ESOEnvironmentalSignificanceOverlay_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESOEnvironmentalSignificanceOverlay_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmentalSignificanceOverlay_47.addFeatures(features_ESOEnvironmentalSignificanceOverlay_47);
var lyr_ESOEnvironmentalSignificanceOverlay_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmentalSignificanceOverlay_47, 
                style: style_ESOEnvironmentalSignificanceOverlay_47,
                popuplayertitle: "ESO - Environmental Significance Overlay",
                interactive: true,
                title: '<img src="styles/legend/ESOEnvironmentalSignificanceOverlay_47.png" /> ESO - Environmental Significance Overlay'
            });
var format_PAOPublicAcquisitionOverlay_48 = new ol.format.GeoJSON();
var features_PAOPublicAcquisitionOverlay_48 = format_PAOPublicAcquisitionOverlay_48.readFeatures(json_PAOPublicAcquisitionOverlay_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAOPublicAcquisitionOverlay_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOPublicAcquisitionOverlay_48.addFeatures(features_PAOPublicAcquisitionOverlay_48);
var lyr_PAOPublicAcquisitionOverlay_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAOPublicAcquisitionOverlay_48, 
                style: style_PAOPublicAcquisitionOverlay_48,
                popuplayertitle: "PAO - Public Acquisition Overlay",
                interactive: true,
                title: '<img src="styles/legend/PAOPublicAcquisitionOverlay_48.png" /> PAO - Public Acquisition Overlay'
            });
var format_RORestructureOverlay_49 = new ol.format.GeoJSON();
var features_RORestructureOverlay_49 = format_RORestructureOverlay_49.readFeatures(json_RORestructureOverlay_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RORestructureOverlay_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_49.addFeatures(features_RORestructureOverlay_49);
var lyr_RORestructureOverlay_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_49, 
                style: style_RORestructureOverlay_49,
                popuplayertitle: "RO - Restructure Overlay",
                interactive: true,
                title: '<img src="styles/legend/RORestructureOverlay_49.png" /> RO - Restructure Overlay'
            });
var format_RXORoadClosureOverlay_50 = new ol.format.GeoJSON();
var features_RXORoadClosureOverlay_50 = format_RXORoadClosureOverlay_50.readFeatures(json_RXORoadClosureOverlay_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RXORoadClosureOverlay_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RXORoadClosureOverlay_50.addFeatures(features_RXORoadClosureOverlay_50);
var lyr_RXORoadClosureOverlay_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RXORoadClosureOverlay_50, 
                style: style_RXORoadClosureOverlay_50,
                popuplayertitle: "RXO - Road Closure Overlay",
                interactive: true,
                title: '<img src="styles/legend/RXORoadClosureOverlay_50.png" /> RXO - Road Closure Overlay'
            });
var format_SLOSignificantLandscapeOverlay_51 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_51 = format_SLOSignificantLandscapeOverlay_51.readFeatures(json_SLOSignificantLandscapeOverlay_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOSignificantLandscapeOverlay_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_51.addFeatures(features_SLOSignificantLandscapeOverlay_51);
var lyr_SLOSignificantLandscapeOverlay_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_51, 
                style: style_SLOSignificantLandscapeOverlay_51,
                popuplayertitle: "SLO - Significant Landscape Overlay",
                interactive: true,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_51.png" /> SLO - Significant Landscape Overlay'
            });
var format_SROStateResourceOverlay_52 = new ol.format.GeoJSON();
var features_SROStateResourceOverlay_52 = format_SROStateResourceOverlay_52.readFeatures(json_SROStateResourceOverlay_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SROStateResourceOverlay_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SROStateResourceOverlay_52.addFeatures(features_SROStateResourceOverlay_52);
var lyr_SROStateResourceOverlay_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SROStateResourceOverlay_52, 
                style: style_SROStateResourceOverlay_52,
                popuplayertitle: "SRO - State Resource Overlay",
                interactive: true,
                title: '<img src="styles/legend/SROStateResourceOverlay_52.png" /> SRO - State Resource Overlay'
            });
var format_SteepSlope_53 = new ol.format.GeoJSON();
var features_SteepSlope_53 = format_SteepSlope_53.readFeatures(json_SteepSlope_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SteepSlope_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SteepSlope_53.addFeatures(features_SteepSlope_53);
var lyr_SteepSlope_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SteepSlope_53, 
                style: style_SteepSlope_53,
                popuplayertitle: "Steep Slope",
                interactive: true,
                title: '<img src="styles/legend/SteepSlope_53.png" /> Steep Slope'
            });
var format_EASEMENT_54 = new ol.format.GeoJSON();
var features_EASEMENT_54 = format_EASEMENT_54.readFeatures(json_EASEMENT_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EASEMENT_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EASEMENT_54.addFeatures(features_EASEMENT_54);
var lyr_EASEMENT_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EASEMENT_54, 
                style: style_EASEMENT_54,
                popuplayertitle: "EASEMENT",
                interactive: true,
                title: '<img src="styles/legend/EASEMENT_54.png" /> EASEMENT'
            });
var format_BallaratWestGrowthArea_55 = new ol.format.GeoJSON();
var features_BallaratWestGrowthArea_55 = format_BallaratWestGrowthArea_55.readFeatures(json_BallaratWestGrowthArea_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratWestGrowthArea_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratWestGrowthArea_55.addFeatures(features_BallaratWestGrowthArea_55);
var lyr_BallaratWestGrowthArea_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratWestGrowthArea_55, 
                style: style_BallaratWestGrowthArea_55,
                popuplayertitle: "Ballarat West Growth Area",
                interactive: false,
                title: '<img src="styles/legend/BallaratWestGrowthArea_55.png" /> Ballarat West Growth Area'
            });
var format_BallaratNorthWesternGrowthArea_56 = new ol.format.GeoJSON();
var features_BallaratNorthWesternGrowthArea_56 = format_BallaratNorthWesternGrowthArea_56.readFeatures(json_BallaratNorthWesternGrowthArea_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratNorthWesternGrowthArea_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratNorthWesternGrowthArea_56.addFeatures(features_BallaratNorthWesternGrowthArea_56);
var lyr_BallaratNorthWesternGrowthArea_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratNorthWesternGrowthArea_56, 
                style: style_BallaratNorthWesternGrowthArea_56,
                popuplayertitle: "Ballarat North Western Growth Area",
                interactive: false,
                title: '<img src="styles/legend/BallaratNorthWesternGrowthArea_56.png" /> Ballarat North Western Growth Area'
            });
var format_MinersRestTownshipPlan_57 = new ol.format.GeoJSON();
var features_MinersRestTownshipPlan_57 = format_MinersRestTownshipPlan_57.readFeatures(json_MinersRestTownshipPlan_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MinersRestTownshipPlan_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinersRestTownshipPlan_57.addFeatures(features_MinersRestTownshipPlan_57);
var lyr_MinersRestTownshipPlan_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinersRestTownshipPlan_57, 
                style: style_MinersRestTownshipPlan_57,
                popuplayertitle: "Miners Rest Township Plan",
                interactive: false,
                title: '<img src="styles/legend/MinersRestTownshipPlan_57.png" /> Miners Rest Township Plan'
            });
var format_BallaratNorthPSPExpandedArea_58 = new ol.format.GeoJSON();
var features_BallaratNorthPSPExpandedArea_58 = format_BallaratNorthPSPExpandedArea_58.readFeatures(json_BallaratNorthPSPExpandedArea_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratNorthPSPExpandedArea_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratNorthPSPExpandedArea_58.addFeatures(features_BallaratNorthPSPExpandedArea_58);
var lyr_BallaratNorthPSPExpandedArea_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratNorthPSPExpandedArea_58, 
                style: style_BallaratNorthPSPExpandedArea_58,
                popuplayertitle: "Ballarat North PSP Expanded Area",
                interactive: false,
                title: '<img src="styles/legend/BallaratNorthPSPExpandedArea_58.png" /> Ballarat North PSP Expanded Area'
            });
var format_BallaratNorthPSPCoreArea_59 = new ol.format.GeoJSON();
var features_BallaratNorthPSPCoreArea_59 = format_BallaratNorthPSPCoreArea_59.readFeatures(json_BallaratNorthPSPCoreArea_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratNorthPSPCoreArea_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratNorthPSPCoreArea_59.addFeatures(features_BallaratNorthPSPCoreArea_59);
var lyr_BallaratNorthPSPCoreArea_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratNorthPSPCoreArea_59, 
                style: style_BallaratNorthPSPCoreArea_59,
                popuplayertitle: "Ballarat North PSP Core Area",
                interactive: false,
                title: '<img src="styles/legend/BallaratNorthPSPCoreArea_59.png" /> Ballarat North PSP Core Area'
            });
var format_BallaratWestPSPBoundary_60 = new ol.format.GeoJSON();
var features_BallaratWestPSPBoundary_60 = format_BallaratWestPSPBoundary_60.readFeatures(json_BallaratWestPSPBoundary_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratWestPSPBoundary_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratWestPSPBoundary_60.addFeatures(features_BallaratWestPSPBoundary_60);
var lyr_BallaratWestPSPBoundary_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratWestPSPBoundary_60, 
                style: style_BallaratWestPSPBoundary_60,
                popuplayertitle: "Ballarat West PSP Boundary",
                interactive: false,
                title: '<img src="styles/legend/BallaratWestPSPBoundary_60.png" /> Ballarat West PSP Boundary'
            });
var format_AlfredtonWestPSP_61 = new ol.format.GeoJSON();
var features_AlfredtonWestPSP_61 = format_AlfredtonWestPSP_61.readFeatures(json_AlfredtonWestPSP_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfredtonWestPSP_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfredtonWestPSP_61.addFeatures(features_AlfredtonWestPSP_61);
var lyr_AlfredtonWestPSP_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfredtonWestPSP_61, 
                style: style_AlfredtonWestPSP_61,
                popuplayertitle: "Alfredton West PSP",
                interactive: false,
                title: '<img src="styles/legend/AlfredtonWestPSP_61.png" /> Alfredton West PSP'
            });
var lyr_BallaratWestFutureResidential_62 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ballarat West Future Residential",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BallaratWestFutureResidential_62.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16000884.295384, -4524619.305248, 16008461.115533, -4515905.193819]
                            })
                        });
var lyr_NorthWesternFutureResidential_63 = new ol.layer.Image({
                            opacity: 1,
                            title: "North Western Future Residential",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NorthWesternFutureResidential_63.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16001266.647727, -4515895.095368, 16005008.597518, -4510100.929109]
                            })
                        });
var lyr_MinersRestTownshipPlan_64 = new ol.layer.Image({
                            opacity: 1,
                            title: "Miners Rest Township Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MinersRestTownshipPlan_64.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16002070.971843, -4510059.000743, 16011786.337556, -4502707.998168]
                            })
                        });
var lyr_BallaratNorthExpandedAreaLandscapeandVisual_65 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ballarat North Expanded Area Landscape and Visual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BallaratNorthExpandedAreaLandscapeandVisual_65.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16008215.438631, -4508498.682904, 16011333.344392, -4505802.753757]
                            })
                        });
var lyr_BallaratNorthCoreAreaLandusePlan_66 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ballarat North Core Area Land use Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BallaratNorthCoreAreaLandusePlan_66.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16008405.480183, -4511700.757170, 16012909.764990, -4507906.973021]
                            })
                        });
var lyr_BallaratWestPSP_67 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ballarat West PSP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BallaratWestPSP_67.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16005331.307526, -4525979.174216, 16011901.810321, -4516441.245330]
                            })
                        });
var lyr_AlfredtonWestPSP_68 = new ol.layer.Image({
                            opacity: 1,
                            title: "Alfredton West PSP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AlfredtonWestPSP_68.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16003168.870267, -4517363.692448, 16006323.877692, -4514342.921889]
                            })
                        });
var format_Suburb_69 = new ol.format.GeoJSON();
var features_Suburb_69 = format_Suburb_69.readFeatures(json_Suburb_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_69.addFeatures(features_Suburb_69);
var lyr_Suburb_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_69, 
                style: style_Suburb_69,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_69.png" /> Suburb'
            });
var format_LGA_70 = new ol.format.GeoJSON();
var features_LGA_70 = format_LGA_70.readFeatures(json_LGA_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_70.addFeatures(features_LGA_70);
var lyr_LGA_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_70, 
                style: style_LGA_70,
                popuplayertitle: "LGA",
                interactive: false,
                title: '<img src="styles/legend/LGA_70.png" /> LGA'
            });
var format_PropertyBoundaries_71 = new ol.format.GeoJSON();
var features_PropertyBoundaries_71 = format_PropertyBoundaries_71.readFeatures(json_PropertyBoundaries_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropertyBoundaries_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropertyBoundaries_71.addFeatures(features_PropertyBoundaries_71);
var lyr_PropertyBoundaries_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropertyBoundaries_71, 
                style: style_PropertyBoundaries_71,
                popuplayertitle: "Property Boundaries",
                interactive: false,
                title: '<img src="styles/legend/PropertyBoundaries_71.png" /> Property Boundaries'
            });
var format_RezoneParcels_72 = new ol.format.GeoJSON();
var features_RezoneParcels_72 = format_RezoneParcels_72.readFeatures(json_RezoneParcels_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RezoneParcels_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RezoneParcels_72.addFeatures(features_RezoneParcels_72);
var lyr_RezoneParcels_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RezoneParcels_72, 
                style: style_RezoneParcels_72,
                popuplayertitle: "Rezone Parcels",
                interactive: false,
                title: '<img src="styles/legend/RezoneParcels_72.png" /> Rezone Parcels'
            });
var format_ZonedParcels_73 = new ol.format.GeoJSON();
var features_ZonedParcels_73 = format_ZonedParcels_73.readFeatures(json_ZonedParcels_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonedParcels_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonedParcels_73.addFeatures(features_ZonedParcels_73);
var lyr_ZonedParcels_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonedParcels_73, 
                style: style_ZonedParcels_73,
                popuplayertitle: "Zoned Parcels",
                interactive: false,
                title: '<img src="styles/legend/ZonedParcels_73.png" /> Zoned Parcels'
            });
var format_MajorLandOwner_74 = new ol.format.GeoJSON();
var features_MajorLandOwner_74 = format_MajorLandOwner_74.readFeatures(json_MajorLandOwner_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorLandOwner_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLandOwner_74.addFeatures(features_MajorLandOwner_74);
var lyr_MajorLandOwner_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLandOwner_74, 
                style: style_MajorLandOwner_74,
                popuplayertitle: "Major Land Owner",
                interactive: false,
                title: '<img src="styles/legend/MajorLandOwner_74.png" /> Major Land Owner'
            });
var format_Estate_75 = new ol.format.GeoJSON();
var features_Estate_75 = format_Estate_75.readFeatures(json_Estate_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estate_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estate_75.addFeatures(features_Estate_75);
var lyr_Estate_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estate_75, 
                style: style_Estate_75,
                popuplayertitle: "Estate",
                interactive: true,
                title: '<img src="styles/legend/Estate_75.png" /> Estate'
            });
var format_ParcelAttributes_76 = new ol.format.GeoJSON();
var features_ParcelAttributes_76 = format_ParcelAttributes_76.readFeatures(json_ParcelAttributes_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributes_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributes_76.addFeatures(features_ParcelAttributes_76);
var lyr_ParcelAttributes_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributes_76, 
                style: style_ParcelAttributes_76,
                popuplayertitle: "Parcel Attributes",
                interactive: true,
                title: '<img src="styles/legend/ParcelAttributes_76.png" /> Parcel Attributes'
            });
var format_Estatelabel_77 = new ol.format.GeoJSON();
var features_Estatelabel_77 = format_Estatelabel_77.readFeatures(json_Estatelabel_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estatelabel_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estatelabel_77.addFeatures(features_Estatelabel_77);
var lyr_Estatelabel_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estatelabel_77, 
                style: style_Estatelabel_77,
                popuplayertitle: "Estate label",
                interactive: false,
                title: '<img src="styles/legend/Estatelabel_77.png" /> Estate label'
            });
var format_ParcelAttributeslabel_78 = new ol.format.GeoJSON();
var features_ParcelAttributeslabel_78 = format_ParcelAttributeslabel_78.readFeatures(json_ParcelAttributeslabel_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributeslabel_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributeslabel_78.addFeatures(features_ParcelAttributeslabel_78);
var lyr_ParcelAttributeslabel_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributeslabel_78, 
                style: style_ParcelAttributeslabel_78,
                popuplayertitle: "Parcel Attributes label",
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributeslabel_78.png" /> Parcel Attributes label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_Estatelabel_77,lyr_ParcelAttributeslabel_78,],
                                fold: "open",
                                title: "Label Switch"});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_69,lyr_LGA_70,lyr_PropertyBoundaries_71,lyr_RezoneParcels_72,lyr_ZonedParcels_73,lyr_MajorLandOwner_74,lyr_Estate_75,lyr_ParcelAttributes_76,],
                                fold: "open",
                                title: "Administrative"});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_BallaratWestFutureResidential_62,lyr_NorthWesternFutureResidential_63,lyr_MinersRestTownshipPlan_64,lyr_BallaratNorthExpandedAreaLandscapeandVisual_65,lyr_BallaratNorthCoreAreaLandusePlan_66,lyr_BallaratWestPSP_67,lyr_AlfredtonWestPSP_68,],
                                fold: "open",
                                title: "PSP"});
var group_PSPGrowthArea = new ol.layer.Group({
                                layers: [lyr_BallaratWestGrowthArea_55,lyr_BallaratNorthWesternGrowthArea_56,lyr_MinersRestTownshipPlan_57,lyr_BallaratNorthPSPExpandedArea_58,lyr_BallaratNorthPSPCoreArea_59,lyr_BallaratWestPSPBoundary_60,lyr_AlfredtonWestPSP_61,],
                                fold: "open",
                                title: "PSP/ Growth Area"});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_BAOBufferAreaOverlay_45,lyr_BMOBushfireManagementOverlay_46,lyr_ESOEnvironmentalSignificanceOverlay_47,lyr_PAOPublicAcquisitionOverlay_48,lyr_RORestructureOverlay_49,lyr_RXORoadClosureOverlay_50,lyr_SLOSignificantLandscapeOverlay_51,lyr_SROStateResourceOverlay_52,lyr_SteepSlope_53,lyr_EASEMENT_54,],
                                fold: "open",
                                title: "Note to Due Diligence"});
var group_DeductOverlays = new ol.layer.Group({
                                layers: [lyr_WBWaterwaysBuffered_39,lyr_FOFloodwayOverlay_40,lyr_HeritageRegister_41,lyr_HOHeritageOverlay_42,lyr_LSIOLandSubjecttoInundationOverlay_43,lyr_VPOVegetationProtectionOverlay_44,],
                                fold: "open",
                                title: "Deduct Overlays"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_TRZ1StateTransportInfrastructure_2,lyr_TRZ2PrincipalRoadNetwork_3,lyr_TRZ3SignificantMunicipalRoad_4,lyr_TRZ4OtherTransportUse_5,lyr_PCRZPublicConservationandResourceZone_6,lyr_PPRZPublicParkandRecreationZone_7,lyr_PUZ1PublicUseZoneServiceandUtility_8,lyr_PUZ2PublicUseZoneEducation_9,lyr_PUZ3PublicUseZoneHealthCommunity_10,lyr_PUZ6PublicUseZoneLocalGovernment_11,lyr_PUZ7PublicUseZoneOtherPublicUse_12,lyr_GWAZGreenWedgeAZone_13,lyr_GWZGreenWedgeZone_14,lyr_RAZRuralActivityZone_15,lyr_RCZRuralConservationZone_16,lyr_DZDocklandZone_17,lyr_PZPortZone_18,lyr_SUZSpecialUseZone_19,lyr_UFZUrbanFloodwayZone_20,lyr_C1ZCommercial1Zone_21,lyr_C2ZCommercial2Zone_22,lyr_IN1ZIndustrial1Zone_23,lyr_IN2ZIndustrial2Zone_24,lyr_IN3ZIndustrial3Zone_25,lyr_RLZRuralLivingZone_26,lyr_FZFarmingZone_27,lyr_ACZActivityCentreZone_28,lyr_CCZCapitalCityZone_29,lyr_CDZComprehensiveDevelopmentZone_30,lyr_GRZGeneralResidentialZone_31,lyr_LDRZLowDensityResidentialZone_32,lyr_MUZMixedUseZone_33,lyr_NRZNeighbourhoodResidentialZone_34,lyr_PDZPriorityDevelopmentZone_35,lyr_RGZResidentialGrowthZone_36,lyr_TZTownshipZone_37,lyr_UGZUrbanGrowthZone_38,],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_TRZ1StateTransportInfrastructure_2.setVisible(false);lyr_TRZ2PrincipalRoadNetwork_3.setVisible(false);lyr_TRZ3SignificantMunicipalRoad_4.setVisible(false);lyr_TRZ4OtherTransportUse_5.setVisible(false);lyr_PCRZPublicConservationandResourceZone_6.setVisible(false);lyr_PPRZPublicParkandRecreationZone_7.setVisible(false);lyr_PUZ1PublicUseZoneServiceandUtility_8.setVisible(false);lyr_PUZ2PublicUseZoneEducation_9.setVisible(false);lyr_PUZ3PublicUseZoneHealthCommunity_10.setVisible(false);lyr_PUZ6PublicUseZoneLocalGovernment_11.setVisible(false);lyr_PUZ7PublicUseZoneOtherPublicUse_12.setVisible(false);lyr_GWAZGreenWedgeAZone_13.setVisible(false);lyr_GWZGreenWedgeZone_14.setVisible(false);lyr_RAZRuralActivityZone_15.setVisible(false);lyr_RCZRuralConservationZone_16.setVisible(false);lyr_DZDocklandZone_17.setVisible(false);lyr_PZPortZone_18.setVisible(false);lyr_SUZSpecialUseZone_19.setVisible(false);lyr_UFZUrbanFloodwayZone_20.setVisible(false);lyr_C1ZCommercial1Zone_21.setVisible(false);lyr_C2ZCommercial2Zone_22.setVisible(false);lyr_IN1ZIndustrial1Zone_23.setVisible(false);lyr_IN2ZIndustrial2Zone_24.setVisible(false);lyr_IN3ZIndustrial3Zone_25.setVisible(false);lyr_RLZRuralLivingZone_26.setVisible(false);lyr_FZFarmingZone_27.setVisible(false);lyr_ACZActivityCentreZone_28.setVisible(false);lyr_CCZCapitalCityZone_29.setVisible(false);lyr_CDZComprehensiveDevelopmentZone_30.setVisible(false);lyr_GRZGeneralResidentialZone_31.setVisible(false);lyr_LDRZLowDensityResidentialZone_32.setVisible(false);lyr_MUZMixedUseZone_33.setVisible(false);lyr_NRZNeighbourhoodResidentialZone_34.setVisible(false);lyr_PDZPriorityDevelopmentZone_35.setVisible(false);lyr_RGZResidentialGrowthZone_36.setVisible(false);lyr_TZTownshipZone_37.setVisible(false);lyr_UGZUrbanGrowthZone_38.setVisible(false);lyr_WBWaterwaysBuffered_39.setVisible(false);lyr_FOFloodwayOverlay_40.setVisible(false);lyr_HeritageRegister_41.setVisible(false);lyr_HOHeritageOverlay_42.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_43.setVisible(false);lyr_VPOVegetationProtectionOverlay_44.setVisible(false);lyr_BAOBufferAreaOverlay_45.setVisible(false);lyr_BMOBushfireManagementOverlay_46.setVisible(false);lyr_ESOEnvironmentalSignificanceOverlay_47.setVisible(false);lyr_PAOPublicAcquisitionOverlay_48.setVisible(false);lyr_RORestructureOverlay_49.setVisible(false);lyr_RXORoadClosureOverlay_50.setVisible(false);lyr_SLOSignificantLandscapeOverlay_51.setVisible(false);lyr_SROStateResourceOverlay_52.setVisible(false);lyr_SteepSlope_53.setVisible(false);lyr_EASEMENT_54.setVisible(false);lyr_BallaratWestGrowthArea_55.setVisible(false);lyr_BallaratNorthWesternGrowthArea_56.setVisible(false);lyr_MinersRestTownshipPlan_57.setVisible(false);lyr_BallaratNorthPSPExpandedArea_58.setVisible(false);lyr_BallaratNorthPSPCoreArea_59.setVisible(false);lyr_BallaratWestPSPBoundary_60.setVisible(false);lyr_AlfredtonWestPSP_61.setVisible(false);lyr_BallaratWestFutureResidential_62.setVisible(false);lyr_NorthWesternFutureResidential_63.setVisible(false);lyr_MinersRestTownshipPlan_64.setVisible(false);lyr_BallaratNorthExpandedAreaLandscapeandVisual_65.setVisible(false);lyr_BallaratNorthCoreAreaLandusePlan_66.setVisible(false);lyr_BallaratWestPSP_67.setVisible(false);lyr_AlfredtonWestPSP_68.setVisible(false);lyr_Suburb_69.setVisible(true);lyr_LGA_70.setVisible(true);lyr_PropertyBoundaries_71.setVisible(true);lyr_RezoneParcels_72.setVisible(true);lyr_ZonedParcels_73.setVisible(true);lyr_MajorLandOwner_74.setVisible(true);lyr_Estate_75.setVisible(false);lyr_ParcelAttributes_76.setVisible(true);lyr_Estatelabel_77.setVisible(false);lyr_ParcelAttributeslabel_78.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_DeductOverlays,group_NotetoDueDiligence,group_PSPGrowthArea,group_PSP,group_Administrative,group_LabelSwitch];
lyr_TRZ1StateTransportInfrastructure_2.set('fieldAliases', {'fid': 'fid', });
lyr_TRZ2PrincipalRoadNetwork_3.set('fieldAliases', {'fid': 'fid', });
lyr_TRZ3SignificantMunicipalRoad_4.set('fieldAliases', {'fid': 'fid', });
lyr_TRZ4OtherTransportUse_5.set('fieldAliases', {'fid': 'fid', });
lyr_PCRZPublicConservationandResourceZone_6.set('fieldAliases', {'fid': 'fid', });
lyr_PPRZPublicParkandRecreationZone_7.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ1PublicUseZoneServiceandUtility_8.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ2PublicUseZoneEducation_9.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ3PublicUseZoneHealthCommunity_10.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ6PublicUseZoneLocalGovernment_11.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ7PublicUseZoneOtherPublicUse_12.set('fieldAliases', {'fid': 'fid', });
lyr_GWAZGreenWedgeAZone_13.set('fieldAliases', {'fid': 'fid', });
lyr_GWZGreenWedgeZone_14.set('fieldAliases', {'fid': 'fid', });
lyr_RAZRuralActivityZone_15.set('fieldAliases', {'fid': 'fid', });
lyr_RCZRuralConservationZone_16.set('fieldAliases', {'fid': 'fid', });
lyr_DZDocklandZone_17.set('fieldAliases', {'fid': 'fid', });
lyr_PZPortZone_18.set('fieldAliases', {'fid': 'fid', });
lyr_SUZSpecialUseZone_19.set('fieldAliases', {'fid': 'fid', });
lyr_UFZUrbanFloodwayZone_20.set('fieldAliases', {'fid': 'fid', });
lyr_C1ZCommercial1Zone_21.set('fieldAliases', {'fid': 'fid', });
lyr_C2ZCommercial2Zone_22.set('fieldAliases', {'fid': 'fid', });
lyr_IN1ZIndustrial1Zone_23.set('fieldAliases', {'fid': 'fid', });
lyr_IN2ZIndustrial2Zone_24.set('fieldAliases', {'fid': 'fid', });
lyr_IN3ZIndustrial3Zone_25.set('fieldAliases', {'fid': 'fid', });
lyr_RLZRuralLivingZone_26.set('fieldAliases', {'fid': 'fid', });
lyr_FZFarmingZone_27.set('fieldAliases', {'fid': 'fid', });
lyr_ACZActivityCentreZone_28.set('fieldAliases', {'fid': 'fid', });
lyr_CCZCapitalCityZone_29.set('fieldAliases', {'fid': 'fid', });
lyr_CDZComprehensiveDevelopmentZone_30.set('fieldAliases', {'fid': 'fid', });
lyr_GRZGeneralResidentialZone_31.set('fieldAliases', {'fid': 'fid', });
lyr_LDRZLowDensityResidentialZone_32.set('fieldAliases', {'fid': 'fid', });
lyr_MUZMixedUseZone_33.set('fieldAliases', {'fid': 'fid', });
lyr_NRZNeighbourhoodResidentialZone_34.set('fieldAliases', {'fid': 'fid', });
lyr_PDZPriorityDevelopmentZone_35.set('fieldAliases', {'fid': 'fid', });
lyr_RGZResidentialGrowthZone_36.set('fieldAliases', {'fid': 'fid', });
lyr_TZTownshipZone_37.set('fieldAliases', {'fid': 'fid', });
lyr_UGZUrbanGrowthZone_38.set('fieldAliases', {'fid': 'fid', });
lyr_WBWaterwaysBuffered_39.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_FOFloodwayOverlay_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HeritageRegister_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'VDPID': 'VDPID', 'UFI': 'UFI', 'HERMES_NUM': 'HERMES_NUM', 'VHR_NUM': 'VHR_NUM', 'VHI_NUM': 'VHI_NUM', 'HERITAGE_O': 'HERITAGE_O', 'SITE_NAME': 'SITE_NAME', 'ID': 'ID', 'UFI_CREATE': 'UFI_CREATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HOHeritageOverlay_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VPOVegetationProtectionOverlay_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BAOBufferAreaOverlay_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfireManagementOverlay_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ESOEnvironmentalSignificanceOverlay_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PAOPublicAcquisitionOverlay_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RORestructureOverlay_49.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RXORoadClosureOverlay_50.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SLOSignificantLandscapeOverlay_51.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SROStateResourceOverlay_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SteepSlope_53.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_EASEMENT_54.set('fieldAliases', {'UFI': 'UFI', 'PFI': 'PFI', 'STATUS': 'STATUS', 'TASK_ID': 'TASK_ID', 'PFI_CR': 'PFI_CR', 'UFI_OLD': 'UFI_OLD', 'UFI_CR': 'UFI_CR', });
lyr_BallaratWestGrowthArea_55.set('fieldAliases', {'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratNorthWesternGrowthArea_56.set('fieldAliases', {'id': 'id', 'Strat Link': 'Strat Link', });
lyr_MinersRestTownshipPlan_57.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Strat Link': 'Strat Link', });
lyr_BallaratNorthPSPExpandedArea_58.set('fieldAliases', {'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratNorthPSPCoreArea_59.set('fieldAliases', {'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratWestPSPBoundary_60.set('fieldAliases', {'id': 'id', 'Strat Link': 'Strat Link', });
lyr_AlfredtonWestPSP_61.set('fieldAliases', {'id': 'id', 'Strat Link': 'Strat Link', });
lyr_Suburb_69.set('fieldAliases', {'fid': 'fid', 'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', });
lyr_LGA_70.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_PropertyBoundaries_71.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'Address': 'Address', 'Locality': 'Locality', 'Gross(Ha)': 'Gross(Ha)', 'Zone': 'Zone', 'Zoned (Ha)': 'Zoned (Ha)', 'Overlays': 'Overlays', });
lyr_RezoneParcels_72.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'Address': 'Address', 'Locality': 'Locality', 'Gross(Ha)': 'Gross(Ha)', 'Zone': 'Zone', 'Zoned (Ha)': 'Zoned (Ha)', 'NDH ': 'NDH ', 'P_Lot Size': 'P_Lot Size', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no.': 'Contact no.', 'Owner_Add': 'Owner_Add', 'Email': 'Email', 'Land Owner:': 'Land Owner:', 'Overlays': 'Overlays', });
lyr_ZonedParcels_73.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'Address': 'Address', 'Locality': 'Locality', 'Gross(Ha)': 'Gross(Ha)', 'Zone': 'Zone', 'Zoned (Ha)': 'Zoned (Ha)', 'NDH ': 'NDH ', 'P_Lot Size': 'P_Lot Size', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no.': 'Contact no.', 'Owner_Add': 'Owner_Add', 'Email': 'Email', 'Land Owner:': 'Land Owner:', 'mv': 'mv', 'Overlays': 'Overlays', });
lyr_MajorLandOwner_74.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Address': 'Address', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'PSP Status': 'PSP Status', 'Zoned / Rezone': 'Zoned / Rezone', 'Primary Product': 'Primary Product', 'Suburb': 'Suburb', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'Current Zone': 'Current Zone', 'Overlays': 'Overlays', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Lead Link': 'Lead Link', });
lyr_Estate_75.set('fieldAliases', {'fid': 'fid', 'Estate/Address': 'Estate/Address', 'No. of Lots': 'No. of Lots', 'Developer': 'Developer', 'Estate Status': 'Estate Status', });
lyr_ParcelAttributes_76.set('fieldAliases', {'fid': 'fid', 'Unique ID': 'Unique ID', 'Address': 'Address', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'PSP Status': 'PSP Status', 'Zoned / Rezone': 'Zoned / Rezone', 'Primary Product': 'Primary Product', 'Suburb': 'Suburb', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'Current Zone': 'Current Zone', 'Overlays': 'Overlays', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Lead Link': 'Lead Link', });
lyr_Estatelabel_77.set('fieldAliases', {'fid': 'fid', 'Estate/Address': 'Estate/Address', 'No. of Lots': 'No. of Lots', 'Developer': 'Developer', 'Estate Status': 'Estate Status', });
lyr_ParcelAttributeslabel_78.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Unzoned': 'Zoned / Unzoned', 'Zoning': 'Zoning', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross(Ha)': 'Gross(Ha)', 'NDH ': 'NDH ', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'VALUE': 'VALUE', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (30%DM)': 'Market Value (30%DM)', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Company': 'Company', 'Directors': 'Directors', 'Phone': 'Phone', 'Email': 'Email', 'Address:': 'Address:', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'Deal Link': 'Deal Link', 'Zoned (Ha)': 'Zoned (Ha)', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'Locality': 'Locality', '_Name': '_Name', '_Growth Area': '_Growth Area', '_Zoned / Rezone': '_Zoned / Rezone', '_Current Zone': '_Current Zone', '_Overlays': '_Overlays', });
lyr_TRZ1StateTransportInfrastructure_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_TRZ2PrincipalRoadNetwork_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_TRZ3SignificantMunicipalRoad_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_TRZ4OtherTransportUse_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_PCRZPublicConservationandResourceZone_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_PPRZPublicParkandRecreationZone_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ1PublicUseZoneServiceandUtility_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ2PublicUseZoneEducation_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ3PublicUseZoneHealthCommunity_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ6PublicUseZoneLocalGovernment_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ7PublicUseZoneOtherPublicUse_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_GWAZGreenWedgeAZone_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_GWZGreenWedgeZone_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_RAZRuralActivityZone_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_RCZRuralConservationZone_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_DZDocklandZone_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_PZPortZone_18.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUZSpecialUseZone_19.set('fieldImages', {'fid': 'TextEdit', });
lyr_UFZUrbanFloodwayZone_20.set('fieldImages', {'fid': 'TextEdit', });
lyr_C1ZCommercial1Zone_21.set('fieldImages', {'fid': 'TextEdit', });
lyr_C2ZCommercial2Zone_22.set('fieldImages', {'fid': 'TextEdit', });
lyr_IN1ZIndustrial1Zone_23.set('fieldImages', {'fid': 'TextEdit', });
lyr_IN2ZIndustrial2Zone_24.set('fieldImages', {'fid': 'TextEdit', });
lyr_IN3ZIndustrial3Zone_25.set('fieldImages', {'fid': 'TextEdit', });
lyr_RLZRuralLivingZone_26.set('fieldImages', {'fid': 'TextEdit', });
lyr_FZFarmingZone_27.set('fieldImages', {'fid': 'TextEdit', });
lyr_ACZActivityCentreZone_28.set('fieldImages', {'fid': 'TextEdit', });
lyr_CCZCapitalCityZone_29.set('fieldImages', {'fid': 'TextEdit', });
lyr_CDZComprehensiveDevelopmentZone_30.set('fieldImages', {'fid': 'TextEdit', });
lyr_GRZGeneralResidentialZone_31.set('fieldImages', {'fid': 'TextEdit', });
lyr_LDRZLowDensityResidentialZone_32.set('fieldImages', {'fid': 'TextEdit', });
lyr_MUZMixedUseZone_33.set('fieldImages', {'fid': 'TextEdit', });
lyr_NRZNeighbourhoodResidentialZone_34.set('fieldImages', {'fid': 'TextEdit', });
lyr_PDZPriorityDevelopmentZone_35.set('fieldImages', {'fid': 'TextEdit', });
lyr_RGZResidentialGrowthZone_36.set('fieldImages', {'fid': 'TextEdit', });
lyr_TZTownshipZone_37.set('fieldImages', {'fid': 'TextEdit', });
lyr_UGZUrbanGrowthZone_38.set('fieldImages', {'fid': 'TextEdit', });
lyr_WBWaterwaysBuffered_39.set('fieldImages', {'fid': '', 'LGA_CODE24': '', 'LGA_NAME24': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM': '', 'LOCI_URI21': '', });
lyr_FOFloodwayOverlay_40.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HeritageRegister_41.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'VDPID': 'TextEdit', 'UFI': 'TextEdit', 'HERMES_NUM': 'TextEdit', 'VHR_NUM': 'TextEdit', 'VHI_NUM': 'TextEdit', 'HERITAGE_O': 'TextEdit', 'SITE_NAME': 'TextEdit', 'ID': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HOHeritageOverlay_42.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LSIOLandSubjecttoInundationOverlay_43.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VPOVegetationProtectionOverlay_44.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BAOBufferAreaOverlay_45.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BMOBushfireManagementOverlay_46.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ESOEnvironmentalSignificanceOverlay_47.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PAOPublicAcquisitionOverlay_48.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RORestructureOverlay_49.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RXORoadClosureOverlay_50.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SLOSignificantLandscapeOverlay_51.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SROStateResourceOverlay_52.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SteepSlope_53.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_EASEMENT_54.set('fieldImages', {'UFI': 'TextEdit', 'PFI': 'TextEdit', 'STATUS': 'TextEdit', 'TASK_ID': 'TextEdit', 'PFI_CR': 'DateTime', 'UFI_OLD': 'TextEdit', 'UFI_CR': 'DateTime', });
lyr_BallaratWestGrowthArea_55.set('fieldImages', {'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_BallaratNorthWesternGrowthArea_56.set('fieldImages', {'id': 'TextEdit', 'Strat Link': '', });
lyr_MinersRestTownshipPlan_57.set('fieldImages', {'id': 'TextEdit', 'Status': '', 'Strat Link': '', });
lyr_BallaratNorthPSPExpandedArea_58.set('fieldImages', {'id': 'TextEdit', 'Strat Link': '', });
lyr_BallaratNorthPSPCoreArea_59.set('fieldImages', {'id': 'TextEdit', 'Strat Link': '', });
lyr_BallaratWestPSPBoundary_60.set('fieldImages', {'id': 'TextEdit', 'Strat Link': '', });
lyr_AlfredtonWestPSP_61.set('fieldImages', {'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_Suburb_69.set('fieldImages', {'fid': 'TextEdit', 'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', });
lyr_LGA_70.set('fieldImages', {'fid': '', 'LGA_CODE24': '', 'LGA_NAME24': '', 'STE_CODE21': '', 'STE_NAME21': '', 'AUS_CODE21': '', 'AUS_NAME21': '', 'AREASQKM': '', 'LOCI_URI21': '', });
lyr_PropertyBoundaries_71.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PROP_PFI': '', 'PROP_LGA_CODE': '', 'Address': '', 'Locality': '', 'Gross(Ha)': '', 'Zone': '', 'Zoned (Ha)': '', 'Overlays': '', });
lyr_RezoneParcels_72.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROP_PFI': 'TextEdit', 'PROP_LGA_CODE': 'TextEdit', 'Address': 'TextEdit', 'Locality': 'TextEdit', 'Gross(Ha)': 'TextEdit', 'Zone': 'TextEdit', 'Zoned (Ha)': 'TextEdit', 'NDH ': 'TextEdit', 'P_Lot Size': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no.': 'TextEdit', 'Owner_Add': 'TextEdit', 'Email': 'TextEdit', 'Land Owner:': 'TextEdit', 'Overlays': '', });
lyr_ZonedParcels_73.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROP_PFI': 'TextEdit', 'PROP_LGA_CODE': 'TextEdit', 'Address': 'TextEdit', 'Locality': 'TextEdit', 'Gross(Ha)': 'TextEdit', 'Zone': 'TextEdit', 'Zoned (Ha)': 'TextEdit', 'NDH ': 'TextEdit', 'P_Lot Size': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no.': 'TextEdit', 'Owner_Add': 'TextEdit', 'Email': 'TextEdit', 'Land Owner:': 'TextEdit', 'mv': 'TextEdit', 'Overlays': '', });
lyr_MajorLandOwner_74.set('fieldImages', {'fid': 'TextEdit', 'Unique ID': 'TextEdit', 'Address': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'PSP Status': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Primary Product': 'TextEdit', 'Suburb': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Last Sold Price': 'TextEdit', 'Last Sold Date': 'DateTime', 'Current Zone': 'TextEdit', 'Overlays': 'TextEdit', 'Current RLP': 'Range', 'Current OPC': 'Range', 'Market Value (20%DM)': 'Range', 'Market Value (25%DM)': 'Range', 'Market Value (30%DM)': 'Range', 'Market Value (15%DM)': 'Range', 'Lot Yield @ 20Dw/Ha': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Mobiles': 'TextEdit', 'Vendor Emails': 'TextEdit', 'Vendor Addresses': 'TextEdit', 'Major Landowner': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Development Contributions per Lot': 'Range', 'Lead Link': 'TextEdit', });
lyr_Estate_75.set('fieldImages', {'fid': 'TextEdit', 'Estate/Address': 'TextEdit', 'No. of Lots': 'TextEdit', 'Developer': 'TextEdit', 'Estate Status': 'TextEdit', });
lyr_ParcelAttributes_76.set('fieldImages', {'fid': 'TextEdit', 'Unique ID': 'TextEdit', 'Address': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'PSP Status': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Primary Product': 'TextEdit', 'Suburb': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Last Sold Price': 'TextEdit', 'Last Sold Date': 'DateTime', 'Current Zone': 'TextEdit', 'Overlays': 'TextEdit', 'Current RLP': 'Range', 'Current OPC': 'Range', 'Market Value (20%DM)': 'Range', 'Market Value (25%DM)': 'Range', 'Market Value (30%DM)': 'Range', 'Market Value (15%DM)': 'Range', 'Lot Yield @ 20Dw/Ha': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Mobiles': 'TextEdit', 'Vendor Emails': 'TextEdit', 'Vendor Addresses': 'TextEdit', 'Major Landowner': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Development Contributions per Lot': 'Range', 'Lead Link': 'TextEdit', });
lyr_Estatelabel_77.set('fieldImages', {'fid': 'TextEdit', 'Estate/Address': 'TextEdit', 'No. of Lots': 'TextEdit', 'Developer': 'TextEdit', 'Estate Status': 'TextEdit', });
lyr_ParcelAttributeslabel_78.set('fieldImages', {'fid': 'TextEdit', 'PARCEL': 'Range', 'Address': 'TextEdit', 'Zoned / Unzoned': 'TextEdit', 'Zoning': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'Overlays': 'TextEdit', 'Gross(Ha)': 'TextEdit', 'NDH ': 'TextEdit', 'Lot Yield @ 20Dw/Ha': 'TextEdit', 'VALUE': 'Range', 'Market Value (20%DM)': 'Range', 'Current RLP': 'Range', 'Current OPC': 'Range', 'Market Value (15%DM)': 'Range', 'Market Value (25%DM)': 'Range', 'Market Value (30%DM)': 'Range', 'OWNERSHIP': 'Range', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Company': 'TextEdit', 'Directors': 'TextEdit', 'Phone': 'TextEdit', 'Email': 'TextEdit', 'Address:': 'TextEdit', 'Last Sold Price': 'TextEdit', 'Last Sold Date': 'TextEdit', 'Deal Link': 'TextEdit', 'Zoned (Ha)': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROP_PFI': 'TextEdit', 'PROP_LGA_CODE': 'TextEdit', 'Locality': 'TextEdit', '_Name': 'TextEdit', '_Growth Area': 'TextEdit', '_Zoned / Rezone': 'TextEdit', '_Current Zone': 'TextEdit', '_Overlays': 'TextEdit', });
lyr_TRZ1StateTransportInfrastructure_2.set('fieldLabels', {'fid': 'hidden field', });
lyr_TRZ2PrincipalRoadNetwork_3.set('fieldLabels', {'fid': 'hidden field', });
lyr_TRZ3SignificantMunicipalRoad_4.set('fieldLabels', {'fid': 'hidden field', });
lyr_TRZ4OtherTransportUse_5.set('fieldLabels', {'fid': 'hidden field', });
lyr_PCRZPublicConservationandResourceZone_6.set('fieldLabels', {'fid': 'hidden field', });
lyr_PPRZPublicParkandRecreationZone_7.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ1PublicUseZoneServiceandUtility_8.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ2PublicUseZoneEducation_9.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ3PublicUseZoneHealthCommunity_10.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ6PublicUseZoneLocalGovernment_11.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ7PublicUseZoneOtherPublicUse_12.set('fieldLabels', {'fid': 'hidden field', });
lyr_GWAZGreenWedgeAZone_13.set('fieldLabels', {'fid': 'hidden field', });
lyr_GWZGreenWedgeZone_14.set('fieldLabels', {'fid': 'hidden field', });
lyr_RAZRuralActivityZone_15.set('fieldLabels', {'fid': 'hidden field', });
lyr_RCZRuralConservationZone_16.set('fieldLabels', {'fid': 'hidden field', });
lyr_DZDocklandZone_17.set('fieldLabels', {'fid': 'hidden field', });
lyr_PZPortZone_18.set('fieldLabels', {'fid': 'hidden field', });
lyr_SUZSpecialUseZone_19.set('fieldLabels', {'fid': 'hidden field', });
lyr_UFZUrbanFloodwayZone_20.set('fieldLabels', {'fid': 'hidden field', });
lyr_C1ZCommercial1Zone_21.set('fieldLabels', {'fid': 'hidden field', });
lyr_C2ZCommercial2Zone_22.set('fieldLabels', {'fid': 'hidden field', });
lyr_IN1ZIndustrial1Zone_23.set('fieldLabels', {'fid': 'hidden field', });
lyr_IN2ZIndustrial2Zone_24.set('fieldLabels', {'fid': 'hidden field', });
lyr_IN3ZIndustrial3Zone_25.set('fieldLabels', {'fid': 'hidden field', });
lyr_RLZRuralLivingZone_26.set('fieldLabels', {'fid': 'hidden field', });
lyr_FZFarmingZone_27.set('fieldLabels', {'fid': 'hidden field', });
lyr_ACZActivityCentreZone_28.set('fieldLabels', {'fid': 'hidden field', });
lyr_CCZCapitalCityZone_29.set('fieldLabels', {'fid': 'hidden field', });
lyr_CDZComprehensiveDevelopmentZone_30.set('fieldLabels', {'fid': 'hidden field', });
lyr_GRZGeneralResidentialZone_31.set('fieldLabels', {'fid': 'hidden field', });
lyr_LDRZLowDensityResidentialZone_32.set('fieldLabels', {'fid': 'hidden field', });
lyr_MUZMixedUseZone_33.set('fieldLabels', {'fid': 'hidden field', });
lyr_NRZNeighbourhoodResidentialZone_34.set('fieldLabels', {'fid': 'hidden field', });
lyr_PDZPriorityDevelopmentZone_35.set('fieldLabels', {'fid': 'hidden field', });
lyr_RGZResidentialGrowthZone_36.set('fieldLabels', {'fid': 'hidden field', });
lyr_TZTownshipZone_37.set('fieldLabels', {'fid': 'hidden field', });
lyr_UGZUrbanGrowthZone_38.set('fieldLabels', {'fid': 'hidden field', });
lyr_WBWaterwaysBuffered_39.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_FOFloodwayOverlay_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HeritageRegister_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'VDPID': 'hidden field', 'UFI': 'hidden field', 'HERMES_NUM': 'hidden field', 'VHR_NUM': 'hidden field', 'VHI_NUM': 'hidden field', 'HERITAGE_O': 'hidden field', 'SITE_NAME': 'hidden field', 'ID': 'hidden field', 'UFI_CREATE': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HOHeritageOverlay_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LSIOLandSubjecttoInundationOverlay_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_VPOVegetationProtectionOverlay_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BAOBufferAreaOverlay_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BMOBushfireManagementOverlay_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ESOEnvironmentalSignificanceOverlay_47.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PAOPublicAcquisitionOverlay_48.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RORestructureOverlay_49.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RXORoadClosureOverlay_50.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLOSignificantLandscapeOverlay_51.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SROStateResourceOverlay_52.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SteepSlope_53.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_EASEMENT_54.set('fieldLabels', {'UFI': 'hidden field', 'PFI': 'hidden field', 'STATUS': 'hidden field', 'TASK_ID': 'hidden field', 'PFI_CR': 'hidden field', 'UFI_OLD': 'hidden field', 'UFI_CR': 'hidden field', });
lyr_BallaratWestGrowthArea_55.set('fieldLabels', {'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratNorthWesternGrowthArea_56.set('fieldLabels', {'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_MinersRestTownshipPlan_57.set('fieldLabels', {'id': 'hidden field', 'Status': 'inline label - always visible', 'Strat Link': 'inline label - always visible', });
lyr_BallaratNorthPSPExpandedArea_58.set('fieldLabels', {'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratNorthPSPCoreArea_59.set('fieldLabels', {'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratWestPSPBoundary_60.set('fieldLabels', {'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_AlfredtonWestPSP_61.set('fieldLabels', {'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_Suburb_69.set('fieldLabels', {'fid': 'no label', 'LC_PLY_PID': 'no label', 'LOC_PID': 'no label', 'DT_CREATE': 'no label', 'LOC_NAME': 'no label', 'LOC_CLASS': 'no label', 'STATE': 'no label', });
lyr_LGA_70.set('fieldLabels', {'fid': 'no label', 'LGA_CODE24': 'no label', 'LGA_NAME24': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM': 'no label', 'LOCI_URI21': 'no label', });
lyr_PropertyBoundaries_71.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROP_PFI': 'no label', 'PROP_LGA_CODE': 'no label', 'Address': 'no label', 'Locality': 'no label', 'Gross(Ha)': 'no label', 'Zone': 'no label', 'Zoned (Ha)': 'no label', 'Overlays': 'no label', });
lyr_RezoneParcels_72.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PROP_PFI': 'hidden field', 'PROP_LGA_CODE': 'hidden field', 'Address': 'inline label - visible with data', 'Locality': 'inline label - visible with data', 'Gross(Ha)': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Zoned (Ha)': 'inline label - visible with data', 'NDH ': 'inline label - visible with data', 'P_Lot Size': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no.': 'inline label - always visible', 'Owner_Add': 'inline label - always visible', 'Email': 'hidden field', 'Land Owner:': 'hidden field', 'Overlays': 'no label', });
lyr_ZonedParcels_73.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PROP_PFI': 'hidden field', 'PROP_LGA_CODE': 'hidden field', 'Address': 'inline label - visible with data', 'Locality': 'inline label - visible with data', 'Gross(Ha)': 'inline label - visible with data', 'Zone': 'inline label - visible with data', 'Zoned (Ha)': 'inline label - visible with data', 'NDH ': 'inline label - visible with data', 'P_Lot Size': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no.': 'inline label - always visible', 'Owner_Add': 'inline label - always visible', 'Email': 'hidden field', 'Land Owner:': 'hidden field', 'mv': 'hidden field', 'Overlays': 'no label', });
lyr_MajorLandOwner_74.set('fieldLabels', {'fid': 'no label', 'Unique ID': 'no label', 'Address': 'no label', 'Strategy': 'no label', 'Strategy Link': 'no label', 'PSP Status': 'no label', 'Zoned / Rezone': 'no label', 'Primary Product': 'no label', 'Suburb': 'no label', 'Gross HA': 'no label', 'NDH': 'no label', 'Last Sold Price': 'no label', 'Last Sold Date': 'no label', 'Current Zone': 'no label', 'Overlays': 'no label', 'Current RLP': 'no label', 'Current OPC': 'no label', 'Market Value (20%DM)': 'no label', 'Market Value (25%DM)': 'no label', 'Market Value (30%DM)': 'no label', 'Market Value (15%DM)': 'no label', 'Lot Yield @ 20Dw/Ha': 'no label', 'Vendor Company': 'no label', 'Vendor Names': 'no label', 'Vendor Mobiles': 'no label', 'Vendor Emails': 'no label', 'Vendor Addresses': 'no label', 'Major Landowner': 'no label', 'Estate Status': 'no label', 'Developer': 'no label', 'Development Contributions per Lot': 'no label', 'Lead Link': 'no label', });
lyr_Estate_75.set('fieldLabels', {'fid': 'hidden field', 'Estate/Address': 'inline label - visible with data', 'No. of Lots': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', });
lyr_ParcelAttributes_76.set('fieldLabels', {'fid': 'hidden field', 'Unique ID': 'hidden field', 'Address': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'PSP Status': 'inline label - visible with data', 'Zoned / Rezone': 'inline label - visible with data', 'Primary Product': 'inline label - visible with data', 'Suburb': 'hidden field', 'Gross HA': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Last Sold Price': 'inline label - visible with data', 'Last Sold Date': 'inline label - visible with data', 'Current Zone': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'Current RLP': 'inline label - visible with data', 'Current OPC': 'inline label - visible with data', 'Market Value (20%DM)': 'inline label - visible with data', 'Market Value (25%DM)': 'inline label - visible with data', 'Market Value (30%DM)': 'inline label - visible with data', 'Market Value (15%DM)': 'inline label - visible with data', 'Lot Yield @ 20Dw/Ha': 'inline label - visible with data', 'Vendor Company': 'inline label - visible with data', 'Vendor Names': 'inline label - visible with data', 'Vendor Mobiles': 'inline label - visible with data', 'Vendor Emails': 'inline label - visible with data', 'Vendor Addresses': 'inline label - visible with data', 'Major Landowner': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Development Contributions per Lot': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', });
lyr_Estatelabel_77.set('fieldLabels', {'fid': 'hidden field', 'Estate/Address': 'inline label - visible with data', 'No. of Lots': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', });
lyr_ParcelAttributeslabel_78.set('fieldLabels', {'fid': 'no label', 'PARCEL': 'no label', 'Address': 'no label', 'Zoned / Unzoned': 'no label', 'Zoning': 'no label', 'Strategy': 'no label', 'Strategy Link': 'no label', 'Overlays': 'no label', 'Gross(Ha)': 'no label', 'NDH ': 'no label', 'Lot Yield @ 20Dw/Ha': 'no label', 'VALUE': 'no label', 'Market Value (20%DM)': 'no label', 'Current RLP': 'no label', 'Current OPC': 'no label', 'Market Value (15%DM)': 'no label', 'Market Value (25%DM)': 'no label', 'Market Value (30%DM)': 'no label', 'OWNERSHIP': 'no label', 'Estate Status': 'no label', 'Developer': 'no label', 'Company': 'no label', 'Directors': 'no label', 'Phone': 'no label', 'Email': 'no label', 'Address:': 'no label', 'Last Sold Price': 'no label', 'Last Sold Date': 'no label', 'Deal Link': 'no label', 'Zoned (Ha)': 'no label', 'OBJECTID': 'no label', 'PROP_PFI': 'no label', 'PROP_LGA_CODE': 'no label', 'Locality': 'no label', '_Name': 'no label', '_Growth Area': 'no label', '_Zoned / Rezone': 'no label', '_Current Zone': 'no label', '_Overlays': 'no label', });
lyr_ParcelAttributeslabel_78.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});