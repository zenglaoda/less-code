<template>
  <div>
    <h3>
      选项列表
      <el-button size="small" type="primary" @click="options.push({label: '', value: ''})">+</el-button>
    </h3>
    <ul class="be-options">
      <li v-for="(item, index) in options" class="be-option" :key="index">
        <div class="be-option__key">
          选项名: <el-input v-model="item.label" placeholder="选项名"></el-input>
        </div>
        <div class="be-option__key">
          选项值<el-input v-model="item.value"  placeholder="选项值"></el-input>
        </div>
        <div class="be-options">
          <el-button text type="danger" @click="options.splice(index, 1)">删除</el-button>
        </div>
      </li>
    </ul>

  </div>
</template>
<script setup lang="ts">
defineProps({
  options: {
    type: null
  }  
})
</script>
<style lang="scss" scoped>
.be {
  &-options {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &-option {
    padding: 10px 8px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }
  &-option__key {
  }
}
</style>