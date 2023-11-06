<template>
    <footer class="footer  footer-bar">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="text-sm-left $vuetify.theme.dark ? 'white--text':'text-muted' footer-legal">
                        <p class="text-justify">
                            Fortune Capital Services Private Ltd. SEBI Registration No. INZ000201438. Member Code for
                            NSE: 14572 BSE:6524 MCX: 16765 and ICEX: 2010. CDSL DP ID: 12080300 SEBI Registration
                            No.IN-DP-CDSL-729-2014. Registered Office: Kochar Technology Park, 6th Floor, SP-31-A, 1st
                            Cross Road, Ambattur Industrial Estate, Ambattur, Chennai – 600 058. For any complaints
                            pertaining to stock broking please write to ftc@ftconline.in and for DP related to
                            dp@ftconline.in Please ensure to read the Risk Disclosure Document carefully as prescribed
                            by SEBI.</p>
                        <p class="text-justify">“Procedure to file a complaint on SEBI SCORES: Register on <a
                                href="https://scores.gov.in/scores/Welcome.html" target="_blank"
                                :class="$vuetify.theme.dark ? 'white--text' : 'text-muted'">SCORES</a> portal. Mandatory
                            details for filing complaints on SCORES:
                            Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
                            redressal of the grievances”
                        </p>
                        <p class="text-justify">
                            "Prevent unauthorised transactions in your account, update your mobile numbers/email IDs
                            with your Stockbroker/Depository Participant. Receive information of your transactions
                            directly from Exchange/Depository on your mobile/ email at the end of the day. Issued in the
                            interest of investors". As a business we do not give stock tips and have not authorized
                            anyone to trade on behalf of others. If you find anyone claiming to be part of FLATTRADE and
                            offering such services, please email to ftc@ftconline.in. "KYC is one time exercise while
                            dealing in securities markets - once KYC is done through a SEBI registered intermediary
                            (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you
                            approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no
                            need to issue a cheque. Please write the Bank account number and sign the IPO application
                            form to authorize your bank to make payment in case of allotment. In case of non-allotment,
                            the funds will remain in your bank account.</p>
                        <p class="text-justify">
                            “Attention Investors 1. Stock Brokers can accept securities as margin from clients only by
                            way of pledge in the depository system w.e.f. September 1, 2020. 2.Update your mobile number
                            &amp; email Id with your stock broker/depository participant and receive OTP directly from
                            depository on your email id and/or mobile number to create pledge. 3. Pay 20% upfront margin
                            of the transaction value to trade in cash market segment 4. Investors may please refer to
                            the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference
                            NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other
                            guidelines issued from time to time in this regard. 5. Check your Securities /MF/ Bonds in
                            the consolidated account statement issued by NSDL/CDSL every month. Issued in the interest
                            of Investors". To read Advisory for investors, <a href="#" data-toggle="modal"
                                data-target="#termsModal" :class="$vuetify.theme.dark ? 'white--text' : 'text-muted'">click
                                here</a>. 6. Investors are requested
                            to note that Stock broker (Fortune Capital Services Private Limited) is permitted to
                            receive/pay money from/to investor through designated bank accounts only named as client
                            bank accounts. Stock broker (Fortune Capital Services Private Limited) is also required to
                            disclose these client bank accounts to Stock Exchange. Hence, you are requested to use
                            following client bank accounts only for the purpose of dealings in your trading account with
                            us. The details of these client bank accounts are also displayed by NSE on their website
                            under “Know/ Locate your Stock Broker” and for MCX “Membership→Notice Board→Member &amp; AP
                            Details". To know client bank account <a href="#" data-toggle="modal" data-target="#termsModal2"
                                :class="$vuetify.theme.dark ? 'white--text' : 'text-muted'">click here</a>.</p>
                        <p class="text-justify">
                            Risk disclosure for Futures and Options clients <a href="forms/ANNEXURE A RISK DISCLOSURE-4.pdf"
                                :class="$vuetify.theme.dark ? 'white--text' : 'text-muted'" target="_blank">click
                                here</a>.
                        </p>
                        <p class="text-justify">
                            Disclaimer: ‘Investment in securities market are subject to market risks, read all the
                            related documents carefully before investing’.
                            <br>
                            “Investment in Mutual Fund market are subject to market risk. There is no guaranteed or
                            assured rate of return. Past Performance is not indication of future returns. Please read
                            all related documents carefully before investing”.
                            <br>
                            “The securities quoted are exemplary and are not recommendatory".
                            <br>
                            "Brokerage will not exceed the SEBI prescribed limit".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style  scoped>
.footer {
    background: #f8f9fc;
    padding: 60px 0;
    position: relative;
    color: #666;
}

.footer.footer-bar {
    padding: 30px 0;
}

.footer .footer-head {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 500;
}

.footer-legal p {
    font-size: 11px;
    color: #9b9b9b;
}

.text-muted {
    color: #666e7b;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    font-family: nunito, sans-serif;
    line-height: 1.5;
    font-weight: 600;
}
</style>