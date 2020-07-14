function billingFunction(){
    if (same.checked){
    billingName.value = shippingName.value;
    billingZip.value = shippingZip.value;
  
     billingName.setAttribute('readonly',true);                        billingZip.setAttribute('readonly',true);
    }
    else{ 
    billingName.value = "";
    billingZip.value = "";
    billingName.removeAttribute('readonly',true);                     billingZip.removeAttribute('readonly',true);
    }
}
