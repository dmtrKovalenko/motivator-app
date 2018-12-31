import { string, object, number, setLocale } from 'yup';

setLocale({
  number: {
    min: 'Minimal value - ${min}',
    max: 'Maximal value - ${max}',
  },
});

export const RegisterSchema = object({
  name: string().required(),
  password: number().required(),
  weight: number()
    .required()
    .positive()
    .min(40)
    .max(200),
  goal: number()
    .positive()
    .required()
    .min(40)
    .max(200),
});
