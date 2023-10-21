import { states } from './states';

export default function catState(_name = '', _image = '') {
  let image = _image;
  let name = _name;

  const requestNewState = () => {
    const stateId = parseInt(Math.random() * states.length);
    const newState = states[stateId];
    image = newState.image;
    name = newState.name;
  };

  const getImage = () => {
    return image;
  };

  const getName = () => {
    return name;
  };

  if (_name == '' && _image == '') requestNewState(); // request a new state when state is initialized without params

  return { requestNewState, getImage, getName };
}
