import React, { useState } from 'react'
import './card.styles.scss'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import ModalContent from '../ModalContent/modalContent'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '&:focus': { outline: 'none' }
  }
}))

export default function MediaCard ({ data }) {
  console.log('mediaCardProps', data)

  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const modalOpen = () => {
    setOpen(true)
  }

  const modalClose = () => {
    setOpen(false)
  }

  return (
    <Card className={data.tag}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {data.code === 0 &&
        <CardMedia
          className={classes.media}
          image={data.image}
          title='Contemplative Reptile'
        />}
      {data.code === 1 &&
        <div className='animated-card' />}
      {data.code === 2 &&
        <audio className='audio' controls autoPlay='autoplay'>
          <source src={data.sound} type='audio/mpeg' />
        </audio>}
      <CardActions>
        <Button size='small' color='primary' onClick={modalOpen}>
          Edit
        </Button>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          onClose={modalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <ModalContent
                closeModal={modalClose}
              />
            </div>
          </Fade>
        </Modal>
      </CardActions>
    </Card>
  )
}