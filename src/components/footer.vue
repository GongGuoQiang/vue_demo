<template>
  <div>
    <ul>
        <li v-for='msge in msg'>
            {{msge}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
       msg:["1","2","3","4"]
    }
  },
}
</script>

<style scoped>
 li{float: left;font-size: 24px;font-weight: bold;color: #fff;text-align: center;width: 25%;height: 50px;line-height: 50px;background: #333;}
</style>
