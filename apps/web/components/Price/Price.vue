<template>
  <div class="text-sm py-1">
    <span class="mr-2 text-secondary-500 font-bold text-2xl" data-testid="price">
      <span>{{ format(price) }}</span>
      <span>{{ t('asterisk') }} </span>
    </span>
    <span v-if="crossedPrice" class="text-base font-normal text-neutral-500 line-through">
      {{ format(crossedPrice) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PriceProps } from '~/components/Price/types';

defineProps<PriceProps>();

const { format } = usePriceFormatter();
const { t } = useI18n();
</script>
