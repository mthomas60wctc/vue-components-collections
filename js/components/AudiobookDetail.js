import {Book, LibraryItem, Audiobook} from "../models.js";
import LibraryItemCard from "./LibraryItemCard.js";
const AudiobookDetails = {
    name: 'AudiobookDetails',
    props: {
        item: {
            type: Audiobook,
            required: true
        }
    },
    template: `
      <div>
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Author: {{ item.author }}<br>
        </p>
      </div>`,
};

export default AudiobookDetails;
