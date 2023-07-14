import $ from 'jquery';



export const rate = (target)=>{
        if (target.id == "sell_rate") {
          document.getElementById("rate1").value = target.value;
          document.getElementById("rate2").value = target.value;
          document.getElementById("rate11").value = target.value;
          document.getElementById("rate12").value = target.value;
          document.getElementById("rate111").value = target.value;
          document.getElementById("rate222").value = target.value;
          document.getElementById("fleet_lease_rate_1").value = target.value;
          document.getElementById("fleet_lease_rate_2").value = target.value;
          document.getElementById("com_lease_rate_1").value = target.value;
          document.getElementById("com_lease_rate_2").value = target.value;
          document.getElementById("CWB_lease_rate_1").value = target.value;
          document.getElementById("CWB_lease_rate_2").value = target.value;
        }
}
export const VehicalMake = ()=>{  
    var get_make = $('#make').val();
    var get_mk_upr_case = get_make.toUpperCase();
    
    if (get_mk_upr_case == "FREIGHTLINER") {
        // var pop_msrp = $('#msrp').val("150000");
        var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
        var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
        var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
        var pop_pdi = $('#pdi').val("165");
        var pop_deposit = $('#deposit').val("5000");
        var pop_excess_kms = $('#excess_kms').val("0");
        var pop_excess_kms = $('#excess_kms2').val("0");
        var pop_cents_per_km1 = $('#cents_per_km1').val("0");
        var pop_cents_per_km1 = $('#cents_per_km2').val("0");
        var shipps1 = $('#shipping_code').val();
        if(shipps1 == null || shipps1 == "")
        {
            var delivery_fee0 = $('#delivery_fee').val("0");
        }
        else
        {
        var subbb = shipps1.substring(0, 1);
        if(subbb == "M" || subbb == "L")
        {
            var delivery_fee0 = $('#delivery_fee').val("300");
        }
        else{
        var delivery_fee0 = $('#delivery_fee').val("600");}

        }
 }
 else if (get_mk_upr_case == "PETERBILT") {
    // var pop_msrp = $('#msrp').val("150000");
    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
    var pop_pdi = $('#pdi').val("165");
    var pop_deposit = $('#deposit').val("5000");
    var pop_excess_kms = $('#excess_kms').val("0");
    var pop_excess_kms = $('#excess_kms2').val("0");
    var pop_cents_per_km1 = $('#cents_per_km1').val("0");
    var pop_cents_per_km1 = $('#cents_per_km2').val("0");
    var shipps1 = $('#shipping_code').val();
    if(shipps1 == null || shipps1 == "")
    {
        var delivery_fee0 = $('#delivery_fee').val("0");
    }
    else
    {
    var subbb = shipps1.substring(0, 1);
    if(subbb == "M" || subbb == "L")
    {
        var delivery_fee0 = $('#delivery_fee').val("300");
    }
    else{
    var delivery_fee0 = $('#delivery_fee').val("600");}

    }       
}
else if (get_mk_upr_case == "KENWORTH") {
// var pop_msrp = $('#msrp').val("150000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
var pop_pdi = $('#pdi').val("165");
var pop_deposit = $('#deposit').val("5000");
var pop_excess_kms = $('#excess_kms').val("0");
var pop_excess_kms = $('#excess_kms2').val("0");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
    var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
    var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "WESTERN STAR") {
// var pop_msrp = $('#msrp').val("225000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
var pop_pdi = $('#pdi').val("165");
var pop_deposit = $('#deposit').val("5000");
var pop_excess_kms = $('#excess_kms').val("0");
var pop_excess_kms = $('#excess_kms2').val("0");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "VOLVO TRUCK") {
// var pop_msrp = $('#msrp').val("225000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
var pop_pdi = $('#pdi').val("165");
var pop_deposit = $('#deposit').val("5000");
var pop_excess_kms = $('#excess_kms').val("0");
var pop_excess_kms = $('#excess_kms2').val("0");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "INTERNATIONAL") {
// var pop_msrp = $('#msrp').val("150000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
var pop_pdi = $('#pdi').val("165");
var pop_deposit = $('#deposit').val("5000");
var pop_excess_kms = $('#excess_kms').val("0");
var pop_excess_kms = $('#excess_kms2').val("0");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "HINO") {
// var pop_msrp = $('#msrp').val("150000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("0");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("300");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("0");
var pop_pdi = $('#pdi').val("165");
var pop_deposit = $('#deposit').val("5000");
var pop_excess_kms = $('#excess_kms').val("0");
var pop_excess_kms = $('#excess_kms2').val("0");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}
}
}

else if (get_mk_upr_case == "ACURA") {
// var pop_msrp = $('#msrp').val("40000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2475.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "ALFA ROMEO") {
// var pop_msrp = $('#msrp').val("80000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var cent_div = 16;
var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}
else if (get_mk_upr_case == "AUDI") {
// var pop_msrp = $('#msrp').val("40000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2800.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var cent_div = 10;
var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else
{
var delivery_fee0 = $('#delivery_fee').val("600");
}
}
}

else if (get_mk_upr_case == "BMW") {
// var pop_msrp = $('#msrp').val("40000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2580.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "BUICK") {
// var pop_msrp = $('#msrp').val("30000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2000.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var cent_div = 8;
var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "CADILLAC") {
// var pop_msrp = $('#msrp').val("80000");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2400.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var cent_div = 10;
var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}
else if (get_mk_upr_case == "PORSCHE") {
// var pop_msrp = $('#msrp').val("100000.00");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1850.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500.00");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var pop_cents_per_km1 = $('#cents_per_km1').val("0");
var pop_cents_per_km1 = $('#cents_per_km2').val("0");
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}
else if (get_mk_upr_case == "CHRYSLER") {
// var pop_msrp = $('#msrp').val("35000.00.00");
// var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
var pop_pdi = $('#pdi').val("0.00");
var pop_deposit = $('#deposit').val("1500.00");
var pop_excess_kms = $('#excess_kms').val("24000");
var pop_excess_kms = $('#excess_kms2').val("24000");
var cent_div = 12;
var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
var shipps1 = $('#shipping_code').val();
if(shipps1 == null || shipps1 == "")
{
var delivery_fee0 = $('#delivery_fee').val("0");
}
else
{
var subbb = shipps1.substring(0, 1);
if(subbb == "M" || subbb == "L")
{
var delivery_fee0 = $('#delivery_fee').val("300");
}
else{
var delivery_fee0 = $('#delivery_fee').val("600");}

}
}

else if (get_mk_upr_case == "MASERATI") {
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "VOLKSWAGEN") {
                // var pop_msrp = $('#msrp').val("35000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2050.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "MASERATI") {
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "VOLKSWAGEN") {
                // var pop_msrp = $('#msrp').val("35000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2050.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "VOLVO") {
                // var pop_msrp = $('#msrp').val("60,000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2415.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "TOYOTA") {
                // var pop_msrp = $('#msrp').val("35000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1920.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 7;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "SABARU") {
                // var pop_msrp = $('#msrp').val("40000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1950.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 7;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "POLESTAR") {
                // var pop_msrp = $('#msrp').val("80000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2300.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }

            else if (get_mk_upr_case == "NISSAN") {
                // var pop_msrp = $('#msrp').val("35000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "MITSUBISHI") {
                // var pop_msrp = $('#msrp').val("25000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2000.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "MINI") {
                // var pop_msrp = $('#msrp').val("35000.00");
                // var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                // var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2345.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }

            else if (get_mk_upr_case == "MAZDA") {
                // var pop_msrp = $('#msrp').val("35000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2095.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "LINCOLN") {
                // var pop_msrp = $('#msrp').val("80000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2295.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("25000");
                var pop_excess_kms = $('#excess_kms2').val("25000");
                var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "LEXUS") {
                // var pop_msrp = $('#msrp').val("90000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2245.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 15;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "LAND ROVER") {
                // var pop_msrp = $('#msrp').val("125000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2545.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 20;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }

            else if (get_mk_upr_case == "KIA") {
                // var pop_msrp = $('#msrp').val("18000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1700.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "JEEP") {
                // var pop_msrp = $('#msrp').val("55000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1895.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "JAGUAR") {
                // var pop_msrp = $('#msrp').val("65000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2445.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 25;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "INFINITI") {
                // var pop_msrp = $('#msrp').val("55000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2595.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 10;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "HYUNDAI") {
                // var pop_msrp = $('#msrp').val("22500.00");
                var pop_broker_fee =parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1875.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }

            else if (get_mk_upr_case == "HONDA") {
                // var pop_msrp = $('#msrp').val("28000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("1880.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "GENESIS") {
                // var pop_msrp = $('#msrp').val("80000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("100.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 25;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "FIAT") {
                // var pop_msrp = $('#msrp').val("25000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }
            else if (get_mk_upr_case == "DODGE") {
                // var pop_msrp = $('#msrp').val("75000.00");
                var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                var pop_pdi = $('#pdi').val("0.00");
                var pop_deposit = $('#deposit').val("1500.00");
                var pop_excess_kms = $('#excess_kms').val("24000");
                var pop_excess_kms = $('#excess_kms2').val("24000");
                var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
            }

            else if (get_mk_upr_case == "CHEVROLET") {
                var chk_chev = $('#gvwr_for_plates').val();
                    var chk_chev_mtch = parseInt(chk_chev);
                if (parseInt(chk_chev) < "4500") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2095.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else if (parseInt(chk_chev) > "4500" || $('#gvwr_for_plates').val() == "4500 KG with Yellow Sticker") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2095.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("165.00");
                    var pop_deposit = $('#deposit').val("5000.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);

                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else
                {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val()) * (parseFloat($('#broker_fee_per').val())/100 );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2095.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 8;
                    var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                    var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
            }

            else if (get_mk_upr_case == "FORD") {
                var chk_chev = $('#gvwr_for_plates').val();
                    var chk_chev_mtch = parseInt(chk_chev);
                if (parseInt(chk_chev) < "4500") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("25000");
                    var pop_excess_kms = $('#excess_kms2').val("25000");
                    var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else if (parseInt(chk_chev) > "4500" || $('#gvwr_for_plates').val() == "4500 KG with Yellow Sticker") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("165.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("25000");
                    var pop_excess_kms = $('#excess_kms2').val("25000");
                    var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else
                {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("25000");
                    var pop_excess_kms = $('#excess_kms2').val("25000");
                    var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
            }

            else if (get_mk_upr_case == "GMC") {
                var chk_chev = $('#gvwr_for_plates').val();
                    var chk_chev_mtch = parseInt(chk_chev);
                if (parseInt(chk_chev) < "4500") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2000.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else if (parseInt(chk_chev) > "4500" || $('#gvwr_for_plates').val() == "4500 KG with Yellow Sticker") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2000.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("165.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }
                }
                {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2000.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 8;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
            }

            else if (get_mk_upr_case == "MERCEDES-BENZ") {
                var chk_chev = $('#gvwr_for_plates').val();
                    var chk_chev_mtch = parseInt(chk_chev);
                if (parseInt(chk_chev) < "4500") {
                    // var pop_msrp = $('#msrp').val("50000.00");
                    var pop_broker_fee =parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2175.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                    var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else if (parseInt(chk_chev) > "4500" || $('#gvwr_for_plates').val() == "4500 KG with Yellow Sticker") {
                    // var pop_msrp = $('#msrp').val("50000.00");
                    var pop_broker_fee =parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2175.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("165.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                    var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else
                {
                     var delivery_fee0 = $('#delivery_fee').val("600");
                    }
                }

                }
                else
                {
                    // var pop_msrp = $('#msrp').val("50000.00");
                    var pop_broker_fee =parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2175.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var pop_cents_per_km1 = $('#cents_per_km1').val("0");
                    var pop_cents_per_km1 = $('#cents_per_km2').val("0");
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
            }

            else if (get_mk_upr_case == "RAM") {
                var chk_chev = $('#gvwr_for_plates').val();
                    var chk_chev_mtch = parseInt(chk_chev);
                if (parseInt(chk_chev) < "4500") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                     var delivery_fee0 = $('#delivery_fee').val("600");}
                }

                }
                else if (parseInt(chk_chev) > "4500" || $('#gvwr_for_plates').val() == "4500 KG with Yellow Sticker") {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("165.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
                else
                {
                    // var pop_msrp = $('#msrp').val("75000.00");
                    var pop_broker_fee = parseFloat($('#msrp').val())  * (parseFloat($('#broker_fee_per').val()) /100  );
                    var pop_freight_and_air_tax = $('#freight_and_air_tax').val("2195.00");
                    var pop_dealer_fee_fuel = $('#dealer_fee_fuel').val("100.00");
                    var pop_dealer_fee_licensing = $('#dealer_fee_licensing').val("59.00");
                    var pop_pdi = $('#pdi').val("0.00");
                    var pop_deposit = $('#deposit').val("2500.00");
                    var pop_excess_kms = $('#excess_kms').val("24000");
                    var pop_excess_kms = $('#excess_kms2').val("24000");
                    var cent_div = 12;
                var pop_cents_per_km1 = $('#cents_per_km1').val(cent_div);
                var pop_cents_per_km1 = $('#cents_per_km2').val(cent_div);
                    var shipps1 = $('#shipping_code').val();
                if(shipps1 == null || shipps1 == "")
                {
                    var delivery_fee0 = $('#delivery_fee').val("0");
                }
                else
                {
                var subbb = shipps1.substring(0, 1);
                if(subbb == "M" || subbb == "L")
                {
                    var delivery_fee0 = $('#delivery_fee').val("300");
                }
                else{
                var delivery_fee0 = $('#delivery_fee').val("600");}

                }

                }
            }

}



//..................Vin Number Change jQuery....................................................//
export const VIN_Number_PI = (e)=>{
    if (e.target.id == "vin_number") {
        
    
    
        if ($("#vin_number").val() != "" || $("#vin_number").val() != null ) {
            $('#VIN_row').show();
        } else {
            $('#VIN_row').hide();
        }
    
        var settings = {
            "url": "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/" + $("#vin_number").val() + "?format=json",
            "method": "GET",
            "timeout": 0,
            "headers": {},
        };
    
        $.ajax(settings).done(function (response) {
            $.each(response.Results, function (index, value) {
                var make_add1 = value.Make;
                var make10 = make_add1.substring(0, 1);
                var make9 = make10.toUpperCase();
                var make8 = make_add1.substring(1);
                var make7 = make8.toLowerCase();
                var make_add = $('#make').val(make9+make7);
                var year_add = $('#year').val(value.ModelYear);
                var model_add = $('#model').val(value.Model);
               
                var model_add = $('#trim').val(value.Trim);

                VehicalMake();
        //************************************ Condition End Here *********/
            });
        });
    }
    }