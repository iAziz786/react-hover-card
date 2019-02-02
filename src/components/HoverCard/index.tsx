import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  color: green;
`;

const Container = styled.div`
  position: relative;
`;

interface Props {
  children: React.ReactNode;
  hoverContent: () => React.ReactNode;
}

function HoverCard(props: Props) {
  const [hovered, setHoverState] = useState(false);
  return (
    <Container
      onMouseEnter={() => setHoverState(!hovered)}
      onMouseLeave={() => setHoverState(!hovered)}
      {...props}
    >
      <Content>{props.children}</Content>
      {hovered && props.hoverContent()}
    </Container>
  );
}

HoverCard.defaultProps = {
  hoverContent: () => null
};

export default HoverCard;
