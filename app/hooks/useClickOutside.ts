import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

export default function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(e.target as Node)) {
        return;
      }

      handler(e);
    };

    document.addEventListener(mouseEvent, handleClickOutside);

    return () => {
      document.removeEventListener(mouseEvent, handleClickOutside);
    };
  }, [handler, mouseEvent, ref]);
}
