import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Header } from 'semantic-ui-react'

function SignIn() {
  return (
    <div className="sign-in">
      <Grid container textAlign="center" id="sign-in-container">
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header as='h1'>Better Barber 2</Header>
            <Header as='h2'>Find a better barber now!</Header>
            <p>
              This is the premier app to find a barber close by and join their queue
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} verticalAlign="middle">
          <Grid.Column>
            <Link to="/">
              <Button>Sign In</Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Button>Login</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default SignIn
