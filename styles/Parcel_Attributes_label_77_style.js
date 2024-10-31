var size = 0;
var placement = 'point';

var style_Parcel_Attributes_label_77 = function(feature, resolution) {
    var labelText = "";
    var labelFont = "13.0px 'Open Sans', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 2.0;
    var placement = 'point';
    var rotationAngle = -25 * (Math.PI / 180);  // -25 degrees in radians

    // Access individual attributes
    var company = feature.get("Company") || 'n/a';
    var directors = feature.get("Directors") || 'n/a';
    var marketValue = feature.get("Market Value (20%DM)") || 'n/a';

    // Construct label text with line breaks
    if (company !== 'n/a' || directors !== 'n/a' || marketValue !== 'n/a') {
        labelText = 
            "Company: " + company.replace(/(.{30})/g, "$1\n") + "\n" +
            "Directors: " + directors.replace(/(.{30})/g, "$1\n") + "\n" +
            "Market Value (20%DM): " + marketValue + "\n";
    }

    // Apply minimum zoom level for labels (start showing at Zoom Level 13)
    if (resolution < 9.437028) {  // Resolution threshold for minimum Zoom Level 13
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
                placement: placement,
                rotation: rotationAngle  // Apply label rotation in radians
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
