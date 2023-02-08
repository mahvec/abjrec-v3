import * as yup from "yup";

export const basicSchema = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email("please enter a valid email").required("Required"),
  phoneNumber: yup.number().required("Required"),
  address: yup.string().required("Required"),
  stateCap: yup.string().required("Required"),
  city: yup.string().required("Required"),
  position: yup.string().required("Required"),
  category: yup.string().required("Required"),
  linkedIn: yup.string().required("Required"),
});
