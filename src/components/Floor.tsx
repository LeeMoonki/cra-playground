import { FC } from 'react';

interface FloorProps {
  name: string;
}

export const Floor: FC<FloorProps> = ({ children, name }) => {
  console.log(`render floor ${name}`);

  return <div>{children}</div>;
};
