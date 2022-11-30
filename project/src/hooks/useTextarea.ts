import { ChangeEvent, useState } from 'react';

export default function useTextarea(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
