<template>
<div class="bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg'); height: 100vh">
    <span style="dispplay:inline-block">
     <router-link :to="homeUrl" class="home">
        <span style="font-wieght: bold;font-size:60px;color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;">{{ 'Book Page' }}</span>
      </router-link>
       <router-link :to="adminUrl" class="admin">
        <span style="font-wieght: bold;font-size:60px;color: white;text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;">{{ 'Admin' }}</span>
      </router-link>
    </span>
</div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
      return {
      homeUrl: '/book/book-request',
      adminUrl: '/'
      }
    }
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
.home {
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding-top:200px;
}
.admin {
 display: flex;
 align-items: center;
 justify-content: center;
}
</style>
