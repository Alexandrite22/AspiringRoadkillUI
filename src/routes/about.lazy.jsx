import { Paper } from '@mui/material'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <Paper> About </Paper>)
}
