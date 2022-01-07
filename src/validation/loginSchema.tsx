import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  mode: Yup.string().required("Required"),
  email: Yup.string().when("mode", {
    is: "email",
    then: Yup.string()
      .email("Please enter a valid email!")
      .required("The email is required!"),
  }),
  phone: Yup.string().when("mode", {
    is: "phone",
    then: Yup.string()
      .matches(
        /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        "Please enter a valid phone number!"
      )
      .required("The phone number is required!"),
  }),
});

export default loginSchema;
