<template>
  <div class='character'>
    <div class='imageCell'>
      <img
        class='characterPortrait'
        :alt='"Portrait of " + character.name'
        :src='require("./../images/" + character.image)'
      />
    </div>
    <div class='characterDetails'>
      <b>Name:&nbsp;</b>
      {{ character.name }}
      <p></p>
      <b>Height:&nbsp;</b>
      {{ character.height }}
      <p></p>
      <b>Hair Color:&nbsp;</b>
      {{ character.hair_color }}
      <p></p>
      <b>Eye Color:&nbsp;</b>
      {{ character.eye_color }}
      <p></p>
      <b>Blood Type:&nbsp;</b>
      {{ character.blood_type }}
      <p></p>
      <b>Birth Date:&nbsp;</b>
      {{ character.birth_date }}
      <p></p>
      <b>Relationships:&nbsp;</b>
      {{ character.relationships }}
      <p></p>
      <b>Additional Info:&nbsp;</b>
      {{ character.additional_info }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBio',
  props: ['character']
};
</script>