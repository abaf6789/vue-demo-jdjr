<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Fiance/>
        <Product/>
        <Insurance/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
import Fiance from "./financechoice.vue"
import Product from "./product.vue"
import Insurance from "./insurance.vue"
export default {
    components: {
        Heador,
        Slider,
        Fiance,
        Product,
        Insurance,
    },
}
</script>
