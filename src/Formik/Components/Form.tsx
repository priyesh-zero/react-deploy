import * as React from "react";
import { Formik, FormikValues } from "formik";

interface Props {
  initialValues: FormikValues;
  onSubmit: () => void;
}

export const Form: React.FC<Props> = ({
  initialValues,
  onSubmit,
  children,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => children}
    </Formik>
  );
};
