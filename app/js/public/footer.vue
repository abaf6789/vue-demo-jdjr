<template lang="html">
    <Panel :class="$style.panel">
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in items" :key="item.href" @click="Toggle">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
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
                href: "Home",
                title: "首页",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66",
            }, {
                href: "Financial",
                title: "理财",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66",
            }, {
                href: "IOUS",
                title: "白条",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66",
            }, {
                href: "Personal",
                title: "我的",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66",
            }],
        }
    },
    methods: {
        Toggle() {
            console.log(1)
        },
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .panel{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0px;
    padding-top: 12px;
    padding-bottom: 6px;
    z-index: 200;
    &>h4{
      display: none;
    }
    .list{
      @include list(row);
      justify-content: space-around;
      a{
        text-decoration: none;
        margin-bottom: 12px;
        img{
          width: 44px;
          height: 44px;
        }
        h4{
          font-size: 22px;
          color: #656565;
          text-align: center;
        }
      }
    }
  }
</style>
