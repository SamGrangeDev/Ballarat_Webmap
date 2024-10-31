var size = 0;
var placement = 'point';

var style_Estate_label_76 = function(feature, resolution) {
    var labelText = "";
    var labelFont = "15.0px 'Open Sans', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0004";
    var bufferWidth = 2.0;
    var placement = 'point';

    // Access attributes
    var estateAddress = feature.get("Estate/Address") || 'n/a';
    var developer = feature.get("Developer") || 'n/a';
    var estateStatus = feature.get("Estate Status") || 'n/a';

    // Build label text without HTML tags, using plain text with line breaks
    if (estateAddress !== 'n/a' || developer !== 'n/a' || estateStatus !== 'n/a') {
        labelText = 
            "Estate/Address: " + estateAddress.replace(/(.{50})/g, "$1\n") + "\n" +
            "Developer: " + developer.replace(/(.{50})/g, "$1\n") + "\n" +
            "Estate Status: " + estateStatus.replace(/(.{50})/g, "$1\n");
    }

    // Apply minimum zoom level for labels (start showing at Zoom Level 13)
    if (resolution < 5.437028) {  // Resolution threshold for minimum Zoom Level 13
        var style = [ new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
            text: new ol.style.Text({
                text: labelText,
                font: labelFont,
                fill: new ol.style.Fill({
                    color: labelFill
                }),
                stroke: new ol.style.Stroke({
                    color: bufferColor,
                    width: bufferWidth
                }),
                overflow: true,  // Allow label to extend beyond feature boundary
                placement: placement
            })
        })];
    } else {
        var style = [ new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
            text: null  // Hide label at lower zoom levels
        })];
    }

    return style;
};