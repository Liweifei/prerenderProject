<template>
  <div>
    <h1>这是首页</h1>
    <router-link to="/page1">跳转到page1</router-link>
    <router-link to="/page2">跳转到page2</router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: '首页',
    meta: [
      {
        name: 'keywords',
        content: '首页'
      },
      {
        name: 'description',
        content: '这是首页'
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
