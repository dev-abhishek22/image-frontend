"use client";

import { useEffect, useRef, useState } from "react";

export default function useToolMenu() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function isModalTarget(target: EventTarget | null): boolean {
      return (
        target instanceof Element && target.closest("dialog[open]") !== null
      );
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key !== "Escape" ||
        event.defaultPrevented ||
        isModalTarget(event.target)
      )
        return;
      event.preventDefault();
      setOpen(false);
      trigger.current?.focus();
    }

    function handleFocusIn(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        !isModalTarget(event.target) &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      )
        setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function toggle(button: HTMLButtonElement) {
    trigger.current = button;
    setOpen((current) => !current);
  }

  return { open, headerRef, close, toggle };
}
