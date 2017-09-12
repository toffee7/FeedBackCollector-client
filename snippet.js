// function to retrieve blob of JSON using fetch

const fetchItems = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json();
    console.log(json);
}

fetchItems();