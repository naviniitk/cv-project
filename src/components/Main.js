import React from 'react';
import emptyCV from '../utils/emptyCV';
import Form from './itemsCV/Form';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptyCV;

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handlePersonalChange(e) {
    const { name, value } = e.target;
    
    this.setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      }
    }));
    
  }

  handleEducationChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }));
  }

  handleExperienceChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      experienceInfo: {
        ...prevState.experienceInfo,
        [name]: value,
      },
    }));
  }

  render() {
    return (
      <Form
        cv={this.state}
        handlePersonalChange={this.handlePersonalChange}
        handleExperienceChange={this.handleExperienceChange}
        handleEducationChange={this.handleEducationChange}
      />
    );
  }
}

export default Main;
