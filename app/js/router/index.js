import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Financial from "../financial/index.vue"
import Ious from "../ious/index.vue"
import Personal from "../personal/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        }, {
            path: "/finance",
            name: "Financial",
            component: Financial,
        }, {
            path: "/ious",
            name: "IOUS",
            component: Ious,
        }, {
            path: "/personal",
            name: "Personal",
            component: Personal,
        },
    ],
})
