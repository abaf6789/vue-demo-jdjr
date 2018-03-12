<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.list">
              <div :class="$style.finance" v-for="item in items" :key="item.src">
                  <img :src="item.src">
                  <div :class="$style.info">
                    <span>{{ item.title }}</span>
                    <p>{{ item.nav }}</p>
                  </div>
                  <div :class="$style.money">去赚钱&nbsp&nbsp></div>
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
                title: "月度理财",
                nav: "预期年化收益率4.50%",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76",
            }, {
                title: "季度理财",
                nav: "历史年化回报率5.50%",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76",
            }, {
                title: "一年理财",
                nav: "历史年化回报率5.80%",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .panel{
    .list{
      @include list(row);
      .finance{
        width: 100%;
        position: relative;
        border-top: 1px solid #f5f5f5;
        img{
          float: left;
          width: 90px;
          height: 90px;
          margin-left: 32px;
          margin-top: 24px;
          margin-right: 32px;
          margin-bottom: 24px;
        }
        .info{
          max-width: 35%;
          text-align: left;
          float: left;
          margin-top: 32px;
          span{
            font-size: 32px;
            color: #333;
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          p{
            font-size: 24px;
            color: #ff3232;
            display: block;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .money{
          font-size: 28px;
          max-width: 39%;
          color: #FF801A;
          margin-right: 32px;
          text-align: left;
          float: right;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-top: 50px;
        }
      }
    }
  }
</style>
