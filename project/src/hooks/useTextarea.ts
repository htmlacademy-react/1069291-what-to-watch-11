import { ChangeEvent, useState } from 'react';

export default function useTextarea(initialValue: string, maxCount?: number) {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(maxCount && e.target.value.length > maxCount ? e.target.value.slice(0, maxCount) : e.target.value);
  };

  return {
    value,
    onChange,
  };
}
