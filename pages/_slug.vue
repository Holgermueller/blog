<template>
  <div class="post">
    <v-card class="article-card" elevation="0">
      <v-img class="align-end" height="400px" width="100%" :src="blog.img">
        <v-card-title>
          <h1>
            {{ blog.title }}
          </h1>
          <v-spacer></v-spacer>
          <h1>
            {{ blog.date | formatDate }}
          </h1>
        </v-card-title></v-img
      >

      <v-card-subtitle>
        <br />
        <h4>Location: {{ blog.location }}</h4>

        <h4>Listening to: {{ blog.listeningTo }}</h4>
        <hr class="my-3" />
      </v-card-subtitle>

      <v-card-text>
        <article class="blog-content">
          <nuxt-content :document="blog"></nuxt-content>
        </article>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blogs', params.slug).fetch()
    return { blog }
  },

  filters: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.article-card {
  width: 85%;
  margin: 5% auto;
}
.blog-content {
  font-size: 18px;
  text-align: justify;
  line-height: 1.5;
}
</style>
