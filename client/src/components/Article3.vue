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
        text: `Pojďme si oba pojmy ujasnit. Cider (čteme sajdr) má původ v Anglii. Vyrábí se z čerstvě lisovaného moštu, ale není to podmínka. Stejně tak můžete při jeho výrobě použít jablečný koncentrát nebo sušinu. Doba kvašení se počítá v řádech týdnů. Potom už stačí dosladit, dochutit a pasterizovat. O bublinky se postará přidaný oxid uhličitý. Potom se hotový nápoj stáčí do lahví.

Na první pohled je příprava jednoduchá, ale i zde je třeba dodržovat určitá pravidla. Při kvašení nesmí být obsah alkoholu vyšší než 8,2 %, jinak už na stůl nedostanete cider, ale jablečné víno. Správný cider je vyváženou kombinací hořské, sladké a kyselé chuti. A jaký cider nabízí nejlepší chuťový zážitek? Přece točený a dobře vychlazený.
                `
      }
    }
  }

}
</script>

<style scoped>

</style>
