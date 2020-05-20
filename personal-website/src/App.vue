<template>
  <div id='app'>
    <div id='title'>
      <h1>Kevin Reinholz</h1>
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
export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: ['home', 'about', 'novels', 'activism']
    };
  }
};
</script>

<style lang="css">
@import './assets/css/style.css';
</style>