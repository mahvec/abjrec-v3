import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().positive().integer().required("Required"),
  cover_letter: yup.string().required("Required"),
  linkedin_profile: yup.string().required("Required"),
  nin: yup.number().positive().integer().required("Required"),
});
