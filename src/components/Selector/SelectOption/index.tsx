import React from "react";

interface SelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  label: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  label,
  ...rest
}) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};

export default SelectOption;  