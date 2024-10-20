var size = 0;
var placement = 'point';

// Function to get the current zoom level
var getZoomLevel = function(resolution) {
    var viewResolution = map.getView().getResolution();
    var zoom = map.getView().getZoomForResolution(viewResolution);
    return zoom;
};

var style_ParcelAttributes_75 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    var labelFont = "600 11.7px 'Open Sans', sans-serif";  // Font styling
    var labelFill = "#ffffff";  // Label color (white)
    var bufferColor = "#000000";  // Black text buffer (halo) color
    var bufferWidth = 2.0;  // Increased text buffer width (halo thickness)
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';

    // Get the current zoom level
    var zoom = getZoomLevel(resolution);

    // Define the minimum zoom level where labels should start appearing
    var minZoomLevelForLabels = 14;  // Adjust this value to control label visibility after 4 scrolls

    // Only show the label if the current zoom level is above the minimum threshold
    if (zoom < minZoomLevelForLabels) {
        return [];  // Do not display labels if zoom level is too low (zoomed out)
    }

    // Fetch each attribute separately and handle any missing values
    var company = feature.get("Company") !== null ? feature.get("Company") : 'N/A';
    var directors = feature.get("Directors") !== null ? feature.get("Directors") : 'N/A';
    var marketValue = feature.get("Market Value (20%DM)") !== null ? feature.get("Market Value (20%DM)") : 'N/A';

    // Check if all attributes are "N/A". If so, skip showing the label.
    if (company === 'N/A' && directors === 'N/A' && marketValue === 'N/A') {
        return [];  // Do not display the label if all attributes are "N/A"
    }

    // Combine the attributes into a single label text with controlled spacing
    labelText = "Company: " + company + "\nDirectors: " + directors + "\nMarket Value: " + marketValue;

    // Create the style object for the label
    var style = [new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(196,60,57,0.0)'  // Transparent background fill (if needed)
        }),
        text: new ol.style.Text({
            font: labelFont,
            text: labelText,
            fill: new ol.style.Fill({
                color: labelFill  // White text color
            }),
            stroke: new ol.style.Stroke({
                color: bufferColor,  // Black buffer (halo) color
                width: bufferWidth  // Increased thickness for the text buffer
            }),
            padding: [3, 3, 3, 3],  // Padding around the text
            overflow: true,  // Allow text to overflow the geometry if needed
            textAlign: textAlign,
            offsetX: offsetX,
            offsetY: offsetY,
            placement: placement,
        })
    })];

    return style;
};
