<template>
    <div>
        <v-row justify="center" class="custom_container ma-auto my-16 pa-5">
            <v-col>
                <v-row v-for="cont in  content " :key="cont.text" justify="center" class="pa-5">
                    <v-col justify="center" align="start" cols="12">
                        <v-row :class="$vuetify.breakpoint.width < 960 ? 'd-felx flex-column align-center' : undefined">
                            <v-col cols="3" class="d-flex align-center justify-center">
                                <v-img :src="cont.image" contain max-width="100"></v-img>
                            </v-col>
                            <v-col :class="$vuetify.breakpoint.width <= 850 ? 'd-flex flex-column text-center' :
                                'd-flex flex-column text-left'" cols="9">
                                <span class="text-h6 text-capitalize font-weight-bold mb-2 contentHead--text">{{ cont.text
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
                    image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/safe heaven.png", text: "Safe Haven", sentence: "Sovereign Gold Bonds are guaranteed by the Indian Government and held in Demat form"
                },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/no hidden charge.png", text: "No Hidden Charges", sentence: "No commission or management fee or expense ratio charges" },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/higher return.png", text: "Higher return", sentence: "Investment return are higher in SGB compared to Gold mutual funds or Gold ETF " },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/tax benefits.png", text: "Tax Benefits", sentence: "Gain exempted if held till maturity (8 years)" },
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