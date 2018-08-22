<template>
    <div class="container" :class="show?'active':''">
        <div class="top"><i class="el-icon-arrow-left" @click="toMovie"></i>城市列表</div>
        <div class="citylist" ref="wrapper">
            <ul>
                <li v-for="(item,index) of list" :key="item.id" :id="item.id" :uid="item.uid" :parent="item.parent" @click="cityclick" :name="item.name">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
    name: 'AreaSelect',
    props: {
        list: Array,
        show: Boolean
    },
    data() {
        return {

        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods: {
        cityclick(e){
            this.$emit('cityarea',{id:e.target.id,'show':false,name:e.target.innerText})
        },
        toMovie(){
            this.$emit('cityarea',{'show':false})
        }
    }
}
</script>

<style lang="stylus" scoped>
  .container
    position: fixed
    top: 0
    left:100%
    right:0
    bottom:0
    background: #ffffff
    z-index: 2
    overflow-y: scroll
    font-size: 1.3rem
    box-sizing: border-box
    transition: left .3s ease
    &.active
      left: 0
    .citylist
      position: absolute
      top: 3.1rem
      left: 0
      right: 0
      bottom: 0
      padding: 2rem
      padding-top: 0
      box-sizing: border-box
      background: #ffffff
      overflow: hidden
      li
        line-height: 3.5rem
        color:#f56c6c
        border-bottom:1px dashed #f56c6c
    .top
      width: 100%
      height: 3rem
      font-size: 1.5rem
      font-weight: bold
      display: flex
      align-items: center
      justify-content: center
      border-bottom:1px solid #cccccc
      background: #ffffff
      i
        position: absolute
        top: 0.5rem
        left: 1rem
        font-size: 1.75rem
</style>
