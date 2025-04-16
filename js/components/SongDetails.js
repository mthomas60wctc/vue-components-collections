import {Book, LibraryItem, Song} from "../models.js";
import LibraryItemCard from "./LibraryItemCard.js";
const SongDetails = {
    name: 'SongDetails',
    props: {
        item: {
            type: Song,
            required: true
        }
    },
    template: `
      <div>
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Artist: {{ item.artist }}<br>
        </p>
      </div>`,
};

export default SongDetails;
