import TextField from "@material-ui/core/TextField";

const fieldToInput = ({
  disabled,
  field: { onBlur: fieldOnBlur, ...field },
  form: { isSubmitting },
  onBlur,
  ...props
}) => {
  return {
    disabled: disabled ?? isSubmitting,
    onBlur:
      onBlur ??
      function (e) {
        fieldOnBlur(e ?? field.name);
      },
    ...field,
    ...props,
  };
};

const FormInputField = (props) => {
  return <TextField {...fieldToInput(props)} />;
};

export default FormInputField;
