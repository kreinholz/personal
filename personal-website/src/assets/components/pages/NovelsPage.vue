<template>
  <div>
    <h1>Novels</h1>
    <a href='/aimee'>
    <img
      src='../../images/Aimee book cover.png'
      alt='A.I.M.E.E. Book Cover'
    />
    </a>
    <p></p>
    <a href='https://www.hoffnungslose-ziele.com' target='_blank'>
    <img
      src='../../images/HZ 1 Cover.jpg'
      alt='Hoffnungslose Ziele Book Cover'
    />
    </a>
    <p>
      All text and images are Copyright © 2017-{{ new Date().getFullYear() }} Kevin Reinholz.
    </p>
  </div>
</template>

<script>

export default {
  name: 'NovelsPage',
  data: function() {
    return {};
  }
};
</script>