<template>
  <div>
    <section>
      <v-container grid-list-xl>
        <v-layout column justify-center>
          <div :key="post.id" v-for="post in blog.items">
            <v-flex d-flex xs12>
              <v-card class="elevation-5">
                <v-card class="elevation-5">
                  <v-img
                    v-bind:src="post.img"
                    aspect-ratio="2.75"
                  ></v-img>
                </v-card>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0"><a @click.stop="post.dialog = true" class="orange--text">{{ $t(post.cardTitle) }}</a></h3>
                    <div>{{ $t(post.subheading) }}</div>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-btn flat @click.stop="post.dialog = true" color="orange">{{ $t(post.more) }}</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </div>
        </v-layout>
      </v-container>
    </section>

    <div :key="post.id" v-for="post in blog.items">
      <v-dialog
        v-model="post.dialog"
        max-width="290"
        fullscreen
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-card-title class="headline">
            <v-btn icon @click="post.dialog = false"><v-icon>fa-times-circle</v-icon></v-btn>
            <v-spacer></v-spacer>
            <span class="orange--text">{{ $t(post.dialogTitle) }}</span>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-layout>
            <v-flex xs8>
              <v-card-text>
                <span class="main" v-html="$t(post.dialogText1)"></span>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <v-img
                v-bind:src="post.img1"
                class="elevation-5"
              ></v-img>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs4>
              <v-img
                v-bind:src="post.img2"
                class="elevation-5"
              ></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <span class="main" v-html="$t(post.dialogText2)"></span>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs8>
              <v-card-text>
                <span class="main" v-html="$t(post.dialogText3)"></span>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <v-img
                v-bind:src="post.img3"
                class="elevation-5"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    blog: {
      more: 'blogs.more',
      items: {
        april27_19: {
          id: 1,
          img: require('../assets/packageman2.png'),
          cardTitle: 'blogs.blog1.cardTitle',
          subheading: 'blogs.blog1.subheading',
          dialog: false,
          dialogTitle: 'blogs.blog1.dialogTitle',
          dialogText1: 'blogs.blog1.dialogText1',
          img1: require('../assets/packageman.png')
        },
        april25_19: {
          id: 0,
          img: require('../assets/packageman.png'),
          cardTitle: 'blogs.blog2.cardTitle',
          subheading: 'blogs.blog2.subheading',
          dialog: false,
          dialogTitle: 'blogs.blog2.dialogTitle',
          dialogText1: 'blogs.blog2.dialogText1',
          img1: require('../assets/packageman2.png'),
          dialogText2: 'blogs.blog2.dialogText2',
          img2: require('../assets/packageman.png')
        }
      }
    }
  })
}
</script>

<style>

</style>
