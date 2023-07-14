import React, { useContext, useState } from 'react'
import Sdata from "./Sdata";
import { CrmContext } from "./../../Resources/GetRecords";
import {  ReatiLeaseResidual} from "../RetailLease/RetLeaseFun";
import { VehicalMake , VIN_Number_PI ,rate} from "./VehicalFunc";
const Vehicle = () => {

const [vehicalInput ,setVehicalInput]=useState({
    vin_number:"",
    companyname:" ",
    contact_name:"",
    year:"",
    make:"",
    model :"",
    trim:"",
    buy_rate:"8.99",
    sell_rate:"9.50"
})

const HandleInput =(e )=>{
    VIN_Number_PI(e); 
   const name = e.target.value;
   console.log(e.target.id);
   setVehicalInput(name);
   if (e.target.id == "make") {
    VehicalMake();
    //.......RetLease Function.................................//
    ReatiLeaseResidual();
     var makeField = document.getElementById("make").value;
     if (makeField === "Ford") {
        document.getElementById("hb").value=( document.getElementById("msrp").value - document.getElementById("freight_and_air_tax").value) * 0.02;
        document.getElementById("dmup").value= (document.getElementById("msrp").value - document.getElementById("hb").value) /2;
        document.getElementById("lcmup").value= (document.getElementById("msrp").value - document.getElementById("hb").value)/2;
       }else{
        document.getElementById("dmup").value= (document.getElementById("msrp").value - document.getElementById("hb").value) /2;
        document.getElementById("lcmup").value= (document.getElementById("msrp").value - document.getElementById("hb").value)/2;
       }
     //...................................PDI Field Update Condition....................//
     var GVWR_for_Plates = document.getElementById("gvwr_for_plates").value;
     var chk_chev_mtch = parseInt(GVWR_for_Plates);
     if ((makeField === "Chevrolet" || makeField === "Ford"  || makeField === "GMC" || makeField === "Mercedes-Benz" || makeField === "Ram") && chk_chev_mtch > 4500 ) {
        document.getElementById("pdi").value= "165.00";
     }else if(makeField === "Freightliner" || makeField === "Peterbilt" || makeField === "Kenworth" || makeField === "Western Star" || makeField === "Volvo Truck" || makeField === "International" || makeField === "Hino"){
        document.getElementById("pdi").value= "165.00";
     }else{
        document.getElementById("pdi").value= "0.00";
     } 
   }
        //..........................Retail Finance (rate).................................//
        rate(e.target );
        // if (e.target.id == "sell_rate") {
        //   document.getElementById("rate1").value = e.target.value;
        //   document.getElementById("rate2").value = e.target.value;
        // }
        // if (e.target.id == "buy_rate") {
        //     // document.getElementById("rate2").value = e.target.value;
        //  }
}

// const  {HandleInput}= useContext(CrmContext);
// ...................Get CRM Data................................// 
  return (
    <>
          <form className="px-md-2" action="" method="POST">
            <div id="dealinfo_sec">
                <h5 className="heading">Vehicle Info</h5>
                <div className="row">
        {
            Sdata.map((val ,index)=>{
            return(
            <div key={val.id}  className="col-4 col-md-4 col-lg-4 col-xl-4">
                <div className="form-group form-outline">
                    <label className="form-label" for={val.name}>{val.sname} </label>
                 
                    <input type={val.type} class="form-control form-control-sm"
                            id={val.id} name={`${index}`} maxLength="17" value={vehicalInput.companyname} key={index} 
                           onChange={(event) => HandleInput(event ,val)} />
                </div>
                
            </div>
            )
        })
        }

              <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                  <div class="form-group form-outline">
                      <label className="form-label" for="">Type of Deal</label>
                      <select name="type_of_deal" id="type_of_deal"
                          class="form-control form-control-sm">
                          <option value="All" selected="true">All</option>
                          <option value="Cash">Cash</option>
                          <option value="Finance">Finance</option>
                          <option value="Retail Lease">Retail Lease</option>
                          <option value="Retail Cash">Retail Cash</option>
                          <option value="Fleet Cash">Fleet Cash</option>
                          <option value="Fleet Lease">Fleet Lease</option>
                          <option value="Fleet Finance">Fleet Finance</option>
                          <option value="Com Deal">Com Deal</option>
                          <option value="Trading Vehicle">Trading Vehicle</option>
                          <option value="Bought Out Lease">Bought Out Lease</option>
                      </select>
                  </div>
              </div>

              <div className="row">
                <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="form-group form-outline">
                        <label className="form-label" for="client_type">Type</label>
                        <select name="client_types" id="client_types"
                            class="form-control form-control-sm">
                            <option value="None" selected={true}>None</option>
                            <option value="Stock Vehicle">Stock Vehicle</option>
                            <option value="Commercial Client">Commercial Client</option>
                            <option value="Personal Use Client">Personal Use Client</option>
                            <option value="Dealer and Client">Dealer and Client</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Dealer Group">Dealer Group</option>
                            <option value="DO NOT CONTACT">DO NOT CONTACT</option>
                            <option value="Delete">Delete</option>
                            <option value="Family">Family</option>
                            <option value="Financial Services">Financial Services</option>
                            <option value="Fleet Client">Fleet Client</option>
                            <option value="CNLA">CNLA</option>
                            <option value="Fleet CNLA Client">Fleet CNLA Client</option>
                            <option value="Friend">Friend</option>
                            <option value="New Client">New Client</option>
                            <option value="Non-Fleet Client">Non-Fleet Client</option>
                            <option value="Other">Other</option>
                            <option value="Prospect">Prospect</option>
                            <option value="Referral">Referral</option>
                            <option value="Vehicle Manufacturer">Vehicle Manufacturer
                            </option>
                            <option value="Vendor">Vendor</option>
                            <option value="Wholesale Client">Wholesale Client</option>
                            <option value="Client">Client</option>
                            <option value="New Company">New Company</option>
                        </select>
                    </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                    <label className="form-label" for="sellrate">Sell Rate (%)</label>
                    <div className="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm"
                            id="sell_rate" name="sell_rate" maxlength="10"  value={vehicalInput.sell_rate} onChange={(event) => HandleInput(event )} />
                        <span className="input-group-text" style={{padding:"0px 9px"}}> <i
                                className="fa fa-percent"></i> </span>
                    </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                    <label className="form-label" for="buyrate">Buy Rate (%)</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm" id="buy_rate"
                            name="buy_rate" maxlength="10" value={vehicalInput.buy_rate} onChange={(event) => HandleInput(event )} />
                        <span className="input-group-text"  style={{padding:"0px 9px"}}> <i
                                className="fa fa-percent"></i></span>
                    </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4 col-xl-4">
                    <div class="form-group form-outline">
                        <label className="form-label" for="page_refresh">Page Refresh</label>
                        <select name="page_refresh" id="page_refresh"
                            class="form-control form-control-sm">
                            <option value="-None-">-None-</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
            </div>

          </div>
       </div>
     </form>
       
    </>
  )
}

export default Vehicle
