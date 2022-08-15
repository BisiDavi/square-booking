import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import Input from "@/components/Form/FormElement/Input";
import authFormContent from "@/json/auth-form.json";
import {
  signinFormSchema,
  signupFormSchema,
} from "@/components/Form/AuthFormSchema";
import Button from "@/components/UI/Button";
import useFirebase from "@/hooks/useFirebase";

type formContentType = {
  type: string;
  icon?: string;
  name: string;
  placeholder: string;
}[];

interface Props {
  formContent: formContentType[];
}

function FormElement({ formContent }: Props) {
  return (
    <>
      {formContent.map((item, indexV: number) => {
        const inputClassname = item.length > 1 ? "w-1/2" : "w-full";

        return (
          <div
            key={indexV}
            className="input-wrapper justify-between flex items-center w-full"
          >
            {item.map((elementItem, index) => {
              const elementClassname =
                Number(item.length - 1) !== index ? "mr-4" : "";
              return (
                <Input
                  key={`${elementItem.type}-${index}`}
                  placeholder={elementItem.placeholder}
                  type={elementItem.type}
                  icon={elementItem.icon}
                  name={elementItem.name}
                  className={`${inputClassname} ${elementClassname}`}
                />
              );
            })}
          </div>
        );
      })}
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
      <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
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
