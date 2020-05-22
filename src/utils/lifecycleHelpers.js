import {useEffect, useRef} from "react";

export default class LifecycleHelpers {

  // callback only on update
  static useDidUpdate(callback, deps) {
    const hasMount = useRef(false);

    if(!callback || !Array.isArray(deps))  {
      throw Error('useDidUpdate have wrong arguments');
    }
    useEffect(() => {
      if (hasMount.current) {
        callback()
      } else {
        hasMount.current = true
      }
      // eslint-disable-next-line
    }, deps);
  }
}