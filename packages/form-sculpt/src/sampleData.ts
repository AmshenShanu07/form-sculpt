import { SchemaType } from './Context/PropContext/type';

export const sampleJsonField: SchemaType[] = [
  {
    fieldWidth: 1 / 3,
    key: 'CheckBoxGroupCheck',
    fieldLabel: {
      label: 'General Details',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'title',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    key: 'Des',
    fieldLabel: {
      label: 'some description about the form',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'description',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    key: 'DateScreeningProvided',
    fieldLabel: {
      label: 'Date Screening Provided',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'textArea',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'testCheckboxes',
    fieldLabel: {
      label: 'Date Screening Provided',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'checkboxes',
    options: [
      { key: 'MondayDay', label: 'Monday Day' },
      { key: 'Tuesday', label: 'Tuesday' },
      { key: 'Wednesday', label: 'Wednesday' },
      { key: 'Thursday', label: 'Thursday' },
      { key: 'Friday', label: 'Friday' },
      { key: 'Saturday', label: 'Saturday' },
      { key: 'Sunday', label: 'Sunday' },
    ],
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'VisionDetails',
    fieldLabel: {
      label: 'Vision Details',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'title',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    key: 'LeftEye',
    fieldLabel: {
      label: 'Left Eye',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'label',
    isRequired: false,
  },
  {
    fieldWidth: 1,
    key: 'LeftFar',
    fieldLabel: {
      label: 'Far',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'checkbox',
    isRequired: false,
  },
  {
    fieldWidth: 1,
    key: 'LeftNear',
    fieldLabel: {
      label: 'Near',
      description: '',
      placeholderText: '',
    },
    disable: false,
    fieldType: 'checkbox',
    isRequired: false,
  },
  {
    fieldWidth: 1,
    key: 'LeftEyeDetails',
    fieldLabel: {
      label: 'Left Eye Details',
      description: '',
      placeholderText: '',
    },
    fieldType: 'textField',
    isRequired: true,
    validation: {
      validation: 'number',
    },
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'LeftFar',
    ifValueIs: true,
    key: 'VisionLeftFar',
    fieldLabel: {
      label: 'Vision Left Far',
      description: '',
      placeholderText: '',
    },
    fieldType: 'select',
    options: [
      { key: '20/20', label: '20/20' },
      { key: '20/30', label: '20/30' },
      { key: '20/40', label: '20/40' },
    ],
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'LeftNear',
    ifValueIs: true,
    key: 'VisionLeftNear',
    fieldLabel: {
      label: 'Vision Left Near',
      description: '',
      placeholderText: '',
    },
    fieldType: 'select',
    options: [
      { key: '20/20', label: '20/20' },
      { key: '20/30', label: '20/30' },
      { key: '20/40', label: '20/40' },
    ],
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    key: 'RightEye',
    fieldLabel: {
      label: 'Right Eye',
      description: '',
      placeholderText: '',
    },
    fieldType: 'subTitle',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'RightFar',
    fieldLabel: {
      label: 'Far',
      description: '',
      placeholderText: '',
    },
    fieldType: 'checkbox',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'RightNear',
    fieldLabel: {
      label: 'Near',
      description: '',
      placeholderText: '',
    },
    fieldType: 'checkbox',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'RightEyeDetails',
    fieldLabel: {
      label: 'Right Eye Details',
      description: '',
      placeholderText: '',
    },
    fieldType: 'textField',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'RightFar',
    ifValueIs: true,
    key: 'VisionRightFar',
    fieldLabel: {
      label: 'Vision Right Far',
      description: '',
      placeholderText: '',
    },
    fieldType: 'select',
    options: [
      { key: '20/20', label: '20/20' },
      { key: '20/30', label: '20/30' },
      { key: '20/40', label: '20/40' },
    ],
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'RightNear',
    ifValueIs: true,
    key: 'VisionRightNear',
    fieldLabel: {
      label: 'Vision Right Near',
      description: '',
      placeholderText: '',
    },
    fieldType: 'select',
    options: [
      { key: '20/20', label: '20/20' },
      { key: '20/30', label: '20/30' },
      { key: '20/40', label: '20/40' },
    ],
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    key: 'Ishihara',
    fieldLabel: {
      label: 'Ishihara',
      placeholderText: 'Enter Ishihara',
      description: 'some description about the field',
    },
    fieldType: 'select',
    isRequired: true,
    options: [
      { key: 'Passed', label: 'Passed' },
      { key: 'Failed', label: 'Failed' },
    ],
  },
  {
    fieldWidth: 0.3333,
    key: 'Random-DotE',
    fieldLabel: {
      label: 'Random-Dot E',
      placeholderText: 'Enter Random-Dot E',
      description: 'some description about the field',
    },
    fieldType: 'select',
    isRequired: false,
    options: [
      { key: 'Passed', label: 'Passed' },
      { key: 'Failed', label: 'Failed' },
    ],
  },
  {
    fieldWidth: 0.3333,
    key: 'ColorBlindness',
    fieldLabel: {
      label: 'Select Blindness',
      placeholderText: 'Enter Color Blindness',
      description: 'some description about the field',
    },
    fieldType: 'select',
    isRequired: false,
    options: [
      { key: 'Passed', label: 'Passed' },
      { key: 'Failed', label: 'Failed' },
    ],
  },
  {
    fieldWidth: 0.3333,
    key: 'Binocularity',
    fieldLabel: {
      label: 'Binocularity',
      placeholderText: 'Select Binocularity',
      description: 'some description about the field',
    },
    fieldType: 'select',
    isRequired: false,
    options: [
      { key: 'Passed', label: 'Passed' },
      { key: 'Failed', label: 'Failed' },
    ],
  },
  {
    fieldWidth: 1 / 2,
    key: 'DepthTest/PlusLenses',
    fieldLabel: {
      label: 'Depth Test/Plus Lenses',
      placeholderText: 'Select Depth Test/Plus Lenses',
      description: 'some description about the field',
    },
    fieldType: 'select',
    isRequired: false,
    options: [
      { key: 'Passed', label: 'Passed' },
      { key: 'Failed', label: 'Failed' },
    ],
  },
  {
    fieldWidth: 1 / 2,
    key: 'Glasses/Lens',
    fieldLabel: {
      label: 'Glasses/Lens',
      placeholderText: 'Select Glasses/Lens',
      description: 'some description about the field',
    },
    fieldType: 'select',
    isRequired: false,
    options: [
      { key: 'Passed', label: 'Passed' },
      { key: 'Failed', label: 'Failed' },
    ],
  },
  {
    fieldWidth: 1 / 2,
    key: 'VisionAid',
    fieldLabel: {
      label: 'Vision Aid',
      description: '',
      placeholderText: '',
    },
    fieldType: 'textField',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'Note',
    fieldLabel: {
      label: 'Note',
      placeholderText: 'Enter Note',
      description: '',
    },
    fieldType: 'textField',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'PhysicianExamDetails',
    fieldLabel: {
      label: 'Physician Exam Details',
      description: '',
      placeholderText: '',
    },
    fieldType: 'title',
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'ExamConductedBy',
    fieldLabel: {
      label: 'Exam Conducted By',
      description: '',
      placeholderText: '',
    },
    fieldType: 'select',
    options: [
      { key: 'SchoolNurse', label: 'School Nurse' },
      { key: 'FamilyPhysician', label: 'Family Physician' },
    ],
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'ExamConductedByRadio',
    fieldLabel: {
      label: 'Exam Conducted By Radio',
      description: '',
      placeholderText: '',
    },
    fieldType: 'radio',
    options: [
      { key: 'SchoolNurse', label: 'School Nurse' },
      { key: 'FamilyPhysician', label: 'Family Physician' },
    ],
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    key: 'ScreeningOutcome',
    fieldLabel: {
      label: 'Screening Outcome',
      description: '',
      placeholderText: '',
    },
    fieldType: 'select',
    options: [
      { key: 'Pass', label: 'Pass' },
      { key: 'Fail', label: 'Fail' },
      { key: 'Missed', label: 'Missed' },
    ],
    isRequired: false,
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'ScreeningOutcome',
    ifValueIs: 'Fail',
    key: 'ReferredForEvaluation/Treatment',
    fieldLabel: {
      label: 'Referred For Evaluation/Treatment',
      description: '',
      placeholderText: '',
    },
    fieldType: 'radio',
    isRequired: true,
    options: [
      { key: 'Yes', label: 'Yes' },
      { key: 'No', label: 'No' },
    ],
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'ReferredForEvaluation/Treatment',
    ifValueIs: 'Yes',
    key: 'ReferredForEvaluation/TreatmentDatetime',
    fieldLabel: {
      label: 'Completed Referrals Reported date time',
      placeholderText: 'Enter Completed Referrals Reported date time',
      description: 'some description about the field',
    },
    fieldType: 'time',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'ReferredForEvaluation/Treatment',
    ifValueIs: 'Yes',
    key: 'CompletedReferralsReported',
    fieldLabel: {
      label: 'Completed Referrals Reported',
      description: '',
      placeholderText: '',
    },
    fieldType: 'radio',
    isRequired: false,
    options: [
      { key: 'Yes', label: 'Yes' },
      { key: 'No', label: 'No' },
    ],
  },
  {
    fieldWidth: 1 / 2,
    dependentParentLabel: 'CompletedReferralsReported',
    ifValueIs: 'Yes',
    key: 'CompletedReferralsReporteddatetime',
    fieldLabel: {
      label: 'Completed Referrals Reported Datetime',
      description: '',
      placeholderText: '',
    },
    fieldType: 'textField',
    isRequired: true,
    validation: {
      validation: 'number',
      max: 10,
      min: 5,
    },
  },
  {
    fieldWidth: 1 / 2,
    key: 'CompletedReferralsReport',
    fieldLabel: {
      label: 'Completed Referrals Report',
      description: '',
      placeholderText: '',
    },
    fieldType: 'file',
    isRequired: false,
    validation: {
      fileType: ['jpeg', 'jpg', 'png'],
    },
  },
  {
    fieldWidth: 1 / 2,
    key: 'singleFile',
    fieldLabel: {
      label: 'Completed Referrals Report',
      description: '',
      placeholderText: '',
    },
    fieldType: 'file',
    isRequired: true,
    validation: {
      fileType: ['jpeg', 'jpg', 'png'],
    },
  },
  {
    fieldWidth: 1 / 2,
    key: 'date-test',
    fieldLabel: {
      label: 'Completed Referrals Report',
      description: '',
      placeholderText: '',
    },
    fieldType: 'date',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 3,
    key: 'customField',
    fieldLabel: {
      label: 'General Details',
      placeholderText: 'Enter Date Screening Provided',
      description: 'some description about the field',
    },
    fieldType: 'title',
    isRequired: true,
  },
];

export const ccJson: SchemaType[] = [
  {
    fieldLabel: {
      label: 'General Details',
      placeholderText: 'General Details',
      description: 'General Details',
    },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    options: [],
    key: 'GeneralDetails',
  },
  {
    fieldLabel: {
      label: 'Date screening Provided',
      placeholderText: 'Date screening Provided',
      description: 'Date screening Provided',
    },
    fieldType: 'dateTime',
    fieldWidth: 1,
    isRequired: true,
    disable: false,
    options: [],
    key: 'DatescreeningProvided',
  },
  {
    fieldLabel: {
      label: 'Vision Details',
      placeholderText: 'Vision Details',
      description: 'Vision Details',
    },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    options: [],
    key: 'VisionDetails',
  },
  {
    fieldLabel: {
      label: 'Left Eye',
      placeholderText: 'Left Eye',
      description: 'Left Eye',
    },
    fieldType: 'checkboxes',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Far',
        key: 'Far',
      },
      {
        label: 'Near',
        key: 'Near',
      },
    ],
    key: 'LeftEye',
  },
  {
    fieldLabel: {
      label: 'Vision Left Far',
      placeholderText: 'Vision Left Far',
      description: 'Vision Left Far',
    },
    fieldType: 'select',
    fieldWidth: 0.25,
    isRequired: false,
    disable: false,
    ifValueIs: 'Far',
    options: [
      {
        label: '20/20',
        key: '20/20',
      },
      {
        label: '20/30',
        key: '20/30',
      },
      {
        label: '20/40',
        key: '20/40',
      },
      {
        label: '20/50',
        key: '20/50',
      },
      {
        label: '20/60',
        key: '20/60',
      },
      {
        label: '20/70',
        key: '20/70',
      },
      {
        label: '20/80',
        key: '20/80',
      },
      {
        label: '20/90',
        key: '20/90',
      },
      {
        label: '20/100',
        key: '20/100',
      },
      {
        label: '20/110',
        key: '20/110',
      },
      {
        label: '20/120',
        key: '20/120',
      },
      {
        label: '20/130',
        key: '20/130',
      },
      {
        label: '20/140',
        key: '20/140',
      },
      {
        label: '20/150',
        key: '20/150',
      },
      {
        label: '20/160',
        key: '20/160',
      },
      {
        label: '20/170',
        key: '20/170',
      },
      {
        label: '20/180',
        key: '20/180',
      },
      {
        label: '20/190',
        key: '20/190',
      },
      {
        label: '20/200',
        key: '20/200',
      },
    ],
    key: 'LeftEyeIfValueOfVisionLeftFarIsFar',
    dependentParentLabel: 'LeftEye',
  },
  {
    fieldLabel: {
      label: 'Vision Left Near',
      placeholderText: 'Vision Left Near',
      description: 'Vision Left Near',
    },
    fieldType: 'select',
    fieldWidth: 0.25,
    isRequired: false,
    disable: false,
    ifValueIs: 'Near',
    options: [
      {
        label: '20/20',
        key: '20/20',
      },
      {
        label: '20/30',
        key: '20/30',
      },
      {
        label: '20/40',
        key: '20/40',
      },
      {
        label: '20/50',
        key: '20/50',
      },
      {
        label: '20/60',
        key: '20/60',
      },
      {
        label: '20/70',
        key: '20/70',
      },
      {
        label: '20/80',
        key: '20/80',
      },
      {
        label: '20/90',
        key: '20/90',
      },
      {
        label: '20/100',
        key: '20/100',
      },
      {
        label: '20/110',
        key: '20/110',
      },
      {
        label: '20/120',
        key: '20/120',
      },
      {
        label: '20/130',
        key: '20/130',
      },
      {
        label: '20/140',
        key: '20/140',
      },
      {
        label: '20/150',
        key: '20/150',
      },
      {
        label: '20/160',
        key: '20/160',
      },
      {
        label: '20/170',
        key: '20/170',
      },
      {
        label: '20/180',
        key: '20/180',
      },
      {
        label: '20/190',
        key: '20/190',
      },
      {
        label: '20/200',
        key: '20/200',
      },
    ],
    key: 'LeftEyeIfValueOfVisionLeftNearIsNear',
    dependentParentLabel: 'LeftEye',
  },
  {
    fieldLabel: {
      label: 'Right Eye',
      placeholderText: 'Right Eye',
      description: 'Right Eye',
    },
    fieldType: 'checkboxes',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Far',
        key: 'Far',
      },
      {
        label: 'Near',
        key: 'Near',
      },
    ],
    key: 'RightEye',
  },
  {
    fieldLabel: {
      label: 'Vision Right Far',
      placeholderText: 'Vision Right Far',
      description: 'Vision Right Far',
    },
    fieldType: 'select',
    fieldWidth: 0.25,
    isRequired: false,
    disable: false,
    ifValueIs: 'Far',
    options: [
      {
        label: '20/20',
        key: '20/20',
      },
      {
        label: '20/30',
        key: '20/30',
      },
      {
        label: '20/40',
        key: '20/40',
      },
      {
        label: '20/50',
        key: '20/50',
      },
      {
        label: '20/60',
        key: '20/60',
      },
      {
        label: '20/70',
        key: '20/70',
      },
      {
        label: '20/80',
        key: '20/80',
      },
      {
        label: '20/90',
        key: '20/90',
      },
      {
        label: '20/100',
        key: '20/100',
      },
      {
        label: '20/110',
        key: '20/110',
      },
      {
        label: '20/120',
        key: '20/120',
      },
      {
        label: '20/130',
        key: '20/130',
      },
      {
        label: '20/140',
        key: '20/140',
      },
      {
        label: '20/150',
        key: '20/150',
      },
      {
        label: '20/160',
        key: '20/160',
      },
      {
        label: '20/170',
        key: '20/170',
      },
      {
        label: '20/180',
        key: '20/180',
      },
      {
        label: '20/190',
        key: '20/190',
      },
      {
        label: '20/200',
        key: '20/200',
      },
    ],
    key: 'RightEyeIfValueOfVisionRightFarIsFar',
    dependentParentLabel: 'RightEye',
  },
  {
    fieldLabel: {
      label: 'Vision Right Near',
      placeholderText: 'Vision Right Near',
      description: 'Vision Right Near',
    },
    fieldType: 'select',
    fieldWidth: 0.25,
    isRequired: false,
    disable: false,
    ifValueIs: 'Near',
    options: [
      {
        label: '20/20',
        key: '20/20',
      },
      {
        label: '20/30',
        key: '20/30',
      },
      {
        label: '20/40',
        key: '20/40',
      },
      {
        label: '20/50',
        key: '20/50',
      },
      {
        label: '20/60',
        key: '20/60',
      },
      {
        label: '20/70',
        key: '20/70',
      },
      {
        label: '20/80',
        key: '20/80',
      },
      {
        label: '20/90',
        key: '20/90',
      },
      {
        label: '20/100',
        key: '20/100',
      },
      {
        label: '20/110',
        key: '20/110',
      },
      {
        label: '20/120',
        key: '20/120',
      },
      {
        label: '20/130',
        key: '20/130',
      },
      {
        label: '20/140',
        key: '20/140',
      },
      {
        label: '20/150',
        key: '20/150',
      },
      {
        label: '20/160',
        key: '20/160',
      },
      {
        label: '20/170',
        key: '20/170',
      },
      {
        label: '20/180',
        key: '20/180',
      },
      {
        label: '20/190',
        key: '20/190',
      },
      {
        label: '20/200',
        key: '20/200',
      },
    ],
    key: 'RightEyeIfValueOfVisionRightNearIsNear',
    dependentParentLabel: 'RightEye',
  },
  {
    fieldLabel: {
      label: 'Left Eye Details',
      placeholderText: 'Left Eye Details',
      description: 'Left Eye Details',
    },
    fieldType: 'textField',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    key: 'LeftEyeDetails',
  },
  {
    fieldLabel: {
      label: 'Right Eye Details',
      placeholderText: 'Right Eye Details',
      description: 'Right Eye Details',
    },
    fieldType: 'textField',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    key: 'RightEyeDetails',
  },
  {
    fieldLabel: {
      label: 'Ishihara',
      placeholderText: 'Ishihara',
      description: 'Ishihara',
    },
    fieldType: 'select',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Passed',
        key: 'Passed',
      },
      {
        label: 'Failed',
        key: 'Failed',
      },
    ],
    key: 'Ishihara',
  },
  {
    fieldLabel: {
      label: 'Random Dot-E',
      placeholderText: 'Random Dot-E',
      description: 'Random Dot-E',
    },
    fieldType: 'select',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Passed',
        key: 'Passed',
      },
      {
        label: 'Failed',
        key: 'Failed',
      },
    ],
    key: 'RandomDot-E',
  },
  {
    fieldLabel: {
      label: 'Color Blindness',
      placeholderText: 'Color Blindness',
      description: 'Color Blindness',
    },
    fieldType: 'select',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Passed',
        key: 'Passed',
      },
      {
        label: 'Failed',
        key: 'Failed',
      },
    ],
    key: 'ColorBlindness',
  },
  {
    fieldLabel: {
      label: 'Binocularity',
      placeholderText: 'Binocularity',
      description: 'Binocularity',
    },
    fieldType: 'select',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Passed',
        key: 'Passed',
      },
      {
        label: 'Failed',
        key: 'Failed',
      },
    ],
    key: 'Binocularity',
  },
  {
    fieldLabel: {
      label: 'Depth Test/Plus Lenses',
      placeholderText: 'Depth Test/Plus Lenses',
      description: 'Depth Test/Plus Lenses',
    },
    fieldType: 'select',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'Passed',
        key: 'Passed',
      },
      {
        label: 'Failed',
        key: 'Failed',
      },
    ],
    key: 'DepthTest/PlusLenses',
  },
  {
    fieldLabel: {
      label: 'Glasses/Lens',
      placeholderText: 'Glasses/Lens',
      description: 'Glasses/Lens',
    },
    fieldType: 'select',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [
      {
        label: 'No',
        key: 'No',
      },
      {
        label: 'Yes',
        key: 'Yes',
      },
    ],
    key: 'Glasses/Lens',
  },
  {
    fieldLabel: {
      label: 'Vision Aid',
      placeholderText: 'Vision Aid',
      description: 'Vision Aid',
    },
    fieldType: 'textArea',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    options: [],
    key: 'VisionAid',
  },
  {
    fieldLabel: {
      label: 'Note',
      placeholderText: 'Note',
      description: 'Note',
    },
    fieldType: 'textArea',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    options: [],
    key: 'Note',
  },
  {
    fieldLabel: {
      label: 'Examination Completed by',
      placeholderText: 'Examination Completed by',
      description: 'Examination Completed by',
    },
    fieldType: 'radio',
    fieldWidth: 1,
    isRequired: true,
    disable: false,
    options: [
      {
        label: 'School Nurse',
        key: 'School Nurse',
      },
      {
        label: 'Family Physician',
        key: 'Family Physician',
      },
    ],
    key: 'ExaminationCompletedby',
  },
  {
    fieldLabel: {
      label: 'Screening Outcome',
      placeholderText: 'Screening Outcome',
      description: 'Screening Outcome',
    },
    fieldType: 'select',
    fieldWidth: 1,
    isRequired: true,
    disable: false,
    options: [
      {
        label: 'Pass',
        key: 'Pass',
      },
      {
        label: 'Fail',
        key: 'Fail',
      },
      {
        label: 'Missed',
        key: 'Missed',
      },
    ],
    key: 'ScreeningOutcome',
  },
  {
    fieldLabel: {
      label: 'Referred For Vision Evaluation/Treatment',
      placeholderText: 'Referred For Vision Evaluation/Treatment',
      description: 'Referred For Vision Evaluation/Treatment',
    },
    fieldType: 'radio',
    fieldWidth: 1,
    isRequired: true,
    disable: false,
    ifValueIs: 'Fail',
    options: [
      {
        label: 'Yes',
        key: 'Yes',
      },
      {
        label: 'No',
        key: 'No',
      },
    ],
    key: 'ScreeningOutcomeIfValueOfReferredForVisionEvaluation/TreatmentIsFail',
    dependentParentLabel: 'ScreeningOutcome',
  },
  {
    fieldLabel: {
      label: 'Referred For Evaluation/Treatment date',
      placeholderText: 'Referred For Evaluation/Treatment date',
      description: 'Referred For Evaluation/Treatment date',
    },
    fieldType: 'dateTime',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Yes',
    options: [],
    key: 'ReferredForVisionEvaluation/TreatmentIfValueOfReferredForEvaluation/TreatmentdateIsYes',
    dependentParentLabel: 'ScreeningOutcomeIfValueOfReferredForVisionEvaluation/TreatmentIsFail',
  },
  {
    fieldLabel: {
      label: 'Completed Referrals Reported',
      placeholderText: 'Completed Referrals Reported',
      description: 'Completed Referrals Reported',
    },
    fieldType: 'radio',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Yes',
    options: [
      {
        label: 'Yes',
        key: 'Yes',
      },
      {
        label: 'No',
        key: 'No',
      },
    ],
    key: 'ReferredForVisionEvaluation/TreatmentIfValueOfCompletedReferralsReportedIsYes',
    dependentParentLabel: 'ScreeningOutcomeIfValueOfReferredForVisionEvaluation/TreatmentIsFail',
  },
  {
    fieldLabel: {
      label: 'Completed Referrals Reported date',
      placeholderText: 'Completed Referrals Reported date',
      description: 'Completed Referrals Reported date\n',
    },
    fieldType: 'dateTime',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Yes',
    options: [],
    key: 'CompletedReferralsReportedIfValueOfCompletedReferralsReporteddateIsYes',
    dependentParentLabel: 'ReferredForVisionEvaluation/TreatmentIfValueOfCompletedReferralsReportedIsYes',
  },
  {
    fieldLabel: {
      label: 'Referral Outcome',
      placeholderText: 'Referral Outcome',
      description: 'Referral Outcome',
    },
    fieldType: 'select',
    fieldWidth: 1,
    isRequired: true,
    disable: false,
    ifValueIs: 'Yes',
    options: [
      {
        label: 'Vision Specialist Seen',
        key: 'Vision Specialist Seen',
      },
      {
        label: 'Vision Report Received',
        key: 'Vision Report Received',
      },
      {
        label: 'Lenses Prescribed',
        key: 'Lenses Prescribed',
      },
    ],
    key: 'CompletedReferralsReportedIfValueOfReferralOutcomeIsYes',
    dependentParentLabel: 'ReferredForVisionEvaluation/TreatmentIfValueOfCompletedReferralsReportedIsYes',
  },
  {
    fieldLabel: {
      label: 'Preview Button',
      placeholderText: 'Preview Button',
      description: 'Preview Button',
    },
    fieldType: 'label',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Fail',
    options: [],
    key: 'ScreeningOutcomeIfValueOfPreviewButtonIsFail',
    dependentParentLabel: 'ScreeningOutcome',
  },
  {
    fieldLabel: {
      label: 'Drag your file here or Browse',
      placeholderText: 'Drag your file here or Browse',
      description: 'Drag your file here or Browse',
    },
    fieldType: 'file',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    options: [],
    key: 'DragyourfilehereorBrowse',
  },
];

export const validationSchema: SchemaType[] = [
  // {
  //   fieldLabel: {
  //     description: 'CheckBoxes',
  //     label: 'checkboxes',
  //     placeholderText: 'checkboxes'
  //   },
  //   fieldType: 'checkboxes',
  //   fieldWidth:1,
  //   isRequired:true,
  //   options: [
  //     {
  //       key: 'sampleOne',
  //       label: 'Sample One'
  //     },
  //     {
  //       key: 'sampleTwo',
  //       label: 'Sample Two'
  //     },
  //     {
  //       key: 'sampleThree',
  //       label: 'Sample Three'
  //     },
  //     {
  //       key: 'sampleFour',
  //       label: 'Sample Four'
  //     },
  //     {
  //       key: 'sampleFive',
  //       label: 'Sample Five'
  //     },
  //   ],
  //   key:'checkboxes',
  //   validation: {
  //     max: 4,
  //     min:2
  //   }
  // },
  // {
  //   fieldLabel: {
  //     description: 'Date',
  //     label: 'Date',
  //     placeholderText: 'Date'
  //   },
  //   fieldType: 'date',
  //   fieldWidth:1,
  //   isRequired:true,
  //   key:'date',
  //   validation: {
  //     preventFuture: true
  //   }
  // },
  // {
  //   fieldLabel: {
  //     description: 'Number Field',
  //     label: 'Number Field',
  //     placeholderText: 'Number Field'
  //   },
  //   fieldType: 'textField',
  //   fieldWidth:1,
  //   isRequired:true,
  //   key:'numberField',
  //   validation: {
  //     validation: 'number',
  //     min: 3,
  //     max:5
  //   }
  // },
  {
    fieldLabel: {
      description: 'Limit Field',
      label: 'Limit Field',
      placeholderText: 'Limit Field'
    },
    fieldType: 'textField',
    fieldWidth:1,
    isRequired:true,
    key:'limitField',
    validation: {
      validation: 'limit',
      min: 3,
      max:5
    }
  },

];