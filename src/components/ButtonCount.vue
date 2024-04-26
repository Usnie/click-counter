<template>
  <div>
    <h3>Welcome to button count application</h3>
    <p>Button count is: {{count}}</p>
    <button id = "btn-increment" @click="onClickIncremet">Increment</button>
    <button style="margin-left: 10px;" id = "btn-reset" @click="onClickReset">Reset </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    onClickIncremet () {
      this.count += 1 // count increment
    },
    onClickReset () {
      this.count = 0 // count reset
    }
  }
}
</script>
