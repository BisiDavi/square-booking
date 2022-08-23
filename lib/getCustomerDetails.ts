import { createCustomer, searchCustomer } from "@/requests/postRequests";

type dataType = {
  email: string;
  firstName: string;
  lastName: string;
};

export async function getCustomerDetails(data: dataType | any) {
  const { email } = data;
  const searchCustomerResult = await searchCustomer(email);
  const parsedData = JSON.parse(searchCustomerResult.data);
  const resultArrayLength = Object.keys(parsedData).length;
  if (resultArrayLength > 0) {
    return parsedData?.customers[0];
  } else {
    const createCustomerResult = await createCustomer(data);
    return createCustomerResult.data;
  }
}
