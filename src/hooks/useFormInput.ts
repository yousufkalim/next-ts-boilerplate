import { ChangeEvent, FocusEvent, useState } from 'react';

interface FormInputProps {
  initialValue?: string;
}

interface FormInput {
  value: string;
  error: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onInvalid: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function useFormInput({ initialValue = '' }: FormInputProps): FormInput {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string | undefined>();
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsDirty(true);

    // Resolve errors as soon as input becomes valid
    if (error && event.target.checkValidity()) {
      setError(undefined);
    }
  };

  const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    // Prevent native errors appearing
    event.preventDefault();
    setError(event.target.validationMessage);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    // Only validate when the user has made a change
    if (isDirty) {
      event.target.checkValidity();
    }
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid,
  };
}
