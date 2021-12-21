import * as Yup from "yup";
import { CREATE_TYPE } from "../const/forms";

const loginSchema = Yup.object().shape({
  type: Yup.number().required("Required"),
  email: Yup.string().when("type", {
    is: CREATE_TYPE.EMAIL,
    then: Yup.string()
      .email("Please enter a valid email!")
      .required("The email is required!"),
  }),
  phone: Yup.string().when("type", {
    is: CREATE_TYPE.PHONE,
    then: Yup.string()
      .matches(
        /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        "Please enter a valid phone number!"
      )
      .required("The phone number is required!"),
  }),
});

export default loginSchema;
