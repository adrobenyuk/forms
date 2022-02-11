import React from "react";
import { TextField } from "@shopmonkeyus/ui-kit";
import { useField } from "formik";

interface Props extends React.ComponentProps<typeof TextField> {
  name: string;
}
const FormTextField = ({
  name,
  colorVariant,
  label,
  caption,
  iconAfter,
  iconBefore,
  required,
  validationStatus,
  ...props
}: Props) => {
  const [field, meta] = useField<typeof props.value>({
    name,
    required,
    ...props,
  });

  return (
    <TextField
      {...{
        colorVariant,
        label,
        caption,
        iconAfter,
        iconBefore,
        required,
        ...field,
      }}
      validationStatus={meta.touched && meta.error ? "error" : validationStatus}
      errorMessage={meta.error}
    />
  );
};

export default FormTextField;
