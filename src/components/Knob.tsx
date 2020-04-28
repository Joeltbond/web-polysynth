import React from 'react'
import styled from 'styled-components'

const convertPercentageToDegrees = (percentage: number) =>
  percentage * 2.7 - 135

const rectifyPercentage = (value: number, delta: number) => {
  const newValue = value + delta

  if (newValue > 100) {
    return 100
  }

  if (newValue < 0) {
    return 0
  }

  return newValue
}

const Container = styled.div`
  display: inline-block;
  text-align: center;
  width: 80px;
`

const Knob = styled.div<{ percentage: number }>`
  display: inline-block;
  background-color: #66a;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: relative;
  transform: rotate(${(props) =>
    convertPercentageToDegrees(props.percentage)}deg);

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    background-color: white;
    height: 3px;
    width: 3px;
    top: 6px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Label = styled.div`
  color: #66a;
  text-align: center;
`

type Props = {
  label: string
  value: number
  update: (newValue: number) => void
}

export default (props: Props) => {
  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    props.update(rectifyPercentage(props.value, event.deltaY))
  }

  return (
    <Container>
      <Knob percentage={props.value} onWheel={onWheel} />
      <Label>{props.label}</Label>
    </Container>
  )
}
