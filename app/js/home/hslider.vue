<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href }">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16264/241/2311970526/47997/bf5d5898/5aa27d24Nf51ad923.jpg?width=750&height=320",
            }, {
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t18094/362/720619358/45114/335f6a88/5aa27d4eNbdf07b2b.jpg?width=750&height=320",
            }, {
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16615/347/696435905/43565/e2c22f8f/5aa27c5cN8780922d.png?width=750&height=320",
            }, {
                href: "Home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16885/226/710442347/49212/a9f0052b/5aa27cfeNcb50234c.jpg?width=750&height=320",
            }],
            enters: [{
                href: "Home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                title: "优惠券",
            }, {
                href: "Home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            }, {
                href: "Home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
            }, {
                href: "Home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top: 120px;
    img {
      width: 100%;
    }
  }.list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
