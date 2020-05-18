<template>
  <div v-if='book'>
    <img :alt='"Cover image for " + book.title' :src='require("./../images/" + book.cover)' />
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'ShowBook',
  props: ['book'],
  data: function() {
    return {};
  }
};
</script>