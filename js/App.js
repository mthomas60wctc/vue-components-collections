import LibraryItemList from "./components/LibraryItemList.js";
import SearchField from "./components/SearchField.js";
import { LibraryCollection, Book, Movie, LibraryItemFactory } from "./models.js";

const App = {
    components: { LibraryItemList, SearchField },
    // data: all the data for the app
    // data(){
    //     return {}
    // },
    data() {
        return {
            library: new LibraryCollection(),
        }
    },

    methods: {
        populateList(newLib) {
            this.library = newLib;
            console.log("new library", newLib)
        }
    },

    template: `
        <div>
            <search-field @searched = "(s) => populateList( s )"></search-field>
            <library-item-list :libraryIn=library></library-item-list>
        </div>
    `
};

export default App;
