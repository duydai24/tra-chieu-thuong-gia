import {forwardRef, useEffect, useRef} from 'react';

// eslint-disable-next-line react/display-name
export const IndeterminateCheckbox = forwardRef(
  ({indeterminate, ...rest}, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (<input type="checkbox" ref={resolvedRef} {...rest} />);
  }
);
export default IndeterminateCheckbox;