<template>
  <section>
    <header>Friends Contact</header>
    <add-friend @add-friend="addFriend"></add-friend>
    <ul>
      <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-address="friend.email"
          @delete="deleteContact"
      >
      </friend-contact>
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
        }
      ]
    }
  },
  methods: {
    addFriend(name, phone, email) {
        const newContact = {
            id: new Date().toISOString(),
            name,
            phone,
            email
        }
      this.friends.push(newContact)
    },
    deleteContact(friendId) {
        this.friends = this.friends.filter((friend) => friend.id !== friendId)
    }
  }
}
</script>

<style>
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

#app li, #app form {
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

#app input {
  font: inherit;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#app input:focus {
  outline: none;
  border-color: #58004d;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

</style>