<template>
  <div v-if='book'>
    <img :alt='"Cover image for " + book.title' :src='require("./../images/" + book.cover)' />
    <p class='synopsis'>{{ book.synopsis }}</p>
    <h2 v-if='reviews'>Reviews</h2>
    <img
      v-for='review in reviews'
      :key='review'
      :alt='"Book Review Screenshot"'
      :src='require("./../images/" + review)'
    />
    <h2>Available for Purchase At</h2>
    <div v-for='store in stores' :key='store.link'>
      <a :href='store.link' target='_blank'>{{ store.shop }}</a>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowBook',
  props: ['book'],
  data: function() {
    return {
      reviews: this.book.reviews,
      stores: this.book.purchase
    };
  }
};
</script>