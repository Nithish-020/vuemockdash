<template>
    <div>
        <Footer1 />
        <v-divider></v-divider>
        <Footer2 />
        <v-divider></v-divider>
        <Footer3 />
    </div>
</template>

<script>
import Footer1 from './FooterComp/Footer1.vue';
import Footer2 from './FooterComp/Footer2.vue';
import Footer3 from './FooterComp/Footer3.vue';
export default {
    components: {
        Footer1,
        Footer2,
        Footer3
    }
}
</script>

<style  scoped></style>