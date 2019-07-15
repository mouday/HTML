<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="handleClick">提交</button>
    <ul>
      <todo-item
        v-for="(item, index) in list" 
        :key="index"
        :index="index"
        :content="item"
        @delete="handleDelete"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue"
export default {
  components: {
    "todo-item": TodoItem
  },
  data: function() {
    return {
      inputValue: "",
      list: []
    }
  },
  methods: {
    handleClick: function(){
      this.list.push(this.inputValue);
      this.inputValue = ""
    },
    handleDelete: function(index) {
      this.list.splice(index, 1)
    }
  }

  }
</script>

<style>

</style>
