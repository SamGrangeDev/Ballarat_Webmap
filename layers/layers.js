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
                popuplayertitle: 'TRZ1 - State Transport Infrastructure',
                interactive: false,
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
                popuplayertitle: 'TRZ2 - Principal Road Network',
                interactive: false,
                title: '<img src="styles/legend/TRZ2PrincipalRoadNetwork_3.png" /> TRZ2 - Principal Road Network'
            });
var format_TRZ4OtherTransportUse_4 = new ol.format.GeoJSON();
var features_TRZ4OtherTransportUse_4 = format_TRZ4OtherTransportUse_4.readFeatures(json_TRZ4OtherTransportUse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ4OtherTransportUse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ4OtherTransportUse_4.addFeatures(features_TRZ4OtherTransportUse_4);
var lyr_TRZ4OtherTransportUse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ4OtherTransportUse_4, 
                style: style_TRZ4OtherTransportUse_4,
                popuplayertitle: 'TRZ4 - Other Transport Use',
                interactive: false,
                title: '<img src="styles/legend/TRZ4OtherTransportUse_4.png" /> TRZ4 - Other Transport Use'
            });
var format_TRZ3SignificantMunicipalRoad_5 = new ol.format.GeoJSON();
var features_TRZ3SignificantMunicipalRoad_5 = format_TRZ3SignificantMunicipalRoad_5.readFeatures(json_TRZ3SignificantMunicipalRoad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ3SignificantMunicipalRoad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ3SignificantMunicipalRoad_5.addFeatures(features_TRZ3SignificantMunicipalRoad_5);
var lyr_TRZ3SignificantMunicipalRoad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ3SignificantMunicipalRoad_5, 
                style: style_TRZ3SignificantMunicipalRoad_5,
                popuplayertitle: 'TRZ3 - Significant Municipal Road',
                interactive: false,
                title: '<img src="styles/legend/TRZ3SignificantMunicipalRoad_5.png" /> TRZ3 - Significant Municipal Road'
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
                popuplayertitle: 'PCRZ - Public Conservation and Resource Zone',
                interactive: false,
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
                popuplayertitle: 'PPRZ - Public Park and Recreation Zone',
                interactive: false,
                title: '<img src="styles/legend/PPRZPublicParkandRecreationZone_7.png" /> PPRZ - Public Park and Recreation Zone'
            });
var format_PUZ2PublicUseZoneEducation_8 = new ol.format.GeoJSON();
var features_PUZ2PublicUseZoneEducation_8 = format_PUZ2PublicUseZoneEducation_8.readFeatures(json_PUZ2PublicUseZoneEducation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ2PublicUseZoneEducation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ2PublicUseZoneEducation_8.addFeatures(features_PUZ2PublicUseZoneEducation_8);
var lyr_PUZ2PublicUseZoneEducation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ2PublicUseZoneEducation_8, 
                style: style_PUZ2PublicUseZoneEducation_8,
                popuplayertitle: 'PUZ2 - Public Use Zone-Education',
                interactive: false,
                title: '<img src="styles/legend/PUZ2PublicUseZoneEducation_8.png" /> PUZ2 - Public Use Zone-Education'
            });
var format_PUZ1PublicUseZoneServiceandUtility_9 = new ol.format.GeoJSON();
var features_PUZ1PublicUseZoneServiceandUtility_9 = format_PUZ1PublicUseZoneServiceandUtility_9.readFeatures(json_PUZ1PublicUseZoneServiceandUtility_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ1PublicUseZoneServiceandUtility_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ1PublicUseZoneServiceandUtility_9.addFeatures(features_PUZ1PublicUseZoneServiceandUtility_9);
var lyr_PUZ1PublicUseZoneServiceandUtility_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ1PublicUseZoneServiceandUtility_9, 
                style: style_PUZ1PublicUseZoneServiceandUtility_9,
                popuplayertitle: 'PUZ1 - Public Use Zone-Service and Utility',
                interactive: false,
                title: '<img src="styles/legend/PUZ1PublicUseZoneServiceandUtility_9.png" /> PUZ1 - Public Use Zone-Service and Utility'
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
                popuplayertitle: 'PUZ3 - Public Use Zone-Health & Community',
                interactive: false,
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
                popuplayertitle: 'PUZ6 - Public Use Zone-Local Government',
                interactive: false,
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
                popuplayertitle: 'PUZ7 - Public Use Zone-Other Public Use',
                interactive: false,
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
                popuplayertitle: 'GWAZ - Green Wedge A Zone',
                interactive: false,
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
                popuplayertitle: 'GWZ - Green Wedge Zone',
                interactive: false,
                title: '<img src="styles/legend/GWZGreenWedgeZone_14.png" /> GWZ - Green Wedge Zone'
            });
var format_RCZRuralConservationZone_15 = new ol.format.GeoJSON();
var features_RCZRuralConservationZone_15 = format_RCZRuralConservationZone_15.readFeatures(json_RCZRuralConservationZone_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCZRuralConservationZone_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCZRuralConservationZone_15.addFeatures(features_RCZRuralConservationZone_15);
var lyr_RCZRuralConservationZone_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCZRuralConservationZone_15, 
                style: style_RCZRuralConservationZone_15,
                popuplayertitle: 'RCZ - Rural Conservation Zone',
                interactive: false,
                title: '<img src="styles/legend/RCZRuralConservationZone_15.png" /> RCZ - Rural Conservation Zone'
            });
var format_RAZRuralActivityZone_16 = new ol.format.GeoJSON();
var features_RAZRuralActivityZone_16 = format_RAZRuralActivityZone_16.readFeatures(json_RAZRuralActivityZone_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAZRuralActivityZone_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAZRuralActivityZone_16.addFeatures(features_RAZRuralActivityZone_16);
var lyr_RAZRuralActivityZone_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAZRuralActivityZone_16, 
                style: style_RAZRuralActivityZone_16,
                popuplayertitle: 'RAZ - Rural Activity Zone',
                interactive: false,
                title: '<img src="styles/legend/RAZRuralActivityZone_16.png" /> RAZ - Rural Activity Zone'
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
                popuplayertitle: 'DZ - Dockland Zone',
                interactive: false,
                title: '<img src="styles/legend/DZDocklandZone_17.png" /> DZ - Dockland Zone'
            });
var format_SUZSpecialUseZone_18 = new ol.format.GeoJSON();
var features_SUZSpecialUseZone_18 = format_SUZSpecialUseZone_18.readFeatures(json_SUZSpecialUseZone_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUZSpecialUseZone_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUZSpecialUseZone_18.addFeatures(features_SUZSpecialUseZone_18);
var lyr_SUZSpecialUseZone_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUZSpecialUseZone_18, 
                style: style_SUZSpecialUseZone_18,
                popuplayertitle: 'SUZ - Special Use Zone',
                interactive: false,
                title: '<img src="styles/legend/SUZSpecialUseZone_18.png" /> SUZ - Special Use Zone'
            });
var format_PZPortZone_19 = new ol.format.GeoJSON();
var features_PZPortZone_19 = format_PZPortZone_19.readFeatures(json_PZPortZone_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PZPortZone_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PZPortZone_19.addFeatures(features_PZPortZone_19);
var lyr_PZPortZone_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PZPortZone_19, 
                style: style_PZPortZone_19,
                popuplayertitle: 'PZ - Port Zone',
                interactive: false,
                title: '<img src="styles/legend/PZPortZone_19.png" /> PZ - Port Zone'
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
                popuplayertitle: 'UFZ - Urban Floodway Zone',
                interactive: false,
                title: '<img src="styles/legend/UFZUrbanFloodwayZone_20.png" /> UFZ - Urban Floodway Zone'
            });
var format_C2ZCommercial2Zone_21 = new ol.format.GeoJSON();
var features_C2ZCommercial2Zone_21 = format_C2ZCommercial2Zone_21.readFeatures(json_C2ZCommercial2Zone_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C2ZCommercial2Zone_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C2ZCommercial2Zone_21.addFeatures(features_C2ZCommercial2Zone_21);
var lyr_C2ZCommercial2Zone_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C2ZCommercial2Zone_21, 
                style: style_C2ZCommercial2Zone_21,
                popuplayertitle: 'C2Z - Commercial 2 Zone',
                interactive: false,
                title: '<img src="styles/legend/C2ZCommercial2Zone_21.png" /> C2Z - Commercial 2 Zone'
            });
var format_C1ZCommercial1Zone_22 = new ol.format.GeoJSON();
var features_C1ZCommercial1Zone_22 = format_C1ZCommercial1Zone_22.readFeatures(json_C1ZCommercial1Zone_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C1ZCommercial1Zone_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C1ZCommercial1Zone_22.addFeatures(features_C1ZCommercial1Zone_22);
var lyr_C1ZCommercial1Zone_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C1ZCommercial1Zone_22, 
                style: style_C1ZCommercial1Zone_22,
                popuplayertitle: 'C1Z - Commercial 1 Zone',
                interactive: false,
                title: '<img src="styles/legend/C1ZCommercial1Zone_22.png" /> C1Z - Commercial 1 Zone'
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
                popuplayertitle: 'IN1Z - Industrial 1 Zone',
                interactive: false,
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
                popuplayertitle: 'IN2Z - Industrial 2 Zone',
                interactive: false,
                title: '<img src="styles/legend/IN2ZIndustrial2Zone_24.png" /> IN2Z - Industrial 2 Zone'
            });
var format_RLZRuralLivingZone_25 = new ol.format.GeoJSON();
var features_RLZRuralLivingZone_25 = format_RLZRuralLivingZone_25.readFeatures(json_RLZRuralLivingZone_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLZRuralLivingZone_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLZRuralLivingZone_25.addFeatures(features_RLZRuralLivingZone_25);
var lyr_RLZRuralLivingZone_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RLZRuralLivingZone_25, 
                style: style_RLZRuralLivingZone_25,
                popuplayertitle: 'RLZ - Rural Living Zone',
                interactive: false,
                title: '<img src="styles/legend/RLZRuralLivingZone_25.png" /> RLZ - Rural Living Zone'
            });
var format_IN3ZIndustrial3Zone_26 = new ol.format.GeoJSON();
var features_IN3ZIndustrial3Zone_26 = format_IN3ZIndustrial3Zone_26.readFeatures(json_IN3ZIndustrial3Zone_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN3ZIndustrial3Zone_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN3ZIndustrial3Zone_26.addFeatures(features_IN3ZIndustrial3Zone_26);
var lyr_IN3ZIndustrial3Zone_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN3ZIndustrial3Zone_26, 
                style: style_IN3ZIndustrial3Zone_26,
                popuplayertitle: 'IN3Z - Industrial 3 Zone',
                interactive: false,
                title: '<img src="styles/legend/IN3ZIndustrial3Zone_26.png" /> IN3Z - Industrial 3 Zone'
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
                popuplayertitle: 'FZ - Farming Zone',
                interactive: false,
                title: '<img src="styles/legend/FZFarmingZone_27.png" /> FZ - Farming Zone'
            });
var format_CCZCapitalCityZone_28 = new ol.format.GeoJSON();
var features_CCZCapitalCityZone_28 = format_CCZCapitalCityZone_28.readFeatures(json_CCZCapitalCityZone_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCZCapitalCityZone_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCZCapitalCityZone_28.addFeatures(features_CCZCapitalCityZone_28);
var lyr_CCZCapitalCityZone_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCZCapitalCityZone_28, 
                style: style_CCZCapitalCityZone_28,
                popuplayertitle: 'CCZ - Capital City Zone',
                interactive: false,
                title: '<img src="styles/legend/CCZCapitalCityZone_28.png" /> CCZ - Capital City Zone'
            });
var format_ACZActivityCentreZone_29 = new ol.format.GeoJSON();
var features_ACZActivityCentreZone_29 = format_ACZActivityCentreZone_29.readFeatures(json_ACZActivityCentreZone_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACZActivityCentreZone_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACZActivityCentreZone_29.addFeatures(features_ACZActivityCentreZone_29);
var lyr_ACZActivityCentreZone_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACZActivityCentreZone_29, 
                style: style_ACZActivityCentreZone_29,
                popuplayertitle: 'ACZ - Activity Centre Zone',
                interactive: false,
                title: '<img src="styles/legend/ACZActivityCentreZone_29.png" /> ACZ - Activity Centre Zone'
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
                popuplayertitle: 'CDZ - Comprehensive Development Zone',
                interactive: false,
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
                popuplayertitle: 'GRZ - General Residential Zone',
                interactive: false,
                title: '<img src="styles/legend/GRZGeneralResidentialZone_31.png" /> GRZ - General Residential Zone'
            });
var format_MUZMixedUseZone_32 = new ol.format.GeoJSON();
var features_MUZMixedUseZone_32 = format_MUZMixedUseZone_32.readFeatures(json_MUZMixedUseZone_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUZMixedUseZone_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUZMixedUseZone_32.addFeatures(features_MUZMixedUseZone_32);
var lyr_MUZMixedUseZone_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUZMixedUseZone_32, 
                style: style_MUZMixedUseZone_32,
                popuplayertitle: 'MUZ - Mixed Use Zone',
                interactive: false,
                title: '<img src="styles/legend/MUZMixedUseZone_32.png" /> MUZ - Mixed Use Zone'
            });
var format_LDRZLowDensityResidentialZone_33 = new ol.format.GeoJSON();
var features_LDRZLowDensityResidentialZone_33 = format_LDRZLowDensityResidentialZone_33.readFeatures(json_LDRZLowDensityResidentialZone_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LDRZLowDensityResidentialZone_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LDRZLowDensityResidentialZone_33.addFeatures(features_LDRZLowDensityResidentialZone_33);
var lyr_LDRZLowDensityResidentialZone_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LDRZLowDensityResidentialZone_33, 
                style: style_LDRZLowDensityResidentialZone_33,
                popuplayertitle: 'LDRZ - Low Density Residential Zone',
                interactive: false,
                title: '<img src="styles/legend/LDRZLowDensityResidentialZone_33.png" /> LDRZ - Low Density Residential Zone'
            });
var format_PDZPriorityDevelopmentZone_34 = new ol.format.GeoJSON();
var features_PDZPriorityDevelopmentZone_34 = format_PDZPriorityDevelopmentZone_34.readFeatures(json_PDZPriorityDevelopmentZone_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDZPriorityDevelopmentZone_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDZPriorityDevelopmentZone_34.addFeatures(features_PDZPriorityDevelopmentZone_34);
var lyr_PDZPriorityDevelopmentZone_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDZPriorityDevelopmentZone_34, 
                style: style_PDZPriorityDevelopmentZone_34,
                popuplayertitle: 'PDZ - Priority Development Zone',
                interactive: false,
                title: '<img src="styles/legend/PDZPriorityDevelopmentZone_34.png" /> PDZ - Priority Development Zone'
            });
var format_NRZNeighbourhoodResidentialZone_35 = new ol.format.GeoJSON();
var features_NRZNeighbourhoodResidentialZone_35 = format_NRZNeighbourhoodResidentialZone_35.readFeatures(json_NRZNeighbourhoodResidentialZone_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRZNeighbourhoodResidentialZone_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NRZNeighbourhoodResidentialZone_35.addFeatures(features_NRZNeighbourhoodResidentialZone_35);
var lyr_NRZNeighbourhoodResidentialZone_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NRZNeighbourhoodResidentialZone_35, 
                style: style_NRZNeighbourhoodResidentialZone_35,
                popuplayertitle: 'NRZ - Neighbourhood Residential Zone',
                interactive: false,
                title: '<img src="styles/legend/NRZNeighbourhoodResidentialZone_35.png" /> NRZ - Neighbourhood Residential Zone'
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
                popuplayertitle: 'RGZ - Residential Growth Zone',
                interactive: false,
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
                popuplayertitle: 'TZ - Township Zone',
                interactive: false,
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
                popuplayertitle: 'UGZ - Urban Growth Zone',
                interactive: false,
                title: '<img src="styles/legend/UGZUrbanGrowthZone_38.png" /> UGZ - Urban Growth Zone'
            });
var format_SMOSalinityManagementOverlay_39 = new ol.format.GeoJSON();
var features_SMOSalinityManagementOverlay_39 = format_SMOSalinityManagementOverlay_39.readFeatures(json_SMOSalinityManagementOverlay_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMOSalinityManagementOverlay_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMOSalinityManagementOverlay_39.addFeatures(features_SMOSalinityManagementOverlay_39);
var lyr_SMOSalinityManagementOverlay_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMOSalinityManagementOverlay_39, 
                style: style_SMOSalinityManagementOverlay_39,
                popuplayertitle: 'SMO - Salinity Management Overlay',
                interactive: false,
                title: '<img src="styles/legend/SMOSalinityManagementOverlay_39.png" /> SMO - Salinity Management Overlay'
            });
var format_SCOSpecificControlsOverlay_40 = new ol.format.GeoJSON();
var features_SCOSpecificControlsOverlay_40 = format_SCOSpecificControlsOverlay_40.readFeatures(json_SCOSpecificControlsOverlay_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCOSpecificControlsOverlay_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCOSpecificControlsOverlay_40.addFeatures(features_SCOSpecificControlsOverlay_40);
var lyr_SCOSpecificControlsOverlay_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCOSpecificControlsOverlay_40, 
                style: style_SCOSpecificControlsOverlay_40,
                popuplayertitle: 'SCO - Specific Controls Overlay',
                interactive: false,
                title: '<img src="styles/legend/SCOSpecificControlsOverlay_40.png" /> SCO - Specific Controls Overlay'
            });
var format_RSARecognitionandSettlementAgreement_41 = new ol.format.GeoJSON();
var features_RSARecognitionandSettlementAgreement_41 = format_RSARecognitionandSettlementAgreement_41.readFeatures(json_RSARecognitionandSettlementAgreement_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSARecognitionandSettlementAgreement_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSARecognitionandSettlementAgreement_41.addFeatures(features_RSARecognitionandSettlementAgreement_41);
var lyr_RSARecognitionandSettlementAgreement_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSARecognitionandSettlementAgreement_41, 
                style: style_RSARecognitionandSettlementAgreement_41,
                popuplayertitle: 'RSA - Recognition and Settlement Agreement',
                interactive: false,
                title: '<img src="styles/legend/RSARecognitionandSettlementAgreement_41.png" /> RSA - Recognition and Settlement Agreement'
            });
var format_RFORuralFloodwayOverlay_42 = new ol.format.GeoJSON();
var features_RFORuralFloodwayOverlay_42 = format_RFORuralFloodwayOverlay_42.readFeatures(json_RFORuralFloodwayOverlay_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RFORuralFloodwayOverlay_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RFORuralFloodwayOverlay_42.addFeatures(features_RFORuralFloodwayOverlay_42);
var lyr_RFORuralFloodwayOverlay_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RFORuralFloodwayOverlay_42, 
                style: style_RFORuralFloodwayOverlay_42,
                popuplayertitle: 'RFO - Rural Floodway Overlay',
                interactive: false,
                title: '<img src="styles/legend/RFORuralFloodwayOverlay_42.png" /> RFO - Rural Floodway Overlay'
            });
var format_RAPRegisteredAboriginalParties_43 = new ol.format.GeoJSON();
var features_RAPRegisteredAboriginalParties_43 = format_RAPRegisteredAboriginalParties_43.readFeatures(json_RAPRegisteredAboriginalParties_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAPRegisteredAboriginalParties_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAPRegisteredAboriginalParties_43.addFeatures(features_RAPRegisteredAboriginalParties_43);
var lyr_RAPRegisteredAboriginalParties_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAPRegisteredAboriginalParties_43, 
                style: style_RAPRegisteredAboriginalParties_43,
                popuplayertitle: 'RAP - Registered Aboriginal Parties',
                interactive: false,
                title: '<img src="styles/legend/RAPRegisteredAboriginalParties_43.png" /> RAP - Registered Aboriginal Parties'
            });
var format_EMOErosionManagementOverlay_44 = new ol.format.GeoJSON();
var features_EMOErosionManagementOverlay_44 = format_EMOErosionManagementOverlay_44.readFeatures(json_EMOErosionManagementOverlay_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMOErosionManagementOverlay_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMOErosionManagementOverlay_44.addFeatures(features_EMOErosionManagementOverlay_44);
var lyr_EMOErosionManagementOverlay_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMOErosionManagementOverlay_44, 
                style: style_EMOErosionManagementOverlay_44,
                popuplayertitle: 'EMO - Erosion Management Overlay',
                interactive: false,
                title: '<img src="styles/legend/EMOErosionManagementOverlay_44.png" /> EMO - Erosion Management Overlay'
            });
var format_EAOEnvironmentalAuditOverlay_45 = new ol.format.GeoJSON();
var features_EAOEnvironmentalAuditOverlay_45 = format_EAOEnvironmentalAuditOverlay_45.readFeatures(json_EAOEnvironmentalAuditOverlay_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAOEnvironmentalAuditOverlay_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EAOEnvironmentalAuditOverlay_45.addFeatures(features_EAOEnvironmentalAuditOverlay_45);
var lyr_EAOEnvironmentalAuditOverlay_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EAOEnvironmentalAuditOverlay_45, 
                style: style_EAOEnvironmentalAuditOverlay_45,
                popuplayertitle: 'EAO - Environmental Audit Overlay',
                interactive: false,
                title: '<img src="styles/legend/EAOEnvironmentalAuditOverlay_45.png" /> EAO - Environmental Audit Overlay'
            });
var format_DPODevelopmentPlanOverlay_46 = new ol.format.GeoJSON();
var features_DPODevelopmentPlanOverlay_46 = format_DPODevelopmentPlanOverlay_46.readFeatures(json_DPODevelopmentPlanOverlay_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPODevelopmentPlanOverlay_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPODevelopmentPlanOverlay_46.addFeatures(features_DPODevelopmentPlanOverlay_46);
var lyr_DPODevelopmentPlanOverlay_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPODevelopmentPlanOverlay_46, 
                style: style_DPODevelopmentPlanOverlay_46,
                popuplayertitle: 'DPO - Development Plan Overlay',
                interactive: false,
                title: '<img src="styles/legend/DPODevelopmentPlanOverlay_46.png" /> DPO - Development Plan Overlay'
            });
var format_DDODesignandDevelopmentOverlay_47 = new ol.format.GeoJSON();
var features_DDODesignandDevelopmentOverlay_47 = format_DDODesignandDevelopmentOverlay_47.readFeatures(json_DDODesignandDevelopmentOverlay_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDODesignandDevelopmentOverlay_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDODesignandDevelopmentOverlay_47.addFeatures(features_DDODesignandDevelopmentOverlay_47);
var lyr_DDODesignandDevelopmentOverlay_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DDODesignandDevelopmentOverlay_47, 
                style: style_DDODesignandDevelopmentOverlay_47,
                popuplayertitle: 'DDO - Design and Development Overlay',
                interactive: false,
                title: '<img src="styles/legend/DDODesignandDevelopmentOverlay_47.png" /> DDO - Design and Development Overlay'
            });
var format_DCPODevelopmentContributionsPlanOverlay_48 = new ol.format.GeoJSON();
var features_DCPODevelopmentContributionsPlanOverlay_48 = format_DCPODevelopmentContributionsPlanOverlay_48.readFeatures(json_DCPODevelopmentContributionsPlanOverlay_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPODevelopmentContributionsPlanOverlay_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPODevelopmentContributionsPlanOverlay_48.addFeatures(features_DCPODevelopmentContributionsPlanOverlay_48);
var lyr_DCPODevelopmentContributionsPlanOverlay_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPODevelopmentContributionsPlanOverlay_48, 
                style: style_DCPODevelopmentContributionsPlanOverlay_48,
                popuplayertitle: 'DCPO - Development Contributions Plan Overlay',
                interactive: false,
                title: '<img src="styles/legend/DCPODevelopmentContributionsPlanOverlay_48.png" /> DCPO - Development Contributions Plan Overlay'
            });
var format_AEOAirportEnvironsOverlay_49 = new ol.format.GeoJSON();
var features_AEOAirportEnvironsOverlay_49 = format_AEOAirportEnvironsOverlay_49.readFeatures(json_AEOAirportEnvironsOverlay_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEOAirportEnvironsOverlay_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEOAirportEnvironsOverlay_49.addFeatures(features_AEOAirportEnvironsOverlay_49);
var lyr_AEOAirportEnvironsOverlay_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEOAirportEnvironsOverlay_49, 
                style: style_AEOAirportEnvironsOverlay_49,
                popuplayertitle: 'AEO - Airport Environs Overlay',
                interactive: false,
                title: '<img src="styles/legend/AEOAirportEnvironsOverlay_49.png" /> AEO - Airport Environs Overlay'
            });
var format_BAOBufferAreaOverlay_50 = new ol.format.GeoJSON();
var features_BAOBufferAreaOverlay_50 = format_BAOBufferAreaOverlay_50.readFeatures(json_BAOBufferAreaOverlay_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAOBufferAreaOverlay_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAOBufferAreaOverlay_50.addFeatures(features_BAOBufferAreaOverlay_50);
var lyr_BAOBufferAreaOverlay_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAOBufferAreaOverlay_50, 
                style: style_BAOBufferAreaOverlay_50,
                popuplayertitle: 'BAO - Buffer Area Overlay',
                interactive: false,
                title: '<img src="styles/legend/BAOBufferAreaOverlay_50.png" /> BAO - Buffer Area Overlay'
            });
var format_BMOBushfireManagementOverlay_51 = new ol.format.GeoJSON();
var features_BMOBushfireManagementOverlay_51 = format_BMOBushfireManagementOverlay_51.readFeatures(json_BMOBushfireManagementOverlay_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMOBushfireManagementOverlay_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfireManagementOverlay_51.addFeatures(features_BMOBushfireManagementOverlay_51);
var lyr_BMOBushfireManagementOverlay_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfireManagementOverlay_51, 
                style: style_BMOBushfireManagementOverlay_51,
                popuplayertitle: 'BMO - Bushfire Management Overlay',
                interactive: false,
                title: '<img src="styles/legend/BMOBushfireManagementOverlay_51.png" /> BMO - Bushfire Management Overlay'
            });
var format_ESOEnvironmentalSignificanceOverlay_52 = new ol.format.GeoJSON();
var features_ESOEnvironmentalSignificanceOverlay_52 = format_ESOEnvironmentalSignificanceOverlay_52.readFeatures(json_ESOEnvironmentalSignificanceOverlay_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESOEnvironmentalSignificanceOverlay_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmentalSignificanceOverlay_52.addFeatures(features_ESOEnvironmentalSignificanceOverlay_52);
var lyr_ESOEnvironmentalSignificanceOverlay_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmentalSignificanceOverlay_52, 
                style: style_ESOEnvironmentalSignificanceOverlay_52,
                popuplayertitle: 'ESO - Environmental Significance Overlay',
                interactive: false,
                title: '<img src="styles/legend/ESOEnvironmentalSignificanceOverlay_52.png" /> ESO - Environmental Significance Overlay'
            });
var format_PAOPublicAcquisitionOverlay_53 = new ol.format.GeoJSON();
var features_PAOPublicAcquisitionOverlay_53 = format_PAOPublicAcquisitionOverlay_53.readFeatures(json_PAOPublicAcquisitionOverlay_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAOPublicAcquisitionOverlay_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAOPublicAcquisitionOverlay_53.addFeatures(features_PAOPublicAcquisitionOverlay_53);
var lyr_PAOPublicAcquisitionOverlay_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAOPublicAcquisitionOverlay_53, 
                style: style_PAOPublicAcquisitionOverlay_53,
                popuplayertitle: 'PAO - Public Acquisition Overlay',
                interactive: false,
                title: '<img src="styles/legend/PAOPublicAcquisitionOverlay_53.png" /> PAO - Public Acquisition Overlay'
            });
var format_RORestructureOverlay_54 = new ol.format.GeoJSON();
var features_RORestructureOverlay_54 = format_RORestructureOverlay_54.readFeatures(json_RORestructureOverlay_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RORestructureOverlay_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_54.addFeatures(features_RORestructureOverlay_54);
var lyr_RORestructureOverlay_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_54, 
                style: style_RORestructureOverlay_54,
                popuplayertitle: 'RO - Restructure Overlay',
                interactive: false,
                title: '<img src="styles/legend/RORestructureOverlay_54.png" /> RO - Restructure Overlay'
            });
var format_RXORoadClosureOverlay_55 = new ol.format.GeoJSON();
var features_RXORoadClosureOverlay_55 = format_RXORoadClosureOverlay_55.readFeatures(json_RXORoadClosureOverlay_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RXORoadClosureOverlay_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RXORoadClosureOverlay_55.addFeatures(features_RXORoadClosureOverlay_55);
var lyr_RXORoadClosureOverlay_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RXORoadClosureOverlay_55, 
                style: style_RXORoadClosureOverlay_55,
                popuplayertitle: 'RXO - Road Closure Overlay',
                interactive: false,
                title: '<img src="styles/legend/RXORoadClosureOverlay_55.png" /> RXO - Road Closure Overlay'
            });
var format_SLOSignificantLandscapeOverlay_56 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_56 = format_SLOSignificantLandscapeOverlay_56.readFeatures(json_SLOSignificantLandscapeOverlay_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOSignificantLandscapeOverlay_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_56.addFeatures(features_SLOSignificantLandscapeOverlay_56);
var lyr_SLOSignificantLandscapeOverlay_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_56, 
                style: style_SLOSignificantLandscapeOverlay_56,
                popuplayertitle: 'SLO - Significant Landscape Overlay',
                interactive: false,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_56.png" /> SLO - Significant Landscape Overlay'
            });
var format_SROStateResourceOverlay_57 = new ol.format.GeoJSON();
var features_SROStateResourceOverlay_57 = format_SROStateResourceOverlay_57.readFeatures(json_SROStateResourceOverlay_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SROStateResourceOverlay_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SROStateResourceOverlay_57.addFeatures(features_SROStateResourceOverlay_57);
var lyr_SROStateResourceOverlay_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SROStateResourceOverlay_57, 
                style: style_SROStateResourceOverlay_57,
                popuplayertitle: 'SRO - State Resource Overlay',
                interactive: false,
                title: '<img src="styles/legend/SROStateResourceOverlay_57.png" /> SRO - State Resource Overlay'
            });
var format_SteepSlope_58 = new ol.format.GeoJSON();
var features_SteepSlope_58 = format_SteepSlope_58.readFeatures(json_SteepSlope_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SteepSlope_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SteepSlope_58.addFeatures(features_SteepSlope_58);
var lyr_SteepSlope_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SteepSlope_58, 
                style: style_SteepSlope_58,
                popuplayertitle: 'Steep Slope',
                interactive: false,
                title: '<img src="styles/legend/SteepSlope_58.png" /> Steep Slope'
            });
var format_Easements_59 = new ol.format.GeoJSON();
var features_Easements_59 = format_Easements_59.readFeatures(json_Easements_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Easements_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Easements_59.addFeatures(features_Easements_59);
var lyr_Easements_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Easements_59, 
                style: style_Easements_59,
                popuplayertitle: 'Easements',
                interactive: false,
                title: '<img src="styles/legend/Easements_59.png" /> Easements'
            });
var format_WBWaterwaysBuffered_60 = new ol.format.GeoJSON();
var features_WBWaterwaysBuffered_60 = format_WBWaterwaysBuffered_60.readFeatures(json_WBWaterwaysBuffered_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBWaterwaysBuffered_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBWaterwaysBuffered_60.addFeatures(features_WBWaterwaysBuffered_60);
var lyr_WBWaterwaysBuffered_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBWaterwaysBuffered_60, 
                style: style_WBWaterwaysBuffered_60,
                popuplayertitle: 'WB - Waterways Buffered',
                interactive: false,
                title: '<img src="styles/legend/WBWaterwaysBuffered_60.png" /> WB - Waterways Buffered'
            });
var format_FOFloodwayOverlay_61 = new ol.format.GeoJSON();
var features_FOFloodwayOverlay_61 = format_FOFloodwayOverlay_61.readFeatures(json_FOFloodwayOverlay_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFloodwayOverlay_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFloodwayOverlay_61.addFeatures(features_FOFloodwayOverlay_61);
var lyr_FOFloodwayOverlay_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFloodwayOverlay_61, 
                style: style_FOFloodwayOverlay_61,
                popuplayertitle: 'FO - Floodway Overlay',
                interactive: false,
                title: '<img src="styles/legend/FOFloodwayOverlay_61.png" /> FO - Floodway Overlay'
            });
var format_HeritageRegister_62 = new ol.format.GeoJSON();
var features_HeritageRegister_62 = format_HeritageRegister_62.readFeatures(json_HeritageRegister_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageRegister_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageRegister_62.addFeatures(features_HeritageRegister_62);
var lyr_HeritageRegister_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageRegister_62, 
                style: style_HeritageRegister_62,
                popuplayertitle: 'Heritage Register',
                interactive: false,
                title: '<img src="styles/legend/HeritageRegister_62.png" /> Heritage Register'
            });
var format_HOHeritageOverlay_63 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_63 = format_HOHeritageOverlay_63.readFeatures(json_HOHeritageOverlay_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOHeritageOverlay_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_63.addFeatures(features_HOHeritageOverlay_63);
var lyr_HOHeritageOverlay_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_63, 
                style: style_HOHeritageOverlay_63,
                popuplayertitle: 'HO - Heritage Overlay',
                interactive: false,
                title: '<img src="styles/legend/HOHeritageOverlay_63.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_64 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_64 = format_LSIOLandSubjecttoInundationOverlay_64.readFeatures(json_LSIOLandSubjecttoInundationOverlay_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_64.addFeatures(features_LSIOLandSubjecttoInundationOverlay_64);
var lyr_LSIOLandSubjecttoInundationOverlay_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_64, 
                style: style_LSIOLandSubjecttoInundationOverlay_64,
                popuplayertitle: 'LSIO - Land Subject to Inundation Overlay',
                interactive: false,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_64.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_VPOVegetationProtectionOverlay_65 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_65 = format_VPOVegetationProtectionOverlay_65.readFeatures(json_VPOVegetationProtectionOverlay_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VPOVegetationProtectionOverlay_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_65.addFeatures(features_VPOVegetationProtectionOverlay_65);
var lyr_VPOVegetationProtectionOverlay_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_65, 
                style: style_VPOVegetationProtectionOverlay_65,
                popuplayertitle: 'VPO - Vegetation Protection Overlay',
                interactive: false,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_65.png" /> VPO - Vegetation Protection Overlay'
            });
var format_SSPFloodScenario5_66 = new ol.format.GeoJSON();
var features_SSPFloodScenario5_66 = format_SSPFloodScenario5_66.readFeatures(json_SSPFloodScenario5_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSPFloodScenario5_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSPFloodScenario5_66.addFeatures(features_SSPFloodScenario5_66);
var lyr_SSPFloodScenario5_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSPFloodScenario5_66, 
                style: style_SSPFloodScenario5_66,
                popuplayertitle: 'SSP Flood Scenario 5',
                interactive: false,
                title: '<img src="styles/legend/SSPFloodScenario5_66.png" /> SSP Flood Scenario 5'
            });
var format_BallaratWestGrowthArea_67 = new ol.format.GeoJSON();
var features_BallaratWestGrowthArea_67 = format_BallaratWestGrowthArea_67.readFeatures(json_BallaratWestGrowthArea_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratWestGrowthArea_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratWestGrowthArea_67.addFeatures(features_BallaratWestGrowthArea_67);
var lyr_BallaratWestGrowthArea_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratWestGrowthArea_67, 
                style: style_BallaratWestGrowthArea_67,
                popuplayertitle: 'Ballarat West Growth Area',
                interactive: false,
                title: '<img src="styles/legend/BallaratWestGrowthArea_67.png" /> Ballarat West Growth Area'
            });
var format_BallaratNorthWesternGrowthArea_68 = new ol.format.GeoJSON();
var features_BallaratNorthWesternGrowthArea_68 = format_BallaratNorthWesternGrowthArea_68.readFeatures(json_BallaratNorthWesternGrowthArea_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratNorthWesternGrowthArea_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratNorthWesternGrowthArea_68.addFeatures(features_BallaratNorthWesternGrowthArea_68);
var lyr_BallaratNorthWesternGrowthArea_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratNorthWesternGrowthArea_68, 
                style: style_BallaratNorthWesternGrowthArea_68,
                popuplayertitle: 'Ballarat North Western Growth Area',
                interactive: false,
                title: '<img src="styles/legend/BallaratNorthWesternGrowthArea_68.png" /> Ballarat North Western Growth Area'
            });
var format_BallaratNorthPSPExpandedArea_69 = new ol.format.GeoJSON();
var features_BallaratNorthPSPExpandedArea_69 = format_BallaratNorthPSPExpandedArea_69.readFeatures(json_BallaratNorthPSPExpandedArea_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratNorthPSPExpandedArea_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratNorthPSPExpandedArea_69.addFeatures(features_BallaratNorthPSPExpandedArea_69);
var lyr_BallaratNorthPSPExpandedArea_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratNorthPSPExpandedArea_69, 
                style: style_BallaratNorthPSPExpandedArea_69,
                popuplayertitle: 'Ballarat North PSP Expanded Area',
                interactive: false,
                title: '<img src="styles/legend/BallaratNorthPSPExpandedArea_69.png" /> Ballarat North PSP Expanded Area'
            });
var format_BallaratNorthPSPCoreArea_70 = new ol.format.GeoJSON();
var features_BallaratNorthPSPCoreArea_70 = format_BallaratNorthPSPCoreArea_70.readFeatures(json_BallaratNorthPSPCoreArea_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratNorthPSPCoreArea_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratNorthPSPCoreArea_70.addFeatures(features_BallaratNorthPSPCoreArea_70);
var lyr_BallaratNorthPSPCoreArea_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratNorthPSPCoreArea_70, 
                style: style_BallaratNorthPSPCoreArea_70,
                popuplayertitle: 'Ballarat North PSP Core Area',
                interactive: false,
                title: '<img src="styles/legend/BallaratNorthPSPCoreArea_70.png" /> Ballarat North PSP Core Area'
            });
var format_BallaratWestPSPBoundary_71 = new ol.format.GeoJSON();
var features_BallaratWestPSPBoundary_71 = format_BallaratWestPSPBoundary_71.readFeatures(json_BallaratWestPSPBoundary_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratWestPSPBoundary_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratWestPSPBoundary_71.addFeatures(features_BallaratWestPSPBoundary_71);
var lyr_BallaratWestPSPBoundary_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratWestPSPBoundary_71, 
                style: style_BallaratWestPSPBoundary_71,
                popuplayertitle: 'Ballarat West PSP Boundary',
                interactive: false,
                title: '<img src="styles/legend/BallaratWestPSPBoundary_71.png" /> Ballarat West PSP Boundary'
            });
var format_AlfredtonWestPSP_72 = new ol.format.GeoJSON();
var features_AlfredtonWestPSP_72 = format_AlfredtonWestPSP_72.readFeatures(json_AlfredtonWestPSP_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlfredtonWestPSP_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlfredtonWestPSP_72.addFeatures(features_AlfredtonWestPSP_72);
var lyr_AlfredtonWestPSP_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlfredtonWestPSP_72, 
                style: style_AlfredtonWestPSP_72,
                popuplayertitle: 'Alfredton West PSP',
                interactive: false,
                title: '<img src="styles/legend/AlfredtonWestPSP_72.png" /> Alfredton West PSP'
            });
var lyr_BallaratWestFutureResidential_73 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballarat West Future Residential<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BallaratWestFutureResidential_73.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16000884.295416, -4524619.305214, 16008461.115515, -4515905.193793]
        })
    });
var lyr_BallaratNorthWesternFutureResidential_74 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballarat North Western Future Residential<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BallaratNorthWesternFutureResidential_74.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16001266.647699, -4515895.095425, 16005008.597502, -4510100.929159]
        })
    });
var lyr_BallaratNorthExpandedAreaLandscapeandVisual_75 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballarat North Expanded Area Landscape and Visual<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BallaratNorthExpandedAreaLandscapeandVisual_75.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16008215.438631, -4508498.682904, 16011333.344392, -4505802.753757]
        })
    });
var lyr_BallaratNorthCoreAreaLandusePlan_76 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballarat North Core Area Land use Plan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BallaratNorthCoreAreaLandusePlan_76.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16008405.480148, -4511700.757222, 16012909.764971, -4507906.973013]
        })
    });
var lyr_BallaratWestPSP_77 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ballarat West PSP<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BallaratWestPSP_77.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16005331.307473, -4525979.174237, 16011901.810285, -4516441.245329]
        })
    });
var lyr_AlfredtonWestPSP_78 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Alfredton West PSP<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AlfredtonWestPSP_78.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16003168.870260, -4517363.692419, 16006323.877694, -4514342.921868]
        })
    });
var lyr_HeritageManagementMap_79 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Heritage Management Map<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeritageManagementMap_79.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16011726.319093, -4511722.867291, 16012922.689103, -4510148.245610]
        })
    });
var format_Unzoned_80 = new ol.format.GeoJSON();
var features_Unzoned_80 = format_Unzoned_80.readFeatures(json_Unzoned_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unzoned_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unzoned_80.addFeatures(features_Unzoned_80);
var lyr_Unzoned_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unzoned_80, 
                style: style_Unzoned_80,
                popuplayertitle: 'Unzoned',
                interactive: true,
                title: '<img src="styles/legend/Unzoned_80.png" /> Unzoned'
            });
var format_Rezone_81 = new ol.format.GeoJSON();
var features_Rezone_81 = format_Rezone_81.readFeatures(json_Rezone_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rezone_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rezone_81.addFeatures(features_Rezone_81);
var lyr_Rezone_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rezone_81, 
                style: style_Rezone_81,
                popuplayertitle: 'Rezone',
                interactive: true,
                title: '<img src="styles/legend/Rezone_81.png" /> Rezone'
            });
var format_Zoned_82 = new ol.format.GeoJSON();
var features_Zoned_82 = format_Zoned_82.readFeatures(json_Zoned_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoned_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoned_82.addFeatures(features_Zoned_82);
var lyr_Zoned_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoned_82, 
                style: style_Zoned_82,
                popuplayertitle: 'Zoned',
                interactive: true,
                title: '<img src="styles/legend/Zoned_82.png" /> Zoned'
            });
var format_Suburb_83 = new ol.format.GeoJSON();
var features_Suburb_83 = format_Suburb_83.readFeatures(json_Suburb_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_83.addFeatures(features_Suburb_83);
var lyr_Suburb_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_83, 
                style: style_Suburb_83,
                popuplayertitle: 'Suburb',
                interactive: false,
                title: '<img src="styles/legend/Suburb_83.png" /> Suburb'
            });
var format_BallaratLGA_84 = new ol.format.GeoJSON();
var features_BallaratLGA_84 = format_BallaratLGA_84.readFeatures(json_BallaratLGA_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BallaratLGA_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BallaratLGA_84.addFeatures(features_BallaratLGA_84);
var lyr_BallaratLGA_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BallaratLGA_84, 
                style: style_BallaratLGA_84,
                popuplayertitle: 'Ballarat LGA',
                interactive: false,
                title: '<img src="styles/legend/BallaratLGA_84.png" /> Ballarat LGA'
            });
var format_Estate_85 = new ol.format.GeoJSON();
var features_Estate_85 = format_Estate_85.readFeatures(json_Estate_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estate_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estate_85.addFeatures(features_Estate_85);
var lyr_Estate_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estate_85, 
                style: style_Estate_85,
                popuplayertitle: 'Estate',
                interactive: true,
                title: '<img src="styles/legend/Estate_85.png" /> Estate'
            });
var format_MajorLandOwner_86 = new ol.format.GeoJSON();
var features_MajorLandOwner_86 = format_MajorLandOwner_86.readFeatures(json_MajorLandOwner_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorLandOwner_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorLandOwner_86.addFeatures(features_MajorLandOwner_86);
var lyr_MajorLandOwner_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorLandOwner_86, 
                style: style_MajorLandOwner_86,
                popuplayertitle: 'Major Land Owner',
                interactive: false,
                title: '<img src="styles/legend/MajorLandOwner_86.png" /> Major Land Owner'
            });
var format_Estatelabel_87 = new ol.format.GeoJSON();
var features_Estatelabel_87 = format_Estatelabel_87.readFeatures(json_Estatelabel_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estatelabel_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estatelabel_87.addFeatures(features_Estatelabel_87);
var lyr_Estatelabel_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estatelabel_87, 
                style: style_Estatelabel_87,
                popuplayertitle: 'Estate label',
                interactive: false,
                title: '<img src="styles/legend/Estatelabel_87.png" /> Estate label'
            });
var format_ParcelAttributesLabel_88 = new ol.format.GeoJSON();
var features_ParcelAttributesLabel_88 = format_ParcelAttributesLabel_88.readFeatures(json_ParcelAttributesLabel_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelAttributesLabel_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelAttributesLabel_88.addFeatures(features_ParcelAttributesLabel_88);
var lyr_ParcelAttributesLabel_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelAttributesLabel_88, 
                style: style_ParcelAttributesLabel_88,
                popuplayertitle: 'Parcel Attributes Label',
                interactive: false,
                title: '<img src="styles/legend/ParcelAttributesLabel_88.png" /> Parcel Attributes Label'
            });
var group_LabelSwitch = new ol.layer.Group({
                                layers: [lyr_Estatelabel_87,lyr_ParcelAttributesLabel_88,],
                                fold: "open",
                                title: 'Label Switch'});
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_83,lyr_BallaratLGA_84,lyr_Estate_85,lyr_MajorLandOwner_86,],
                                fold: "open",
                                title: 'Administrative'});
var group_ParcelAttributes = new ol.layer.Group({
                                layers: [lyr_Unzoned_80,lyr_Rezone_81,lyr_Zoned_82,],
                                fold: "open",
                                title: 'Parcel Attributes'});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_BallaratWestFutureResidential_73,lyr_BallaratNorthWesternFutureResidential_74,lyr_BallaratNorthExpandedAreaLandscapeandVisual_75,lyr_BallaratNorthCoreAreaLandusePlan_76,lyr_BallaratWestPSP_77,lyr_AlfredtonWestPSP_78,lyr_HeritageManagementMap_79,],
                                fold: "open",
                                title: 'PSP'});
var group_GrowthAreaBoundaries = new ol.layer.Group({
                                layers: [lyr_BallaratWestGrowthArea_67,lyr_BallaratNorthWesternGrowthArea_68,lyr_BallaratNorthPSPExpandedArea_69,lyr_BallaratNorthPSPCoreArea_70,lyr_BallaratWestPSPBoundary_71,lyr_AlfredtonWestPSP_72,],
                                fold: "open",
                                title: 'Growth Area Boundaries'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_WBWaterwaysBuffered_60,lyr_FOFloodwayOverlay_61,lyr_HeritageRegister_62,lyr_HOHeritageOverlay_63,lyr_LSIOLandSubjecttoInundationOverlay_64,lyr_VPOVegetationProtectionOverlay_65,lyr_SSPFloodScenario5_66,],
                                fold: "open",
                                title: 'NDH Deducted Overlays'});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_BAOBufferAreaOverlay_50,lyr_BMOBushfireManagementOverlay_51,lyr_ESOEnvironmentalSignificanceOverlay_52,lyr_PAOPublicAcquisitionOverlay_53,lyr_RORestructureOverlay_54,lyr_RXORoadClosureOverlay_55,lyr_SLOSignificantLandscapeOverlay_56,lyr_SROStateResourceOverlay_57,lyr_SteepSlope_58,lyr_Easements_59,],
                                fold: "open",
                                title: 'Note to Due Diligence'});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [lyr_SMOSalinityManagementOverlay_39,lyr_SCOSpecificControlsOverlay_40,lyr_RSARecognitionandSettlementAgreement_41,lyr_RFORuralFloodwayOverlay_42,lyr_RAPRegisteredAboriginalParties_43,lyr_EMOErosionManagementOverlay_44,lyr_EAOEnvironmentalAuditOverlay_45,lyr_DPODevelopmentPlanOverlay_46,lyr_DDODesignandDevelopmentOverlay_47,lyr_DCPODevelopmentContributionsPlanOverlay_48,lyr_AEOAirportEnvironsOverlay_49,],
                                fold: "open",
                                title: 'Other Overlays'});
var group_Zoned = new ol.layer.Group({
                                layers: [lyr_CCZCapitalCityZone_28,lyr_ACZActivityCentreZone_29,lyr_CDZComprehensiveDevelopmentZone_30,lyr_GRZGeneralResidentialZone_31,lyr_MUZMixedUseZone_32,lyr_LDRZLowDensityResidentialZone_33,lyr_PDZPriorityDevelopmentZone_34,lyr_NRZNeighbourhoodResidentialZone_35,lyr_RGZResidentialGrowthZone_36,lyr_TZTownshipZone_37,lyr_UGZUrbanGrowthZone_38,],
                                fold: "open",
                                title: 'Zoned'});
var group_Unzoned = new ol.layer.Group({
                                layers: [lyr_TRZ1StateTransportInfrastructure_2,lyr_TRZ2PrincipalRoadNetwork_3,lyr_TRZ4OtherTransportUse_4,lyr_TRZ3SignificantMunicipalRoad_5,lyr_PCRZPublicConservationandResourceZone_6,lyr_PPRZPublicParkandRecreationZone_7,lyr_PUZ2PublicUseZoneEducation_8,lyr_PUZ1PublicUseZoneServiceandUtility_9,lyr_PUZ3PublicUseZoneHealthCommunity_10,lyr_PUZ6PublicUseZoneLocalGovernment_11,lyr_PUZ7PublicUseZoneOtherPublicUse_12,lyr_GWAZGreenWedgeAZone_13,lyr_GWZGreenWedgeZone_14,lyr_RCZRuralConservationZone_15,lyr_RAZRuralActivityZone_16,lyr_DZDocklandZone_17,lyr_SUZSpecialUseZone_18,lyr_PZPortZone_19,lyr_UFZUrbanFloodwayZone_20,lyr_C2ZCommercial2Zone_21,lyr_C1ZCommercial1Zone_22,lyr_IN1ZIndustrial1Zone_23,lyr_IN2ZIndustrial2Zone_24,lyr_RLZRuralLivingZone_25,lyr_IN3ZIndustrial3Zone_26,lyr_FZFarmingZone_27,],
                                fold: "open",
                                title: 'Unzoned'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_TRZ1StateTransportInfrastructure_2.setVisible(false);lyr_TRZ2PrincipalRoadNetwork_3.setVisible(false);lyr_TRZ4OtherTransportUse_4.setVisible(false);lyr_TRZ3SignificantMunicipalRoad_5.setVisible(false);lyr_PCRZPublicConservationandResourceZone_6.setVisible(false);lyr_PPRZPublicParkandRecreationZone_7.setVisible(false);lyr_PUZ2PublicUseZoneEducation_8.setVisible(false);lyr_PUZ1PublicUseZoneServiceandUtility_9.setVisible(false);lyr_PUZ3PublicUseZoneHealthCommunity_10.setVisible(false);lyr_PUZ6PublicUseZoneLocalGovernment_11.setVisible(false);lyr_PUZ7PublicUseZoneOtherPublicUse_12.setVisible(false);lyr_GWAZGreenWedgeAZone_13.setVisible(false);lyr_GWZGreenWedgeZone_14.setVisible(false);lyr_RCZRuralConservationZone_15.setVisible(false);lyr_RAZRuralActivityZone_16.setVisible(false);lyr_DZDocklandZone_17.setVisible(false);lyr_SUZSpecialUseZone_18.setVisible(false);lyr_PZPortZone_19.setVisible(false);lyr_UFZUrbanFloodwayZone_20.setVisible(false);lyr_C2ZCommercial2Zone_21.setVisible(false);lyr_C1ZCommercial1Zone_22.setVisible(false);lyr_IN1ZIndustrial1Zone_23.setVisible(false);lyr_IN2ZIndustrial2Zone_24.setVisible(false);lyr_RLZRuralLivingZone_25.setVisible(false);lyr_IN3ZIndustrial3Zone_26.setVisible(false);lyr_FZFarmingZone_27.setVisible(false);lyr_CCZCapitalCityZone_28.setVisible(false);lyr_ACZActivityCentreZone_29.setVisible(false);lyr_CDZComprehensiveDevelopmentZone_30.setVisible(false);lyr_GRZGeneralResidentialZone_31.setVisible(false);lyr_MUZMixedUseZone_32.setVisible(false);lyr_LDRZLowDensityResidentialZone_33.setVisible(false);lyr_PDZPriorityDevelopmentZone_34.setVisible(false);lyr_NRZNeighbourhoodResidentialZone_35.setVisible(false);lyr_RGZResidentialGrowthZone_36.setVisible(false);lyr_TZTownshipZone_37.setVisible(false);lyr_UGZUrbanGrowthZone_38.setVisible(false);lyr_SMOSalinityManagementOverlay_39.setVisible(false);lyr_SCOSpecificControlsOverlay_40.setVisible(false);lyr_RSARecognitionandSettlementAgreement_41.setVisible(false);lyr_RFORuralFloodwayOverlay_42.setVisible(false);lyr_RAPRegisteredAboriginalParties_43.setVisible(false);lyr_EMOErosionManagementOverlay_44.setVisible(false);lyr_EAOEnvironmentalAuditOverlay_45.setVisible(false);lyr_DPODevelopmentPlanOverlay_46.setVisible(false);lyr_DDODesignandDevelopmentOverlay_47.setVisible(false);lyr_DCPODevelopmentContributionsPlanOverlay_48.setVisible(false);lyr_AEOAirportEnvironsOverlay_49.setVisible(false);lyr_BAOBufferAreaOverlay_50.setVisible(false);lyr_BMOBushfireManagementOverlay_51.setVisible(false);lyr_ESOEnvironmentalSignificanceOverlay_52.setVisible(false);lyr_PAOPublicAcquisitionOverlay_53.setVisible(false);lyr_RORestructureOverlay_54.setVisible(false);lyr_RXORoadClosureOverlay_55.setVisible(false);lyr_SLOSignificantLandscapeOverlay_56.setVisible(false);lyr_SROStateResourceOverlay_57.setVisible(false);lyr_SteepSlope_58.setVisible(false);lyr_Easements_59.setVisible(false);lyr_WBWaterwaysBuffered_60.setVisible(false);lyr_FOFloodwayOverlay_61.setVisible(false);lyr_HeritageRegister_62.setVisible(false);lyr_HOHeritageOverlay_63.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_64.setVisible(false);lyr_VPOVegetationProtectionOverlay_65.setVisible(false);lyr_SSPFloodScenario5_66.setVisible(false);lyr_BallaratWestGrowthArea_67.setVisible(false);lyr_BallaratNorthWesternGrowthArea_68.setVisible(false);lyr_BallaratNorthPSPExpandedArea_69.setVisible(false);lyr_BallaratNorthPSPCoreArea_70.setVisible(false);lyr_BallaratWestPSPBoundary_71.setVisible(false);lyr_AlfredtonWestPSP_72.setVisible(false);lyr_BallaratWestFutureResidential_73.setVisible(true);lyr_BallaratNorthWesternFutureResidential_74.setVisible(true);lyr_BallaratNorthExpandedAreaLandscapeandVisual_75.setVisible(true);lyr_BallaratNorthCoreAreaLandusePlan_76.setVisible(true);lyr_BallaratWestPSP_77.setVisible(true);lyr_AlfredtonWestPSP_78.setVisible(true);lyr_HeritageManagementMap_79.setVisible(true);lyr_Unzoned_80.setVisible(true);lyr_Rezone_81.setVisible(true);lyr_Zoned_82.setVisible(true);lyr_Suburb_83.setVisible(true);lyr_BallaratLGA_84.setVisible(true);lyr_Estate_85.setVisible(false);lyr_MajorLandOwner_86.setVisible(false);lyr_Estatelabel_87.setVisible(false);lyr_ParcelAttributesLabel_88.setVisible(true);
var layersList = [group_BaseLayer,group_Unzoned,group_Zoned,group_OtherOverlays,group_NotetoDueDiligence,group_NDHDeductedOverlays,group_GrowthAreaBoundaries,group_PSP,group_ParcelAttributes,group_Administrative,group_LabelSwitch];
lyr_TRZ1StateTransportInfrastructure_2.set('fieldAliases', {'fid': 'fid', });
lyr_TRZ2PrincipalRoadNetwork_3.set('fieldAliases', {'fid': 'fid', });
lyr_TRZ4OtherTransportUse_4.set('fieldAliases', {'fid': 'fid', });
lyr_TRZ3SignificantMunicipalRoad_5.set('fieldAliases', {'fid': 'fid', });
lyr_PCRZPublicConservationandResourceZone_6.set('fieldAliases', {'fid': 'fid', });
lyr_PPRZPublicParkandRecreationZone_7.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ2PublicUseZoneEducation_8.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ1PublicUseZoneServiceandUtility_9.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ3PublicUseZoneHealthCommunity_10.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ6PublicUseZoneLocalGovernment_11.set('fieldAliases', {'fid': 'fid', });
lyr_PUZ7PublicUseZoneOtherPublicUse_12.set('fieldAliases', {'fid': 'fid', });
lyr_GWAZGreenWedgeAZone_13.set('fieldAliases', {'fid': 'fid', });
lyr_GWZGreenWedgeZone_14.set('fieldAliases', {'fid': 'fid', });
lyr_RCZRuralConservationZone_15.set('fieldAliases', {'fid': 'fid', });
lyr_RAZRuralActivityZone_16.set('fieldAliases', {'fid': 'fid', });
lyr_DZDocklandZone_17.set('fieldAliases', {'fid': 'fid', });
lyr_SUZSpecialUseZone_18.set('fieldAliases', {'fid': 'fid', });
lyr_PZPortZone_19.set('fieldAliases', {'fid': 'fid', });
lyr_UFZUrbanFloodwayZone_20.set('fieldAliases', {'fid': 'fid', });
lyr_C2ZCommercial2Zone_21.set('fieldAliases', {'fid': 'fid', });
lyr_C1ZCommercial1Zone_22.set('fieldAliases', {'fid': 'fid', });
lyr_IN1ZIndustrial1Zone_23.set('fieldAliases', {'fid': 'fid', });
lyr_IN2ZIndustrial2Zone_24.set('fieldAliases', {'fid': 'fid', });
lyr_RLZRuralLivingZone_25.set('fieldAliases', {'fid': 'fid', });
lyr_IN3ZIndustrial3Zone_26.set('fieldAliases', {'fid': 'fid', });
lyr_FZFarmingZone_27.set('fieldAliases', {'fid': 'fid', });
lyr_CCZCapitalCityZone_28.set('fieldAliases', {'fid': 'fid', });
lyr_ACZActivityCentreZone_29.set('fieldAliases', {'fid': 'fid', });
lyr_CDZComprehensiveDevelopmentZone_30.set('fieldAliases', {'fid': 'fid', });
lyr_GRZGeneralResidentialZone_31.set('fieldAliases', {'fid': 'fid', });
lyr_MUZMixedUseZone_32.set('fieldAliases', {'fid': 'fid', });
lyr_LDRZLowDensityResidentialZone_33.set('fieldAliases', {'fid': 'fid', });
lyr_PDZPriorityDevelopmentZone_34.set('fieldAliases', {'fid': 'fid', });
lyr_NRZNeighbourhoodResidentialZone_35.set('fieldAliases', {'fid': 'fid', });
lyr_RGZResidentialGrowthZone_36.set('fieldAliases', {'fid': 'fid', });
lyr_TZTownshipZone_37.set('fieldAliases', {'fid': 'fid', });
lyr_UGZUrbanGrowthZone_38.set('fieldAliases', {'fid': 'fid', });
lyr_SMOSalinityManagementOverlay_39.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SCOSpecificControlsOverlay_40.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RSARecognitionandSettlementAgreement_41.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'LABEL_NAME': 'LABEL_NAME', 'CATEGORY': 'CATEGORY', 'SUB_CATEGORY': 'SUB_CATEGORY', 'LEGISLATION': 'LEGISLATION', 'DATE_COMMENCED': 'DATE_COMMENCED', 'OFFICIAL_AREA_HA': 'OFFICIAL_AREA_HA', 'VERSION_DATE': 'VERSION_DATE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RFORuralFloodwayOverlay_42.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RAPRegisteredAboriginalParties_43.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'TELEPHONE': 'TELEPHONE', 'REG_DATE': 'REG_DATE', 'CONTACT': 'CONTACT', 'EMAIL': 'EMAIL', 'AREA_': 'AREA_', 'SHORT_NAME': 'SHORT_NAME', 'SHORT': 'SHORT', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EMOErosionManagementOverlay_44.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EAOEnvironmentalAuditOverlay_45.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DPODevelopmentPlanOverlay_46.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DDODesignandDevelopmentOverlay_47.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DCPODevelopmentContributionsPlanOverlay_48.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AEOAirportEnvironsOverlay_49.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BAOBufferAreaOverlay_50.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfireManagementOverlay_51.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ESOEnvironmentalSignificanceOverlay_52.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PAOPublicAcquisitionOverlay_53.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RORestructureOverlay_54.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RXORoadClosureOverlay_55.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SLOSignificantLandscapeOverlay_56.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SROStateResourceOverlay_57.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SteepSlope_58.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Easements_59.set('fieldAliases', {'fid': 'fid', 'UFI': 'UFI', 'PFI': 'PFI', 'STATUS': 'STATUS', 'TASK_ID': 'TASK_ID', 'PFI_CR': 'PFI_CR', 'UFI_OLD': 'UFI_OLD', 'UFI_CR': 'UFI_CR', });
lyr_WBWaterwaysBuffered_60.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_FOFloodwayOverlay_61.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HeritageRegister_62.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'VDPID': 'VDPID', 'UFI': 'UFI', 'HERMES_NUM': 'HERMES_NUM', 'VHR_NUM': 'VHR_NUM', 'VHI_NUM': 'VHI_NUM', 'HERITAGE_O': 'HERITAGE_O', 'SITE_NAME': 'SITE_NAME', 'ID': 'ID', 'UFI_CREATE': 'UFI_CREATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HOHeritageOverlay_63.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_64.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VPOVegetationProtectionOverlay_65.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SSPFloodScenario5_66.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_COD': 'SCHEME_COD', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATU': 'ZONE_STATU', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCR': 'ZONE_DESCR', 'GAZ_BEGIN_': 'GAZ_BEGIN_', 'PFI_CREATE': 'PFI_CREATE', 'UFI': 'UFI', 'UFI_CREATE': 'UFI_CREATE', 'ZONE_CODE_': 'ZONE_CODE_', 'ZONE_COD_1': 'ZONE_COD_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BallaratWestGrowthArea_67.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratNorthWesternGrowthArea_68.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratNorthPSPExpandedArea_69.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratNorthPSPCoreArea_70.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Strat Link': 'Strat Link', });
lyr_BallaratWestPSPBoundary_71.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Strat Link': 'Strat Link', });
lyr_AlfredtonWestPSP_72.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Strat Link': 'Strat Link', });
lyr_Unzoned_80.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Zoned / Rezone': 'Zoned / Rezone', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Current Zone': 'Current Zone', 'Overlays': 'Overlays', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%DM)': 'Market Value (10%DM)', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', 'Name': 'Name', 'Unique id:': 'Unique id:', 'Unique ID': 'Unique ID', '_PARCEL': '_PARCEL', '_Name': '_Name', '_Strategy': '_Strategy', '_Strategy Link': '_Strategy Link', '_Zoned / Rezone': '_Zoned / Rezone', '_Gross HA': '_Gross HA', '_NDH': '_NDH', '_Last Sold Price': '_Last Sold Price', '_Last Sold Date': '_Last Sold Date', '_Current Zone': '_Current Zone', '_Overlays': '_Overlays', '_VALUE @ 350m2': '_VALUE @ 350m2', '_Current RLP': '_Current RLP', '_Current OPC': '_Current OPC', '_Market Value (20%DM)': '_Market Value (20%DM)', '_Market Value (30%DM)': '_Market Value (30%DM)', '_Market Value (25%DM)': '_Market Value (25%DM)', '_Market Value (15%DM)': '_Market Value (15%DM)', '_Market Value (12%DM)': '_Market Value (12%DM)', '_Market Value (10%DM)': '_Market Value (10%DM)', '_Lot Yield @ 20Dw/Ha': '_Lot Yield @ 20Dw/Ha', '_OWNERSHIP': '_OWNERSHIP', '_Vendor Company': '_Vendor Company', '_Vendor Names': '_Vendor Names', '_Vendor Mobiles': '_Vendor Mobiles', '_Vendor Emails': '_Vendor Emails', '_Vendor Addresses': '_Vendor Addresses', '_Major Landowner': '_Major Landowner', '_Estate Status': '_Estate Status', '_Developer': '_Developer', '_Development Contributions per Lot': '_Development Contributions per Lot', '_Lead Link': '_Lead Link', '_Unique ID': '_Unique ID', });
lyr_Rezone_81.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%D)': 'Market Value (10%D)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Lead Link': 'Lead Link', 'Unique ID': 'Unique ID', });
lyr_Zoned_82.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%D)': 'Market Value (10%D)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Lead Link': 'Lead Link', 'Unique ID': 'Unique ID', });
lyr_Suburb_83.set('fieldAliases', {'fid': 'fid', 'LC_PLY_PID': 'LC_PLY_PID', 'LOC_PID': 'LOC_PID', 'DT_CREATE': 'DT_CREATE', 'LOC_NAME': 'LOC_NAME', 'LOC_CLASS': 'LOC_CLASS', 'STATE': 'STATE', });
lyr_BallaratLGA_84.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_Estate_85.set('fieldAliases', {'fid': 'fid', 'Estate': 'Estate', 'No. of Lots': 'No. of Lots', 'Developer': 'Developer', 'Estate Status': 'Estate Status', });
lyr_MajorLandOwner_86.set('fieldAliases', {'fid': 'fid', 'Parcel:': 'Parcel:', 'Address': 'Address', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Zoned / Rezone': 'Zoned / Rezone', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Current Zone': 'Current Zone', 'Overlays': 'Overlays', 'Ownership:': 'Ownership:', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Lead Link': 'Lead Link', 'Name': 'Name', 'Unique id:': 'Unique id:', 'Unique ID': 'Unique ID', });
lyr_Estatelabel_87.set('fieldAliases', {'fid': 'fid', 'Estate/Address': 'Estate/Address', 'No. of Lots': 'No. of Lots', 'Developer': 'Developer', 'Estate Status': 'Estate Status', });
lyr_ParcelAttributesLabel_88.set('fieldAliases', {'fid': 'fid', 'PARCEL': 'PARCEL', 'Address': 'Address', 'Zoned / Rezone': 'Zoned / Rezone', 'Current Zone': 'Current Zone', 'Strategy': 'Strategy', 'Strategy Link': 'Strategy Link', 'Overlays': 'Overlays', 'Gross HA': 'Gross HA', 'NDH': 'NDH', 'Lot Yield @ 20Dw/Ha': 'Lot Yield @ 20Dw/Ha', 'VALUE @ 350m2': 'VALUE @ 350m2', 'Market Value (20%DM)': 'Market Value (20%DM)', 'Current RLP': 'Current RLP', 'Current OPC': 'Current OPC', 'Market Value (30%DM)': 'Market Value (30%DM)', 'Market Value (25%DM)': 'Market Value (25%DM)', 'Market Value (15%DM)': 'Market Value (15%DM)', 'Market Value (12%DM)': 'Market Value (12%DM)', 'Market Value (10%D)': 'Market Value (10%D)', 'Development Contributions per Lot': 'Development Contributions per Lot', 'Last Sold Price': 'Last Sold Price', 'Last Sold Date': 'Last Sold Date', 'OWNERSHIP': 'OWNERSHIP', 'Vendor Company': 'Vendor Company', 'Vendor Names': 'Vendor Names', 'Vendor Mobiles': 'Vendor Mobiles', 'Vendor Emails': 'Vendor Emails', 'Vendor Addresses': 'Vendor Addresses', 'Major Landowner': 'Major Landowner', 'Estate Status': 'Estate Status', 'Developer': 'Developer', 'Lead Link': 'Lead Link', 'Unique ID': 'Unique ID', });
lyr_TRZ1StateTransportInfrastructure_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_TRZ2PrincipalRoadNetwork_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_TRZ4OtherTransportUse_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_TRZ3SignificantMunicipalRoad_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_PCRZPublicConservationandResourceZone_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_PPRZPublicParkandRecreationZone_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ2PublicUseZoneEducation_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ1PublicUseZoneServiceandUtility_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ3PublicUseZoneHealthCommunity_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ6PublicUseZoneLocalGovernment_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_PUZ7PublicUseZoneOtherPublicUse_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_GWAZGreenWedgeAZone_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_GWZGreenWedgeZone_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_RCZRuralConservationZone_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_RAZRuralActivityZone_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_DZDocklandZone_17.set('fieldImages', {'fid': 'TextEdit', });
lyr_SUZSpecialUseZone_18.set('fieldImages', {'fid': 'TextEdit', });
lyr_PZPortZone_19.set('fieldImages', {'fid': 'TextEdit', });
lyr_UFZUrbanFloodwayZone_20.set('fieldImages', {'fid': 'TextEdit', });
lyr_C2ZCommercial2Zone_21.set('fieldImages', {'fid': 'TextEdit', });
lyr_C1ZCommercial1Zone_22.set('fieldImages', {'fid': 'TextEdit', });
lyr_IN1ZIndustrial1Zone_23.set('fieldImages', {'fid': 'TextEdit', });
lyr_IN2ZIndustrial2Zone_24.set('fieldImages', {'fid': 'TextEdit', });
lyr_RLZRuralLivingZone_25.set('fieldImages', {'fid': 'TextEdit', });
lyr_IN3ZIndustrial3Zone_26.set('fieldImages', {'fid': 'TextEdit', });
lyr_FZFarmingZone_27.set('fieldImages', {'fid': 'TextEdit', });
lyr_CCZCapitalCityZone_28.set('fieldImages', {'fid': 'TextEdit', });
lyr_ACZActivityCentreZone_29.set('fieldImages', {'fid': 'TextEdit', });
lyr_CDZComprehensiveDevelopmentZone_30.set('fieldImages', {'fid': 'TextEdit', });
lyr_GRZGeneralResidentialZone_31.set('fieldImages', {'fid': 'TextEdit', });
lyr_MUZMixedUseZone_32.set('fieldImages', {'fid': 'TextEdit', });
lyr_LDRZLowDensityResidentialZone_33.set('fieldImages', {'fid': 'TextEdit', });
lyr_PDZPriorityDevelopmentZone_34.set('fieldImages', {'fid': 'TextEdit', });
lyr_NRZNeighbourhoodResidentialZone_35.set('fieldImages', {'fid': 'TextEdit', });
lyr_RGZResidentialGrowthZone_36.set('fieldImages', {'fid': 'TextEdit', });
lyr_TZTownshipZone_37.set('fieldImages', {'fid': 'TextEdit', });
lyr_UGZUrbanGrowthZone_38.set('fieldImages', {'fid': 'TextEdit', });
lyr_SMOSalinityManagementOverlay_39.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SCOSpecificControlsOverlay_40.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_RSARecognitionandSettlementAgreement_41.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ID': '', 'NAME': '', 'LABEL_NAME': '', 'CATEGORY': '', 'SUB_CATEGORY': '', 'LEGISLATION': '', 'DATE_COMMENCED': '', 'OFFICIAL_AREA_HA': '', 'VERSION_DATE': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_RFORuralFloodwayOverlay_42.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_RAPRegisteredAboriginalParties_43.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ID': '', 'NAME': '', 'ADDRESS': '', 'TELEPHONE': '', 'REG_DATE': '', 'CONTACT': '', 'EMAIL': '', 'AREA_': '', 'SHORT_NAME': '', 'SHORT': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EMOErosionManagementOverlay_44.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EAOEnvironmentalAuditOverlay_45.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DPODevelopmentPlanOverlay_46.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DDODesignandDevelopmentOverlay_47.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DCPODevelopmentContributionsPlanOverlay_48.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_AEOAirportEnvironsOverlay_49.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BAOBufferAreaOverlay_50.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BMOBushfireManagementOverlay_51.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ESOEnvironmentalSignificanceOverlay_52.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PAOPublicAcquisitionOverlay_53.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RORestructureOverlay_54.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RXORoadClosureOverlay_55.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_COD': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATU': '', 'ZONE_CODE': '', 'ZONE_DESCR': '', 'GAZ_BEGIN_': '', 'PFI_CREATE': '', 'UFI': '', 'UFI_CREATE': '', 'ZONE_CODE_': '', 'ZONE_COD_1': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SLOSignificantLandscapeOverlay_56.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SROStateResourceOverlay_57.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SteepSlope_58.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Easements_59.set('fieldImages', {'fid': '', 'UFI': 'TextEdit', 'PFI': 'TextEdit', 'STATUS': 'TextEdit', 'TASK_ID': 'TextEdit', 'PFI_CR': 'DateTime', 'UFI_OLD': 'TextEdit', 'UFI_CR': 'DateTime', });
lyr_WBWaterwaysBuffered_60.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_FOFloodwayOverlay_61.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HeritageRegister_62.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'VDPID': 'TextEdit', 'UFI': 'TextEdit', 'HERMES_NUM': 'TextEdit', 'VHR_NUM': 'TextEdit', 'VHI_NUM': 'TextEdit', 'HERITAGE_O': 'TextEdit', 'SITE_NAME': 'TextEdit', 'ID': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HOHeritageOverlay_63.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LSIOLandSubjecttoInundationOverlay_64.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VPOVegetationProtectionOverlay_65.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SSPFloodScenario5_66.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_COD': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATU': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCR': 'TextEdit', 'GAZ_BEGIN_': 'TextEdit', 'PFI_CREATE': 'TextEdit', 'UFI': 'TextEdit', 'UFI_CREATE': 'TextEdit', 'ZONE_CODE_': 'TextEdit', 'ZONE_COD_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BallaratWestGrowthArea_67.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_BallaratNorthWesternGrowthArea_68.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_BallaratNorthPSPExpandedArea_69.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_BallaratNorthPSPCoreArea_70.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_BallaratWestPSPBoundary_71.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_AlfredtonWestPSP_72.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Strat Link': 'TextEdit', });
lyr_Unzoned_80.set('fieldImages', {'fid': 'TextEdit', 'PARCEL': 'TextEdit', 'Address': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Current Zone': 'TextEdit', 'Overlays': 'TextEdit', 'VALUE @ 350m2': 'TextEdit', 'Current RLP': 'TextEdit', 'Current OPC': 'TextEdit', 'Market Value (20%DM)': 'TextEdit', 'Market Value (25%DM)': 'TextEdit', 'Market Value (30%DM)': 'TextEdit', 'Market Value (15%DM)': 'TextEdit', 'Market Value (12%DM)': 'TextEdit', 'Market Value (10%DM)': 'TextEdit', 'Lot Yield @ 20Dw/Ha': 'TextEdit', 'Development Contributions per Lot': 'TextEdit', 'Last Sold Price': 'TextEdit', 'Last Sold Date': 'DateTime', 'OWNERSHIP': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Mobiles': 'TextEdit', 'Vendor Emails': 'TextEdit', 'Vendor Addresses': 'TextEdit', 'Major Landowner': 'TextEdit', 'Lead Link': 'TextEdit', 'Name': 'TextEdit', 'Unique id:': 'TextEdit', 'Unique ID': 'TextEdit', '_PARCEL': 'TextEdit', '_Name': 'TextEdit', '_Strategy': 'TextEdit', '_Strategy Link': 'TextEdit', '_Zoned / Rezone': 'TextEdit', '_Gross HA': 'TextEdit', '_NDH': 'TextEdit', '_Last Sold Price': 'TextEdit', '_Last Sold Date': 'DateTime', '_Current Zone': 'TextEdit', '_Overlays': 'TextEdit', '_VALUE @ 350m2': 'TextEdit', '_Current RLP': 'Range', '_Current OPC': 'Range', '_Market Value (20%DM)': 'Range', '_Market Value (30%DM)': 'Range', '_Market Value (25%DM)': 'Range', '_Market Value (15%DM)': 'Range', '_Market Value (12%DM)': 'Range', '_Market Value (10%DM)': 'Range', '_Lot Yield @ 20Dw/Ha': 'Range', '_OWNERSHIP': 'TextEdit', '_Vendor Company': 'TextEdit', '_Vendor Names': 'TextEdit', '_Vendor Mobiles': 'TextEdit', '_Vendor Emails': 'TextEdit', '_Vendor Addresses': 'TextEdit', '_Major Landowner': 'TextEdit', '_Estate Status': 'TextEdit', '_Developer': 'TextEdit', '_Development Contributions per Lot': 'Range', '_Lead Link': 'TextEdit', '_Unique ID': 'TextEdit', });
lyr_Rezone_81.set('fieldImages', {'fid': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 20Dw/Ha': '', 'VALUE @ 350m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%D)': '', 'Development Contributions per Lot': '', 'Last Sold Price': '', 'Last Sold Date': '', 'OWNERSHIP': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Estate Status': '', 'Developer': '', 'Lead Link': '', 'Unique ID': '', });
lyr_Zoned_82.set('fieldImages', {'fid': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 20Dw/Ha': '', 'VALUE @ 350m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%D)': '', 'Development Contributions per Lot': '', 'Last Sold Price': '', 'Last Sold Date': '', 'OWNERSHIP': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Estate Status': '', 'Developer': '', 'Lead Link': '', 'Unique ID': '', });
lyr_Suburb_83.set('fieldImages', {'fid': 'TextEdit', 'LC_PLY_PID': 'TextEdit', 'LOC_PID': 'TextEdit', 'DT_CREATE': 'DateTime', 'LOC_NAME': 'TextEdit', 'LOC_CLASS': 'TextEdit', 'STATE': 'TextEdit', });
lyr_BallaratLGA_84.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_Estate_85.set('fieldImages', {'fid': 'TextEdit', 'Estate': '', 'No. of Lots': 'TextEdit', 'Developer': 'TextEdit', 'Estate Status': 'TextEdit', });
lyr_MajorLandOwner_86.set('fieldImages', {'fid': 'TextEdit', 'Parcel:': 'TextEdit', 'Address': 'TextEdit', 'Strategy': 'TextEdit', 'Strategy Link': 'TextEdit', 'Zoned / Rezone': 'TextEdit', 'Gross HA': 'TextEdit', 'NDH': 'TextEdit', 'Current Zone': 'TextEdit', 'Overlays': 'TextEdit', 'Ownership:': 'TextEdit', 'Estate Status': 'TextEdit', 'Developer': 'TextEdit', 'Vendor Company': 'TextEdit', 'Vendor Names': 'TextEdit', 'Vendor Mobiles': 'TextEdit', 'Vendor Emails': 'TextEdit', 'Vendor Addresses': 'TextEdit', 'Major Landowner': 'TextEdit', 'Lead Link': 'TextEdit', 'Name': 'TextEdit', 'Unique id:': 'TextEdit', 'Unique ID': 'TextEdit', });
lyr_Estatelabel_87.set('fieldImages', {'fid': 'TextEdit', 'Estate/Address': 'TextEdit', 'No. of Lots': 'TextEdit', 'Developer': 'TextEdit', 'Estate Status': 'TextEdit', });
lyr_ParcelAttributesLabel_88.set('fieldImages', {'fid': '', 'PARCEL': '', 'Address': '', 'Zoned / Rezone': '', 'Current Zone': '', 'Strategy': '', 'Strategy Link': '', 'Overlays': '', 'Gross HA': '', 'NDH': '', 'Lot Yield @ 20Dw/Ha': '', 'VALUE @ 350m2': '', 'Market Value (20%DM)': '', 'Current RLP': '', 'Current OPC': '', 'Market Value (30%DM)': '', 'Market Value (25%DM)': '', 'Market Value (15%DM)': '', 'Market Value (12%DM)': '', 'Market Value (10%D)': '', 'Development Contributions per Lot': '', 'Last Sold Price': '', 'Last Sold Date': '', 'OWNERSHIP': '', 'Vendor Company': '', 'Vendor Names': '', 'Vendor Mobiles': '', 'Vendor Emails': '', 'Vendor Addresses': '', 'Major Landowner': '', 'Estate Status': '', 'Developer': '', 'Lead Link': '', 'Unique ID': '', });
lyr_TRZ1StateTransportInfrastructure_2.set('fieldLabels', {'fid': 'hidden field', });
lyr_TRZ2PrincipalRoadNetwork_3.set('fieldLabels', {'fid': 'hidden field', });
lyr_TRZ4OtherTransportUse_4.set('fieldLabels', {'fid': 'hidden field', });
lyr_TRZ3SignificantMunicipalRoad_5.set('fieldLabels', {'fid': 'hidden field', });
lyr_PCRZPublicConservationandResourceZone_6.set('fieldLabels', {'fid': 'hidden field', });
lyr_PPRZPublicParkandRecreationZone_7.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ2PublicUseZoneEducation_8.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ1PublicUseZoneServiceandUtility_9.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ3PublicUseZoneHealthCommunity_10.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ6PublicUseZoneLocalGovernment_11.set('fieldLabels', {'fid': 'hidden field', });
lyr_PUZ7PublicUseZoneOtherPublicUse_12.set('fieldLabels', {'fid': 'hidden field', });
lyr_GWAZGreenWedgeAZone_13.set('fieldLabels', {'fid': 'hidden field', });
lyr_GWZGreenWedgeZone_14.set('fieldLabels', {'fid': 'hidden field', });
lyr_RCZRuralConservationZone_15.set('fieldLabels', {'fid': 'hidden field', });
lyr_RAZRuralActivityZone_16.set('fieldLabels', {'fid': 'hidden field', });
lyr_DZDocklandZone_17.set('fieldLabels', {'fid': 'hidden field', });
lyr_SUZSpecialUseZone_18.set('fieldLabels', {'fid': 'hidden field', });
lyr_PZPortZone_19.set('fieldLabels', {'fid': 'hidden field', });
lyr_UFZUrbanFloodwayZone_20.set('fieldLabels', {'fid': 'hidden field', });
lyr_C2ZCommercial2Zone_21.set('fieldLabels', {'fid': 'hidden field', });
lyr_C1ZCommercial1Zone_22.set('fieldLabels', {'fid': 'hidden field', });
lyr_IN1ZIndustrial1Zone_23.set('fieldLabels', {'fid': 'hidden field', });
lyr_IN2ZIndustrial2Zone_24.set('fieldLabels', {'fid': 'hidden field', });
lyr_RLZRuralLivingZone_25.set('fieldLabels', {'fid': 'hidden field', });
lyr_IN3ZIndustrial3Zone_26.set('fieldLabels', {'fid': 'hidden field', });
lyr_FZFarmingZone_27.set('fieldLabels', {'fid': 'hidden field', });
lyr_CCZCapitalCityZone_28.set('fieldLabels', {'fid': 'hidden field', });
lyr_ACZActivityCentreZone_29.set('fieldLabels', {'fid': 'hidden field', });
lyr_CDZComprehensiveDevelopmentZone_30.set('fieldLabels', {'fid': 'hidden field', });
lyr_GRZGeneralResidentialZone_31.set('fieldLabels', {'fid': 'hidden field', });
lyr_MUZMixedUseZone_32.set('fieldLabels', {'fid': 'hidden field', });
lyr_LDRZLowDensityResidentialZone_33.set('fieldLabels', {'fid': 'hidden field', });
lyr_PDZPriorityDevelopmentZone_34.set('fieldLabels', {'fid': 'hidden field', });
lyr_NRZNeighbourhoodResidentialZone_35.set('fieldLabels', {'fid': 'hidden field', });
lyr_RGZResidentialGrowthZone_36.set('fieldLabels', {'fid': 'hidden field', });
lyr_TZTownshipZone_37.set('fieldLabels', {'fid': 'hidden field', });
lyr_UGZUrbanGrowthZone_38.set('fieldLabels', {'fid': 'hidden field', });
lyr_SMOSalinityManagementOverlay_39.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SCOSpecificControlsOverlay_40.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RSARecognitionandSettlementAgreement_41.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'hidden field', 'NAME': 'hidden field', 'LABEL_NAME': 'hidden field', 'CATEGORY': 'hidden field', 'SUB_CATEGORY': 'hidden field', 'LEGISLATION': 'hidden field', 'DATE_COMMENCED': 'hidden field', 'OFFICIAL_AREA_HA': 'hidden field', 'VERSION_DATE': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RFORuralFloodwayOverlay_42.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RAPRegisteredAboriginalParties_43.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ID': 'hidden field', 'NAME': 'hidden field', 'ADDRESS': 'hidden field', 'TELEPHONE': 'hidden field', 'REG_DATE': 'hidden field', 'CONTACT': 'hidden field', 'EMAIL': 'hidden field', 'AREA_': 'hidden field', 'SHORT_NAME': 'hidden field', 'SHORT': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EMOErosionManagementOverlay_44.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EAOEnvironmentalAuditOverlay_45.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DPODevelopmentPlanOverlay_46.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DDODesignandDevelopmentOverlay_47.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DCPODevelopmentContributionsPlanOverlay_48.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AEOAirportEnvironsOverlay_49.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BAOBufferAreaOverlay_50.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BMOBushfireManagementOverlay_51.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ESOEnvironmentalSignificanceOverlay_52.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PAOPublicAcquisitionOverlay_53.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RORestructureOverlay_54.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RXORoadClosureOverlay_55.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLOSignificantLandscapeOverlay_56.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SROStateResourceOverlay_57.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SteepSlope_58.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_Easements_59.set('fieldLabels', {'fid': 'no label', 'UFI': 'hidden field', 'PFI': 'hidden field', 'STATUS': 'hidden field', 'TASK_ID': 'hidden field', 'PFI_CR': 'hidden field', 'UFI_OLD': 'hidden field', 'UFI_CR': 'hidden field', });
lyr_WBWaterwaysBuffered_60.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_FOFloodwayOverlay_61.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HeritageRegister_62.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'VDPID': 'hidden field', 'UFI': 'hidden field', 'HERMES_NUM': 'hidden field', 'VHR_NUM': 'hidden field', 'VHI_NUM': 'hidden field', 'HERITAGE_O': 'hidden field', 'SITE_NAME': 'hidden field', 'ID': 'hidden field', 'UFI_CREATE': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HOHeritageOverlay_63.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LSIOLandSubjecttoInundationOverlay_64.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_VPOVegetationProtectionOverlay_65.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCR': 'hidden field', 'GAZ_BEGIN_': 'hidden field', 'PFI_CREATE': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATE': 'hidden field', 'ZONE_CODE_': 'hidden field', 'ZONE_COD_1': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SSPFloodScenario5_66.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_COD': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATU': 'hidden field', 'ZONE_CODE': 'no label', 'ZONE_DESCR': 'no label', 'GAZ_BEGIN_': 'no label', 'PFI_CREATE': 'no label', 'UFI': 'inline label - always visible', 'UFI_CREATE': 'no label', 'ZONE_CODE_': 'inline label - always visible', 'ZONE_COD_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BallaratWestGrowthArea_67.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratNorthWesternGrowthArea_68.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratNorthPSPExpandedArea_69.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratNorthPSPCoreArea_70.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_BallaratWestPSPBoundary_71.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_AlfredtonWestPSP_72.set('fieldLabels', {'fid': 'no label', 'id': 'hidden field', 'Strat Link': 'inline label - visible with data', });
lyr_Unzoned_80.set('fieldLabels', {'fid': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'Zoned / Rezone': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'NDH': 'hidden field', 'Current Zone': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'VALUE @ 350m2': 'hidden field', 'Current RLP': 'hidden field', 'Current OPC': 'hidden field', 'Market Value (20%DM)': 'hidden field', 'Market Value (25%DM)': 'hidden field', 'Market Value (30%DM)': 'hidden field', 'Market Value (15%DM)': 'hidden field', 'Market Value (12%DM)': 'hidden field', 'Market Value (10%DM)': 'hidden field', 'Lot Yield @ 20Dw/Ha': 'hidden field', 'Development Contributions per Lot': 'hidden field', 'Last Sold Price': 'hidden field', 'Last Sold Date': 'hidden field', 'OWNERSHIP': 'hidden field', 'Estate Status': 'hidden field', 'Developer': 'hidden field', 'Vendor Company': 'hidden field', 'Vendor Names': 'hidden field', 'Vendor Mobiles': 'hidden field', 'Vendor Emails': 'hidden field', 'Vendor Addresses': 'hidden field', 'Major Landowner': 'hidden field', 'Lead Link': 'hidden field', 'Name': 'hidden field', 'Unique id:': 'hidden field', 'Unique ID': 'hidden field', '_PARCEL': 'hidden field', '_Name': 'hidden field', '_Strategy': 'hidden field', '_Strategy Link': 'hidden field', '_Zoned / Rezone': 'hidden field', '_Gross HA': 'hidden field', '_NDH': 'hidden field', '_Last Sold Price': 'hidden field', '_Last Sold Date': 'hidden field', '_Current Zone': 'hidden field', '_Overlays': 'hidden field', '_VALUE @ 350m2': 'hidden field', '_Current RLP': 'hidden field', '_Current OPC': 'hidden field', '_Market Value (20%DM)': 'hidden field', '_Market Value (30%DM)': 'hidden field', '_Market Value (25%DM)': 'hidden field', '_Market Value (15%DM)': 'hidden field', '_Market Value (12%DM)': 'hidden field', '_Market Value (10%DM)': 'hidden field', '_Lot Yield @ 20Dw/Ha': 'hidden field', '_OWNERSHIP': 'hidden field', '_Vendor Company': 'hidden field', '_Vendor Names': 'hidden field', '_Vendor Mobiles': 'hidden field', '_Vendor Emails': 'hidden field', '_Vendor Addresses': 'hidden field', '_Major Landowner': 'hidden field', '_Estate Status': 'hidden field', '_Developer': 'hidden field', '_Development Contributions per Lot': 'hidden field', '_Lead Link': 'hidden field', '_Unique ID': 'hidden field', });
lyr_Rezone_81.set('fieldLabels', {'fid': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Zoned / Rezone': 'inline label - visible with data', 'Current Zone': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lot Yield @ 20Dw/Ha': 'inline label - visible with data', 'VALUE @ 350m2': 'header label - always visible', 'Market Value (20%DM)': 'inline label - visible with data', 'Current RLP': 'inline label - visible with data', 'Current OPC': 'inline label - visible with data', 'Market Value (30%DM)': 'inline label - visible with data', 'Market Value (25%DM)': 'inline label - visible with data', 'Market Value (15%DM)': 'inline label - visible with data', 'Market Value (12%DM)': 'inline label - visible with data', 'Market Value (10%D)': 'inline label - visible with data', 'Development Contributions per Lot': 'inline label - visible with data', 'Last Sold Price': 'inline label - visible with data', 'Last Sold Date': 'inline label - visible with data', 'OWNERSHIP': 'header label - always visible', 'Vendor Company': 'inline label - visible with data', 'Vendor Names': 'inline label - visible with data', 'Vendor Mobiles': 'inline label - visible with data', 'Vendor Emails': 'inline label - visible with data', 'Vendor Addresses': 'inline label - visible with data', 'Major Landowner': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Unique ID': 'hidden field', });
lyr_Zoned_82.set('fieldLabels', {'fid': 'hidden field', 'PARCEL': 'header label - always visible', 'Address': 'inline label - visible with data', 'Zoned / Rezone': 'inline label - visible with data', 'Current Zone': 'inline label - visible with data', 'Strategy': 'inline label - visible with data', 'Strategy Link': 'inline label - visible with data', 'Overlays': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'NDH': 'inline label - visible with data', 'Lot Yield @ 20Dw/Ha': 'inline label - visible with data', 'VALUE @ 350m2': 'header label - always visible', 'Market Value (20%DM)': 'inline label - visible with data', 'Current RLP': 'inline label - visible with data', 'Current OPC': 'inline label - visible with data', 'Market Value (30%DM)': 'inline label - visible with data', 'Market Value (25%DM)': 'inline label - visible with data', 'Market Value (15%DM)': 'inline label - visible with data', 'Market Value (12%DM)': 'inline label - visible with data', 'Market Value (10%D)': 'inline label - visible with data', 'Development Contributions per Lot': 'inline label - visible with data', 'Last Sold Price': 'inline label - visible with data', 'Last Sold Date': 'inline label - visible with data', 'OWNERSHIP': 'header label - always visible', 'Vendor Company': 'inline label - visible with data', 'Vendor Names': 'inline label - visible with data', 'Vendor Mobiles': 'inline label - visible with data', 'Vendor Emails': 'inline label - visible with data', 'Vendor Addresses': 'inline label - visible with data', 'Major Landowner': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Unique ID': 'hidden field', });
lyr_Suburb_83.set('fieldLabels', {'fid': 'no label', 'LC_PLY_PID': 'no label', 'LOC_PID': 'no label', 'DT_CREATE': 'no label', 'LOC_NAME': 'no label', 'LOC_CLASS': 'no label', 'STATE': 'no label', });
lyr_BallaratLGA_84.set('fieldLabels', {'fid': 'no label', 'LGA_CODE24': 'no label', 'LGA_NAME24': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM': 'no label', 'LOCI_URI21': 'no label', });
lyr_Estate_85.set('fieldLabels', {'fid': 'hidden field', 'Estate': 'inline label - always visible', 'No. of Lots': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', });
lyr_MajorLandOwner_86.set('fieldLabels', {'fid': 'hidden field', 'Parcel:': 'inline label - always visible', 'Address': 'no label', 'Strategy': 'no label', 'Strategy Link': 'no label', 'Zoned / Rezone': 'no label', 'Gross HA': 'no label', 'NDH': 'no label', 'Current Zone': 'no label', 'Overlays': 'no label', 'Ownership:': 'no label', 'Estate Status': 'no label', 'Developer': 'no label', 'Vendor Company': 'no label', 'Vendor Names': 'no label', 'Vendor Mobiles': 'no label', 'Vendor Emails': 'no label', 'Vendor Addresses': 'no label', 'Major Landowner': 'no label', 'Lead Link': 'no label', 'Name': 'no label', 'Unique id:': 'no label', 'Unique ID': 'no label', });
lyr_Estatelabel_87.set('fieldLabels', {'fid': 'hidden field', 'Estate/Address': 'inline label - visible with data', 'No. of Lots': 'inline label - visible with data', 'Developer': 'inline label - visible with data', 'Estate Status': 'inline label - visible with data', });
lyr_ParcelAttributesLabel_88.set('fieldLabels', {'fid': 'no label', 'PARCEL': 'no label', 'Address': 'no label', 'Zoned / Rezone': 'no label', 'Current Zone': 'no label', 'Strategy': 'no label', 'Strategy Link': 'no label', 'Overlays': 'no label', 'Gross HA': 'no label', 'NDH': 'no label', 'Lot Yield @ 20Dw/Ha': 'no label', 'VALUE @ 350m2': 'no label', 'Market Value (20%DM)': 'no label', 'Current RLP': 'no label', 'Current OPC': 'no label', 'Market Value (30%DM)': 'no label', 'Market Value (25%DM)': 'no label', 'Market Value (15%DM)': 'no label', 'Market Value (12%DM)': 'no label', 'Market Value (10%D)': 'no label', 'Development Contributions per Lot': 'no label', 'Last Sold Price': 'no label', 'Last Sold Date': 'no label', 'OWNERSHIP': 'no label', 'Vendor Company': 'no label', 'Vendor Names': 'no label', 'Vendor Mobiles': 'no label', 'Vendor Emails': 'no label', 'Vendor Addresses': 'no label', 'Major Landowner': 'no label', 'Estate Status': 'no label', 'Developer': 'no label', 'Lead Link': 'no label', 'Unique ID': 'no label', });
lyr_ParcelAttributesLabel_88.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});