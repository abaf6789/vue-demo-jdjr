<template lang="html">
    <Panel title="有车有钱" :class="$style.panel">
        <section :class="$style.content">
            <section :class="$style.imgList">
                <div :class="$style.imgItem" v-for="item in imgs" :key="item.img">
                    <router-link :to="{ name: item.href}">
                        <img :src="item.img">
                    </router-link>
                </div>
            </section>
            <section :class="$style.list">
                <div :class="$style.item" v-for="item in items" :key="item.src">
                    <router-link :to="{ name: item.href}">
                        <img :src="item.src">
                        <h4>{{ item.title }}</h4>
                    </router-link>
                </div>
            </section>
        </section>
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
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
                title: "旅游",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
                title: "医美",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
                title: "房抵贷",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
                title: "驾校",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
                title: "分期用",
            }],
            imgs: [{
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t17800/224/698056253/28974/d3ad0665/5aa0ec80N348451f8.png?width=375&height=233,",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .content {
    .imgList{
      @include list(row);
      justify-content: space-around;
      img{
        display: inline-block;
        width: 320px;
        height: 200px
      }
    }
    .list{
      @include list(row);
      justify-content: space-around;
      margin-top: 80px;
      padding-bottom: 20px;
      a{
        text-decoration: none;
      }
      h4{
        font-size: 26px;
        text-align: center;
        color: #666;
        display: block;
        margin-top: 12px;
      }
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
    }
  }
</style>
