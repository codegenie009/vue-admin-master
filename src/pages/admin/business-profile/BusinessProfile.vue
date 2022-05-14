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
            {{$t('business_profile.business_information')}}
          </va-tab>
          <va-tab name="PayoutInformationTab">
            {{$t('business_profile.payout_information')}}
          </va-tab>
          <va-tab name="DocumentsUploadTab">
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
      activeTabName: 'PayoutInformationTab',
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
.va-tabs__tabs {
  height: 100%;
}
</style>
