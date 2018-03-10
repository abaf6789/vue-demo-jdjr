<template lang="html">
    <Panel title="-理财精选-" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span class="red">{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
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
                title: "定期理财",
                sub: "90天可质押",
                rate: "5.50%",
                text: "历史年化结算利率",
            }, {
                title: "固收理财",
                sub: "理财推荐",
                rate: "5.80%",
                text: "综合化年收益率",
            }, {
                title: "基智账户",
                sub: "组合投资",
                rate: "8%-10%",
                text: "止盈年化收益率",
            }, {
                title: "小白基金",
                sub: "超短期",
                rate: "5.00%",
                text: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";

</style>
