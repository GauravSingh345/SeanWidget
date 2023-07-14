
export const Emply_Price_amount = ()=>{
    document.getElementById("employee_pricing_amount").value =parseFloat(document.getElementById("emp_price_disc").value) * parseFloat(document.getElementById("invoice").value) / 100 ;
}

export const Rebata_fals_amount = ()=>{
    document.getElementById("fals_amount").value =(parseFloat(document.getElementById("fals").value) * parseFloat(document.getElementById("invoice").value)) / 1000;
}