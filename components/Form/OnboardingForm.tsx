import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import { useAppDispatch } from "@/hooks/useRedux";
import { onboardingFormSchema } from "@/components/Form/Schema/OnboardingSchema";
import Button from "@/components/UI/Button";
import useOnboardingMutation from "@/hooks/useOnboardingMutation";
import cookieExpiryDate from "@/lib/cookieExpiryDate";
import { updateMerchant } from "@/redux/auth-slice";

export default function OnboardingForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { mutate, isLoading } = useOnboardingMutation();
  const [, setCookie] = useCookies(["merchant"]);

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(onboardingFormSchema),
  });

  async function onSubmit(data: any) {
    if (data) {
      mutate(data.email, {
        onSuccess: (data: any) => {
          console.log("onboard-response", data);
          dispatch(
            updateMerchant({
              id: data?.data.merchant_id,
              email: data.data.email,
              expiresAt: data?.data?.expires_at,
            })
          );
          setCookie("merchant", JSON.stringify(data.data), {
            path: "/",
            expires: cookieExpiryDate(),
            maxAge: 604800, // expires in a week
            sameSite: true,
          });
          router.push("/");
        },
        onError: (err: any) => {
          console.log("onboard-error", err?.response.data);
          router.push(err?.response.data.onboardingLink);
        },
      });
    }
  }

  return (
    <div className="w-2/3 mx-auto bg-white  p-4 rounded-md">
      <h5 className="font-bold">
        Welcome <span className="text-2xl ml-2">🤗</span>
      </h5>
      <h6 className="font-medium my-2">Get onboarded with a single click.</h6>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <LabelledInput
            label="Enter your email"
            placeholder="Enter your email"
            name="email"
            type="email"
          />
          <Button
            text="Onboard me"
            type="submit"
            className="bg-site-purple flex font-medium items-center mx-auto justify-center flex text-white px-3 py-2 rounded-md hover:bg-blue-500"
            loading={isLoading}
          />
        </form>
      </FormProvider>
    </div>
  );
}
