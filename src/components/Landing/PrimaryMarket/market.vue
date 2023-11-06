<template>
    <v-row class="d-flex align-center justify-center ">
        <v-col>
            <v-card class="elevation-0 page-Bg">
                <v-row>
                    <v-col cols="12" xl="8" lg="8" md="7" sm="12" xs="12" justify="center" align="center">
                        <v-img src="https://flattrade.s3.ap-south-1.amazonaws.com/promo/Novo Dash Mock.png" contain
                            max-width="1000" min-height="400"></v-img>
                    </v-col>
                    <v-col class="d-flex justify-center align-center flex-column" cols="12" xl="4" lg="4" md="5" sm="12"
                        xs="12">
                        <v-col class="d-flex flex-column text-center justify-center align-center">
                            <span class="text-h4 text-capitalize font-weight-medium mb-2">primary market</span>
                            <span class="text--secondary text-h4 text-capitalize font-weight-normal mb-2">investment
                                journey</span>
                            <p class="body-1">Invest in 0% commision direct mutal funds and Govt, coporate, and
                                good bonds on India's largest direct mutal funds platform.</p>

                            <v-btn color="primary darken-1 mt-5" width="150" depressed style="border-radius: 10px;"
                                class="text-capitalize">Login</v-btn>
                        </v-col>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (min-width: 800px) {
    .page-Bg {
        background: url("https://flattrade.s3.ap-south-1.amazonaws.com/promo/Bg New Merge.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
}
</style>