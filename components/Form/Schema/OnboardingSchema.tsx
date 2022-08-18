import * as yup from "yup";

export const onboardingFormSchema = yup.object({
  email: yup
    .string()
    .email("Enter a vaild email address")
    .required("E-mail address is required"),
});
