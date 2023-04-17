import React from "react";

export default function About() {
  return (
    <>
    <div style={{display:'flex'}}> 
      {/* <h1> This is About page</h1> */}

      {/* left part */}
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g_bMfP6_TOw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      {/* right part */}
      <div style={{marginLeft:'100px'}}>
        <h1 style={{color:'red'}}>About Us</h1>
        <p > Our mission is to build a community that empowers our clients to become a better version of themselves with every session.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum, optio quisquam unde dolorem natus quibusdam alias recusandae accusamus voluptas deserunt a eum delectus, perspiciatis itaque rerum inventore sequi pariatur?
        Quod cum sint autem voluptatum consequuntur vel consectetur quam asperiores explicabo deserunt ab dolore laudantium nisi architecto eos eum veniam eaque qui numquam reprehenderit officiis, molestiae dolorem. Tenetur, nostrum assumenda.
        Repudiandae facere deserunt architecto delectus. Minima quasi nesciunt nulla autem quod, architecto possimus soluta porro quisquam enim unde est! Expedita quam quas saepe voluptatibus quod voluptate nobis, dolorem animi? Fuga?
        Recusandae consequatur minima saepe explicabo minus laudantium, voluptatibus tenetur! A voluptate ducimus illum quae ratione sed qui iste nostrum ipsa doloribus repellendus laboriosam quas sunt consequatur corrupti neque, possimus minus!
        Illo enim aliquid impedit itaque distinctio rem dolor, vero dignissimos facilis beatae quasi reprehenderit ipsa eum delectus consectetur ut tempora a veniam doloremque deleniti repudiandae. Maiores aspernatur beatae voluptates officia.
        Est alias hic, eligendi dolorem fugit laboriosam veniam illum quo perspiciatis dolore dignissimos cumque quisquam. Magni repudiandae ea est quaerat numquam eveniet dolores officiis dignissimos magnam velit, maxime corporis pariatur.</p>
      </div>
    </div>



      {/* left part */}
      <div style={{ display: 'flex' }}>
        {/* left part */}
        <div style={{ flex: 1 }}>
          <h1 style={{ color: 'red' }}>Why choose us?</h1>
          <p>Our mission is to build a community that empowers our clients to become a better version of themselves with every session.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum, optio quisquam unde dolorem natus quibusdam alias recusandae accusamus voluptas deserunt a eum delectus, perspiciatis itaque rerum inventore sequi pariatur?
            Quod cum sint autem voluptatum consequuntur vel consectetur quam asperiores explicabo deserunt ab dolore laudantium nisi architecto eos eum veniam eaque qui numquam reprehenderit officiis, molestiae dolorem. Tenetur, nostrum assumenda.
            Repudiandae facere deserunt architecto delectus. Minima quasi nesciunt nulla autem quod, architecto possimus soluta porro quisquam enim unde est! Expedita quam quas saepe voluptatibus quod voluptate nobis, dolorem animi? Fuga?
            Recusandae consequatur minima saepe explicabo minus laudantium, voluptatibus tenetur! A voluptate ducimus illum quae ratione sed qui iste nostrum ipsa doloribus repellendus laboriosam quas sunt consequatur corrupti neque, possimus minus!
            Illo enim aliquid impedit itaque distinctio rem dolor, vero dignissimos facilis beatae quasi reprehenderit ipsa eum delectus consectetur ut tempora a veniam doloremque deleniti repudiandae. Maiores aspernatur beatae voluptates officia.
            Est alias hic, eligendi dolorem fugit laboriosam veniam illum quo perspiciatis dolore dignissimos cumque quisquam. Magni repudiandae ea est quaerat numquam eveniet dolores officiis dignissimos magnam velit, maxime corporis pariatur.
          </p>
        </div>

        {/* right part */}
        <div style={{ flex: 1, marginLeft:'300px', marginTop:'50px'}}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/h1rA2jMS-6I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
   
    </>
  );
}
