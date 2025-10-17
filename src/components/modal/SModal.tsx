'use client';
import React, { useEffect, useRef } from 'react';
import { GoSearch } from 'react-icons/go';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SModal({ isOpen, onClose }: SearchModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bottom-50 bg-opacity-50 flex items-center justify-center z-50 lg:px-[20em] px-[20px]">
      <div ref={modalRef} className="bg-white rounded-sm w-full relative">
        <div className="flex items-center relative">
          <GoSearch className="text-black/80 w-5 h-5 absolute left-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded px-10 py-2 focus:outline-none text-black/80 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
