var size = 0;
var placement = 'point';

var style_Estate_label_76 = function(feature, resolution) {
    var labelText = "";
    var labelFont = "15.0px 'Open Sans', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0004";
    var bufferWidth = 2.0;
    var placement = 'point';
    var rotationAngle = -25 * (Math.PI / 180);  // -25 degrees in radians

    // Access attributes
    var estateAddress = feature.get("Estate/Address") || 'n/a';
    var developer = feature.get("Developer") || 'n/a';
    var estateStatus = feature.get("Estate Status") || 'n/a';

    // Build label text with line breaks
    if (estateAddress !== 'n/a' || developer !== 'n/a' || estateStatus !== 'n/a') {
        labelText = 
            "Estate/Address: " + "\n" + estateAddress.replace(/(.{50})/g, "$1\n") + "\n" +
            "Developer: " + developer.replace(/(.{50})/g, "$1\n") + "\n" +
            "Estate Status: " + estateStatus.replace(/(.{50})/g, "$1\n");
    }

    // Apply minimum zoom level for labels (start showing at Zoom Level 13)
    if (resolution < 5.437028) {  // Resolution threshold for minimum Zoom Level 13
        var geometry = feature.getGeometry();
        var style;

        // Check if the geometry is multi-part and use the centroid
        if (geometry.getType() === 'MultiPolygon' || geometry.getType() === 'Polygon') {
            // Fallback: calculate centroid using extent if getInteriorPoint is unavailable
            var extent = geometry.getExtent();
            var centroid = [
                (extent[0] + extent[2]) / 2,  // Center x-coordinate
                (extent[1] + extent[3]) / 2   // Center y-coordinate
            ];

            style = [ new ol.style.Style({
                geometry: new ol.geom.Point(centroid),  // Place label at the calculated centroid
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
            // Fallback for other geometry types
            style = [ new ol.style.Style({
                fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
                text: null  // Hide label for non-polygon geometries
            })];
        }
    } else {
        style = [ new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
            text: null  // Hide label at lower zoom levels
        })];
    }

    return style;
};
