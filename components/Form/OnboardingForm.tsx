import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useRouter } from "next/router";

import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import { useAppDispatch } from "@/hooks/useRedux";
import { onboardingFormSchema } from "@/components/Form/Schema/OnboardingSchema";
import Button from "@/components/UI/Button";
import { updateOnboarding } from "@/redux/auth-slice";
import useOnboardingMutation from "@/hooks/useOnboardingMutation";

export default function OnboardingForm() {
  const dispatch = useAppDispatch();
  //   const router = useRouter();
  const { mutate, data, isLoading } = useOnboardingMutation();

  console.log("data", data);

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(onboardingFormSchema),
  });

  async function onSubmit(data: any) {
    console.log("data", data);
    mutate(data.email, {
      onSuccess: (response: any) => {
        console.log("onboard-response", response);
        dispatch(updateOnboarding(true));
      },
      onError: (err: any) => {
        console.log("onboard-error", err);
        dispatch(updateOnboarding(false));
      },
    });
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
