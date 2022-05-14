<template>
  <va-card>
    <va-card-title>
      <span class="display-4">
        {{ $t('business_profile.business_profile') }}
      </span>
    </va-card-title>
    <va-card-content>
      <va-tabs v-model="activeTabName">
        <template #tabs>
          <va-tab name="BusinessInformationTab">
            <va-avatar
              class="mr-4"
              size="small"
              color="#000000"
              text-color="#FFFFFF"
            >
              1
            </va-avatar>
            {{$t('business_profile.business_information')}}
          </va-tab>
          <va-tab name="PayoutInformationTab">
            <va-avatar
              class="mr-4"
              size="small"
              color="#000000"
              text-color="#FFFFFF"
            >
              2
            </va-avatar>
            {{$t('business_profile.payout_information')}}
          </va-tab>
          <va-tab name="DocumentsUploadTab">
            <va-avatar
              class="mr-4"
              size="small"
              color="#000000"
              text-color="#FFFFFF"
            >
              3
            </va-avatar>
            {{$t('business_profile.documents_upload')}}
          </va-tab>
        </template>
      </va-tabs>
      <va-separator/>
      <component :is="activeTabName" @submit="submit"/>
    </va-card-content>
  </va-card>
</template>

<script>
import BusinessInformationTab from './tabs/BusinessInformationTab'
import PayoutInformationTab from './tabs/PayoutInformationTab'
import DocumentsUploadTab from './tabs/DocumentsUploadTab'

export default {
  name: 'DashboardTabs',
  components: {
    BusinessInformationTab,
    PayoutInformationTab,
    DocumentsUploadTab,
  },
  data () {
    return {
      activeTabName: 'BusinessInformationTab',
      tabs: [
        'BusinessInformationTab',
        'PayoutInformationTab',
        'DocumentsUploadTab',
      ],
    }
  },
  methods: {
    submit (data) {
      this.$emit('submit', data)
    },
  },
}
</script>

<style lang="scss">
.va-tabs__wrapper {
  height: 60px;
  .va-tabs__container {
    height: 60px;
  }
}


.va-tabs__tabs {
  height: 100%;
}
</style>
