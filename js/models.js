// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those).
// Prototypes are simply objects that define a template for future objects.

function LibraryCollection(arr) {
    // composition
    // _ denotes that it's private
    // this._arr = [];
    //
    // this.add = function(item){
    //     this._arr.push(item);
    // }

    // decorate
    arr = arr ?? [];

    arr.add = function (item) {
        this.push(LibraryItem(item));

        // return "this" to allow chaining
        return this;
    }

    arr.remove = function (item) {
        // here
        this.splice(this.findItem(item), 1);

        // return "this" to allow chaining
        return this;
    }

    arr.findItem = function (item, key) {
        return this.findIndex(item2 => {
            // return item.id === item2.id
            // return item[key] === item2[key]
            // workaround because we don't have ids
            return JSON.stringify(item) === JSON.stringify(item2);
        });
    }

    return arr;
}
// extend array
//LibraryCollection.prototype = Object.create([]);




const STATUSES = {
    IN: 'in',
    OUT: 'out',
    MISSING: 'missing',
}

// Prototypes/Classes use TitleCase for naming
function LibraryItem(media) {

    // library item is going "decorate" media

    // set the default status
    media.status = media.status ?? STATUSES.IN;

    // methods
    media.checkIn = function () {
        this.status = STATUSES.IN;
    }

    media.checkOut = function () {
        this.status = STATUSES.OUT;
    }

    media.isAvailable = function () {
        return this.status === STATUSES.IN;
    }

    // return the decorated object!
    return media;
}

function LibraryItemWithArtwork(media, artworkUrl) {
    media.artwork = artworkUrl;
    return LibraryItem(media)
}


class Book {
    static type = 'Book';

    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }
}


class Audiobook {
    static type = 'Audiobook';

    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Movie {
    static type = 'Movie';

    constructor(title, runtime) {
        this.title = title;
        this.runtime = runtime;
    }
}

class Podcast {
    static type = 'Podcast';

    constructor(title, episodes) {
        this.title = title;
        this.episodes = episodes;
    }
}

class Song {
    static type = 'Song';

    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

class Show {
    static type = 'Show';

    constructor(title, episode) {
        this.title = title;
        this.episode = episode;
    }
}

function LibraryItemFactory(item) {
    const itemType = (item.kind ?? item.wrapperType).toLowerCase();
    let newItem = false;
    switch (itemType) {
        case 'audiobook':
            newItem = LibraryItemWithArtwork(new Audiobook(item.collectionCensoredName, item.artistName), item.artworkUrl100);
            break;
        case 'feature-movie':
            newItem = LibraryItemWithArtwork(new Movie(item.trackCensoredName, item.trackTimeMillis / 1000), item.artworkUrl100);
            break;
        case 'tv-episode':
            newItem = LibraryItemWithArtwork(new Show(item.trackCensoredName, item.trackNumber), item.artworkUrl100);
            break;
        case 'song':
            newItem = LibraryItemWithArtwork(new Song(item.trackCensoredName, item.artistName), item.artworkUrl100);
            break;
        case 'podcast':
            newItem = LibraryItemWithArtwork(new Podcast(item.trackCensoredName, item.trackCount), item.artworkUrl100);
            break;
    }
    if (newItem) return newItem;
}


let li = new LibraryItem(new Movie('Something', 300));
// let li = Product(LibraryItem(new Movie('Something', 300)));
// let li2 = new Product(new Movie('Something', 300), 9.99);
// console.log(li);
//
// let movie = {title: 'Whatever', runtime: 100};
// LibraryItem.call(movie, 'Whatever');


export { LibraryCollection, LibraryItemFactory, LibraryItem, Book, Movie, Audiobook, Show, Song, Podcast }

// 1. Use these models in our components
// 2. Add additional properties
// 3. Identify code smells and fix
