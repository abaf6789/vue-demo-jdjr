<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Fiance/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
import Fiance from "./financechoice.vue"
export default {
    components: {
        Heador,
        Slider,
        Fiance,
    },
}
</script>
