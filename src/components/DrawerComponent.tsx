import styled from '@emotion/native';
import React from 'react';

type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

interface IProps {
  open: boolean;
  content: JSX.Element;
  position: DrawerPosition;
  width: number;
}

const DrawerComponent: React.FC<IProps> = ({open, content, position, width}) => {
  if (!open) return null;

  return (
    <Drawer position={position} width={width}>
      {content}
    </Drawer>
  );
};

export default DrawerComponent;

const Drawer = styled.View<{position: DrawerPosition; width: number}>`
  position: absolute;
  ${({position, width}) => {
    if (position === 'bottom') return `height: ${width}px; width: 100%; bottom: 0;`;
    if (position === 'top') return `height: ${width}px; width: 100%; top: 0;`;
    if (position === 'left') return `width: ${width}px; height: 100%; left: 0;`;
    if (position === 'right') return `width: ${width}px; height: 100%; right: 0;`;
  }}
`;
