import React from 'react'
import  Hom from './Home.module.css'

export default function Home() {
    return (
        <div>
            <section className={Hom.main_file}> 
            <div className={Hom.heading}>
                <h1 >You are stronger than you think.
                        Enhance your health and fitness potential with personalized training designed for women.</h1>
                </div>
                <div>
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg" alt=""  style={{opacity:"0.5" }}/>
                
                </div>
                          
        
            </section>

        </div>
    )
}
