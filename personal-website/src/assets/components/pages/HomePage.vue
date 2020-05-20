<template>
  <div class='image'>
    <img
      src='../../images/Koenigsberg_Painting.jpg'
      alt='Painting of the Königsberg Castle courtyard in 1867'
    />
    <p>Welcome to my home on the web. I originally created this site to share information about current and upcoming novels, but also plan to add some notes about coding projects.</p>
    <p>
      You can also keep updated by following me on Twitter:
      <a href='https://twitter.com/kevinreinholz' target='_blank'>@KevinReinholz</a>.
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
      <a
        href='https://www.hoffnungslose-ziele.com'
        target='_blank'
        class='book-title'
      >Hoffnungslose Ziele</a>).
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>