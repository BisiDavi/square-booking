import useAuthMutation from "@/hooks/useAuthMutation";
import useCustomerMutation from "@/hooks/useCustomerMutation";
import useUI from "@/hooks/useUI";

export default function useAuthForm() {
  const { useSignupMutation, useSigninMutation } = useAuthMutation();
  const { useCreateSquareCustomer } = useCustomerMutation();
  const signupMutate = useSignupMutation();
  const signinMutate = useSigninMutation();
  const createCustomerMutate = useCreateSquareCustomer();
  const { toggleModal } = useUI();

  const onSubmit = (
    data: any,
    type: "signin" | "signup",
    methods: { reset: () => void }
  ) => {
    if (type === "signin") {
      const { signinEmail, signinPassword } = data;
      signinMutate.mutate({ email: signinEmail, password: signinPassword });
    } else if (type === "signup") {
      const { signupEmail, signupPassword, firstName, lastName } = data;
      signupMutate.mutate(
        { email: signupEmail, password: signupPassword, firstName, lastName },
        {
          onSuccess: () => {
            createCustomerMutate.mutate({
              email: signupEmail,
              firstName,
              lastName,
            });
            toggleModal(null);
          },
          onError: () => {
            methods.reset();
          },
        }
      );
    }
  };

  return { onSubmit };
}
