<template>
  <div>
    <h2>A.I.M.E.E.</h2>
    <show-book :book='book' :key='book.title'></show-book>
    <p>
      All text and images are Copyright © 2019-{{ new Date().getFullYear() }} Kevin Reinholz.
    </p>
  </div>
</template>

<script>
import { bookData } from './../../../aimeeData.js';

import ShowBook from './../ShowBook.vue';

export default {
  name: 'AIMEE',
  components: { ShowBook },
  data: function() {
    return {
      book: bookData
    };
  }
};
</script>