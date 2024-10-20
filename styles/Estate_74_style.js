// Function to get the current zoom level
var getZoomLevel = function(resolution) {
    var viewResolution = map.getView().getResolution();
    var zoom = map.getView().getZoomForResolution(viewResolution);
    return zoom;
};

var style_Estate_74 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    var labelFont = "600 12.5px 'Open Sans', sans-serif"; // Semi-bold and compact text size
    var labelFill = "#ffffff";  // Label color (white)
    var bufferColor = "#000000";  // Red buffer (halo) color
    var bufferWidth = 2;  // Buffer (halo) width around the text
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';

    // Get the current zoom level
    var zoom = getZoomLevel(resolution);

    // Define the minimum zoom level where labels should start appearing (set to 14.5)
    var minZoomLevelForLabels = 14;

    // Only show the label if the current zoom level is 14.5 or higher
    if (zoom < minZoomLevelForLabels) {
        return [];  // Do not display labels if zoom level is too low
    }

    // Set default values for label fields, replacing missing fields with 'N/A'
    var estateAddress = feature.get("Estate/Address") !== null ? feature.get("Estate/Address") : 'N/A';
    var developer = feature.get("Developer") !== null ? feature.get("Developer") : 'N/A';
    var estateStatus = feature.get("Estate Status") !== null ? feature.get("Estate Status") : 'N/A';

    // Combine the fields into a single label
    labelText = "Estate/Address: " + estateAddress + " Developer: " + developer + " Estate Status: " + estateStatus;

    // Create the style object
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(246,0,176,1.0)',  // Your original stroke color for the layer
            width: 1.748
        }),
        fill: new ol.style.Fill({
            color: 'rgba(247,0,185,0.3137254901960784)' // Your original fill color for the layer
        }),
        text: new ol.style.Text({
            font: labelFont,
            text: labelText,
            fill: new ol.style.Fill({
                color: labelFill  // The text color (white in this case)
            }),
            stroke: new ol.style.Stroke({
                color: bufferColor,  // The red buffer (halo) around the text
                width: bufferWidth   // Width of the buffer (halo)
            }),
            padding: [3, 3, 3, 3],  // Padding around the text to make it more readable
            overflow: true,  // Ensures the text can overflow the feature geometry
            textAlign: textAlign,
            offsetX: offsetX,
            offsetY: offsetY,
            placement: placement,
            maxAngle: Math.PI / 4,  // Allows text to be placed more flexibly around curves
            exceedLength: true,  // Forces labels to be rendered even if they exceed the geometry bounds
        })
    })];

    return style;
};
