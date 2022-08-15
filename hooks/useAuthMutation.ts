import useRequestMutation from "@/hooks/useRequestMutation";
import useAuth from "@/hooks/useAuth";
import useUI from "@/hooks/useUI";

export default function useAuthMutation() {
  const { toggleModal } = useUI();
  const { authSignup, authSignIn, authSignOut } = useAuth();

  function useSignupMutation() {
    return useRequestMutation(
      ({ email, password }) => authSignup(email, password),
      {
        mutationKey: "useSignupMutation",
        cacheKey:"useAuthMutation",
        success: "Sign up Successful",
        error: "Sign up error",
      }
    );
  }

  function useSigninMutation() {
    return useRequestMutation(
      ({ email, password }) => authSignIn(email, password),
      {
        mutationKey: "useSigninMutation",
        success: "Sign in successful",
        cacheKey: "useAuthMutation",
        error: "oops, an error occured",
        onSuccessMethod: () => toggleModal(null),
      }
    );
  }

  function useSignoutMutation() {
    return useRequestMutation(authSignOut, {
      mutationKey: "useSignoutMutation",
      success: "logout successful",
      cacheKey: "useAuthMutation",
      error: "oops, an error occured",
    });
  }

  return { useSignupMutation, useSigninMutation, useSignoutMutation };
}
