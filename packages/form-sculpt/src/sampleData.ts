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
    options: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
    "fieldLabel": {
      "label": "General Details",
      "placeholderText": "General Details",
      "description": "General Details"
    },
    "fieldType": "subTitle",
    "fieldWidth": 1,
    "isRequired": false,
    "options": [],
    "key": "GeneralDetails"
  },
  {
    "fieldLabel": {
      "label": "School Year",
      "placeholderText": "School Year",
      "description": "School Year"
    },
    "fieldType": "select",
    "fieldWidth": 1,
    "isRequired": true,
    "options": ["2022-2023", "2021-2022"],
    "key": "SchoolYear"
  },
  {
    "fieldLabel": {
      "label": "Time of 1st Meds",
      "placeholderText": "Time of 1st Meds",
      "description": "Time of 1st Meds"
    },
    "fieldType": "time",
    "fieldWidth": 1,
    "isRequired": true,
    "options": [],
    "key": "Timeof1stMeds"
  },
  {
    "fieldLabel": {
      "label": "Medication Details",
      "placeholderText": "Medication Details",
      "description": "Medication Details"
    },
    "fieldType": "subTitle",
    "fieldWidth": 1,
    "isRequired": false,
    "options": [],
    "key": "MedicationDetails"
  },
  {
    "fieldLabel": {
      "label": "Medication Name",
      "placeholderText": "Medication Name",
      "description": "Medication Name"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": true,
    "disable": true,
    "key": "MedicationName"
  },
  {
    "fieldLabel": {
      "label": "Dose",
      "placeholderText": "Dose",
      "description": "Dose"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": true,
    "disable": false,
    "key": "Dose"
  },
  {
    "fieldLabel": {
      "label": "Medication Form",
      "placeholderText": "Medication Form",
      "description": "Medication Form"
    },
    "fieldType": "select",
    "fieldWidth": 0.5,
    "isRequired": true,
    "options": ["Capsules", "Tablets", "Liquid"],
    "disable": true,
    "key": "MedicationForm"
  },
  {
    "fieldLabel": {
      "label": "Expiry Date",
      "placeholderText": "Expiry Date",
      "description": "Expiry Date"
    },
    "fieldType": "date",
    "fieldWidth": 0.5,
    "isRequired": true,
    "options": [],
    "key": "ExpiryDate"
  },
  {
    "fieldLabel": {
      "label": "Medication Status",
      "placeholderText": "Medication Status",
      "description": "Medication Status"
    },
    "fieldType": "radio",
    "fieldWidth": 0.5,
    "isRequired": true,
    "options": ["Discontinued", "Active"],
    "key": "MedicationStatus"
  },
  {
    "fieldLabel": {
      "label": "Prescription Details",
      "placeholderText": "Prescription Details",
      "description": "Prescription Details"
    },
    "fieldType": "subTitle",
    "fieldWidth": 1,
    "isRequired": false,
    "options": [],
    "key": "PrescriptionDetails"
  },
  {
    "fieldLabel": {
      "label": "RX Number",
      "placeholderText": "RX Number",
      "description": "RX Number"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "key": "RXNumber"
  },
  {
    "fieldLabel": {
      "label": "RX Provider Name",
      "placeholderText": "RX Provider Name",
      "description": "RX Provider Name"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "key": "RXProviderName"
  },
  {
    "fieldLabel": {
      "label": "Available Quantity",
      "placeholderText": "Available Quantity",
      "description": "Available Quantity"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": true,
    "key": "AvailableQuantity"
  },
  {
    "fieldLabel": {
      "label": "Quantity Received",
      "placeholderText": "Quantity Received",
      "description": "Quantity Received"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": true,
    "key": "QuantityReceived"
  },
  {
    "fieldLabel": {
      "label": "Reorder Quantity",
      "placeholderText": "Reorder Quantity",
      "description": "Reorder Quantity"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": true,
    "key": "ReorderQuantity",
    "validation": { "validation": "number" }
  },
  {
    "fieldLabel": {
      "label": "RX label ",
      "placeholderText": "RX label ",
      "description": "RX label "
    },
    "fieldType": "file",
    "fieldWidth": 0.5,
    "isRequired": false,
    "options": [],
    "key": "RXlabel"
  },
  {
    "fieldLabel": {
      "label": "Timing Details",
      "placeholderText": "Timing Details",
      "description": "Timing Details"
    },
    "fieldType": "subTitle",
    "fieldWidth": 1,
    "isRequired": false,
    "options": [],
    "key": "TimingDetails"
  },
  {
    "fieldLabel": {
      "label": "As Needed",
      "placeholderText": "As Needed",
      "description": "As Needed"
    },
    "fieldType": "checkbox",
    "fieldWidth": 0.5,
    "isRequired": false,
    "options": [],
    "key": "AsNeeded"
  },
  {
    "fieldLabel": {
      "label": "Dosage Unit",
      "placeholderText": "Dosage Unit",
      "description": "Dosage Unit"
    },
    "fieldType": "textField",
    "fieldWidth": 1,
    "isRequired": true,
    "ifValueIs": true,
    "key": "AsNeededIfValueOfDosageUnitIstrue",
    "dependentParentLabel": "AsNeeded"
  },
  {
    "fieldLabel": {
      "label": "Times Per Day",
      "placeholderText": "Times Per Day",
      "description": "Times Per Day"
    },
    "fieldType": "select",
    "fieldWidth": 1,
    "isRequired": false,
    "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "key": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "1",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is1",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "1",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is1",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "2",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is2",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "2",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is2",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "3",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is3",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "3",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is3",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "3",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is3",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 5",
      "placeholderText": "Time of Medicine 5",
      "description": "Time of Medicine 5"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine5Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 1",
      "placeholderText": "Time of Medicine 1",
      "description": "Time of Medicine 1"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine1Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 1",
      "placeholderText": "Dosage of Medicine 1",
      "description": "Dosage of Medicine 1"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfDosageofMedicine1Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 5",
      "placeholderText": "Time of Medicine 5",
      "description": "Time of Medicine 5"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine5Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 5",
      "placeholderText": "Dosage of Medicine 5",
      "description": "Dosage of Medicine 5"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine5Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 6",
      "placeholderText": "Time of Medicine 6",
      "description": "Time of Medicine 6"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine6Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 6",
      "placeholderText": "Dosage of Medicine 6",
      "description": "Dosage of Medicine 6"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine6Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 7",
      "placeholderText": "Time of Medicine 7",
      "description": "Time of Medicine 7"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine7Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 7",
      "placeholderText": "Dosage of Medicine 7",
      "description": "Dosage of Medicine 7"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine7Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 8",
      "placeholderText": "Time of Medicine 8",
      "description": "Time of Medicine 8"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine8Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 8",
      "placeholderText": "Dosage of Medicine 8",
      "description": "Dosage of Medicine 8"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine8Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 9",
      "placeholderText": "Time of Medicine 9",
      "description": "Time of Medicine 9"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine9Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 9",
      "placeholderText": "Dosage of Medicine 9",
      "description": "Dosage of Medicine 9"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine9Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 10",
      "placeholderText": "Time of Medicine 10",
      "description": "Time of Medicine 10"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine10Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 10",
      "placeholderText": "Dosage of Medicine 10",
      "description": "Dosage of Medicine 10"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "10",
    "key": "TimesPerDayIfValueOfDosageofMedicine10Is10",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 5",
      "placeholderText": "Dosage of Medicine 5",
      "description": "Dosage of Medicine 5"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine5Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 6",
      "placeholderText": "Time of Medicine 6",
      "description": "Time of Medicine 6"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine6Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 6",
      "placeholderText": "Dosage of Medicine 6",
      "description": "Dosage of Medicine 6"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine6Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 7",
      "placeholderText": "Time of Medicine 7",
      "description": "Time of Medicine 7"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine7Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 7",
      "placeholderText": "Dosage of Medicine 7",
      "description": "Dosage of Medicine 7"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine7Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 8",
      "placeholderText": "Time of Medicine 8",
      "description": "Time of Medicine 8"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine8Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 8",
      "placeholderText": "Dosage of Medicine 8",
      "description": "Dosage of Medicine 8"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine8Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 9",
      "placeholderText": "Time of Medicine 9",
      "description": "Time of Medicine 9"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine9Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 9",
      "placeholderText": "Dosage of Medicine 9",
      "description": "Dosage of Medicine 9"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "9",
    "key": "TimesPerDayIfValueOfDosageofMedicine9Is9",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 5",
      "placeholderText": "Time of Medicine 5",
      "description": "Time of Medicine 5"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine5Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 5",
      "placeholderText": "Dosage of Medicine 5",
      "description": "Dosage of Medicine 5"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine5Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 6",
      "placeholderText": "Time of Medicine 6",
      "description": "Time of Medicine 6"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine6Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 6",
      "placeholderText": "Dosage of Medicine 6",
      "description": "Dosage of Medicine 6"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine6Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 7",
      "placeholderText": "Time of Medicine 7",
      "description": "Time of Medicine 7"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine7Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 7",
      "placeholderText": "Dosage of Medicine 7",
      "description": "Dosage of Medicine 7"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine7Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 8",
      "placeholderText": "Time of Medicine 8",
      "description": "Time of Medicine 8"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine8Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 8",
      "placeholderText": "Dosage of Medicine 8",
      "description": "Dosage of Medicine 8"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "8",
    "key": "TimesPerDayIfValueOfDosageofMedicine8Is8",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 5",
      "placeholderText": "Time of Medicine 5",
      "description": "Time of Medicine 5"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine5Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 5",
      "placeholderText": "Dosage of Medicine 5",
      "description": "Dosage of Medicine 5"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine5Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 6",
      "placeholderText": "Time of Medicine 6",
      "description": "Time of Medicine 6"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine6Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 6",
      "placeholderText": "Dosage of Medicine 6",
      "description": "Dosage of Medicine 6"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine6Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 7",
      "placeholderText": "Time of Medicine 7",
      "description": "Time of Medicine 7"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine7Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 7",
      "placeholderText": "Dosage of Medicine 7",
      "description": "Dosage of Medicine 7"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "7",
    "key": "TimesPerDayIfValueOfDosageofMedicine7Is7",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 5",
      "placeholderText": "Time of Medicine 5",
      "description": "Time of Medicine 5"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine5Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 5",
      "placeholderText": "Dosage of Medicine 5",
      "description": "Dosage of Medicine 5"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "key": "TimesPerDayIfValueOfDosageofMedicine5Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 6",
      "placeholderText": "Time of Medicine 6",
      "description": "Time of Medicine 6"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine6Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 6",
      "placeholderText": "Dosage of Medicine 6",
      "description": "Dosage of Medicine 6"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "6",
    "key": "TimesPerDayIfValueOfDosageofMedicine6Is6",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 5",
      "placeholderText": "Time of Medicine 5",
      "description": "Time of Medicine 5"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine5Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 5",
      "placeholderText": "Dosage of Medicine 5",
      "description": "Dosage of Medicine 5"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "5",
    "key": "TimesPerDayIfValueOfDosageofMedicine5Is5",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 4",
      "placeholderText": "Time of Medicine 4",
      "description": "Time of Medicine 4"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine4Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 4",
      "placeholderText": "Dosage of Medicine 4",
      "description": "Dosage of Medicine 4"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "4",
    "key": "TimesPerDayIfValueOfDosageofMedicine4Is4",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "3",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is3",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 3",
      "placeholderText": "Time of Medicine 3",
      "description": "Time of Medicine 3"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "3",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine3Is3",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 3",
      "placeholderText": "Dosage of Medicine 3",
      "description": "Dosage of Medicine 3"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "3",
    "key": "TimesPerDayIfValueOfDosageofMedicine3Is3",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Time of Medicine 2",
      "placeholderText": "Time of Medicine 2",
      "description": "Time of Medicine 2"
    },
    "fieldType": "time",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "2",
    "options": [],
    "key": "TimesPerDayIfValueOfTimeofMedicine2Is2",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Dosage of Medicine 2",
      "placeholderText": "Dosage of Medicine 2",
      "description": "Dosage of Medicine 2"
    },
    "fieldType": "textField",
    "fieldWidth": 0.5,
    "isRequired": false,
    "ifValueIs": "2",
    "key": "TimesPerDayIfValueOfDosageofMedicine2Is2",
    "dependentParentLabel": "TimesPerDay"
  },
  {
    "fieldLabel": {
      "label": "Days",
      "placeholderText": "Days",
      "description": "Days"
    },
    "fieldType": "checkboxes",
    "fieldWidth": 1,
    "isRequired": false,
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "key": "Days"
  },
  {
    "fieldLabel": {
      "label": "Description",
      "placeholderText": "Description",
      "description": "Description"
    },
    "fieldType": "textArea",
    "fieldWidth": 0.5,
    "isRequired": false,
    "options": [],
    "key": "Description"
  }
];