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
    name: "Americana",
    coords: {
      lat: 37.772,
      lng: -122.214
    }
  }
];

const getAddress = (google, address) => {
  const geoCoder = new google.maps.Geocoder();
  return new Promise(resolve => {
    geoCoder.geocode(
      {
        address: address
      },
      (results, status) => {
        resolve({ results, status });
      }
    );
  });
};

export { configMaps, getAddress, defaultMarkers };
