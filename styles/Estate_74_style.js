var size = 0;
var placement = 'point';

var style_Estate_74 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0004";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("\"Estate/Address\" || ' ' || \"Developer\" || ' ' || \"Estate Status\"") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("\"Estate/Address\" || ' ' || \"Developer\" || ' ' || \"Estate Status\""));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,0,176,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(247,0,185,0.3137254901960784)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
