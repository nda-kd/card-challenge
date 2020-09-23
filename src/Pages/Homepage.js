import React from 'react'
import './homepage.styles.scss'
import axios from 'axios'
import { connect } from 'react-redux'
import { getData, nextTry } from '../action/CardAction'

import MediaCard from '../Components/Cards'
import Fab from '@material-ui/core/Fab'
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'

class Homepage extends React.Component {
  nextCard () {
    this.props.dispatch(nextTry())
  }

  componentDidMount () {
    axios.get('https://static.pushe.co/challenge/json')
      .then((response) => {
        console.log('res;;;', response)
        this.props.dispatch(getData(response.data.cards))
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    console.log('data', this.props.data)
    const { randomCard } = this.props

    return (
      <>
        <div className='card-wrap'>
          <MediaCard data={randomCard} />
        </div>
        <div className='fab-wrap'>
          <Fab color='primary' aria-label='add'>
            <NavigateNextRoundedIcon onClick={() => this.nextCard()} />
          </Fab>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  randomCard: state.randomCard
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
