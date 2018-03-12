<template lang="html">
    <div>
        <Heador/>
        <Fslider/>
        <Recommend/>
        <Fselect/>
        <Navbar/>
        <Footor/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Fslider from "./fslider.vue"
import Recommend from "./recommend.vue"
import Fselect from "./fselect.vue"
import Navbar from "../public/navbar.vue"
export default {
    components: {
        Heador,
        Footor,
        Fslider,
        Recommend,
        Fselect,
        Navbar,
    },
}
</script>
