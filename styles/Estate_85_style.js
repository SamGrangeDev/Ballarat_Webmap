var size = 0;
var placement = 'point';

var style_Estate_85 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0004";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("if (    \"Estate/Address\" is not NULL or \"Developer\" is not NULL or \"Estate Status\" is not NULL,    '<div style=\"line-height: 0.9;\">' ||    '<b>Estate/Address:</b> ' || regexp_replace(coalesce(\"Estate/Address\", 'n/a'), '(.{50})', '\\1<br>') || '</div>' ||    '<div style=\"line-height: 0.9;\">' ||    '<b>Developer:</b> ' || regexp_replace(coalesce(\"Developer\", 'n/a'), '(.{50})', '\\1<br>') || '</div>' ||    '<div style=\"line-height: 0.9;\">' ||    '<b>Estate Status:</b> ' || regexp_replace(coalesce(\"Estate Status\", 'n/a'), '(.{50})', '\\1<br>') || '</div>',    '' )") !== null && resolution > 0 && resolution < 2) { labelText = String(feature.get("if (    \"Estate/Address\" is not NULL or \"Developer\" is not NULL or \"Estate Status\" is not NULL,    '<div style=\"line-height: 0.9;\">' ||    '<b>Estate/Address:</b> ' || regexp_replace(coalesce(\"Estate/Address\", 'n/a'), '(.{50})', '\\1<br>') || '</div>' ||    '<div style=\"line-height: 0.9;\">' ||    '<b>Developer:</b> ' || regexp_replace(coalesce(\"Developer\", 'n/a'), '(.{50})', '\\1<br>') || '</div>' ||    '<div style=\"line-height: 0.9;\">' ||    '<b>Estate Status:</b> ' || regexp_replace(coalesce(\"Estate Status\", 'n/a'), '(.{50})', '\\1<br>') || '</div>',    '' )")); 

    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,0,176,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(247,0,185,0.3137254901960784)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
