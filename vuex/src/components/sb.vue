<template>
  <div>
    <!--<h3>当前最新的count值为：{{count}}</h3>-->
    <h3>{{ showNum }}</h3>
    <button @click="handle">-1</button>
    <button @click="handle1">-N</button>
    <button @click="handle2">-1 Async</button>
    <button @click="handle3">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['subb', 'subbN']),
    ...mapActions(['subAsync', 'subNAsync']),
    handle() {
      this.subb()
    },
    handle1() {
      this.subbN(5)
    },
    handle2() {
      this.subAsync()
    },
    handle3() {
      this.subNAsync(4)
    }
  }
}
</script>