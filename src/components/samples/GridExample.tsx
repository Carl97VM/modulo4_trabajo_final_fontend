import { Grid, Paper } from '@mui/material'

function CenteredGrid() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs={4}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 1</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 2</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 3</Paper>
      </Grid>
    </Grid>
  )
}

function SpaceBetweenGrid() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid item xs={3}>
        <Paper style={{ padding: 20, height: 100 }}>Caja 1</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, height: 150 }}>Caja 2</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, height: 200 }}>Caja 3</Paper>
      </Grid>
    </Grid>
  )
}

function SpaceAroundGrid() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 1</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 2</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{ padding: 20, textAlign: 'center' }}>Elemento 4</Paper>
      </Grid>
    </Grid>
  )
}

function EndAlignedStretchedGrid() {
  return (
    <Grid container spacing={2} justifyContent="flex-end" alignItems="stretch">
      <Grid item xs={2}>
        <Paper style={{ padding: 20, minHeight: 100 }}>Caja 1</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={{ padding: 20, minHeight: 150 }}>Caja 2</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={{ padding: 20, minHeight: 200 }}>Caja 3</Paper>
      </Grid>
    </Grid>
  )
}

function GridExample() {
  return (
    <>
      <EndAlignedStretchedGrid />
    </>
  )
}

export default GridExample
