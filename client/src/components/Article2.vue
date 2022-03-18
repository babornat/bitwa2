<template>
  <div class="row">
    <div class="col-md-12 offset-md-0 p-5 bg-dark text-white">
      <h3>{{ article.title }}</h3>

      <p v-html="article.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {
        title: null,
        date: null,
        text: null,
        image: null
      }
    }
  },
  computed: {
    formattedDate() {
      return this.article.date ? this.article.date.toLocaleDateString(): '';
    }
  },
  async mounted() {
    this.article = await this.getData();
  },
  methods: {
    async getData() {
      return {
        image: 'https://picsum.photos/seed/picsum/360/240',
        title: 'Odkud pochází naše káva',
        date: new Date(),
        text: `Nedílnou součástí italského menu jsou předkrmy. Ty mají za úkol navnadit chuťové buňky, ale zdaleka nemají nasytit. Téměř jistě se vám při konzumaci italského menu stane to, že vám předkrm zachutná natolik, že byste si ho dali nejraději ještě minimálně jednou či dvakrát. Pokud se tak stane, předkrm splnil své poslání.

Jako předkrm se v italské kuchyni často podává nějaké pečivo – například focaccia, což je tradiční italské pečivo podobné těstu na pizzu, ke kterému můžete podávat šunku prosciutto, nebo třeba salát caprese, což je kombinace rajčat, mozzarelly a bazalky, vše je dochuceno hrubou solí, špetkou pepře a zakápnuto olivovým olejem.

Dalším velmi často podávaným předkrmem je bruschetta, což je v podstatě opečená bageta, která je v tomto případě potřená česnekem a podávaná se směsí z rajčat, kaparů a bazalky, se špetkou soli, pepře a kapkou olivového oleje.

Výtečným a zároveň luxusnějším předkrmem je carpaccio, tedy velmi tenké plátky masa (hovězího, telecího, zvěřinového, lososového nebo tuňákového), které jsou podávány společně s kapkou citronu, olivovým olejem a s parmezánem. Sladkou variantou může být například mangové carpaccio.
                `
      }
    }
  }

}
</script>

<style scoped>

</style>
