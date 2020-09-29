import * as React from "react";
import { useField, FieldHookConfig } from "formik";

export const InputField: React.FC<FieldHookConfig<string>> = (props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        <input {...field} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {helpers}
    </>
  );
};
