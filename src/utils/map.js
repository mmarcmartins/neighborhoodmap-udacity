const configMaps = {
    mapStyle: {
        height: "300px",
        width: "500px"
    },
    mapCenter: {
        lat: -3.745,
        lng: -38.523
    }
};

const defaultMarkers = [
    {
        lat: 37.772,
        lng: -122.214
    }
];

const filterResult = (results, status, google) => {
    if (status === google.maps.GeocoderStatus.OK) {
        console.log("Resultado encontrado");
    } else {
        console.log("Resultado não encontrado");
    }
};

const getAddress = (google, address) => {
    const geoCoder = new google.maps.Geocoder();

    return geoCoder.geocode(
        {
            address: address
        },
        function (results, status) {
            console.log(results);
        }
    );
};

export { configMaps, getAddress, defaultMarkers };