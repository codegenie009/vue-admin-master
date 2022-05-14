<template>
  <div class="pt-2 business-information-tab">
    <div class="row">
      <div class="flex sm12 md8">
        <div
          class="mb-3 text--bold"
          :style="computedStylesTitle"
        >
          {{$t('business_profile.general_business_information')}}
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.your_business_location') }}</span>
          <va-select
            :options="countriesList"
            v-model="form.country"
            bordered
            width="300px"
          />
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.business_type') }}</span>
          <va-select
            :options="businessTypeList"
            v-model="form.business_type"
            bordered
            width="300px"
          />
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.business_address') }}</span>
          <va-input v-model="form.business_address1"></va-input>
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label"></span>
          <va-input v-model="form.business_address2"></va-input>
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label"></span>
          <va-select
            :options="countriesList"
            v-model="form.country"
            bordered
            class="sub-select"
            width="90px"
          />
          <va-input v-model="form.business_address3" class="address-3"></va-input>
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.tax_number') }}</span>
          <va-input v-model="form.tax_number1" class="tax-input-1"></va-input>
          <va-input v-model="form.tax_number2" class="tax-input-2"></va-input>
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.website_address') }}</span>
          <va-input v-model="form.business_address1"></va-input>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="flex sm12 md8">
        <div
          class="mb-3 text--bold"
          :style="computedStylesTitle"
        >
          {{$t('business_profile.business_representative')}}
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.legal_name') }}</span>
          <va-input v-model="form.firstname" class="mr-3"></va-input>
          <va-input v-model="form.lastname"></va-input>
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.date_of_birth') }}</span>
          <va-input v-model="form.date_of_birth"></va-input>
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.nationality') }}</span>
          <va-select
            :options="countriesList"
            v-model="form.nationality"
            bordered
            width="300px"
          />
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.passport_id') }}</span>
          <va-input v-model="form.passport_id"></va-input>
          
          <va-checkbox
            :label="$t('business_profile.secondCitizenship')"
            v-model="form.connection"
          />
        </div>
        <div class="d-flex align-content--center justify--start mb-4">
          <span class="mr-3 text--secondary my-auto label">{{ $t('business_profile.phone_number') }}</span>
          <va-input v-model="form.phone_number"></va-input>
        </div>
      </div>
    </div>
    <div class="row justify--center">
      <va-button @click="submit">
        {{$t('dashboard.tabs.billingAddress.addConnection')}}
      </va-button>
    </div>
  </div>
</template>

<script>
import countriesList from '@/data/CountriesList'
import { getLineMapData } from '@/data/maps/LineMapData'
import { useGlobalConfig } from 'vuestic-ui';

export default {
  name: 'billing-address-tab',
  emits: ['submit'],
  data () {
    return {
      form: {
        name: 'John Smith',
        email: 'smith@gmail.com',
        address: '93  Guild Street',
        city: { text: 'London' },
        country: 'United Kingdom',
        business_type: '',
        business_address1: '',
        business_address2: '',
        tax_number1: 'LT',
        tax_number2: '',
        connection: true,

        firstname: '',
        lastname: '',
        date_of_birth: '',
        nationality: '',
        passport_id: '',
        phone_number: '',
      },
      allowedCountriesList: [],
      allowedCitiesList: [],
      businessTypeList: [
        'Individual/Sole Propietorship'
      ],
    }
  },
  watch: {
    'form.country' (value) {
      this.allowedCitiesList = value
        ? this.citiesList.filter(({ country }) => country === value)
        : [...this.citiesList]
    },
    'form.city': {
      deep: true,
      handler ({ country }) {
        this.form.country = this.countriesList.find(item => item === country)
      },
    },
  },
  methods: {
    submit () {
      this.$emit('submit', this.form)
    },
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
    citiesList () {
      return getLineMapData(this.theme).cities.map(({ title, country }) => ({ text: title, country }))
    },
    countriesList () {
      return countriesList.filter(item => this.citiesList.filter(({ country }) => country === item).length)
    },
    computedStylesTitle () {
      return {
        color: this.theme.dark,
      }
    },
  },
  mounted () {
    this.allowedCitiesList = [...this.citiesList]
  },
}
</script>

<style lang="scss">

.business-information-tab {
  .label {
    width: 200px;
    font-size: 14px;
  }

  .va-input-wrapper__content {
    width: 200px;
    border: 1px solid gray;
  }

  .border-gray {
    border: 1px solid gray;
  }

  .sub-select {
    flex: none;
    margin-right: 20px;
    .va-input-wrapper__content {
      width: 90px;
      border: 1px solid gray;
    }

  }
  .address-3 {
    .va-input-wrapper__content {
      width: 90px;
    }
  }
  .tax-input-1 {
    flex: none;
    margin-right: 10px;
    .va-input-wrapper__content {
      width: 50px;
    }
  }
  .tax-input-2 {
    flex: none;
    .va-input-wrapper__content {
      width: 130px;
    }
  }

  .va-checkbox {
    .va-input-wrapper__content {
      border: none;
    }
  }
}

.va-select-option-list__option {
  color: black !important;
}
// .va-input-wrapper {
//   margin-bottom: 1rem;
// }
</style>