import React from "react";
import GitHubButton from "react-github-btn";
import styles from "../styles/instructions.module.scss";
import Button from "./button";
import Score from "./score";

interface Props {
  highscore: number;
  start: () => void;
}

export default function Instructions(props: Props) {
  const { highscore, start } = props;

  return (
    <div className={styles.instructions}>
      <div className={styles.wrapper}>
        <h2>Place the cards on the timeline in the correct order.</h2>
        <div className={styles.highscoreWrapper}>
          <Score score={highscore} title="Best streak" />
        </div>
        <Button onClick={start} text="Start game!" />
        <div className={styles.about}>
          <div>
            All data sourced from {" "}
            <a
              href="https://github.com/ja1984/sogdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOGDb
            </a>.
          </div>
          <div>
            Game based on {" "}
            <a
              href="https://github.com/tom-james-watson/wikitrivia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki History Game
            </a>.
          </div>
          <GitHubButton
            href="https://github.com/chocomega/stadia-games-history"
            data-size="large"
            data-show-count="false"
            aria-label="Star chocomega/stadia-games-history on GitHub"
          >
            GitHub
          </GitHubButton>
        </div>
      </div>
    </div>
  );
}
