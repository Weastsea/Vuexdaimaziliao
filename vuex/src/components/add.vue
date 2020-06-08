<template>
  <div>
    <!--<h3>当前最新的count值为：{{count}}</h3>-->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="handle1">+1</button>
    <button @click="handle">+3</button>
    <button @click="handle2">+1 Async</button>
    <button @click="handle3">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handle1() {
      this.$store.commit('addd')
    },
    handle() {
      this.$store.commit('addN', 3)
    },
    handle2() {
      this.$store.dispatch('addAsync')
    },
    handle3() {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
