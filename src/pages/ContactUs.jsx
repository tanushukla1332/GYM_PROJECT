import React from "react";
import contact from './ContactUs.module.css'

export default function ContactUs() {
  return (
    <div className={contact.First_div}>
      <div>
      <section className={contact.container}>
          <div className={contact.leftContainer}>
            <img src="https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_960_720.jpg" alt="" />
          </div>

          <div className={contact.rightContainer}>
            <h1><span>☎️</span> Contact Us</h1>
            <h3><span>📞</span> +91 92000 01234</h3>
            <h3><span>📧</span> gym@gmail.com</h3>
            <h4>Orange park Location, @Noida Uttar Pradesh</h4>
            <span>📌 <a href="https://www.google.co.in/maps/place/Meraki+Fitness+Studio+-+Available+on+cult.fit+-+Gyms+in+Sector-141,+Noida/@28.5530645,77.298515,12z/data=!4m10!1m2!2m1!1snoida+gym!3m6!1s0x390ce997b86b5ba5:0x21e21b085596bafe!8m2!3d28.5092914!4d77.4155339!15sCglub2lkYSBneW1aCyIJbm9pZGEgZ3ltkgEDZ3lt4AEA!16s%2Fg%2F11rjsgjl0t"><p>Meraki Fitness Studio - Available on cult.fit - Gyms in Sector-141, Noida</p> </a>
            </span>
          </div>
        </section>
      </div>
    </div>    
  );
}
