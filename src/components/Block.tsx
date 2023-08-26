import { Image } from '../constants';

interface BlockProps {
  img: Image;
  index: number;
  onClick: (index: number) => void;
}

const Block = ({ img, index, onClick }: BlockProps) => {
  return (
    <div className='block' onClick={() => onClick(index)}>
      <img
        src={img.src}
        alt={img.name}
        style={{ display: img.shown ? 'block' : 'none' }}
      />
    </div>
  );
};

export default Block;
