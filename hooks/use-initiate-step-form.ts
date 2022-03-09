import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

function useInitiateStepForm<T>(schema: AnyObjectSchema, defaultValues: any) {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return methods;
}

export default useInitiateStepForm;
