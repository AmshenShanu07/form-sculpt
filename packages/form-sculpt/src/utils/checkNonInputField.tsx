import { FieldType } from '../Context/PropContext/type';

const nonInputFields:FieldType[] = ['title','subTitle', 'label', 'label', 'description'];

const checkIfNonInputField = (fielType:FieldType):boolean => nonInputFields.includes(fielType);

export default checkIfNonInputField;