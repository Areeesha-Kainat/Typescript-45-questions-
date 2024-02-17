interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {artist, title};
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

let album1: Album = make_album("tu chaiye", "atif aslam");
console.log(album1); 
let album2: Album = make_album("afsanay", "youngstunner", 10);
console.log(album2); 

let album3: Album = make_album("tu hai kahan", "AUR");
console.log(album3);