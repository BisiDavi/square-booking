import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/hooks/useRedux";

import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import { onboardingFormSchema } from "@/components/Form/Schema/OnboardingSchema";
import Button from "@/components/UI/Button";
import { updateOnboarding } from "@/redux/auth-slice";

export default function OnboardingForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(onboardingFormSchema),
  });

  async function onSubmit(data: any) {
    console.log("data", data);
    axios
      .post("/api/onboard-user", { email: data?.email })
      .then((response) => {
        console.log("onboard-response", response);
        dispatch(updateOnboarding(true));
      })
      .catch((err) => {
        console.log("onboard-error", err);
        dispatch(updateOnboarding(false));
        // router.push(err.)
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
            className="bg-site-purple flex font-medium items-center w-1/3  mx-auto justify-center flex text-white px-3 py-2 rounded-md hover:bg-blue-500"
          />
        </form>
      </FormProvider>
    </div>
  );
}
