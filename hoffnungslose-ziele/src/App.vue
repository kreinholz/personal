<template>
  <div id='app'>
    <div id='title'>
      <h1>Hoffnungslose Ziele</h1>
    </div>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>{{ link }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { bookData } from './bookData.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      bookData: bookData,
      links: [
        'home',
        'hoffnungslose ziele',
        'hoffnungslose ziele II',
        'hoffnungslose ziele III',
        'about'
      ]
    };
  }
};
</script>

<style lang="css">
@import './assets/css/style.css';
</style>