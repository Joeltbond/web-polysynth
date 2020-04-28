import React, { useState } from 'react'
import Title from './components/Title'
import Knob from './components/Knob'
import Button, { Container as ButtonContainer } from './components/Button'
import { Waveform } from './Synth'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: futura;
    text-align: center;
    background-color: #eee;
  }
`

const Container = styled.div`
  display: inline-block;
  text-align: center;
  padding-top: 80px;
`

const App = () => {
  const [vibratoSpeed, setVibratoSpeed] = useState(10)
  const [vibratoDepth, setVibratoDepth] = useState(8)
  const [filterQ, setFilterQ] = useState(50)
  const [filterFrequency, setFilterFrequency] = useState(10)
  const [selectedWaveform, setWaveform] = useState<Waveform>(Waveform.sawtooth)
  const [attackTime, setAttackTime] = useState(10)
  const [decayTime, setDecayTime] = useState(50)
  const [sustainLevel, setSustainLevel] = useState(100)
  const [releaseTime, setReleaseTime] = useState(50)

  return (
    <Container>
      <GlobalStyle />
      <Title>web polysynth</Title>
      <div>
        <Knob
          label="vibe speed"
          value={vibratoSpeed}
          update={setVibratoSpeed}
        />
        <Knob
          label="vibe depth"
          value={vibratoDepth}
          update={setVibratoDepth}
        />
        <Knob label="filter q" value={filterQ} update={setFilterQ} />
        <Knob
          label="filter freq"
          value={filterFrequency}
          update={setFilterFrequency}
        />
      </div>

      <ButtonContainer>
        {Object.values(Waveform).map((waveform) => (
          <Button
            active={waveform === selectedWaveform}
            onClick={() => {
              setWaveform(waveform)
            }}
          >
            {waveform}
          </Button>
        ))}
      </ButtonContainer>

      <div>
        <Knob label="attack" value={attackTime} update={setAttackTime} />
        <Knob label="decay" value={decayTime} update={setDecayTime} />
        <Knob label="sustain" value={sustainLevel} update={setSustainLevel} />
        <Knob label="release" value={releaseTime} update={setReleaseTime} />
      </div>
    </Container>
  )
}

export default App
