<template>
  <v-container class="view-container">
    <v-row>
      <v-col>
        <header class="d-flex flex-column mb-0">
          <h1 class="view-header__title">Add Routing Slip</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor sem.
          </p>
        </header>
        <div class="header-bg-color d-flex align-center py-5 mb-0 mt-10">
          <v-icon
          color="primary"
          class="ml-8"
          >
            mdi-clipboard-text
          </v-icon>
          <p class="ml-2 mb-0 font-weight-bold">Add New Routing Slip</p>
        </div>
        <v-card class="my-0">
          <create-routing-slip-details ref="createRoutingSlipDetailsRef"/>
          <create-routing-slip-payment ref="createRoutingSlipPaymentRef"/>
          <v-divider></v-divider>
          <v-card-actions class="pr-10 justify-end">
              <v-btn
              large
              color="primary"
              @click="createRoutingSlip"
              class="px-10"
              data-test="btn-create-routing-slip"
              >
                <span>Create</span>
              </v-btn>
              <v-btn
              large
              outlined
              class="px-10"
              color="primary"
              @click="cancel"
              data-test="btn-cancel-create-routing-slip">
                <span>Cancel</span>
              </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CreateRoutingSlipDetails from '@/components/RoutingSlip/CreateRoutingSlipDetails.vue'
import CreateRoutingSlipPayment from '@/components/RoutingSlip/CreateRoutingSlipPayment.vue'
import { useCreateRoutingSlip } from '@/composables/RoutingSlip/useCreateRoutingSlip'

@Component({
  components: {
    CreateRoutingSlipPayment,
    CreateRoutingSlipDetails
  },
  setup () {
    const {
      createRoutingSlipForm,
      createRoutingSlipDetailsRef,
      createRoutingSlipPaymentRef,
      createRoutingSlip,
      cancel,
      isValid,
      getRoutingSlipInput
    } = useCreateRoutingSlip()
    return {
      createRoutingSlipForm,
      createRoutingSlipDetailsRef,
      createRoutingSlipPaymentRef,
      createRoutingSlip,
      cancel,
      isValid,
      getRoutingSlipInput
    }
  }
})
export default class CreateRoutingSlip extends Vue {
}
</script>
<style lang="scss" scoped>
@import '$assets/scss/theme.scss';

  .header-bg-color {
    background-color: $BCgovBlue0;
  }

  .form__btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
