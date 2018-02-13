<template>
  <div>
      <li class="goods-list" v-for='list in datas'>
      <router-link :to='{name: "Prodct",params:{id: list.title,img:list.img,price:list.price}}'  class="goods-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
        <div class="goods-list-pic">
            <img :src="list.img" alt="" :title='list.title'>
        </div>
        <div class="goods-list-desc">
          <p class="goods-list-name">{{ list.title }}</p>
          <p class="goods-list-price">￥{{ list.price}}</p>  <!-- 这里用到了过滤器货币形式和保留两位小数 -->
        </div>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Good',
  data () {
    return {
       datas:{}
    }
  },
  mounted(){
     this.Axios.get('/api/goods').then(data=>{
         if (data.status==200) {
             this.datas=data.data.data;
             console.log(this.datas)
         } else {
             console.log("数据获取错误")
         }

      })
  }

}
</script>

<style scoped>
  .goods-list{
    width: 50%;
    float: left;
    box-sizing: border-box;
  }
  .goods-list:nth-of-type(odd) {
  border: 0.15rem solid #ccc;
}
.goods-list:nth-of-type(even) {
    border: 0.15rem solid #ccc;
  }
  .goods-list-link {
    display: block;
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    text-align: center;
    background-color: #fff;
  }
  .goods-list:nth-of-type(even) .goods-list-link{
    margin-left: 0;
  }
  .goods-list:nth-of-type(odd) .goods-list-link{
    margin-right: 0;
  }
  .goods-list-pic {
    padding: 0.5rem;
  }
  .goods-list-pic > img {
    width: auto;
    height: 4rem;
  }
  .goods-list-desc {
    padding: 0 0.5rem;
  }
  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-list-name,.goods-list-price {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-list-price {
    color: #ff8000;
    float: right;
  }


</style>
