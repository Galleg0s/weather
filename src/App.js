import React from "react"
import { Autosuggest, Button, Card, Range, Wrapper, Grid } from "./components"

const App = () => {
  return (
    <Wrapper>
      <Grid>
        <Autosuggest />
        <Button />
        <Range />
      </Grid>
      <Grid>
        <Card />
      </Grid>
    </Wrapper>
  )
}

export default App
