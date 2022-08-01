/* eslint @typescript-eslint/no-explicit-any: "off" */
import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useHover = <T>(): [MutableRefObject<T>, boolean, () => void] => {
  const [value, setValue] = useState<boolean>(false);
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(() => {
    const node: any = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  const removeHover = () => setValue(false);

  return [ref, value, removeHover];
};

export default useHover;
