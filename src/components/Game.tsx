import { useEffect, useMemo, useState } from 'react';
import { images } from '../constants';
import { Image } from '../constants';
import Block from './Block';

const createNumberSequence = (max: number) => {
  return Array.from({ length: max }, (value, index) => index);
};

const shuffle = (array: number[]) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const Game = () => {
  const initialState = useMemo(() => {
    const board: Image[] = [];
    const numbers = createNumberSequence(images.length * 2);
    const numberArray = shuffle(numbers);
    numberArray.forEach((n, i) => {
      const imgIndex = Math.floor(i / 2);
      board[n] = images[imgIndex];
    });
    return board;
  }, []);
  const [blocks, setBlocks] = useState<Image[]>(initialState);
  const [currentlyShowing, setCurrentlyShowing] = useState<number[]>([]);

  const showBlock = (index: number) => {
    setBlocks((prev) => {
      const newValue = [...prev];
      newValue[index] = { ...prev[index], shown: true };
      return newValue;
    });
    setCurrentlyShowing((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (currentlyShowing.length === 2) {
      const timer = setTimeout(() => {
        const blockA = blocks[currentlyShowing[0]];
        const blockB = blocks[currentlyShowing[1]];
        if (blockA.id !== blockB.id) {
          setBlocks((prev) => {
            const newValue = [...prev];
            newValue[currentlyShowing[0]] = {
              ...prev[currentlyShowing[0]],
              shown: false,
            };
            newValue[currentlyShowing[1]] = {
              ...prev[currentlyShowing[1]],
              shown: false,
            };
            return newValue;
          });
        }
        setCurrentlyShowing([]);
        if (currentlyShowing.length === 2 && blocks.every((el) => el.shown)) {
          alert('YOU WON!!!!');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [blocks, currentlyShowing]);

  const handleClick = (index: number) => {
    if (currentlyShowing.length < 2) {
      showBlock(index);
    }
  };

  const handleReset = () => {
    setBlocks(initialState);
    setCurrentlyShowing([]);
  };

  return (
    <div className='container'>
      <div className='board'>
        {blocks.map((el, index) => (
          <Block img={el} index={index} onClick={handleClick} />
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Game;
