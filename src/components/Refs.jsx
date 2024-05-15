import { useEffect } from "react";
import { useRef } from "react";

export function Refs() {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Montato per la prima volta");
    } else {
      console.log("Montato ancora una volta");
    }
  });
}
