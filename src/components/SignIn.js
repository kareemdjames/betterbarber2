import React from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'

function SignIn() {
  return (
    <div className="sign-in">
      <Grid container textAlign="center">
        <Grid.Row>
          <Header size="huge">Better Barber</Header>
          <Header size="large">Find a better barber today!</Header>
        </Grid.Row>
        <Grid.Row>
          <Button color="blue">Sign-Up</Button>
          <Button color="black">Login</Button>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default SignIn