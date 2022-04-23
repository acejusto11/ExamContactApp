import RadioGroup from "@material-ui/core/RadioGroup";

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

const FormRadioGroupField = (props) => {
  return <RadioGroup {...fieldToInput(props)} />;
};

export default FormRadioGroupField;
