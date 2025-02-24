// streetview.js
(function() {
    // Ensure dependencies are loaded
    if (typeof google === 'undefined' || typeof ol === 'undefined') {
        console.error('Google Maps API or OpenLayers is not loaded.');
        return;
    }

    // Initialize Street View Service
    const streetViewService = new google.maps.StreetViewService();
    const STREETVIEW_MAX_DISTANCE = 50; // meters

    // Get references to HTML elements
    const streetViewIcon = document.getElementById('street-view-icon');
    const mapContainer = document.getElementById('map');
    const streetViewPanorama = document.getElementById('street-view-panorama');
    const closeStreetViewButton = document.getElementById('close-street-view');

    let isDragging = false;
    // Removed: let streetViewHighlightLayer; // No longer needed
    let panoramaInstance;

    // Create the custom events for Pegman and Street View state changes
    const pegmanDragStartEvent = new Event('pegmanDragStart');
    const pegmanDragEndEvent = new Event('pegmanDragEnd');
    const streetViewClosedEvent = new Event('streetViewClosed');

    // **Removed the immediate dispatch of events here**
    // They will be dispatched when actual drag starts/ends and when Street View closes.

    // Variables to store Pegman's original position (if needed)
    let originalLeft = streetViewIcon.style.left;
    let originalTop = streetViewIcon.style.top;

    function initStreetView() {
        // Add event listeners for dragging the Street View icon
        streetViewIcon.addEventListener('mousedown', startDragging);
        document.addEventListener('mouseup', stopDragging);
        mapContainer.addEventListener('mousemove', handleDragging);

        // Add event listener for map clicks to open Street View
        map.on('singleclick', function(event) {
            // Removed: Logic related to streetViewHighlightLayer
            // Since we're opening Street View directly, map clicks are no longer needed
        });

        // Add event listener for the close button
        closeStreetViewButton.addEventListener('click', closeStreetView);
    }

    // Start dragging the Street View icon
    function startDragging(event) {
        isDragging = true;
        streetViewIcon.classList.add('dragging');
        streetViewIcon.style.cursor = 'grabbing';

        // Dispatch Pegman drag start event
        document.dispatchEvent(pegmanDragStartEvent);

        event.preventDefault(); // Avoid text selection
    }

    // Stop dragging the Street View icon
    function stopDragging(event) {
        if (isDragging) {
            isDragging = false;
            streetViewIcon.classList.remove('dragging');
            streetViewIcon.style.cursor = 'grab';

            // Dispatch Pegman drag end event
            document.dispatchEvent(pegmanDragEndEvent);

            // Get the final drop position
            const rect = mapContainer.getBoundingClientRect();
            const dropX = event.clientX - rect.left;
            const dropY = event.clientY - rect.top;
            const dropCoordinate = map.getCoordinateFromPixel([dropX, dropY]);

            // Check if Street View is available at the drop location
            checkStreetViewAvailability(dropCoordinate);

            // Reset Pegman's position to original after dragging
            resetPegmanPosition();
        }
    }

    // Handle dragging movement
    function handleDragging(event) {
        if (!isDragging) return;

        const rect = mapContainer.getBoundingClientRect();
        const pixel = [event.clientX - rect.left, event.clientY - rect.top];
        const coordinate = map.getCoordinateFromPixel(pixel);

        // Move the icon to follow the cursor
        streetViewIcon.style.transform = `translate(${event.clientX - rect.left - 35}px, ${event.clientY - rect.top - 885}px)`;
    }

    // Reset Pegman's position
    function resetPegmanPosition() {
        streetViewIcon.style.transform = 'translate(0px, 0px)';
    }

    // Check if Street View is available at the given coordinate
    function checkStreetViewAvailability(coordinate) {
        const lonLat = ol.proj.toLonLat(coordinate);
        const lat = lonLat[1];
        const lng = lonLat[0];
        const latLng = new google.maps.LatLng(lat, lng);

        streetViewService.getPanorama({
            location: latLng,
            radius: STREETVIEW_MAX_DISTANCE
        }, function(data, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                // Instead of highlighting, directly open Street View
                openStreetView(coordinate);
            } else {
                alert('Street View data not found for this location.');
            }
        });
    }

    // **Removed: highlightStreet function**
    /*
    function highlightStreet(coordinate, available) {
        if (streetViewHighlightLayer) {
            map.removeLayer(streetViewHighlightLayer);
            streetViewHighlightLayer = null;
        }

        if (available) {
            const feature = new ol.Feature({
                geometry: new ol.geom.Point(coordinate)
            });

            const highlightStyle = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({ color: 'cyan' }),
                    stroke: new ol.style.Stroke({ color: 'blue', width: 2 })
                })
            });

            const vectorSource = new ol.source.Vector({
                features: [feature]
            });

            streetViewHighlightLayer = new ol.layer.Vector({
                source: vectorSource,
                style: highlightStyle
            });

            map.addLayer(streetViewHighlightLayer);
        }
    }
    */

    // Open Street View Panorama at the given coordinate
    function openStreetView(coordinate) {
        const lonLat = ol.proj.toLonLat(coordinate);
        const lat = lonLat[1];
        const lng = lonLat[0];
        const latLng = new google.maps.LatLng(lat, lng);

        streetViewService.getPanorama({
            location: latLng,
            radius: STREETVIEW_MAX_DISTANCE
        }, function(data, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                panoramaInstance = new google.maps.StreetViewPanorama(
                    streetViewPanorama,
                    {
                        position: data.location.latLng,
                        pov: { heading: 165, pitch: 0 },
                        zoom: 1,
                        visible: true
                    }
                );

                streetViewPanorama.style.display = 'block';
                closeStreetViewButton.style.display = 'block';
            } else {
                alert('Street View data not found for this location.');
            }
        });
    }

    // Close the Street View Panorama
    function closeStreetView() {
        streetViewPanorama.style.display = 'none';
        closeStreetViewButton.style.display = 'none';

        // Remove the panorama instance
        if (panoramaInstance) {
            panoramaInstance.setVisible(false);
            panoramaInstance = null;
        }

        // **Removed: Remove street highlight**
        /*
        if (streetViewHighlightLayer) {
            map.removeLayer(streetViewHighlightLayer);
            streetViewHighlightLayer = null;
        }
        */

        // Dispatch streetViewClosed event
        document.dispatchEvent(streetViewClosedEvent);
    }

    // Initialize Street View functionalities on window load
    window.addEventListener('load', initStreetView);
})();
