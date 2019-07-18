<template>
  <div class="row">
    <div class="col-12">
      <h1>{{blog.title}}</h1>
      <h1>{{blog.author}}</h1>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    mounted() {
      this.$store.dispatch("getOneBlog", this.$route.params.blogId)
    },
    computed: {
      blog() {
        return this.$store.state.activeBlog
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>