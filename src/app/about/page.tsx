'use client';
import React from 'react'
import WheelComponent from '../_components/WheelComponent'

export default function About() {
  const segments = [
    '1',
    '2',
    '3',
    '4',
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }
  return (
    <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='gold'
        contrastColor='black'
        buttonText='Spin'
        isOnlyOnce={false}
        size={200}
        upDuration={100}
        downDuration={500}
      />
  )
}
