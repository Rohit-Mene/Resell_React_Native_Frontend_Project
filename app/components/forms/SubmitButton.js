import React from "react";
import { useFormikContext } from "formik";
//we use useFormikContext so that we can use the passed formik props in another component
import AppButton from "../AppButton";
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
