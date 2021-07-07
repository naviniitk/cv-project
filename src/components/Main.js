import React from 'react';
import emptyCV from '../utils/emptyCV';
import Form from './itemsCV/Form';
import uniqid from 'uniqid';
import Preview from './previewCV/Preview';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptyCV;
    this.myRef = React.createRef();

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

  handleEducationChange(e, id) {
    const { name, value } = e.target;

    const newEducation = this.state.educationInfo.map((education) => {
      if (education.id === id) {
        return { ...education, [name]: value };
      }
      return education;
    });

    this.setState((prevState) => ({
      ...prevState,
      educationInfo: [...newEducation],
    }));
  }

  handleExperienceChange(e, id) {
    const { name, value } = e.target;

    const newExperience = this.state.experienceInfo.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [name]: value };
      }
      return experience;
    });

    this.setState((prevState) => ({
      ...prevState,
      experienceInfo: [...newExperience],
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

  handleDeleteExperience(id) {
    const newExperience = this.state.experienceInfo.filter(
      (experience) => experience.id !== id
    );
    this.setState((prevState) => ({
      ...prevState,
      experienceInfo: [newExperience],
    }));
  }

  handleDeleteEducation(id) {
    const newEducation = this.state.educationInfo.filter(
      (education) => education.id !== id
    );
    this.setState((prevState) => ({
      ...prevState,
      educationInfo: [newEducation],
    }));
  }

  handleReset(e) {
    this.setState(emptyCV);
  }

  render() {
    const formStyle = {
      maxWidth: '500px',
      padding: '10px 20px',
      background: '#495C70',
      margin: '10px auto',
      borderRadius: '8px',
      fontFamily: 'Georgia, Times New Roman, Times, serif',
    };
    return (
      <div>
        <div style={formStyle}>
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
        </div>
        <div style={formStyle}>
        <Preview cv={this.state} ref={this.myRef} />
        </div>
      </div>
    );
  }
}

export default Main;
