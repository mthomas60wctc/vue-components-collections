import {Book, LibraryItem, Podcast} from "../models.js";
import LibraryItemCard from "./LibraryItemCard.js";
const PodcastDetails = {
    name: 'PodcastDetails',
    props: {
        item: {
            type: Podcast,
            required: true
        }
    },
    template: `
      <div>
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Episodes: {{ item.episodes }}<br>
        </p>
      </div>`,
};

export default PodcastDetails;
