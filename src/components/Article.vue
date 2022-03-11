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
        text: `Téměř všechna káva na světě roste v tzv. kávovém pásu. Kávový pás obepíná zemi mezi obratníky Raka a Kozoroha. Na světě je přes 70 zemí, které produkují kávu, a společnost nakupuje kávu ve více než 30 z nich. Jednotlivé země mají odlišnou kulturu, krajinu a metody pěstování, což jsou všechno faktory, kteří přispívají k různé chuti kávy.

Kávový pás se dělí do tří hlavních regionů pěstování: Latinská Amerika, Afrika a konečně Asie a Tichomoří. Odpovědným způsobem nakupujeme, pražíme a mícháme kávy z každého z těchto tří regionů, abychom vám přinášeli jedinečné kávy.

Stejně jako čaj nebo víno získává také káva většinu své chuti z místa, odkud pochází. V každém z těchto pěstitelských regionů jsou jiné podmínky pěstování a tradice, které mají vliv na celkovou chuť kávy.
                `
      }
    }
  }

}
</script>

<style scoped>

</style>
