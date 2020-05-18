<template>
  <div>
    <h2>Sympathy for the Fallen</h2>
    <show-book :book='book' :key='book.title'></show-book>
    <h2>Character Info</h2>
    <character-bio v-for='character in characters' :key='character.id' :character='character'></character-bio>
    <p></p>
    <p></p>
    <p></p>
    <p>
      All text and images are Copyright © 2018-{{ new Date().getFullYear() }} Kevin Reinholz. The beautiful illustrations you see were created by José del Nido,
      <a
        href='http://josedelnido.com/'
        target='_blank'
      >http://josedelnido.com</a>.
    </p>
  </div>
</template>

<script>
import { bookData } from './../../../book3Data.js';

import { characterData } from './../../../hz3CharacterData.js';

import ShowBook from './../ShowBook.vue';

import CharacterBio from './../CharacterBio.vue';

export default {
  name: 'HZ3Page',
  components: { ShowBook, CharacterBio },
  data: function() {
    return {
      book: bookData,
      characters: characterData
    };
  }
};
</script>