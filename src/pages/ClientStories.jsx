import React from "react";
import style from "./ClientStories.module.css";
import Navbar from "../Navbar/Navbar";

export default function ClientStories() {
  const clients = [
    {
      image:
        "https://www.grynow.in/assets/blog/top-indian-fitness-influencers/ranveer.webp",
      name: "Ranveer ",
      description:
        "An entrepreneur, he is also into men’s style and fitness program. Ranveer, after having undergone a gall bladder later.", },
    {
      image:
        "https://www.grynow.in/assets/blog/top-indian-fitness-influencers/shweta-mehta.webp",
      name: "Shweta ",
      description:
        "Winner of Indian Show, Roadies (Season 15), Shweta is a software engineer but today is a successful bikini athlete and fitness. ",
    },
    {
      image:
        "https://www.grynow.in/assets/blog/top-indian-fitness-influencers/prince.webp",
      name: "Prince ",
      description:
        "Winner of Splitsvilla 8, Roadies X2 and Big Boss 9, Price Narula is a classic example of a commoner becoming a celebrity.",
    },
    {
      image:
        "https://www.grynow.in/assets/blog/top-indian-fitness-influencers/yasmin.webp",
      name: "Yasmin ",
      description:
        "Yasmin is a certified Pilates trainer and instructor. She also owns the Yasmin’s Body Image.  ",
    },
    {
      image:
        "https://www.grynow.in/assets/blog/top-indian-fitness-influencers/banji.webp",
      name: "Bani J.",
      description:
        "Her real name is Bani J. She is a muscular woman – covered her entire body with tattoos.", },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/SangramChougule.png",
      name: "Saangram",
      description:
        "Sangram Chougule is a 40-year-old body builder from Kolhapur, Maharashtra. Sangram has won both the Mr. Maharashtra.", },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.main}>
        <div className={style.cardDetails}>
          {clients.map((ele) => (
            <div className={style.card}>
              <img className={style.img} src={ele.image} alt="" />

              <h1 className={style.name}>Name :- {ele.name}</h1>

              <span className={style.description}>
                Description :-{ele.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
