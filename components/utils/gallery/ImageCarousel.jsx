import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Material UI imports
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  imgDimensions: {
    height: 600,
    width: 650,
    [theme.breakpoints.down('sm')]: {
      height: 300,
      width: 350,
    },
  },
}))

const ImageCarousel = (props) => {
  const classes = useStyles()
  return (
    <div>
      <FontAwesomeIcon
        icon={faTimes}
        style={{
          fontSize: '1.5rem',
          position: 'absolute',
          top: 30,
          right: 30,
          cursor: 'pointer',
        }}
        className="timesButtonAnimation"
        onClick={() => props.setOpen(false)}
      />
      <div
        style={{
          fontSize: '1rem',
          position: 'absolute',
          top: 60,
          right: 22,
          cursor: 'pointer',
        }}
      >
        ESC
      </div>
      <Carousel
        dynamicHeight
        showStatus={true}
        showArrows={true}
        autoPlay
        interval={3000}
        showThumbs={false}
        infiniteLoop
        selectedItem={props.selectedImage}
      >
        {props.galleryData.map((image) => (
          <div key={image.asset_id}>
            <img
              src={image.secure_url}
              alt={
                image.context ? image.context.custom.caption : 'gallery image'
              }
              className={classes.imgDimensions}
            />
            {image.context && (
              <p
                className="legend"
                style={{
                  fontSize: '1rem',
                  position: 'absolute',
                  top: 0,
                  height: 45,
                  background: 'var(--primary-color)',
                }}
              >
                {image.context.custom.caption}
              </p>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
