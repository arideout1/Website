import { DiceFace } from "./DiceFace";
import styles from "./Boggle.module.css";
import { useEffect, useState } from "react";

const newBoggle = [
  [
    "AAEEGN".split(""),
    "ABBJOO".split(""),
    "ACHOPS".split(""),
    "AFFKPS".split(""),
  ],
  [
    "AOOTTW".split(""),
    "CIMOTU".split(""),
    "DEILRX".split(""),
    "DELRVY".split(""),
  ],
  [
    "DISTTY".split(""),
    "EEGHNW".split(""),
    "EEINSU".split(""),
    "EHRTVW".split(""),
  ],
  [
    "EIOSST".split(""),
    "ELRTTY".split(""),
    "HIMNUQ".split(""),
    "HLNNRZ".split(""),
  ],
];

const classicBoggle = [
  [
    "AACIOT".split(""),
    "ABILTY".split(""),
    "ABJMOQ".split(""),
    "ACDEMP".split(""),
  ],
  [
    "ACELRS".split(""),
    "ADENVZ".split(""),
    "AHMORS".split(""),
    "BIFORX".split(""),
  ],
  [
    "DENOSW".split(""),
    "DKNOTU".split(""),
    "EEFHIY".split(""),
    "EGKLUY".split(""),
  ],
  [
    "EGINTV".split(""),
    "EHINPS".split(""),
    "ELPSTU".split(""),
    "GILRUW".split(""),
  ],
];

export const Boggle = () => {
  const [allDice, setAllDice] = useState([...classicBoggle]);
  const [displayLetters, setDisplayLetters] = useState([]);

  function shuffle(arrToShuffle) {
    const array = [...arrToShuffle];
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const rollDice = () => {
    const letters = [];
    allDice.forEach((row) => {
      const newRow = [];
      row.forEach((die) => {
        const rand = Math.floor(Math.random() * 6);
        newRow.push(die[rand]);
      });
      letters.push(newRow);
    });

    setDisplayLetters(letters);
  };

  const handleDiceChange = (newDice) => {
    setAllDice(newDice);
  };

  useEffect(() => {
    rollDice();
  }, []);

  const renderRow = (row) => {
    return row.map((item) => <DiceFace letter={item} />);
  };

  const handleDiceInputChange = (event, rowIndex, diceIndex, letterIndex) => {
    if (event.target.value.length !== 1) {
      return;
    }
    const newAllDice = [...allDice];
    const newRow = [...newAllDice[rowIndex]];
    const newDice = [...newRow[diceIndex]];
    newDice[letterIndex] = event.target.value.substring(0, 1).toUpperCase();
    newRow[diceIndex] = newDice;
    newAllDice[rowIndex] = newRow;
    setAllDice(newAllDice);
  };

  return (
    <div className={styles.container}>
      <div className={styles.rollButtonContainer}>
        <button className={styles.rollButton} onClick={() => rollDice()}>
          Roll
        </button>
      </div>
      <div className={styles.diceBox}>
        {shuffle(displayLetters).map((row) => {
          return <div className={styles.diceRow}>{renderRow(row)}</div>;
        })}
      </div>
      <div className={styles.title}>Customize</div>
      <div className={styles.customizeSection}>
        <div className={styles.presetsContainer}>
          <div>Default Dice Sets</div>
          <div className={styles.buttons}>
            <button
              className={styles.rollButton}
              onClick={() => handleDiceChange(classicBoggle)}
            >
              Classic Dice
            </button>
            <button
              className={styles.rollButton}
              onClick={() => handleDiceChange(newBoggle)}
            >
              New Dice
            </button>
          </div>
          <div className={styles.presets}></div>
        </div>
        <div className={styles.customArea}>
          Custom dice
          <div
            key={allDice.toString()}
            className={styles.inputContaier}
            id={allDice.toString()}
          >
            <div className={styles.inputBoxContainer2}>
              <div>Side: </div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            {allDice.map((row, rowIndex) => {
              return (
                <div className={styles.customRow}>
                  {row.map((dice, diceIndex) => {
                    return (
                      <div className={styles.inputBoxContainer}>
                        <div className={styles.diceLabel}>
                          {"Dice " + (rowIndex * 4 + diceIndex + 1)}
                        </div>
                        {dice.map((letter, letterIndex) => {
                          return (
                            <input
                              className={styles.input}
                              type="text"
                              id={"input" + rowIndex + diceIndex + letterIndex}
                              name={
                                "input" + rowIndex + diceIndex + letterIndex
                              }
                              required
                              minLength="0"
                              maxLength="6"
                              size="10"
                              defaultValue={letter === "Q" ? "Qu" : letter}
                              onChange={(e) =>
                                handleDiceInputChange(
                                  e,
                                  rowIndex,
                                  diceIndex,
                                  letterIndex
                                )
                              }
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
