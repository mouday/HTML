<template>
  <li class="item" @click="handleDelete">{{index+1}} {{content}} </li>
</template>

<script>
export default {
props: ["content", "index"],
methods:{
  handleDelete: function() {
    this.$emit("delete", this.index)
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 作用域 scoped局部作用域，只对当前样式生效-->
<style scoped>
    .item{
        color: green;
    }
</style>
