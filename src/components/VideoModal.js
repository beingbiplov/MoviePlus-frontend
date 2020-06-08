import React from 'react'
import ModalVideo from 'react-modal-video'

class VideoModal extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.trailerDetail[0].key} onClose={() => this.setState({isOpen: false})} />
        <p onClick={this.openModal} className='trailer_info'>
          <i className="fab fa-youtube"></i> Watch Trailer
        </p>

      </div>
    )
  }
}

export default VideoModal