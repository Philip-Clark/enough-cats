import catObject from '../dataObjects/cat';
import newRandomName from '../dataObjects/nameGenerator';
import Position from '../dataObjects/position';

export const Cat = ( movementArea = { min: Position( 0, 0 ), max: Position( 0, 0 ) } ) =>
{
  
  const cat = catObject();

  cat.setName( newRandomName() );
  cat.setMovementArea( movementArea );
  
  return <div className='cat' id={ cat.getName() }>
    <img src={cat.}>
  </div>;
};
