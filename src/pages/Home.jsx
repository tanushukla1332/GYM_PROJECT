import React, { useEffect, useState } from "react";
import Hom from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import { context_array } from "./context_array";

export default function Home() {
  const [image, setImage] = useState(0);
  const [text, setText] = useState(0);

  const Images = [
    "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg",
    "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg",
    "https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg",
    "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    "https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  ];
  const Text = [
    "You are stronger than you think.  Enhance your health and fitness potential with personalized training designed for women.",
    "Success usually comes to those who are too busy to be looking for it.",
    "If you want something you’ve never had, you must be willing to do something you’ve never done.",
    "Things work out best for those who make the best of how things work out",
    "Success is walking from failure to failure with no loss of enthusiasm",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image) => (image + 1) % Images.length);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((text) => (text + 1) % Text.length);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <section className={Hom.main_file}>
          <div className={Hom.heading}>
            <h1>{Text[text]}</h1>
          </div>
          <div>
            {/* Update image source to use the correct array indexing */}
            <img src={Images[image]} alt="" className={Hom.img} />
          </div>
        </section>

        <hr />
        <div className={Hom.mainParent}>
          <section className={Hom.headPara}>
            <h1 className={Hom.mainH1}>WORLD CLASS FACILITIES</h1>
            {context_array.map((x) => (
              <div key={x.headings}>
                <h1 className={Hom.headings}>{x.headings}</h1>
                <p>{x.para}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
