<template>
  <va-dropdown
    class="profile-dropdown"
    v-model="isShown"
    boundary-body
    position="bottom"
    :offset="[-50, 30]"
  >
    <template #anchor>
      <span class="profile-dropdown__anchor">
        <slot/>
        <va-icon
          class="px-2"
          :name="isShown ? 'angle_up' :'angle_down'"
          :color="theme.primary"
        />
      </span>
    </template>
    <va-dropdown-content class="profile-dropdown__content">
      <va-list-item
        v-for="option in options"
        :key="option.name"
      >
        <router-link
          :to="{name: option.redirectTo}"
          class="profile-dropdown__item"
        >
          <va-icon
            class="px-2"
            :name="option.icon"
            :color="theme.primary"
          />
          {{ $t(`user.${option.name}`) }}
        </router-link>          
      </va-list-item>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'profile-section',
  data () {
    return {
      isShown: false,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: 'account_setting',
          icon: 'vuestic-iconset-settings',
          redirectTo: 'account_setting',
        },
        {
          name: 'business_profile',
          icon: 'vuestic-iconset-settings',
          redirectTo: 'business_profile',
        },
        {
          name: 'inquiries',
          icon: 'vuestic-iconset-settings',
          redirectTo: 'inquiries',
        },
        {
          name: 'faq',
          icon: 'vuestic-iconset-settings',
          redirectTo: 'faq',
        },
        {
          name: 'logout',
          icon: 'vuestic-iconset-settings',
          redirectTo: 'login',
        },
      ],
    },
  },
  computed: {
    theme() { return useGlobalConfig().getGlobalConfig() },
  }
}
</script>

<style lang="scss">

.profile-dropdown {
  cursor: pointer;

  .va-dropdown-popper__anchor {
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    width: 8rem;
  }

  &__item {
    display: block;
    color: var(--va-gray);

    &:hover,
    &:active {
      color: var(--va-primary);
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}
</style>
