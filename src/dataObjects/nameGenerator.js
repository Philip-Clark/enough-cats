import { names } from './names';

export default function newRandomName() {
  const randomNumber = parseInt(Math.random() * names.length);
  return names[randomNumber];
}
