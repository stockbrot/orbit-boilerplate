<template>
  <v-content>
    <ToolbarComp siteTitle="boilerplate"/>

    <v-container fluid fill-height>
      <router-view class="routerclass"/>
    </v-container>
  </v-content>
</template>

<script>
import ToolbarComp from '@/components/ToolbarComp'

export default {
  name: 'MainLayout',
  components: {
    ToolbarComp
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus">
.routerclass
  padding-top: 50px

</style>
