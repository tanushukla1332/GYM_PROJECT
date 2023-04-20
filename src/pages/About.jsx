import React from "react";
import Abo from "./About.module.css";

export default function About() {
  return (
    <div className={Abo.abovePart}>
      <div className={Abo.FirstPart}>
        {/* <h1> This is About page</h1> */}
        {/* left part */}
        <div className={Abo.FirstPartiind}>
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
        <div className={Abo.SecPart}>
          <h1>About Us</h1>
          <p>

            Our mission is to build a community that empowers our clients to
            become a better version of themselves with every session.
          </p>
          <p>
          Gymnasia also had teachers of wisdom and philosophy. Community gymnastic events were done as part of the celebrations during various village festivals. In ancient Greece there was a phrase of contempt, "He can neither swim nor write." After a while, however, Olympic athletes began training in buildings specifically designed for them.[4] Community sports never became as popular among ancient Romans as it had among the ancient Greeks. Gyms were used more as a preparation for military service or spectator sports. During the Roman Empire, the gymnastic art was forgotten. In the Dark Ages there were sword fighting tournaments and of chivalry; and after gunpowder was invented sword fighting began to be replaced by the sport of fencing, as well as schools of dagger fighting and wrestling and boxing.
          </p>
        </div>
      </div>
      {/* left part */}
      <div className={Abo.Left}>
        {/* left part */}
        <div className={Abo.LeftP}>
          <h1>Why choose us?</h1>
          <p className={Abo.leftcontainer}>
            Our mission is to build a community that empowers our clients to
            become a better version of themselves with every session.
          </p>
          <p className={Abo.leftcontaineriind}>
          In Ancient Greece, the gymnasion (γυμνάσιον) was a locality for both physical and intellectual education of young men. The latter meaning of intellectual education persisted in Greek, German and other languages to denote a certain type of school providing secondary education, the gymnasium, whereas in English the meaning of physical education pertained to the word 'gym'.[7] The Greek word gymnasium, which means "school for naked exercise," was used to designate a locality for the education of young men, including physical education (gymnastics, for example, exercise) which was customarily performed naked, as well as bathing, and studies. For the Greeks, physical education was considered as important as cognitive learning. Most Greek gymnasia had libraries for use after relaxing in the baths.[citation needed]

Nowadays, it represents a common area where people, from all ranges of experience, exercise and work out their muscles. You can also usually find people doing cardio exercises or pilates.
          </p>
        </div>

        {/* right part */}
        <div className={Abo.VideoPart}>
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
    </div>
  );
}
