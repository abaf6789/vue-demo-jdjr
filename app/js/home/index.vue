<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Fiance/>
        <Product/>
        <Insurance/>
        <Car/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
import Fiance from "./financechoice.vue"
import Product from "./product.vue"
import Insurance from "./insurance.vue"
import Car from "./car.vue"
export default {
    components: {
        Heador,
        Slider,
        Fiance,
        Product,
        Insurance,
        Car,
    },
}
</script>
