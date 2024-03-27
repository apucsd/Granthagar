import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TCustomFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};
const CustomForm = ({ onSubmit, children }: TCustomFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CustomForm;