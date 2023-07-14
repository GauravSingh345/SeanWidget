export const DownPay_LeaseD = ()=>{
    setTimeout(() => {
        
   
    var cal_per_of_dwn = (parseFloat(document.getElementById("down_payments").value) / parseFloat(document.getElementById("full_msrp").value) ) *100;
    var cal_per_of_dwn1 = cal_per_of_dwn.toFixed(2);
    document.getElementById("percentof").value = cal_per_of_dwn1;
    document.getElementById("lease_down").value =( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
   
}, 1000);
}

export const DownPay_LeaseDPercent = ()=>{
    setTimeout(() => {
        
    document.getElementById("broker_fee_per").value = "2.5";
    document.getElementById("broker_fee").value = document.getElementById("full_msrp").value * (document.getElementById("broker_fee_per").value / 100);
    // var bfinp = ((parseFloat(document.getElementById("full_msrp").value)*( parseFloat(document.getElementById("percentof").value)  / 100 ) ) +parseFloat(document.getElementById("broker_fee").value) ) * 1.13;
    var bfinp = (parseFloat(document.getElementById("full_msrp").value)*( parseFloat(document.getElementById("percentof").value)  /100 ) )
// alert(bfinp);
    document.getElementById("down_payments").value = bfinp.toFixed(2);
   document.getElementById("per1_5").value = bfinp.toFixed(2);
   document.getElementById("per5").value = bfinp.toFixed(2);
    document.getElementById("lease_down").value =( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
   document.getElementById("per7").value = ( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
   document.getElementById("fleet_lease_per").value = ( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
   document.getElementById("com_lease_per").value = ( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
   document.getElementById("CWB_lease_per").value = ( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);




}, 1000);
}
