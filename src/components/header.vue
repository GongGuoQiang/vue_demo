<template>
  <div>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
       msg:'我是头部组件'
    }
  },
}
</script>

<style scoped>
h3{height: 50px;width: 100%;border: 1px solid #dcdcdc;background: #e5e5e5;line-height: 50px;}

</style>
