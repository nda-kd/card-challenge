import React from 'react'
import './modal.scss'
import { connect } from 'react-redux'
import { editCard } from '../../action/CardAction'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class ModalContent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        title: '',
        description: ''
    }
  }

  handleChange = event => {
    const { value, name }= event.target
    this.setState({[name] : value })
    console.log('SetState:::', this.state)
  }

  handleClick() {
    this.props.dispatch(editCard(this.state))
    console.log('edit data:::', this.state)
    this.props.closeModal();
  }

  render () {
    return (
      <div className='modal-wrap'>
        <h2 className='title'>Have your own title and description for this card</h2>
        <TextField
          id='Title'
          label='Title'
          variant='filled'
          color='primary'
          name='title'
          onChange={this.handleChange}
        />
        <TextField
          id='Description'
          label='Description'
          variant='filled'
          color='primary'
          name='description'
          onChange={this.handleChange}
        />
        <Button
          variant='contained' color='primary'
        onClick={() => this.handleClick()}
        >
              Save
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  dispatch : dispatch
})

export default connect(mapDispatchToProps)(ModalContent)
