<template lang="html">
    <Panel :class="$style.panel">
        <ul>
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252">
            </li>
            <li>
                <div :class="$style.channel" v-for="item in items" :key="item.src">
                    <router-link :to="{ name: item.href}">
                        <img :src="item.src">
                        <h4>{{ item.title }}</h4>
                    </router-link>
                </div>
            </li>
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title: "客户端",
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108",
            }, {
                title: "触屏版",
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108",
            }, {
                title: "电脑版",
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .panel{
    >h4{
      display: none
    }
    img{
      width: 100%;
      height: 143px;
    }
    li:nth-child(n+1){
      background: #F5F5F5;
    }
    li:nth-child(2){
      @include list(row);
      justify-content: space-around;
      padding-bottom: 20px;
      .channel{
        padding-top: 40px;
        img{
          width: 90px;
          height: 90px;
        }
        a{
          text-decoration: none;
        }
        h4{
          font-size: 26px;
          text-align: center;
          display: block;
          color: #999999;
          margin-top: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden
        }
      }
    }
    li:nth-child(n+3){
      font-size: 24px;
      line-height: 1.6;
      padding: 24px 32px;
      text-align: center;
      color: #999;
      position: relative;
      box-sizing: border-box;
      border-top: 1px solid #DDD
    }
    li:nth-child(6){
      margin-bottom: 100px;
    }
  }
</style>
