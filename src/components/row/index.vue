<template>
  <div class="row" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        this.gutter ? '' : 'no-gutter'
      ]
    }
  }
}
</script>
