<template>
  <section>
    <header>Mayor of Kingstown</header>
    <ul>
      <friendContact
          v-for="friend in friends"
          :key="friend.id"
          :name="friend.name"
          :phoneNumber="friend.phone"
          :emailAddress="friend.email"
      >
      </friendContact>
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
          phone: '3345 5666 3632',
          email: 'mvfhgjgtj@l.com'
        },
        {
          id: 'mayor',
          name: 'Mayor Mitchy',
          phone: '3345 5663 6277',
          email: 'mvfhgjgtj@l.com'
        },
        {
          id: 'mike',
          name: 'Mike Hummels',
          phone: '3345 7041 1484',
          email: 'mvfhgjgtj@l.com'
        },
          {
              id: 'jules',
              name: 'Jules Milo',
              phone: '3345 0977 1484',
              email: 'mvfhgjgtj@l.com'
          }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    font-size: 2rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  //border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  padding: 0.5rem 1rem;
  border: 1px solid #ff0077;
  border-radius: 30px;
  background-color: #ff0077;
  color: white;
  cursor: pointer;
}
#app button:hover, #app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  color: white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>