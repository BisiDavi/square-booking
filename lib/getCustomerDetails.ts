import { createCustomer, searchCustomer } from "@/requests/postRequests";

type dataType = {
  email: string;
  firstName: string;
  lastName: string;
};

export async function getCustomerDetails(data: dataType | any) {
  const { email } = data;
  try {
    const searchCustomerResult = await searchCustomer(email);
    const resultArrayLength = Object.keys(searchCustomerResult.data).length;
    if (resultArrayLength > 0) {
      return searchCustomerResult.data;
    } else {
      const createCustomerResult = await createCustomer(data);
      return createCustomerResult.data;
    }
  } catch (error) {
    return null;
  }
}
