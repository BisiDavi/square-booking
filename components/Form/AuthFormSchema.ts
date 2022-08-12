import * as yup from "yup";

export const signinFormSchema = yup.object({
  signinEmail: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  signinPassword: yup
    .string()
    .min(6, "minimum of 6 characters is required")
    .required("Password is required"),
});

export const signupFormSchema = yup.object({
  signupEmail: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
  signupPassword: yup
    .string()
    .min(6, "minimum of 6 characters is required")
    .required("Password is required"),
  signupConfirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("signupPassword"), null], "Passwords must match"),
});
