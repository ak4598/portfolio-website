import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/recipe.module.css";
import Error from "../../404";
import { Cook, Cookf, Clock, Loading } from "../../../assets/OtherLogos";

const Ingredient: React.FC<{ ingredient: string }> = ({ ingredient }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${styles.ingredient}`}
      style={inView ? { opacity: "1", transform: "translateX(0%)" } : {}}
    >
      <h2>{ingredient.split(",")[0]}</h2>
      <p>{ingredient.split(",")[1]}</p>
    </div>
  );
};

const Step: React.FC<{ idx: number; step: string }> = ({ idx, step }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.step} ref={ref}>
      <div
        className={styles.number}
        style={inView ? { opacity: "1", transform: "translateX(0%)" } : {}}
      >
        {idx + 1 < 10 ? <h2>0{idx + 1}</h2> : <h2>{idx + 1}</h2>}
      </div>
      <div
        className={styles.description}
        style={inView ? { opacity: "1", transform: "translateX(0%)" } : {}}
      >
        <p>
          {step.split("<br />").map((i, idx) => (
            <span key={idx}>
              {i} <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const Recipe: NextPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasRecipe, setHasRecipe] = useState<boolean>(false);

  const { ref: comingSoonRef, inView: comingSoonVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: difficultyRef, inView: difficultyVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: timeRef, inView: timeVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: ingredientsRef, inView: ingredientsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: stepsRef, inView: stepsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: backRef, inView: backVisible } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setLoading(true);

    if (router.query.name !== undefined) {
      fetch(`/api/images/get-food-image?id=${router.query.name}`)
        .then((res) => {
          if (res.status === 404) {
            return null;
          }
          return res.json();
        })
        .then((data) => {
          setPost(data);
          setLoading(false);
          setHasRecipe(data.ingredients[0] !== "" && data.steps[0] !== "");
        });
    }
  }, [router.query.name]);

  if (isLoading) {
    return (
      <div className={styles.background}>
        <div className={styles.loading}>
          <Image src={Loading.src} width={200} height={200} priority={true} />
        </div>
      </div>
    );
  }
  if (!isLoading && post === null) {
    return <Error />;
  }

  return (
    <div className={styles.background}>
      <div className={styles.banner}>
        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <Image
              src={post.image}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
            />
            <div className={styles.nameContainer}>
              <p>{post.cuisine}</p>
              <h1>{post.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details1}>
        <div className={styles.difficulty} ref={difficultyRef}>
          <div className={styles.icon}></div>
          {[...Array(post.difficulty)].map((id, idx) => (
            <div
              key={idx}
              className={styles.icon}
              style={
                difficultyVisible
                  ? { opacity: "1", transform: "translateX(0%)" }
                  : {}
              }
            >
              <Image src={Cook.src} layout="fill" />
            </div>
          ))}
          {[...Array(5 - post.difficulty)].map((id, idx) => (
            <div
              key={idx}
              className={styles.icon}
              style={
                difficultyVisible
                  ? { opacity: "1", transform: "translateX(0%)" }
                  : {}
              }
            >
              <Image src={Cookf.src} layout="fill" />
            </div>
          ))}
          <div className={styles.icon}></div>
        </div>
        <div className={styles.time} ref={timeRef}>
          <div
            className={styles.icon}
            style={
              timeVisible ? { opacity: "1", transform: "translateX(0%)" } : {}
            }
          >
            <Image src={Clock.src} layout="fill" />
          </div>
          <h1
            style={
              timeVisible ? { opacity: "1", transform: "translateX(0%)" } : {}
            }
          >
            {post.time} mins
          </h1>
        </div>
      </div>
      <div className={styles.details2}>
        {!hasRecipe && (
          <div className={styles.box}>
            <h1
              className={styles.comingSoon}
              ref={comingSoonRef}
              style={
                comingSoonVisible
                  ? { opacity: "1", transform: "translateX(0%)" }
                  : {}
              }
            >
              Coming Soon...
            </h1>
            <div className={`${styles.backContainer}`} ref={backRef}>
              <Link href="/skills/cookery">
                <button
                  className={styles.back}
                  style={
                    backVisible
                      ? { opacity: "1", transform: "translateX(0%)" }
                      : {}
                  }
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        )}
        {hasRecipe && (
          <div className={styles.box}>
            <div className={`${styles.section}`}>
              <h1
                style={
                  ingredientsVisible
                    ? { opacity: "1", transform: "translateX(0%)" }
                    : {}
                }
                ref={ingredientsRef}
              >
                Ingredients
              </h1>
              <div className={styles.ingredients}>
                {post.ingredients.map((ingredient: string) => (
                  <Ingredient key={ingredient} ingredient={ingredient} />
                ))}
              </div>
            </div>
            <div className={`${styles.section}`}>
              <h1
                ref={stepsRef}
                style={
                  stepsVisible
                    ? { opacity: "1", transform: "translateX(0%)" }
                    : {}
                }
              >
                Steps
              </h1>
              <div className={styles.steps}>
                {post.steps.map((step: string, idx: number) => (
                  <Step key={step} idx={idx} step={step} />
                ))}
              </div>
            </div>
            <div className={`${styles.backContainer}`} ref={backRef}>
              <Link href="/skills/cookery">
                <button
                  className={styles.back}
                  style={
                    backVisible
                      ? { opacity: "1", transform: "translateX(0%)" }
                      : {}
                  }
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
