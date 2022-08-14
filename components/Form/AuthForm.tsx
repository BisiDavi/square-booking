import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import Input from "@/components/Input";
import authFormContent from "@/json/auth-form.json";
import {
  signinFormSchema,
  signupFormSchema,
} from "@/components/Form/AuthFormSchema";
import Button from "@/components/Button";
import useFirebase from "@/hooks/useFirebase";

interface Props {
  formContent: {
    type: string;
    icon?: string;
    name: string;
    placeholder: string;
  }[];
}

function FormElement({ formContent }: Props) {
  return (
    <>
      {formContent.map((item, index: number) => (
        <Input
          key={`${item.type}-${index}`}
          placeholder={item.placeholder}
          type={item.type}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </>
  );
}

interface AuthFormProps {
  type: "signin" | "signup";
}

export default function AuthForm({ type }: AuthFormProps) {
  const { authSignup, authSignIn } = useFirebase();
  const formSchema = type === "signin" ? signinFormSchema : signupFormSchema;
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: any) => {
    console.log("onsubmit-data", data);
    return type === "signin"
      ? authSignIn(data.signinEmail, data.signinPassword)
      : authSignup(data.signupEmail, data.signupPassword);
  };
  const formData =
    type === "signin" ? authFormContent.signin : authFormContent.signup;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormElement formContent={formData} />
        <Button
          text="Submit"
          type="submit"
          className="mx-auto flex border-blue-500 border py-1 rounded px-3 hover:bg-blue-600 hover:text-white"
        />
      </form>
    </FormProvider>
  );
}
