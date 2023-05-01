import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Simplicité",
    img: "img/simple.png",
    description: (
      <>
        NOCx a été pensé pour rendre le suivi pédagogique facile et accessible
        au plus grand nombre.
      </>
    ),
  },
  {
    title: "Ergonomie",
    img: "img/ergo.png",
    description: (
      <>
        Pour une application est agréable à utilisé, plus elle sera efficace.
        C'est en gardant cette idée en tête que NOCx a été conçue.
      </>
    ),
  },
  {
    title: "Productivité",
    img: "img/prod.png",
    description: (
      <>
        En vous simplifiant les tâches quotidiennes, NOCx vous fera gagner du
        temps. <br /> Concentrez vous sur des activités plus efficientes !
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={img} className={styles.featurePng} alt="Simplicité" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
