import uniqid from 'uniqid';

const emptyCV = {
  personalInfo: {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
  },
  experienceInfo: [
    {
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    },
  ],
  
  educationInfo: [
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
};

export default emptyCV;
