import React from "react";
import Footers from "./Footer.module.css"

export default function Footer() {
  return (
    <div> 
      <table className={Footers.footer_table} >
        <thead>
          <tr>
            <th>About Us</th>
            <th>Membership</th>
            <th>CLUBS</th>
            <th>POLICIES & LEGAL</th>
            <th>CUSTOMER SERVICE</th>
          </tr>
        </thead>
        <tbody className={Footers.tableData} >
          <tr >
            <td>
              Company background
              <br />
              Careers
              <br />
              Press room
              <br />
              Reviews & Testimonials
            </td>
            <td>
              Membership options
              <br />
              Membership benefits
              <br />
              Corporate membership
              <br />
              Frequently asked questions
            </td>
            <td>
              Club finder
              <br />
              Club operating hours
              <br />
              Get 1 Day Free Pass
              <br />
              Club Facilities
            </td>
            <td>
              Privacy policy
              <br />
              Terms & Conditions - Website
              <br />
              Terms & Conditions - Members
              <br />
              Labour Compliance Documents
            </td>
            <td>
              Members' Area
              <br />
              FAQs
              <br />
              Contact us
              <br />
              Membership Enquiry
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
