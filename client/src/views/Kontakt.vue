<!--<template>-->
<!--  <div class="kontakt">-->
<!--    <h1>Kontakt</h1>-->
<!--    <p>Adresa</p>-->
<!--    <p>Telefon</p>-->
<!--    <p>IČO</p>-->
<!--    <p>Soc. sítě</p>-->
<!--  </div>-->
<!--</template>-->

<!--<style>-->
<!--@media (min-width: 1024px) {-->
<!--  .about {-->
<!--    min-height: 100vh;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <div class="row">
    <div class="col-8 offset-2">
      <NewArticle></NewArticle>
    </div>
  </div>

</template>

<script>
import NewArticle from '@/components/NewArticle.vue';

export default {
  name: "Kontakt",
  components: {NewArticle}
}
</script>

<style scoped>

</style>
