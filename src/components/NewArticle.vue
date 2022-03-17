<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "NewArticle.vue"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Kontaktujte nás</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Předmět</label>
            <input v-model="article.title" type="text" class="form-control"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Text</label>
            <textarea v-model="article.text" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Příloha</label>
            <input @change="onImage" class="form-control" type="file" id="file">
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" class="btn float-end btn-danger"><em class="bi-check"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArticle",
  data() {
    return {
      article: {
        title: null,
        text: null,
        image: null
      }
    }
  },
  methods: {
    onImage(e) {
      // TODO parse image
    },
    send() {
      //this.$http.post(this.article)
    }
  }
}
</script>

<style scoped>

</style>
