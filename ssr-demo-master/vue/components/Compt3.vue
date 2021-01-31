<template>
  <div class="bar">
    <h1 @click="onTest">Compt3组件页面</h1>
    <h4>111</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onTest() {
      alert('abc')
    },
  },
}
</script>
