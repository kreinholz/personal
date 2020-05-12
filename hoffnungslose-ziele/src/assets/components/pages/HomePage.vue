<template>
  <div class='image'>
    <img
      src='../../images/Koenigsberg_Painting.jpg'
      alt='Painting of the Königsberg Castle courtyard in 1867'
    />
    <p>
      Welcome to
      <span class='book-title'>Hoffnungslose Ziele's</span> home on the web.
    </p>
    <p>
      All text and images are Copyright © 2017-{{ new Date().getFullYear() }} Kevin Reinholz. The beautiful illustration you see was created by José del Nido,
      <a
        href='http://josedelnido.com/'
        target='_blank'
      >http://josedelnido.com</a>.
    </p>
    <p>
      If you’re curious who is featured in the above painting of the Königsberg Castle courtyard in what is now Kaliningrad, circa 1867, from left to right: Kevin Reinholz, Metia, Alina, Anna Veller, Gustav Strehl, Johann Ehlers, Karl Rhode, and Constanţa (from
      <router-link :to='"/hoffnungslose-ziele"' class='book-title'>Hoffnungslose Ziele</router-link>).
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>