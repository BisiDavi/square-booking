import authFormContent from "@/json/auth-form.json";
import Input from "@/components/Input";

export function SignupForm() {
  return (
    <form>
      {authFormContent.signin.map((formElement, index) => (
        <Input
          key={`${formElement.type}-${index}`}
          placeholder={formElement.placeholder}
          type={formElement.type}
        />
      ))}
    </form>
  );
}

export function SigninForm() {
  return (
    <form>
      {authFormContent.signup.map((formElement, index) => (
        <Input
          key={`${formElement.type}-${index}`}
          placeholder={formElement.placeholder}
          type={formElement.type}
        />
      ))}
    </form>
  );
}
