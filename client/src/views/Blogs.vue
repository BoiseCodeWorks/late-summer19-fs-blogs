<template>
  <div class="home">
    <img alt="Vue logo" class="img-fluid" src="../assets/logo.png">
    <form class="mb-2" @submit.prevent="addBlog">
      <input type="text" name="title" v-model="newBlog.title" placeholder="Blog Title Here">
      <input type="text" name="author" v-model="newBlog.author" placeholder="Author Name Here">
      <button type="submit">Submit</button>
    </form>
    <router-link class="btn btn-secondary m-2" :to="{name: 'Blog', params: {blogId: blog._id }}" v-for="blog in blogs">
      {{blog.title}}</router-link>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Blogs',
    data() {
      return {
        newBlog: {}
      }
    },
    mounted() {
      this.$store.dispatch("getBlogs")
    },
    components: {

    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      }

    },
    methods: {
      addBlog() {
        this.$store.dispatch("addBlog", this.newBlog)
      }
    },

  }
</script>