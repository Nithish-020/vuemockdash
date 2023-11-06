<template>
    <div>
        <v-row justify="center" class="my-10 pa-5">
            <v-col class="d-flex justify-center align-center flex-column text-center" cols="12" xl="6" lg="7" md="10"
                sm="12" xs="12">
                <span class="
                    text-h4 text-capitalize font-weight-bold mb-2 contentHead--text">Achieve
                    your financial goals via diverse
                    financial instruments</span>
                <span :class="this.$vuetify.breakpoint.name == 'xs' ? 'text-h6 text--secondary' :
                    'text-h4 text--secondary'">Multiple invest choices</span>
            </v-col>
        </v-row>
        <v-row justify="center" class="custom_container ma-auto">
            <v-col>
                <v-row v-for="cont in  content " :key="cont.text" justify="center" class="pa-5">
                    <v-col justify="center" align="start" cols="12">
                        <v-row :class="$vuetify.breakpoint.width < 960 ? 'd-felx flex-column align-center' : undefined">
                            <v-col cols="3" class="d-flex align-center justify-center">
                                <v-img :src="cont.image" contain max-width="100"></v-img>
                            </v-col>
                            <v-col :class="$vuetify.breakpoint.name >= 'sm' ? 'd-flex flex-column text-center' :
                                'd-flex flex-column text-left'" cols="9">
                                <span class="text-h6 text-capitalize font-weight-bold mb-2 contentHeader--text">{{ cont.text
                                }}</span>
                                <p class="body-1 content--text button">{{ cont.sentence }}</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: [
                {
                    image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/IPO.png", text: "IPO", sentence: "Seize the opportunity to invest in quality companies and grow your wealth"
                },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/Mutual Fund.png", text: "Direct Mutual Funds", sentence: "Take control over your long-term investments by investing in commission-free MF schemes" },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/SGB.png", text: "Sovereign Gold Bonds", sentence: "Secure your investments by investing in government-backed risk-free securities which are also highly liquid " },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/G-SEc.png", text: "G-sec", sentence: "Terrific choice to invest in gold and earn a fixed interest of 2.5% as well as enjoy the appreciation in price of the yellow metal" },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/corporate bonds.png", text: "Corporate Bonds", sentence: "Highly rated corporate bonds that offer better returns than traditional bank deposits" },
            ]
        }
    }
}
</script>

<style scoped>
.col {
    width: 100%;
    padding: 5px;
}

.custom_container {
    max-width: 800px;
}
</style>