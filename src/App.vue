<template>
  <v-app id="app">
    <v-app-bar app :color="appBarColor" elevation="0">
      <v-container class="d-flex align-center justify-center">
        <v-toolbar-title>
          <img src="https://flattrade.s3.ap-south-1.amazonaws.com/logo/novologo.png" alt="logo"
            height="25"></v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu :open-on-hover="$vuetify.breakpoint.width > 850" bottom offset-y v-if="$vuetify.breakpoint.width < 850">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="elevation-0 text-center text-capitalize" v-bind="attrs" v-on="on" outlined rounded width="200">
              <v-layout class="d-flex justify-center align-center">
                <v-flex class="d-flex justify-start">
                  <v-icon>mdi-menu-down</v-icon>
                </v-flex>
                <v-flex class="d-flex justify-start">
                  <span>{{ $route.name }}</span>
                </v-flex>
              </v-layout>
            </v-btn>
          </template>

          <v-list rounded>
            <v-list-item v-for="(item, index) in buttons" :key="index" link v-show="$route.path != item.path">
              <v-list-item-title class="d-flex" @click="changeRoute(item.path)">
                <v-layout class="d-flex align-center">
                  <v-flex class="mr-2">
                    <v-img src="https://flattrade.s3.ap-south-1.amazonaws.com/promo/SGB Icon.png" contain
                      width="30"></v-img>
                  </v-flex>
                  <v-flex>
                    <span class="text-capitalize">{{ item.text }}</span>
                  </v-flex>
                </v-layout>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer v-if="$vuetify.breakpoint.width < 850"></v-spacer>

        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->

        <v-layout v-else>
          <v-flex v-for="btn in buttons" :key="btn.text">
            <v-hover v-slot="{ hover }">
              <span @click="changeRoute(btn.path)" text :class="hover ? 'primary--text' : ''" style=" cursor: pointer;">
                {{ btn.text }}
              </span>
            </v-hover>
          </v-flex>
        </v-layout>
        <div class="menu-extras">
          <div class="menu-item">

            <a class="navbar-toggle open">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>

          </div>
        </div>
        <v-spacer></v-spacer>
        <!-- Toggle Theme -->
        <v-icon v-if="!this.$vuetify.theme.dark" color="yellow" @click="toggleTheme"
          size="30">mdi-white-balance-sunny</v-icon>
        <v-icon v-else color="white" @click="toggleTheme" size="30">mdi-weather-night</v-icon>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer/MainFooter.vue';
export default {
  name: "App",

  data: () => ({
    buttons: [
      { icon: '', text: "IPO", path: "/ipo" },
      { icon: '', text: "Mutual funds", path: "/mutalFunds" },
      { icon: '', text: "G-Secs", path: "/gsec" },
      { icon: '', text: "SGB", path: "/sgb" },
      { icon: '', text: "Corporate bonds", path: "/corporateBond" },
      { icon: '', text: "Login", path: "/" },
    ],
    appBarColor: 'rgba(248, 249, 252,0.8)' // Initial background color with some opacity
  }),
  methods: {
    changeRoute(route) {
      if (this.$route.path != route) {
        console.log(this.$route,"this.$route")
        this.$router.replace(route);
      }
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.handleScroll()
    },
    handleScroll() {
      if (!this.$vuetify.theme.dark) {
        // Adjust the opacity based on the scroll position or any other conditions you need
        if (window.scrollY > 100) {
          this.appBarColor = 'rgba(255, 255, 255, 0.5)'; // Background becomes more transparent
        } else {
          this.appBarColor = 'rgba(255, 255, 255, 0.9)'; // Reset to initial opacity
        }
      } else {
        // Adjust the opacity based on the scroll position or any other conditions you need
        if (window.scrollY > 100) {
          this.appBarColor = 'rgba(39,39,39, 0.7)'; // Background becomes more transparent
        } else {
          this.appBarColor = 'rgba(39,39,39, 0.9)'; // Reset to initial opacity
        }
      }
    }
  },
  components: {
    Footer,
  },
  updated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
#app {
  font-family: "Nunito", sans-serif !important;
}

.v-app-bar {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

}

span .link:hover {
  color: #1976D2;
  cursor: pointer;
}
</style>