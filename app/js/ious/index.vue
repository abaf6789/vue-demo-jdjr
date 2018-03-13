<template lang="html">
    <div>
        <Heador/>
        <Iselect/>
        <Active/>
        <Services/>
        <Navbar/>
        <Footor/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Iselect from "./iouselect.vue"
import Active from "./active.vue"
import Services from "./moreservices.vue"
import Navbar from "../public/navbar.vue"
export default {
    components: {
        Heador,
        Footor,
        Iselect,
        Active,
        Services,
        Navbar,
    },
}
</script>
