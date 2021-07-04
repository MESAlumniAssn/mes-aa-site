import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import {
  brown,
  amber,
  orange,
  lime,
  lightGreen,
} from '@material-ui/core/colors'

const getColorByBatch = (testimonial) => {
  switch (true) {
    case parseInt(testimonial.batch) < 1970:
      return brown[500]
    case parseInt(testimonial.batch) >= 1970 &&
      parseInt(testimonial.batch) < 1980:
      return amber[400]
    case parseInt(testimonial.batch) >= 1980 &&
      parseInt(testimonial.batch) < 1990:
      return orange[500]
    case parseInt(testimonial.batch) >= 1990 &&
      parseInt(testimonial.batch) < 2000:
      return lime[600]
    case parseInt(testimonial.batch) >= 2000 &&
      parseInt(testimonial.batch) < 2010:
      return lightGreen[600]
    case parseInt(testimonial.batch) >= 2010 &&
      parseInt(testimonial.batch) < 2020:
      return orange[700]
    case parseInt(testimonial.batch) >= 2020:
      return brown[900]
    default:
      return null
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: '0 12px 27px rgba(0,0,0,0.2)',
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
    cursor: 'default',
    borderBottomColor: (testimonial) => getColorByBatch(testimonial),
    transition: 'transform 0.5s ease-in',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  avatar: {
    fontWeight: 'bold',
    backgroundColor: (testimonial) => getColorByBatch(testimonial),
  },
}))

const TestimonialCard = (props) => {
  const classes = useStyles(props.testimonial)

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="testimonial" className={classes.avatar}>
            {props.testimonial.initial}
          </Avatar>
        }
        title={props.testimonial.name}
        subheader={`Batch of ${props.testimonial.batch}`}
      />
      <CardContent>
        <Typography
          variant="body2"
          style={{ color: 'var(--primary-color)' }}
          component="p"
        >
          {props.testimonial.message}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
