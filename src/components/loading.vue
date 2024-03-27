<template>
  <div class="lds-dual-ring"></div>
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'xs'
  },
  color: {
    type: String,
    default: '#fff'
  }
});

const sizes = {
  xl: {
    exterior: '80px',
    interior: '64px',
    border: '6px',
    margin: '8px'
  },
  md: {
    exterior: '64px',
    interior: '52px',
    border: '4px',
    margin: '6px'
  },
  sm: {
    exterior: '48px',
    interior: '40px',
    border: '4px',
    margin: '4px'
  },
  xs: {
    exterior: '24px',
    interior: '24px',
    border: '2px',
    margin: '0px'
  }
}
const size = sizes[props.size]
</script>
<style>
.lds-dual-ring {
  display: inline-block;
  width: v-bind(size.exterior);
  height: v-bind(size.exterior);
}

.lds-dual-ring:after {
  content: " ";
  display: inline-block;
  width: v-bind(size.interior);
  height: v-bind(size.interior);
  margin: v-bind(size.margin);
  border-radius: 50%;
  border: v-bind(size.border) solid v-bind(props.color);
  border-color: v-bind(props.color) transparent v-bind(props.color) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>