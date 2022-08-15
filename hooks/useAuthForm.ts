import useAuthMutation from "@/hooks/useAuthMutation";
import useCustomerMutation from "@/hooks/useCustomerMutation";

export default function useAuthForm() {
  const { useSignupMutation, useSigninMutation } = useAuthMutation();
  const { useCreateSquareCustomer } = useCustomerMutation();
  const signupMutate = useSignupMutation();
  const signinMutate = useSigninMutation();
  const createCustomerMutate = useCreateSquareCustomer();

  const onSubmit = (data: any, type: "signin" | "signup") => {
    console.log("onsubmit-data", data, "type", type);
    if (type === "signin") {
      const { signinEmail, signinPassword } = data;
      signinMutate.mutate({ email: signinEmail, password: signinPassword });
    } else if (type === "signup") {
      const { signupEmail, signupPassword, firstName, lastName } = data;
      signupMutate.mutate({ email: signupEmail, password: signupPassword });
      createCustomerMutate.mutate({ email: signupEmail, firstName, lastName });
    }
  };

  return { onSubmit };
}
