import * as yup from "yup";
import axios from "axios";

export const formSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup.number().positive().integer().required("Required"),
  cover_letter: yup.string(),
  linkedin_profile: yup.string().required("Required"),
  // nin: yup.number().positive().integer().required("Required"),
  nin: yup
    .number()
    .positive()
    .integer()
    .required("NIN is required")
    .test(
      "nin-validation",
      "Invalid NIN, please provide valid NIN",
      async (value) => {
        try {
          const response = await axios.get(
            `http://52.15.120.183/verify.php?pickNIN=${value}&key=t/BLOvt6c95mV20ka1pqreVkrwprcbdb`
          );
          return response.data.isValid;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    ),
});
