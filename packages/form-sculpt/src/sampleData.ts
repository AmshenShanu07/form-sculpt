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
    options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
    validation:{
      validation: 'number'
    }
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
    options: ['20/20', '20/30', '20/40'],
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
    options: ['20/20', '20/30', '20/40'],
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
    options: ['20/20', '20/30', '20/40'],
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
    options: ['20/20', '20/30', '20/40'],
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
    options: ['Passed', 'Failed'],
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
    options: ['Passed', 'Failed'],
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
    options: ['Passed', 'Failed'],
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
    options: ['Passed', 'Failed'],
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
    options: ['Passed', 'Failed'],
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
    options: ['Passed', 'Failed'],
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
    options: ['School Nurse', 'Family Physician'],
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
    options: ['Pass', 'Fail', 'Missed'],
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
    options: ['Yes', 'No'],
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
    options: ['Yes', 'No'],
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

export const medAuth: SchemaType[] = [
  {
    fieldLabel: {
      label: 'General Details',
      placeholderText: 'Details',
      description: 'Title',
    },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    options: [],
    key: 'GeneralDetails',
  },
  {
    fieldLabel: {
      label: 'Vital Signs',
      placeholderText: 'Vital Signs',
      description: 'Vital Signs',
    },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    options: [],
    key: 'VitalSigns',
  },
  {
    fieldLabel: {
      label: 'Blood Pressure(mmHG)',
      placeholderText: 'Blood Pressure(mmHG)',
      description: 'Blood Pressure(mmHG)',
    },
    fieldType: 'textField',
    fieldWidth: 0.3333,
    isRequired: false,
    disable: false,
    key: 'BloodPressure(mmHG)',
    validation: {},
  },
  {
    fieldLabel: {
      label: ' Temperature(F)',
      placeholderText: ' Temperature(F)',
      description: '\nTemperature(F)',
    },
    fieldType: 'textField',
    fieldWidth: 0.3333,
    isRequired: false,
    disable: false,
    key: 'Temperature(F)',
  },
  {
    fieldLabel: {
      label: 'Heart Rate(Minute)',
      placeholderText: 'Heart Rate(Minute)',
      description: 'Heart Rate(Minute)',
    },
    fieldType: 'textField',
    fieldWidth: 0.3333,
    isRequired: false,
    disable: false,
    key: 'HeartRate(Minute)',
  },
  {
    fieldLabel: {
      label: 'Respiration Rate(Minute)',
      placeholderText: 'Respiration Rate(Minute)',
      description: 'Respiration Rate(Minute)',
    },
    fieldType: 'textField',
    fieldWidth: 0.3333,
    isRequired: false,
    disable: false,
    key: 'RespirationRate(Minute)',
  },
  {
    fieldLabel: {
      label: 'O2 Saturation Level(%)',
      placeholderText: 'O2 Saturation Level(%)',
      description: 'O2 Saturation Level(%)',
    },
    fieldType: 'textField',
    fieldWidth: 0.3333,
    isRequired: false,
    disable: false,
    key: 'O2SaturationLevel(%)',
  },
  {
    fieldLabel: {
      label: 'Provider Name',
      placeholderText: 'gf',
      description: 'f',
    },
    fieldType: 'label',
    fieldWidth: 0.5,
    isRequired: false,
    options: [],
    key: 'ProviderName',
  },
  {
    fieldLabel: {
      label: 'Date Screening',
      placeholderText: 'gfhh',
      description: 'fh',
    },
    fieldType: 'dateTime',
    fieldWidth: 1,
    isRequired: true,
    options: [],
    disable: false,
    key: 'DateScreening',
    // validation:{
    //   validation:'limit',
    //   preventPast:true,
    // }
  },
  {
    fieldLabel: {
      label: 'Physician Exam Details',
      placeholderText: 'Physician Exam Details',
      description: 'Physician Exam Details',
    },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    options: [],
    key: 'PhysicianExamDetails',
  },
  {
    fieldLabel: {
      label: 'Exam Conducted By',
      placeholderText: 'Exam Conducted By',
      description: 'Exam Conducted By',
    },
    fieldType: 'radio',
    fieldWidth: 1,
    isRequired: true,
    options: ['School Physician', 'Primary Care Provider'],
    disable: false,
    key: 'ExamConductedBy',
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
    options: ['Fail', 'Pass', 'Missed'],
    disable: false,
    key: 'ScreeningOutcome',
  },
  {
    fieldLabel: {
      label: 'Preview Button',
      placeholderText: 'Preview Button',
      description: 'Preview Button',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Fail',
    key: 'ScreeningOutcomeIfValueOfPreviewButtonIsFail',
    dependentParentLabel: 'ScreeningOutcome',
  },
  {
    fieldLabel: {
      label: 'Referred For Evaluation/Treatment',
      placeholderText: 'Referred For Evaluation/Treatment',
      description: 'Referred For Evaluation/Treatment',
    },
    fieldType: 'radio',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Fail',
    options: ['Yes', 'No'],
    key: 'ScreeningOutcomeIfValueOfReferredForEvaluation/TreatmentIsFail',
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
    isRequired: true,
    disable: false,
    ifValueIs: 'Yes',
    options: [],
    key: 'ReferredForEvaluation/TreatmentIfValueOfReferredForEvaluation/TreatmentdateIsYes',
    dependentParentLabel: 'ScreeningOutcomeIfValueOfReferredForEvaluation/TreatmentIsFail',
  },
  {
    fieldLabel: {
      label: 'Completed Referrals Reported',
      placeholderText: 'gf',
      description: 'jhg',
    },
    fieldType: 'radio',
    fieldWidth: 1,
    isRequired: false,
    disable: false,
    ifValueIs: 'Yes',
    options: ['Yes', 'No'],
    key: 'ReferredForEvaluation/TreatmentIfValueOfCompletedReferralsReportedIsYes',
    dependentParentLabel: 'ScreeningOutcomeIfValueOfReferredForEvaluation/TreatmentIsFail',
  },
  {
    fieldLabel: {
      label: 'Completed Referrals Reported date',
      placeholderText: 'Completed Referrals Reported date',
      description: 'Completed Referrals Reported date',
    },
    fieldType: 'dateTime',
    fieldWidth: 1,
    isRequired: true,
    disable: false,
    ifValueIs: 'Yes',
    options: [],
    key: 'CompletedReferralsReportedIfValueOfCompletedReferralsReporteddateIsYes',
    dependentParentLabel: 'ReferredForEvaluation/TreatmentIfValueOfCompletedReferralsReportedIsYes',
  },
  {
    fieldLabel: {
      label: 'Note',
      placeholderText: ' ',
      description: 'fb',
    },
    fieldType: 'textArea',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [],
    key: 'Note',
  },
  {
    fieldLabel: {
      label: 'Drag your file here or Browse',
      placeholderText: 'Drag your file here or Browse',
      description: 'Drag your file here or Browse',
    },
    fieldType: 'file',
    fieldWidth: 0.5,
    isRequired: false,
    disable: false,
    options: [],
    key: 'DragyourfilehereorBrowse',
  },
];
