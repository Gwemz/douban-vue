<template>
    <div class="container" :class="show?'active':''">
        <div class="top"><i class="el-icon-arrow-left" @click="toMovie"></i>城市列表</div>
        <ul class="citylist">
            <li v-for="(item,index) of list" :key="item.id" :id="item.id" :uid="item.uid" :parent="item.parent" @click="cityclick" :name="item.name">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
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

<style scoped>
.container{
    position:fixed;
    top:0;
    left:100%;
    right:0;
    bottom:0;
    background: #ffffff;
    z-index: 2;
    overflow-y: scroll;
    font-size:1.3rem;
    box-sizing: border-box;
    transition: left .3s ease;
}
.container.active{
    left:0;
}
.citylist{
    padding: 2rem;
    padding-top: 0;
    box-sizing: border-box;
}
.citylist li{
    line-height: 3.5rem;
    color:#f56c6c;
    border-bottom:1px dashed #f56c6c;
}
.top {
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:1px solid #cccccc;
}
.top i {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 1.75rem;
}
</style>
