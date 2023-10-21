import catState from './catState';
import Position from './position';

export default function catObject() {
  let name = 'cat';
  let position = Position();
  let state = catState();
  let movementArea = { min: Position(0, 0), max: Position(0, 0) };

  const setName = (_name) => {
    name = _name;
  };

  const setPosition = (x, y) => {
    position = Position(x, y);
  };

  const setMovementArea = ({ min, max }) => {
    movementArea.min = Position(min.x, min.y);
    movementArea.max = Position(max.x, max.y);
    return movementArea;
  };

  const requestNewState = () => {
    state = catState();
    return state;
  };

  const getState = () => {
    return state;
  };

  const getMovementArea = () => {
    return movementArea;
  };

  const getPosition = () => {
    return position.getPosition();
  };

  const getName = () => {
    return name;
  };

  return {
    setName,
    setPosition,
    setMovementArea,
    requestNewState,
    getState,
    getMovementArea,
    getPosition,
    getName,
  };
}
