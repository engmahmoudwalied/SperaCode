'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, LucideIcon } from 'lucide-react'

export interface SelectOption {
  value: string
  label: string
  hint?: string
  icon?: LucideIcon
}

interface CustomSelectProps {
  id?: string
  name?: string
  options: (string | SelectOption)[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  required?: boolean
  rtl?: boolean
  icon?: LucideIcon
  className?: string
}

export function CustomSelect({
  id,
  name,
  options,
  value,
  onChange,
  placeholder = 'اختر من القائمة...',
  required = false,
  rtl = true,
  icon: FieldIcon,
  className = '',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Normalize options array
  const normalizedOptions: SelectOption[] = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt }
    }
    return opt
  })

  const selectedOption = normalizedOptions.find((opt) => opt.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  function handleSelect(optValue: string) {
    if (onChange) {
      onChange(optValue)
    }
    setIsOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className={`custom-select-container ${isOpen ? 'is-open' : ''} ${rtl ? 'dir-rtl' : 'dir-ltr'} ${className}`}
    >
      {/* Hidden input for form submits */}
      {name && <input type="hidden" name={name} value={value || ''} required={required} />}

      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        className={`custom-select-trigger ${value ? 'has-value' : 'is-placeholder'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="select-trigger-content">
          {FieldIcon && <FieldIcon size={18} className="select-field-icon" />}
          {selectedOption?.icon && (
            <span className="select-trigger-icon-tile">
              <selectedOption.icon size={16} />
            </span>
          )}
          <span className="select-label-text">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.hint && (
            <span className="select-trigger-hint">{selectedOption.hint}</span>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`select-chevron ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Animated Dropdown Popover */}
      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          <div className="custom-select-options-scroller">
            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value
              const OptIcon = opt.icon

              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`custom-select-option ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelect(opt.value)}
                >
                  <div className="option-label-group">
                    {OptIcon && (
                      <span className="option-icon-box" aria-hidden="true">
                        <OptIcon size={16} />
                      </span>
                    )}
                    <div className="option-text-stack">
                      <span className="option-title">{opt.label}</span>
                      {opt.hint && <span className="option-hint">{opt.hint}</span>}
                    </div>
                  </div>

                  <span className={`option-check-badge ${isSelected ? 'is-active' : ''}`} aria-hidden="true">
                    {isSelected ? <Check size={14} /> : <span className="option-radio-dot" />}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
