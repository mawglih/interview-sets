import { Component } from "react";
import Modal from './Modal.js';
import SignUp from './SignUp';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="header-container">
        
          <div className="header-up">
            <p>LearnStart</p>
            <div className="signup-div" onClick={this.showModal}>
              Sign Up
            </div>
          </div>
         


        <Modal show={this.state.show} handleClose={this.hideModal}>
          <SignUp/>
        </Modal>
      </div>
    );
  }
}

export default Header;
