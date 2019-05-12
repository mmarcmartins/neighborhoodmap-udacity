export async function getAllData(marker) {
    const { lat, lng } = marker.coords;

    const getID = await fetch(`https://api.foursquare.com/v2/venues/search?client_id=LSXJAVKL4DRIA2QEVLWCREGGJ4QWZYS5GMERAI0XU0OO5MYH&client_secret=IXLOQ5MJFR3HNS4YWM200VTOI02L0CHL2ZPWOEIKXMFWHXRF&v=20180323&limit=1&ll=40.7243,-74.0018`);
    console.log(getID);
}

/*export async function getAllData() {
    return Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/photos"),
        fetch("https://jsonplaceholder.typicode.com/posts")
    ])
        .then(values => organizeValues(values).then())
        .then(objs => formatData(objs))
        .catch(e => alert(`Error: ` + e));
}

const organizeValues = async values => {
    const users = await values[0].json();
    const albums = await values[1].json();
    const photos = await values[2].json();
    const posts = await values[3].json();

    return { users, albums, photos, posts };
};*/