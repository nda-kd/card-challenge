import React from 'react'
import './homepage.styles.scss'
import axios from 'axios'
import { connect } from 'react-redux'
import { getData, nextTry } from '../action/CardAction'

import MediaCard from '../Components/Cards'
import Fab from '@material-ui/core/Fab'
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'

class Homepage extends React.Component {
  // constructor (props) {
  //   super()

  //   this.state = {
  //     cards: 0
  //   }
  // }

  nextCard () {
    this.props.dispatch(nextTry())
    // const { data } = this.props
    // const show = data[Math.floor(Math.random() * data.length)]
    // this.setState({ cards: show })
    // console.log('show', show)
  }

  componentDidMount () {
    axios.get('http://static.pushe.co/challenge/json')
      .then((response) => {
        console.log('res;;;', response)
        this.props.dispatch(getData(response.data.cards))
        console.log('setState======', this.state.cards)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    
    console.log('data', this.props.data)
    console.log('selectedCard', this.props.selectedCard)
    const { selectedCard } = this.props

    return (
      <>
        <div className='card-wrap'>
          <MediaCard imageUrl= {selectedCard.image} data={selectedCard} />
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
  selectedCard: state.selectedCard,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
