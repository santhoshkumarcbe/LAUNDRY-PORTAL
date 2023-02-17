import React from 'react';
import GooglePayButton from '@google-pay/button-react';
function Payment(){
    return(
        <GooglePayButton
environment="PRODUCTION"
paymentRequest={{
  apiVersion:2,
  apiVersionMinor:0,
  allowedPaymentMethods:[{
      type:'CARD',
      parameters:{
          allowedAuthMethods:["PAN_ONLY","CRYTOGRAM_3DS"],
          allowedCardNetworks:["MASTERCARD","VISA"]
      },
      tokenizationSpecification:{
          type:"PAYMENT_GATEWAY",
          parameters:{
              gateway:"example",
              gatewayMerchantId:"exampleGatewayMerchantId"
          }
      }
  }],
  merchantInfo:{
      merchantId:"1234567890123456",
      merchantName:"Demo Merchant"
  },
  transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"10",
      currencyCode:"INR",
      countryCode:"IN"
  },
  shippingAddressRequired:true,
  callbackIntents:["PAYMENT_AUTHORIZATION"]
}}
onLoadPaymentData={paymentRequest=>{
  console.log(paymentRequest)
}}
onPaymentAuthorized={paymentData=>{
  console.log(paymentData);
  return{transactionState:'SUCCESS'}
}}
existingPaymentMethodRequired='false'
buttonColor="Black"
buttonType="buy"
>
</GooglePayButton>
    );
}
export default Payment;
