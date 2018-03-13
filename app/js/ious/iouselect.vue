<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.list">
            <div :class="$style.finance" v-for="item in items" :key="item.src">
                <img :src="item.src">
                <div :class="$style.info">
                    <span>{{ item.title }}</span>
                    <p>{{ item.nav }}</p>
                </div>
                <div :class="$style.money">{{ item.sub }}&nbsp&nbsp></div>
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
                title: "开通白条",
                nav: "送百元礼包",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120",
                sub: "立即查看",
            }, {
                title: "季度理财",
                nav: "金融app专享提额礼包",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120",
                sub: "去提额",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
  .panel{
    &>h4{
      margin-top: 100px;
    }
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
