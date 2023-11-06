<template>
    <v-container class="mb-10">
        <v-row justify="center" class="pa-5">
            <v-col class="d-flex justify-center align-center flex-column text-center" cols="12" lg="8" md="10" sm="12"
                xs="12">
                <span class="text-h4 text-capitalize font-weight-bold mb-2 contentHead--text">
                    Download and Start your Investing Journey
                </span>
            </v-col>
        </v-row>
        <v-row justify="center" class="custom_container ma-auto ">
            <v-col cols="12" xl="7" lg="7" md="7" sm="7" xs="5">
                <v-img src="https://flattrade.s3.ap-south-1.amazonaws.com/promo/Mobile App Image NOVO.png" contain
                    class="d-flex align-center justify-end mock_desk">
                </v-img>
            </v-col>
        </v-row>
        <v-row justify="center" class="custom_container ma-auto ">
            <v-col class="d-flex ma-auto  justify-center" v-for="link, index in links" :key="index">
                <img :src="link.image" class="subscribe_mobile" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/Novo App Store.png" },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/Novo Play store.png" },
                { image: "https://flattrade.s3.ap-south-1.amazonaws.com/promo/Novo Windows.png" }
            ]
        }
    }
}
</script>

<style scoped>
.mock_desk {
    max-width: 700px;
}

.mock_mobile {
    max-width: 50px;
}

.custom_container {
    max-width: 800px;
}

.col {
    width: 100%;
    padding: 5px;
}

.subscribe_desktop {
    max-width: 150px;
}

.subscribe_mobile {
    max-width: 150px;
}
</style>