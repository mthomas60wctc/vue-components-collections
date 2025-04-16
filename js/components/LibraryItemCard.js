import { LibraryItem } from "../models.js";

const LibraryItemCard = {
  name: 'LibraryItemCard',

  props: {
    item: {
      type: Object, // <-- downside is we can't typehint anymore
      required: true
    }
  },

  methods: {
    checkout() {
      this.item.checkOut();
      this.$emit('checked-out');
    }
  },

  computed: {},

  template: `

<div class="card mb-3" :class="{'border-warning': !item.isAvailable()}" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="item.artwork" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
<slot></slot>
      </div>
    </div>
  </div>
  <div class="card-footer d-flex justify-content-end">
            <button v-if="item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
           <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
            <button class="btn btn-danger" @click="$emit('remove')">Delete</button>
          </div> 
</div>
`
};

export default LibraryItemCard;
