<template>
  <v-footer
    dark
    height="auto"
    class="footer-pad"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="orange">
        <strong class="dg-text subheading font-weight-black">{{ $t('footer') }}</strong>
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon class="dg-text dg-icon" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center footer-year">
        &copy;2018 — <strong>DoctorORBiT</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      icons: [
        'fa-facebook',
        'fa-twitter',
        'fa-google-plus',
        'fa-linkedin',
        'fa-instagram'
      ]
    }
  }
}
</script>
<style></style>
