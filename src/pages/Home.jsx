import React, { useEffect, useState } from "react";
import Hom from "./Home.module.css";
import About from './About'
import ContactUs from "./ContactUs";

export default function Home() {
  const [image, setImage] = useState(0);
  const[text,setText]=useState(0)

  const Images=['https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg', 
'https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg',
'https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=',
'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
'https://cdn.pixabay.com/photo/2014/12/03/19/05/boxing-555735_1280.jpg'
]
const Text=["You are stronger than you think.  Enhance your health and fitness potential with personalized training designed for women.",
 "Success usually comes to those who are too busy to be looking for it.", "If you want something you’ve never had, you must be willing to do something you’ve never done.", 
 "Things work out best for those who make the best of how things work out",
 "Success is walking from failure to failure with no loss of enthusiasm"]

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image) => (image + 1) % Images.length);
    }, 2000);
    
    return () => {
      clearInterval(interval); // Cleanup the interval on unmount
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((text) => (text + 1) % Text.length);
    }, 2000);
    
    return () => {
      clearInterval(interval); // Cleanup the interval on unmount
    };
  }, []);



  return (
    <div>
      <section className={Hom.main_file}>
        <div className={Hom.heading}>
          <h1>{Text[text]}
            
          </h1>
        </div>
        <div>
          <img src={Images[image]} alt="" className={Hom.img}/> {/* Update image source to use the correct array indexing */}
        </div>
      </section>
      <About/>
      <ContactUs/>
    </div>
  );
}

