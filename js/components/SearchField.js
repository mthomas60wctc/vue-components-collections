import { LibraryCollection, LibraryItemFactory } from "../models.js";


const SearchField = {
    name: 'SearchField',
    data() {
        return {
            terms: "",

        }
    },

    methods: {
        queryAPI() {
            let url = 'https://itunes.apple.com/search';
            let config = {
                params: {
                    term: this.terms, // defined in data
                    limit: 36,
                    country: "US"
                },
            };
            axios.get(url, config)
                .then(response => {
                    if (response.data.results.length > 0) {
                        const newLib = new LibraryCollection();
                        response.data.results.forEach(element => {
                            newLib.add(LibraryItemFactory(element));
                        });
                        this.$emit('searched', newLib);
                    }
                })
                .catch(error => console.warn('Error fetching items', error));

        },
    },

    template: `
    <div class="input-group mb-3 w-25">
        <input v-model="terms" type="text" class="form-control" placeholder="Search Terms" aria-label="Recipient's username" aria-describedby="button-addon2" @keyup.enter="queryAPI">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="queryAPI">Search</button>
    </div>
    `,
};

export default SearchField;