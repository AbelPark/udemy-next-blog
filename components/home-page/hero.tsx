import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          width={300}
          height={300}
          src="/images/site/apeach.jpg"
          alt="An image showing apeach"
        />
      </div>
      <h1>Hi, I'm Apeach</h1>
      <p>
        I blog about web development - especially frontend frameworks like Vue
        ro React.
      </p>
    </section>
  );
}
