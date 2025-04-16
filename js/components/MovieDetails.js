import {LibraryItem, Movie} from "../models.js";
import LibraryItemCard from "./LibraryItemCard.js";
const MovieDetails = {
    name: 'MovieDetails',
    props: {
        item: {
            type: Movie,
            required: true
        }
    },
    template: `
      <div>
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">
          Runtime: {{ Math.floor(item.runtime / 3600) + ":" + Math.floor((item.runtime % 3600) / 60)}}<br>
        </p>
      </div>`,
};

export default MovieDetails;
