<template>
  <v-container class="view-container">
    <v-row>
      <v-col>
        <header class="view-header flex-column mb-0">
          <h1 class="view-header__title">FAS Staff Dashboard</h1>
          <p class="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem.
          </p>
          <div class="d-flex justify-space-between align-center">
            <div>
              <h2>Routing Slip Management</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem.
              </p>
            </div>

            <v-btn class="button-search font-weight-bold" large dark color="primary">
              <v-icon dark small class="mr-2 font-weight-bold">
                  mdi-plus
                </v-icon>
              Add New Routing Slip
            </v-btn>
          </div>
        </header>

        <div>
          <Search />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Search from '@/components/Dashboard/Search.vue'

@Component({
  components: {
    Search
  }
})
export default class Dashboard extends Vue {

}
</script>
<style lang="scss" scoped>
.view-heade {
  flex-direction: colum;
}
</style>
