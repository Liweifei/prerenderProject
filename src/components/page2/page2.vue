<template>
  <div>
    <h1>这是page2</h1>
    <router-link to="/">跳转到首页</router-link>
    <router-link to="/page1">跳转到page1</router-link>
  </div>
</template>

<script>
export default {
  name: 'page2',
  metaInfo: {
    title: 'page2',
    meta: [
      {
        name: 'keywords',
        content: 'page2'
      },
      {
        name: 'description',
        content: '这是page2页面'
      }
    ]
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
