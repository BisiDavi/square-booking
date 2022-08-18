import { v4 as uuidv4 } from "uuid";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import LabelledInput from "@/components/Form/FormElement/LabelledInput";
import { onboardingFormSchema } from "@/components/Form/Schema/OnboardingSchema";

export default function OnboardingForm() {
  const clientID = process.env.NEXT_PUBLIC_SQUARE_PRODUCTION_APP_ID;
  const stateCode = uuidv4();

  const squareLink = `https://connect.squareup.com/oauth2/authorize?client_id=${clientID}&scope=APPOINTMENTS_READ+APPOINTMENTS_WRITE+APPOINTMENTS_ALL_READ+APPOINTMENTS_BUSINESS_SETTINGS_READ+ITEMS_READ+ITEMS_WRITE+MERCHANT_PROFILE_READ+MERCHANT_PROFILE_WRITE+EMPLOYEES_WRITE+EMPLOYEES_READ&session=false&state=${stateCode}`;

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(onboardingFormSchema),
  });

  return (
    <div className="w-2/3 mx-auto bg-white  p-4 rounded-md">
      <h5 className="font-bold">
        Welcome <span className="text-2xl ml-2">🤗</span>
      </h5>
      <h6 className="font-medium my-4">Get onboarded with a single click.</h6>

      <FormProvider {...methods}>
        <form>
          <LabelledInput
            label="Enter your email"
            placeholder="Enter your email"
            name="email"
            type="email"
          />
          <a
            href={squareLink}
            className="bg-site-purple flex font-medium items-center w-1/3  mx-auto justify-center flex text-white px-3 py-2 rounded-md hover:bg-blue-500"
          >
            Onboard me
          </a>
        </form>
      </FormProvider>
    </div>
  );
}
