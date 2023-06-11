import { DynamicFormCardType } from './Context/PropContext/type';

export const sampleJsonField: DynamicFormCardType[] = [
  {
    fieldWidth: 1 / 3,
    key: 'GeneralDetails',
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
    disable: true,
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
    fieldType: 'checkboxes',
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
    fieldType: 'dateTime',
    isRequired: true,
  },
  {
    fieldWidth: 1 / 2,
    key: 'CompletedReferralsReport',
    fieldLabel: {
      label: 'Completed Referrals Report',
      description: '',
      placeholderText: '',
    },
    fieldType: 'multiFile',
    isRequired: false,
    validation: {
      min: 2,
      fileSize: 300,
      fileType: ['jpeg', 'jpg', 'png'],
    },
  },
];


export const portalData:DynamicFormCardType[] = [
    {
      fieldWidth: 0.3333333333333333,
      key: 'TreatmentAuthorization',
      fieldLabel: {
        label: 'Treatment Authorization',
        placeholderText: 'Treatment Authorization',
        description: 'Treatment Authorization',
      },
      fieldType: 'title',
      isRequired: true,
    },
    {
      fieldWidth: 0.3333333333333333,
      key: '',
      fieldLabel: {
        label: '    ',
        placeholderText: 'Treatment Authorization',
        description: 'Treatment Authorization',
      },
      fieldType: 'description',
      isRequired: true,
    },
    {
      fieldLabel: { label: 'General Details', placeholderText: 'Details', description: 'Title' },
      fieldType: 'subTitle',
      fieldWidth: 1,
      isRequired: false,
      key: 'GeneralDetails',
    },
    {
      fieldLabel: {
        label: 'Date Treatment Received',
        placeholderText: 'Date Treatment Received',
        description: 'Date Treatment Received',
      },
      fieldType: 'date',
      fieldWidth: 0.5,
      isRequired: false,
      key: 'DateTreatmentReceived',
    },
    {
      fieldLabel: { label: 'Treatment details', placeholderText: 'Treatment details', description: 'Treatment details' },
      fieldType: 'subTitle',
      fieldWidth: 1,
      isRequired: false,
      key: 'Treatmentdetails',
    },
    {
      fieldLabel: { label: 'Treatment Type', placeholderText: 'Select', description: 'Treatment Type' },
      fieldType: 'select',
      fieldWidth: 0.5,
      isRequired: true,
      options: [
        'Asthma',
        'Diabetic',
        'Tube Feeding',
        'Seizure Flow Chart',
        'Miscellaneous',
        'Inhalation',
        'Hearing Aid/Cochlear',
        'Catheterization',
        'Catherization',
      ],
      key: 'TreatmentType',
    },
    {
      fieldLabel: { label: 'Expiry Date', placeholderText: 'Expiry Date', description: 'Expiry Date' },
      fieldType: 'date',
      fieldWidth: 0.5,
      isRequired: true,
      key: 'ExpiryDate',
    },
    {
      fieldLabel: {
        label: 'Treatment Description',
        placeholderText: 'Treatment Description',
        description: 'Treatment Description',
      },
      fieldType: 'textField',
      fieldWidth: 0.5,
      isRequired: false,
      key: 'TreatmentDescription',
    },
    {
      fieldLabel: { label: 'RX label ', placeholderText: 'RX label ', description: 'RX label ' },
      fieldType: 'textField',
      fieldWidth: 0.5,
      isRequired: true,
      key: 'RXlabel ',
    },
    {
      fieldLabel: { label: 'RX Number', placeholderText: 'RX Number', description: 'RX Number' },
      fieldType: 'textField',
      fieldWidth: 0.3333,
      isRequired: false,
      key: 'RXNumber',
    },
    {
      fieldLabel: { label: 'School Year', placeholderText: 'School Year', description: 'School Year' },
      fieldType: 'select',
      fieldWidth: 0.3333,
      isRequired: false,
      options: ['2022-2023', '2021-2022'],
      key: 'SchoolYear',
    },
    {
      fieldLabel: { label: 'RX Provider Name', placeholderText: 'RX Provider Name', description: 'RX Provider Name' },
      fieldType: 'textField',
      fieldWidth: 0.3333,
      isRequired: false,
      key: 'RXProviderName',
    },
    {
      fieldLabel: { label: 'Treatment Status', placeholderText: 'Treatment Status', description: 'Treatment Status' },
      fieldType: 'radio',
      fieldWidth: 1,
      isRequired: false,
      options: ['Active', 'Discontinued'],
      key: 'TreatmentStatus',
    },
  {
    fieldLabel: { label: 'Timing Details', placeholderText: 'Timing Details', description: 'Timing Details' },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    key: 'TimingDetails',
  },
  {
    fieldLabel: { label: 'As Needed', placeholderText: 'As Needed', description: 'As Needed' },
    fieldType: 'checkbox',
    fieldWidth: 1,
    isRequired: false,
    key: 'AsNeeded',
  },
  {
    fieldLabel: { label: 'Times Per Day', placeholderText: 'Times Per Day', description: 'Times Per Day' },
    fieldType: 'select',
    fieldWidth: 1,
    isRequired: false,
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    key: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '5',
    key: 'Timeoftreatment1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '5',
    key: 'Timeoftreatment2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '5',
    key: 'Timeoftreatment3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '5',
    key: 'Timeoftreatment4',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 5',
      placeholderText: 'Time of treatment 5',
      description: 'Time of treatment 5',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '5',
    key: 'Timeoftreatment5',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '4',
    key: 'Timeoftreatment1Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '4',
    key: 'Timeoftreatment2Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '4',
    key: 'Timeoftreatment3Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '4',
    key: 'Timeoftreatment4Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '6',
    key: 'Timeoftreatment1Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '6',
    key: 'Timeoftreatment2Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '6',
    key: 'Timeoftreatment3Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment1Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment2Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment3Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment1Copy5',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment2Copy4',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment3Copy4',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment4Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment1Copy6',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment2Copy5',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment3Copy5',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment4Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 5',
      placeholderText: 'Time of treatment 5',
      description: 'Time of treatment 5',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment5Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment1Copy7',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment2Copy6',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment3Copy6',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment4Copy4',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 5',
      placeholderText: 'Time of treatment 5',
      description: 'Time of treatment 5',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment5Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 6',
      placeholderText: 'Time of treatment 6',
      description: 'Time of treatment 6',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment6',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 7',
      placeholderText: 'Time of treatment 7',
      description: 'Time of treatment 7',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment7',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 8',
      placeholderText: 'Time of treatment 8',
      description: 'Time of treatment 8',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment8',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 9',
      placeholderText: 'Time of treatment 9',
      description: 'Time of treatment 9',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment9',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 10',
      placeholderText: 'Time of treatment 10',
      description: 'Time of treatment 10',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '10',
    key: 'Timeoftreatment10',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 6',
      placeholderText: 'Time of treatment 6',
      description: 'Time of treatment 6',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment6Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 7',
      placeholderText: 'Time of treatment 7',
      description: 'Time of treatment 7',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment7Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 8',
      placeholderText: 'Time of treatment 8',
      description: 'Time of treatment 8',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment8Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 9',
      placeholderText: 'Time of treatment 9',
      description: 'Time of treatment 9',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '9',
    key: 'Timeoftreatment9Copy1',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 5',
      placeholderText: 'Time of treatment 5',
      description: 'Time of treatment 5',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment5Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 6',
      placeholderText: 'Time of treatment 6',
      description: 'Time of treatment 6',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment6Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 7',
      placeholderText: 'Time of treatment 7',
      description: 'Time of treatment 7',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment7Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 8',
      placeholderText: 'Time of treatment 8',
      description: 'Time of treatment 8',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '8',
    key: 'Timeoftreatment8Copy2',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment4Copy5',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 5',
      placeholderText: 'Time of treatment 5',
      description: 'Time of treatment 5',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment5Copy4',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 6',
      placeholderText: 'Time of treatment 6',
      description: 'Time of treatment 6',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment6Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 7',
      placeholderText: 'Time of treatment 7',
      description: 'Time of treatment 7',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '7',
    key: 'Timeoftreatment7Copy3',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 4',
      placeholderText: 'Time of treatment 4',
      description: 'Time of treatment 4',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '6',
    key: 'Timeoftreatment4Copy6',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 5',
      placeholderText: 'Time of treatment 5',
      description: 'Time of treatment 5',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '6',
    key: 'Timeoftreatment5Copy5',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 6',
      placeholderText: 'Time of treatment 6',
      description: 'Time of treatment 6',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '6',
    key: 'Timeoftreatment6Copy4',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '3',
    key: 'Timeoftreatment1Copy8',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '3',
    key: 'Timeoftreatment2Copy7',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 3',
      placeholderText: 'Time of treatment 3',
      description: 'Time of treatment 3',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '3',
    key: 'Timeoftreatment3Copy7',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '2',
    key: 'Timeoftreatment1Copy9',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 2',
      placeholderText: 'Time of treatment 2',
      description: 'Time of treatment 2',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '2',
    key: 'Timeoftreatment2Copy8',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: {
      label: 'Time of treatment 1',
      placeholderText: 'Time of treatment 1',
      description: 'Time of treatment ',
    },
    fieldType: 'textField',
    fieldWidth: 1,
    isRequired: true,
    ifValueIs: '1',
    key: 'Timeoftreatment1Copy10',
    dependentParentLabel: 'TimesPerDay',
  },
  {
    fieldLabel: { label: 'Days', placeholderText: 'Days', description: 'Days' },
    fieldType: 'subTitle',
    fieldWidth: 1,
    isRequired: false,
    key: 'Days',
  },
  {
    fieldLabel: { label: 'Sunday', placeholderText: 'Sunday', description: 'Sunday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Sunday',
  },
  {
    fieldLabel: { label: 'Tuesday', placeholderText: 'Tuesday', description: 'Tuesday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Tuesday',
  },
  {
    fieldLabel: { label: 'Thursday', placeholderText: 'Thursday', description: 'Thursday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Thursday',
  },
  {
    fieldLabel: { label: 'Saturday', placeholderText: 'Saturday', description: 'Saturday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Saturday',
  },
  {
    fieldLabel: { label: 'Monday', placeholderText: 'Monday', description: 'Monday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Monday',
  },
  {
    fieldLabel: { label: 'Wednesday', placeholderText: 'Wednesday', description: 'Wednesday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Wednesday',
  },
  {
    fieldLabel: { label: 'Friday', placeholderText: 'Friday', description: 'Friday' },
    fieldType: 'checkbox',
    fieldWidth: 0.5,
    isRequired: false,
    key: 'Friday',
  },
];