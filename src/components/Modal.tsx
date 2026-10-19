import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  titleId: string;
  descId?: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ className = '', titleId, descId, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    // Save triggering element for focus restoration
    if (document.activeElement instanceof HTMLElement) {
      triggerElementRef.current = document.activeElement;
    }

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    // Lock body scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first focusable element or dialog
    const focusTimer = setTimeout(() => {
      if (!dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        dialog.focus();
      }
    }, 40);

    // Escape and focus trap handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }

      if (e.key === 'Tab' && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onCloseRef.current();
    };

    window.addEventListener('keydown', handleKeyDown);
    dialog?.addEventListener('cancel', handleCancel);

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      dialog?.removeEventListener('cancel', handleCancel);
      document.body.style.overflow = previousOverflow;

      if (dialog?.open) {
        dialog.close();
      }

      // Restore focus to trigger
      if (triggerElementRef.current && document.contains(triggerElementRef.current)) {
        triggerElementRef.current.focus();
      }
    };
  }, []); // Run only on mount and unmount

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      aria-modal="true"
      className={`portfolio-dialog ${className}`}
      onClick={(e) => {
        // In native dialog, clicking the backdrop sets e.target === dialog
        if (e.target === dialogRef.current) {
          onCloseRef.current();
        }
      }}
    >
      {children}
    </dialog>
  );
}
