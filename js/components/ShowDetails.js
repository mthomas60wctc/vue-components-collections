import {Book, LibraryItem, Show} from "../models.js";
import LibraryItemCard from "./LibraryItemCard.js";
const ShowDetails = {
    name: 'ShowDetails',
    props: {
        item: {
            type: Show,
            required: true
        }
    },
    template: `
      <div>
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Episode: {{ item.episode }}<br>
        </p>
      </div>`,
};

export default ShowDetails;
