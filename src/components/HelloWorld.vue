<template>
  <div>Hello {{ message }}</div>
  <span>Count: {{ count }}</span>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      message: 'everyone'
    }
  }
}
</script>