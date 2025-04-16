import BookDetails from "./BookDetails.js";
import MovieDetails from "./MovieDetails.js";
import LibraryItemCard from "./LibraryItemCard.js";
import { LibraryCollection, Book, Movie } from "../models.js";
import AudiobookDetails from "./AudiobookDetail.js";
import PodcastDetails from "./PodcastDetails.js";
import ShowDetails from "./ShowDetails.js";
import SongDetails from "./SongDetails.js";

const LibraryItemList = {
  name: 'LibraryItemList',

  components: { 
    BookDetails, 
    MovieDetails, 
    AudiobookDetails, 
    PodcastDetails, 
    ShowDetails, 
    SongDetails, 
    
    LibraryItemCard },

  props: {
    libraryIn: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      library: this.libraryIn
    }
  },


  computed: {},

  template: `
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
        <div class="col" v-for="item in libraryIn">
          <library-item-card :item="item" @remove="library.remove(item)">
            <component :is="item.constructor.type + 'Details'" 
                       :item="item"></component>

          </library-item-card>
        </div>
      </div>`,
};

export default LibraryItemList;
