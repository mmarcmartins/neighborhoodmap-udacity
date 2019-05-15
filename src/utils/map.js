import { RED_ICON } from "./globals";
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
    name: "São Paulo, SP, Brasil",
    icon: RED_ICON,
    coords: {
      lat: -23.584027,
      lng: -46.642025
    },
    modal: {
      isOpened: false,
      link:
        "https://pt.foursquare.com/explore?mode=url&near=Hortol%C3%A2ndia%2C%20SP&nearGeoId=72057594041389591&q=S%C3%A3o%20Paulo",
      photo: "",
      coords: {
        lat: -23,
        lng: -46.642025
      }
    }
  },
  {
    name: "Florianópolis - SC, Brasil",
    icon: RED_ICON,
    coords: {
      lat: -27.597991,
      lng: -48.516877
    },
    modal: {
      isOpened: false,
      link: "https://en.wikipedia.org/wiki/Florian%C3%B3polis",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Avenida_Beira_Mar_Norte_Florianopolis.jpg",
      coords: {
        lat: -27,
        lng: -48.516877
      }
    }
  },
  {
    name: "Brasília - DF, Brasil",
    icon: RED_ICON,
    coords: {
      lat: -15.795695,
      lng: -47.880173
    },
    modal: {
      isOpened: false,
      link: "https://en.wikipedia.org/wiki/Bras%C3%ADlia",
      photo:
        "https://www.jota.info/wp-content/uploads/2018/11/71a97b3fe90b01b307ae56f4a59e2dba.jpg",
      coords: {
        lat: -15.295695,
        lng: -47.880173
      }
    }
  },
  {
    name: "Ubatuba - SP, 11680-000, Brasil",
    icon: RED_ICON,
    coords: {
      lat: -23.508935,
      lng: -45.132763
    },
    modal: {
      isOpened: false,
      link: "https://en.wikipedia.org/wiki/Ubatuba",
      photo:
        "https://1z5jae2n0j263mpko2pt22bi-wpengine.netdna-ssl.com/ubatuba/wp-content/uploads/sites/12/2017/02/Praia-da-Sununga-Ubatuba-Naturam-41.jpg",
      coords: {
        lat: -23,
        lng: -45.132763
      }
    }
  },
  {
    name: "São Luís - Vila Maranhão, São Luís - MA, Brasil",
    icon: RED_ICON,
    coords: {
      lat: -2.538509,
      lng: -44.281297
    },
    modal: {
      isOpened: false,
      link: "https://en.wikipedia.org/wiki/S%C3%A3o_Lu%C3%ADs,_Maranh%C3%A3o",
      photo:
        "https://www.viagensecaminhos.com/wp-content/uploads/2016/11/vista-aerea-centro-historico-sao-luis.jpg",
      coords: {
        lat: -2,
        lng: -44.281297
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
