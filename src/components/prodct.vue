<template>
  <div>
    <div class="name">{{$route.params.id}}</div>
    <img :src='$route.params.img' :alt="$route.params.id">
    <p>优惠价 ￥：{{$route.params.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'Prodct',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .name{font-style: 16px;text-align: center;font-weight: bold;}
  img{width: 80%;border: 1px solid #dcdcdc;margin: 10px auto;}
  p{font-style: 18px;color: red;}
  ul{display: none;}
</style>
