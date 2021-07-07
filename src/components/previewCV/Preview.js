import React, { Component } from 'react';
import Content from './Content';

class Preview extends Component {
  render() {
    const { cv } = this.props;

    return (
      <div>
        <Content
          personalInfo={cv.personalInfo}
          experienceInfo={cv.experienceInfo}
          educationInfo={cv.educationInfo}
          />
      </div>
    )
  }
}

export default Preview;