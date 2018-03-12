<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Fiance/>
        <Product/>
        <Insurance/>
        <Car/>
        <Information/>
        <Footor/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
import Fiance from "./financechoice.vue"
import Product from "./product.vue"
import Insurance from "./insurance.vue"
import Car from "./car.vue"
import Information from "./information.vue"
import Footor from "../public/footer.vue"
export default {
    components: {
        Heador,
        Slider,
        Fiance,
        Product,
        Insurance,
        Car,
        Information,
        Footor,
    },
}
</script>
