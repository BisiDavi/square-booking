import useAuthMutation from "@/hooks/useAuthMutation";
import useCustomerMutation from "@/hooks/useCustomerMutation";
import useUI from "@/hooks/useUI";
import firebaseDB from "@/lib/firebaseDB";

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
            createCustomerMutate.mutate(
              {
                email: signupEmail,
                firstName,
                lastName,
              },
              {
                onSuccess: (data: any) => {
                  console.log("data", data);
                  if (typeof data.data === "object") {
                    const stringifyData = JSON.stringify(data?.data);
                    const { writeData } = firebaseDB();
                    writeData(
                      stringifyData,
                      `/users/user/${data.data.customer.id}`
                    );
                  } else if (typeof data?.data === "string") {
                    const { writeData } = firebaseDB();
                    writeData(
                      data.data,
                      `/users/user/${data.data.customer.id}`
                    );
                  }
                },
              }
            );
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
