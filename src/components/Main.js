import React from 'react';
import emptyCV from '../utils/emptyCV';
import Form from './itemsCV/Form';
import uniqid from 'uniqid';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptyCV;

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePersonalChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
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

  handleAddExperience(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      experienceInfo: [
        ...prevState.experienceInfo.concat({
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        }),
      ],
    }));
  }

  handleAddEducation(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      educationInfo: [
        ...prevState.educationInfo,
        {
          id: uniqid(),
          universityName: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        },
      ],
    }));
  }

  handleDeleteExperience(e) {}

  handleDeleteEducation(e) {}

  handleReset(e) {
    this.setState((prevState) => ({
      ...prevState,
    }));
  }

  render() {
    return (
      <Form
        cv={this.state}
        handlePersonalChange={this.handlePersonalChange}
        handleExperienceChange={this.handleExperienceChange}
        handleEducationChange={this.handleEducationChange}
        handleAddEducation={this.handleAddEducation}
        handleAddExperience={this.handleAddExperience}
        handleDeleteEducation={this.handleDeleteEducation}
        handleDeleteExperience={this.handleDeleteExperience}
        handleReset={this.handleReset}
      />
    );
  }
}

export default Main;
