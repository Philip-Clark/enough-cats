import { useEffect, useState } from 'react';
import catObject from '../dataObjects/cat';
import newRandomName from '../dataObjects/nameGenerator';
import Position from '../dataObjects/position';
import './cat.css';
import gsap from 'gsap';
import { uid } from 'react-uid';
import { randomInRange } from '../dataObjects/randomInRange';

const timeRange = { min: 2, max: 3 };

export const Cat = ({ movementArea = { min: Position(0, 0), max: Position(0, 0) }, name, cat }) => {
  const UID = uid(cat);

  const [catState, setCatState] = useState(cat.getState());
  cat.setMovementArea(movementArea);

  const timeTillChangeState = randomInRange(timeRange.min, timeRange.max) * 1000;

  gsap.to(`#${UID}`, {
    scale: 1.08,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'back.out(1.7)',
  });

  useEffect(() => {
    setTimeout(() => {
      setCatState(cat.requestNewState());
    }, [timeTillChangeState]);

    if (catState.getName() == 'Walking') {
      const newPos = {
        x: randomInRange(movementArea.min.getPosition().x, movementArea.max.getPosition().x),
        y: randomInRange(movementArea.min.getPosition().y, movementArea.max.getPosition().y),
      };
      const oldPos = cat.getPosition();
      cat.setPosition(newPos.x, newPos.y);

      console.log({ nx: newPos.x, ox: oldPos.x });

      if (newPos.x >= oldPos.x) {
        gsap.to(`#${UID}`, {
          scaleX: 1,
          duration: 0.01,
        });
      } else {
        gsap.to(`#${UID}`, {
          scaleX: -1,
          duration: 0.01,
        });
      }

      gsap.to(`#${UID}`, {
        top: newPos.y,
        left: newPos.x,
        duration: timeTillChangeState / 1000,
        ease: 'none',
      });
    }
  }, [catState, timeTillChangeState]);

  const image = require(`../images/${cat.getState().getImage()}`);

  return (
    <div className="cat" id={UID} name={name}>
      <img src={image} alt={cat.getState().getName()} />
    </div>
  );
};
