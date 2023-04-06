import * as yup from 'yup';

import { isStartsWithUpperCase } from '@/utils/validate';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Field is required')
    .test('is-starts-with-uppercase', 'Name should start with uppercase letter', (value) =>
      isStartsWithUpperCase(value)
    ),
  birthday: yup
    .date()
    .nullable()
    .transform((v: Date) => (v instanceof Date && !isNaN(v.getTime()) ? v : null))
    .required('Field is required'),
  country: yup.string().required('Field is required'),
  petList: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        value: yup.string().required(),
        isChecked: yup.boolean().required(),
      })
    )
    .min(1)
    .required('Field is required'),
  gender: yup.string().required('Field is required'),
  image: yup
    .object()
    .shape({
      name: yup.string().required('Field is required'),
    })
    .label('File'),
});
