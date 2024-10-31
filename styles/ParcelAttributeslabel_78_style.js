// Assuming you've already created your OpenLayers map object as `map`
var size = 0;
var placement = 'point';

// Define minimum and maximum font sizes
var minFontSize = 6.5;  // Minimum font size
var maxFontSize = 13; // Maximum font size

// Function to calculate dynamic font size based on zoom level
function getFontSize(zoomLevel) {
    if (zoomLevel < 13.5) {
        return `${minFontSize}px`; // Use minimum font size at zoom levels below 13.5
    } else if (zoomLevel < 16) {
        // Interpolate font size between min and max
        return `${Math.round(minFontSize + ((maxFontSize - minFontSize) * ((zoomLevel - 13.5) / (16 - 13.5))))}px`;
    } else {
        return `${maxFontSize}px`; // Use maximum font size at zoom level 16 and above
    }
}

var style_ParcelAttributeslabel_78 = function(feature, resolution) {
    console.log("Feature:", feature);  // Log the feature object to inspect its attributes

    var labelText = "";
    var zoomLevel = map.getView().getZoom();
    var labelFont = getFontSize(zoomLevel) + " 'Poppins', sans-serif";  // Dynamic font size based on zoom level
    var labelFill = "#ffffff";  // Text color set to white
    var bufferColor = "#000000";  // Stroke color
    var bufferWidth = 4.0;  // Stroke width

    // Access individual attributes
    var company = feature.get("Company") || 'n/a';
    var directors = feature.get("Directors") || 'n/a';
    var marketValue = feature.get("Market Value (20%DM)") || 'n/a';

    // Format market value if it's not 'n/a'
    var formattedMarketValue = marketValue !== 'n/a' ? `$${parseFloat(marketValue).toLocaleString()}` : 'n/a';

    // Debugging: log the retrieved values
    console.log("Company:", company);
    console.log("Directors:", directors);
    console.log("Market Value:", marketValue);
    console.log("Formatted Market Value:", formattedMarketValue); // Log formatted Market Value
    console.log("Current Zoom Level:", zoomLevel); // Log the zoom level

    // Only construct label text if not all values are 'n/a'
    if (!(company === 'n/a' && directors === 'n/a' && marketValue === 'n/a')) {
        if (zoomLevel >= 13.5 && company !== 'n/a') {  // Show company at zoom level 13.5 or closer
            labelText += "Company:\n" + company + "\n\n";  // Company section
        }
        if (zoomLevel >= 15 && directors !== 'n/a') {  // Show directors at zoom level 16 or closer
            labelText += "Directors:\n" + formatDirectors(directors) + "\n\n";  // Directors section
        }
        if (zoomLevel >= 16 && formattedMarketValue !== 'n/a') {  // Show market value at zoom level 17 or closer
            labelText += "\nMarket Value (20%DM): " + formattedMarketValue + "\n";  // Market value section
        }
    }

    // Apply minimum zoom level for labels
    if (labelText) {  // Check if there is any label text to display
        var style = [ new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),  // Fill transparency
            text: new ol.style.Text({
                text: labelText,
                font: labelFont,  // Use dynamic font size here
                fill: new ol.style.Fill({
                    color: labelFill  // Set text color to white
                }),
                stroke: new ol.style.Stroke({
                    color: bufferColor,  // Stroke color
                    width: bufferWidth
                }),
                overflow: true,  // Allow label to extend beyond feature boundary
                placement: placement,
                rotation: 0 * (Math.PI / 180)  // Apply label rotation in radians
            })
        })];
    } else {
        var style = [ new ol.style.Style({
            fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'}),
            text: null  // Hide label if there's no text
        })];
    }

    return style;
};

// Function to format directors with line breaks
function formatDirectors(directorsString) {
    return directorsString
        .split(';')  // Split by semicolon to get individual directors
        .map(d => d.trim())
        .flatMap(d => {
            // Split by comma and ensure everything after a comma goes on a new line
            return d.split(',').map(part => part.trim());
        })
        .join('\n\n');  // Join with double line breaks for spacing
}

// Log the zoom level to the console
map.on('moveend', function() {
    console.log("Map has moved or zoomed.");  // Confirm the event is triggered
    var zoomLevel = map.getView().getZoom();  // Retrieve the current zoom level
    console.log("Current Zoom Level:", zoomLevel);  // Log the zoom level
});
