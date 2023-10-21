export default function Position(init_x = 0, init_y = 0) {
  let x = init_x;
  let y = init_y;

  const setPosition = ({ _x, _y }) => {
    x = _x;
    y = _y;
  };
  const getPosition = () => {
    return { x, y };
  };

  return { getPosition, setPosition };
}
