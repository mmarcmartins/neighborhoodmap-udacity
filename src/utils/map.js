const configMaps = {
  mapStyle: {
    height: "300px",
    width: "500px"
  },
  mapCenter: {
    lat: -23.584027,
    lng: -46.642025
  }
};

const defaultMarkers = [
  {
    name: "São Paulo",
    coords: {
      lat: -23.584027,
      lng: -46.642025
    },
    modal: {
      isOpened: false,
      link: '',
      photo: ''
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
