import React from 'react'

import Vehicle from "./Components/Vehicale/Vehicle";
import Photo from "./Components/Photo&specs/Photo";
import Price from "./Components/Pricing.js/Price";
import Rebates from "./Components/Rebates/Rebates";
import DownPayments from "./Components/DownPayments/DownPayments";
import RetailFinance from "./Components/RetailFinance/RetailFinance";
import FleetFinance from "./Components/FleetFinance/FleetFinance";
import RetailLease from "./Components/RetailLease/RetailLease";
import FleetLease from "./Components/FleetLease/FleetLease";
import COMLease from "./Components/COMLease/COMLease";
import CWBLease from "./Components/CWBLease/CWBLease";
import RetailCash from "./Components/RetailCash/RetailCash";
import FleetCash from "./Components/FleetCash/FleetCash";
import DealerFees from "./Components/DealerFees/DealerFees";

import Submit from "./Components/Submit.js/Submit";
//..............Function Call...........//
import GetRecords from "./Resources/GetRecords";
import Fields from './Resources/Fields';
const App = () => {
  return (
    <>
    <section className="h-100 h-custom">
      <div className="container py-2 h-100">
        <form name="form" action="/action_page.php" method="get" enctype="multipart/form-data">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3">
                    <div className="card-body p-3 p-md-5" >
             
                    <Vehicle/>
                    <Photo/>
                    <Price/>
                    <Rebates/>
                    <DownPayments/>
                    <RetailFinance/>
                    <FleetFinance/>
                    <RetailLease/>
                    <FleetLease/>
                    <COMLease />

                    <CWBLease/>
                    <RetailCash/>
                    <FleetCash />
                    <DealerFees/> 
                   
                    <GetRecords/>
                    <Fields/>
                    </div>
                  </div>
                </div>
            </div>
        </form>
      </div>
      <div id="success_msg">Rec has been Updated!!</div>
      <div id="error_msg">Something Went Wrong!!</div>
    </section>
    
    </>
  )
}

export default App