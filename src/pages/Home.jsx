import React, { useEffect, useState } from "react";
import Hom from "./Home.module.css";

export default function Home() {
  const [image, setImage] = useState(0);

  const Images=['https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg', 
'https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg',
'https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_1280.jpg',
'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
'https://cdn.pixabay.com/photo/2014/12/03/19/05/boxing-555735_1280.jpg'
]

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image) => (image + 1) % Images.length);
    }, 2000);

    return () => {
      clearInterval(interval); // Cleanup the interval on unmount
    };
  }, []);

  return (
    <div>
      <section className={Hom.main_file}>
        <div className={Hom.heading}>
          <h1>
            You are stronger than you think.  Enhance your health and fitness 
            potential with personalized training designed for women.
          </h1>
        </div>
        <div>
          <img src={Images[image]} alt="" className={Hom.img}/> {/* Update image source to use the correct array indexing */}
        </div>
      </section>
    </div>
  );
}

