import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";

const Welcome = ({ styles }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1.1,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0.6,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.letterContainer}>
      <motion.div animate={animation} className={styles.letter}>
        <h2 className={styles.secondaryTitle}>From our President's desk</h2>
        <p className={styles.letterQuote}>
          <em>The thought of my past, doth breed benediction unto me</em>
        </p>
        <p className={styles.letterQuoteSecondary}>- William Wordsworth</p>

        <p>
          Old memories, old books, old music, old movies, old photos, old songs,
          old ..., anything old brings to our mind a mixture of pleasure and
          yearning. Pleasure to relive the past and a helpless yearning to turn
          back the clock and to get back there once again.
        </p>
        <p>
          It is our pleasure to launch our old students association -{" "}
          <span className={styles.associationName}>
            The MES College Alumni Association
            <FontAwesomeIcon
              icon={faRegistered}
              className={styles.registeredIconSmall}
            />
          </span>{" "}
          and also it's website. This is to bring together all MES'ites from the
          days of inception in 1956 till today. Different age groups,
          generations, professions, businesses, vocations, within India, from
          throughout the world - all just having a common thread running through
          - the pedigree of MES.
        </p>
        <p>
          Let us all come back together, recollect old friends, memories, make
          new friendships and contacts within the community. Let us savour the
          infinite pleasure of socialising with our own long lost friends.
        </p>
        <p>
          MES is our mother. A mother only gives but never expects anything back
          from her own children. The children however, crave to give back
          something to their mother. Let us give back something to our mother.
          MES, though, the only thing she asks for is an eternal opportunity to
          keep giving to her children.{" "}
        </p>
        <p>
          Service to mankind knows no boundaries. All of us, even the most
          ambitious realize that one stage, how ephemeral our material pursuits
          are and their ultimate futility. Only selfless service to mankind can
          give us true and everlasting peace and bliss. This association is also
          a platform to serve makind with greater vigour and resources.
        </p>
        <p className={styles.letterConclusion}>
          I invite all alumni of MES College to come back and strengthen this
          community.
        </p>
      </motion.div>
    </div>
  );
};

export default Welcome;
