import * as React from "react"
import { useState } from "react"
import styled from "styled-components"

const Content = styled.div`
  position: relative;
  color: green;
`

const Container = styled.div`
  position: relative;
`

interface Props {
  children: React.ReactNode;
  delay: number;
  hoverContent: () => React.ReactNode;
}

let mouseHoverEvent: NodeJS.Timeout

function onMouseEnter(
  delay: number,
  setHoverState: (hovered: boolean) => void
) {
  mouseHoverEvent = setTimeout(() => setHoverState(true), delay)
}

function onMouseLeave(setHoverState: (hovered: boolean) => void) {
  if (mouseHoverEvent) {
    clearTimeout(mouseHoverEvent)
  }
  setHoverState(false)
}

function HoverCard(props: Props) {
  const [hovered, setHoverState] = useState(false)
  return (
    <Container
      onMouseEnter={() => onMouseEnter(props.delay, setHoverState)}
      onMouseLeave={() => onMouseLeave(setHoverState)}
    >
      <Content>{props.children}</Content>
      {hovered && props.hoverContent()}
    </Container>
  )
}

HoverCard.defaultProps = {
  hoverContent: () => null,
  delay: 1000
}

export default HoverCard
