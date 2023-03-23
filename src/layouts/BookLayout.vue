<template>
  <b-div>
    <b-row style="background-color: green;color:white">
      <Header />
    </b-row>
    <b-row style="background-color: rgb(198, 241, 200);">
      <b-col>
        <Sidebar></Sidebar>
      </b-col>
      <b-col cols="10" style="background-color: rgb(198, 241, 200);">
          <router-view></router-view>
      </b-col>
    </b-row>
    </b-div>
</template>

<script>

import Sidebar from '../components/core/Sidebar.vue'
import Header from '../components/core/Navbar.vue'

export default {
  name: 'BookLayout',
  data () {
    return {
      closeSidebar: true
    }
  },
  created () {
  },
  components: {
    Sidebar,
    Header
  }
}
</script>
