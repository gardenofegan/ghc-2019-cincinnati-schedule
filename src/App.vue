<template>
  <v-app>
    <v-card color="blue-grey darken-4" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">GHC Ohio Homeschool Convention</div>
          <span>2019 Workshop Schedule</span>
        </div>
      </v-card-title>
    </v-card>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed>
      <v-btn color="teal" flat value="schedule" @click="routeTheApp('/')">
        <span>Full Schedule</span>
        <v-icon>schedule</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="favorites" @click="routeTheApp('/favorites')">
        <span>Favorites</span>
        <v-icon>star</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      bottomNav: 'schedule'
    }
  },
  methods: {
    routeTheApp (theRoute) {
      this.$router.push({ path: theRoute })
    }
  }
}
</script>
