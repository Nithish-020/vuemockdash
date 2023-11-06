import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false, // Set this to true for dark theme, and false for light theme
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                footer: '#f8f9fc',
                header: 'rgba(248, 249, 252,0.4) ',
                btnColor: '#0965da',
                content: '#365048',
                contentHead: '#4e4e4e'
            },
            dark: {
                primary: '#1976D2',
                secondary: '#757575',
                accent: '#64B5F6',
                footer: '#272727',
                btnColor: '#0965da',

            },
        },
    },
});
