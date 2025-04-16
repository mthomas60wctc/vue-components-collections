import {Book, LibraryItem} from "../models.js";
import LibraryItemCard from "./LibraryItemCard.js";
const BookDetails = {
    name: 'BookDetails',
    props: {
        item: {
            type: Book,
            required: true
        }
    },
    template: `
      <div>
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Pages: {{ item.pages }}<br>
        </p>
      </div>
    `,
};

export default BookDetails;
