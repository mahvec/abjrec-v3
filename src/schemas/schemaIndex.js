import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("please enter a valid email").required("Required"),
  phone: yup.number().positive().integer().required("Required"),
  cover_letter: yup.string().required("Required"),
  state: yup.string().required("Required"),
  local_government: yup.string().required("Required"),
  resume: yup
    .mixed()
    .required("Resume is required")
    .test("fileSize", "File size is too large", (value) => {
      if (!value) {
        return true;
      }
      return value.size <= 1024 * 1024 * 7;
    })
    .test("fileType", "Only PDF files are allowed", (value) => {
      if (!value) {
        return true;
      }
      return value.type === "application/pdf";
    }),
  linkedin_profile: yup.string().required("Required"),
  nin: yup.number().positive().integer().required("Required"),
});
