import * as yup from 'yup';

export const articleValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
