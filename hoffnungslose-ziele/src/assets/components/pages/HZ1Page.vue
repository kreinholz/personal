<template>
  <div>
    <h2>A Dark Journey of Lost Causes</h2>
    <show-book :book='book' :key='book.title'></show-book>
    <h2>Character Info</h2>
    <character-bio v-for='character in characters' :key='character.id' :character='character'></character-bio>
    <p></p>
    <p></p>
    <p></p>
    <p>
      All text and images are Copyright © 2017-{{ new Date().getFullYear() }} Kevin Reinholz. The beautiful illustrations you see were created by José del Nido,
      <a
        href='http://josedelnido.com/'
        target='_blank'
      >http://josedelnido.com</a>.
    </p>
  </div>
</template>

<script>
import { bookData } from './../../../book1Data.js';

import { characterData } from './../../../hz1CharacterData.js';

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