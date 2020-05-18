<template>
  <div>
    <h2>A Dark Journey of Lost Causes</h2>
    <show-book :book='book' :key='book.title'></show-book>
    <character-bio v-for='character in characters' :key='character.id' :character='character'></character-bio>
  </div>
</template>

<script>
import { bookData } from './../../../book1Data.js';

import { characterData } from './../../../characterData.js';

import ShowBook from './../ShowBook.vue';

import CharacterBio from './../CharacterBio.vue';

export default {
  name: 'HZ1Page',
  components: { ShowBook, CharacterBio },
  data: function() {
    return {
      book: bookData,
      characters: characterData
    };
  }
};
</script>