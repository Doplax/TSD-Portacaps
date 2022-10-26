const movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    }
];

// Creates the table head entries. Simply gets the first movie
const createHead = (headObject) => {
    let cells = "";
    for (const key in headObject) {
        // This takes the first letter of each title and uppercases it
        cells += `<th>${key.charAt(0)}.`
    }
}