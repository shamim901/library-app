
<template>
  <div class="iq-sidebar sideBar">
    <div class="iq-sidebar-logo iq-sidebar-logo-wrapper">
      <router-link :to="homeURL">
        <span class="routeLink">{{ appName }}</span>
      </router-link>
      <div class="iq-menu-bt-sidebar">
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu">
            <div class="main-circle">
              <i class="ri-arrow-right-s-line">
                <router-link :to="bookRequest">
                  <span class="routeLink">{{ 'Book Request' }}</span>
                </router-link>
              </i>
            </div>
            <div class="hover-circle">
              <i class="ri-arrow-left-s-line">
                <router-link :to="bookResrv">
                  <span class="routeLink">{{ 'Book Reservation' }}</span>
                </router-link>
              </i>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- TOP Nav Bar -->
</template>

<script>

export default {
  name: 'Sidebar',
  data () {
    return {
      appName: 'Home',
      styleObject: {
          height: '64px'
        },
        homeURL: '/home',
        bookResrv: '/book/book-reservation',
        bookRequest: '/book/book-request'
    }
  }
}
</script>

<style scoped>
.sideBar {
  margin-left:20px;
  margin-top:20px;
  height: 100vh;
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
.routeLink {
  font-wieght: bold;
  font-size:20px;
}
</style>
