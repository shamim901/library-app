<template>
  <b-div>
    <b-row>
      <b-col cols="10">
          <router-view></router-view>
      </b-col>
    </b-row>
    </b-div>
</template>

<script>

export default {
  name: 'AuthLayout',
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
