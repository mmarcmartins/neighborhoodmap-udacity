const CLIENT_ID = "LSXJAVKL4DRIA2QEVLWCREGGJ4QWZYS5GMERAI0XU0OO5MYH";
const CLIENT_SECRET = "IXLOQ5MJFR3HNS4YWM200VTOI02L0CHL2ZPWOEIKXMFWHXRF";
export async function getAllData(marker) {
  const { lat, lng } = marker;

  const apiCallLocation = await fetch(
    `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190501&limit=1&ll=${lat},${lng}`
  );
  const apiCallLocationJSON = await apiCallLocation.json();
  const id = apiCallLocationJSON.response.venues[0].id;
  const placeInfo = {
    isOpened: false,
    link: await getLink(id),
    photo: await getPhoto(id)
  };
  return placeInfo;
}

export async function getLink(id) {
  const apiCallLink = await fetch(
    `https://api.foursquare.com/v2/venues/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190501&limit=1`
  );
  const apiCallLinkJSON = await apiCallLink.json();
  return apiCallLinkJSON.response.venue.canonicalUrl;
}

export async function getPhoto(id) {
  const apiCallPhoto = await fetch(
    `https://api.foursquare.com/v2/venues/${id}/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190501&limit=1`
  );
  const apiCallPhotoJSON = await apiCallPhoto.json();
  if (apiCallPhotoJSON.response.photos.items.length !== 0) {
    const firstPhoto = apiCallPhotoJSON.response.photos.items[0];
    const firstPhotoUrl = `${firstPhoto.prefix}300x300${firstPhoto.suffix}`;
    return firstPhotoUrl;
  } else {
    return "placeholder";
  }
}
