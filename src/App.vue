<template>
  <section>
    <h2>Mayor of Kingstown</h2>
    <ul>
      <friendContact></friendContact>
    </ul>
  </section>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '33455666362',
          email: 'mvfhgjgtj@l.com'
        },
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '33455666362',
          email: 'mvfhgjgtj@l.com'
        },
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '33455666362',
          email: 'mvfhgjgtj@l.com'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Jost ,serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}
</style>