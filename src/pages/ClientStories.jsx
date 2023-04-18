import React from "react";
import style from "./ClientStories.module.css"


export default function ClientStories() {
  const clients=[
    {
        image:"https://www.grynow.in/assets/blog/top-indian-fitness-influencers/ranveer.webp",
        name: "Ranveer Allahbadia",
        description: "An entrepreneur, he is also into men’s style and fitness program. Ranveer, after having undergone a gall bladder surgery at the age of 16 and two more surgeries two years later, he consciously decided to embrace a fitness regime so that he could maintain a healthy lifestyle."
    },
    {
        image:"https://www.grynow.in/assets/blog/top-indian-fitness-influencers/shweta-mehta.webp",
        name: "Shweta Mehta",
        description: "Winner of Indian Show, Roadies (Season 15), Shweta is a software engineer but today is a successful bikini athlete and fitness enthusiast and is extremely popular in her online community for her bodyweight trainings. Apart from winning Roadies in 2017, she has also won the Jerai Women’s Physique in 2016 and represented the country at the Asian Bodybuilding Championship in 2016.",
    },
    {
        image:"https://www.grynow.in/assets/blog/top-indian-fitness-influencers/prince.webp",
        name: "Prince Narula",
        description: "Winner of Splitsvilla 8, Roadies X2 and Big Boss 9, Price Narula is a classic example of a commoner becoming a celebrity. He is a model and an actor now and very active on social media.",
    },
    {
        image:"https://www.grynow.in/assets/blog/top-indian-fitness-influencers/yasmin.webp",
        name: "Yasmin Karachiwala",
        description: "Yasmin is a certified Pilates trainer and instructor. She also owns the Yasmin’s Body Image. Started more than two decades back it was one-of-its-kind fitness class with emphasis on aerobics and palates. She is also renowned as the fitness trainer to Bollywood actress Katrina Kaif and Deepika Padukone."
    },
    {
        image:"https://www.grynow.in/assets/blog/top-indian-fitness-influencers/banji.webp",
        name: "Bani J.",
        description: "Her real name is Bani J. She is a muscular woman – covered her entire body with tattoos. She shares her workout sessions and the way to build a body to die for. She also shares her healthy diet and follows a strict gym training; thereby becoming a diva for her followers"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/b/b0/SangramChougule.png",
        name: "Saangram Chougule",
        description:"Sangram Chougule is a 40-year-old body builder from Kolhapur, Maharashtra. Sangram has won both the Mr. Maharashtra title and Mr. India title 5 times each. He also won the Mr. Universe title in 2012 and the Mr. World title in 2014. He is the founder of Physc Gym."
    }
     ]
  return (
    <div>
      <div className={style.cardDetails} >
            {clients.map((ele)=>(
                <div className={style.card} >
                 
                    <img className={style.img}  src={ele.image} alt=""/>
                   
                    
                    <h1 className={style.name}>Name :- {ele.name}</h1>
                    
                  
                    <span className={style.description}>Description :-{ele.description}</span>
                    
                </div>

            ))}
        </div>
    </div>
    
  );
}


