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
    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    coords: {
      lat: -23.584027,
      lng: -46.642025
    },
    modal: {
      isOpened: false,
      link: 'https://pt.foursquare.com/explore?mode=url&near=Hortol%C3%A2ndia%2C%20SP&nearGeoId=72057594041389591&q=S%C3%A3o%20Paulo',
      photo: '',
      coords: {
        lat: -23,
        lng: -46.642025
      }
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
