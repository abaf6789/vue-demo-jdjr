<template lang="html">
    <Panel title="精品活动" :class="$style.panel">
        <section :class="$style.content">
            <section :class="$style.imgList">
                <div :class="$style.imgItem" v-for="item in imgs" :key="item.img">
                    <router-link :to="{ name: item.href}">
                        <img :src="item.img">
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
            imgs: [{
                href: "Home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t17374/350/576442826/54240/a9918a9/5a97d2c0N021cf2e0.png?width=376&height=264",
            }, {
                href: "Home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264",
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
        height: 200px;
        margin-bottom: 40px;
      }
    }
  }
</style>
