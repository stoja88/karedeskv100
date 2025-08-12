'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  success?: boolean
  icon?: React.ComponentType<any>
  helperText?: string
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, success, icon: Icon, helperText, className = '', ...props }, ref) => {
    const hasError = !!error
    const hasSuccess = success && !hasError

    return (
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-200">
          {label}
          {props.required && <span className="text-red-400 ml-1">*</span>}
        </label>
        
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          )}
          
          <input
            ref={ref}
            className={`
              form-input w-full py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-200
              ${Icon ? 'pl-12 pr-12' : 'px-4'}
              ${hasError ? 'error-input' : ''}
              ${hasSuccess ? 'success-input' : ''}
              ${className}
            `}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? `${props.id}-error` : 
              helperText ? `${props.id}-help` : undefined
            }
            {...props}
          />

          {/* Status Icons */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AnimatePresence mode="wait">
              {hasError && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </motion.div>
              )}
              {hasSuccess && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {hasError && (
            <motion.p
              id={`${props.id}-error`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-400 text-sm flex items-center"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Helper Text */}
        {helperText && !hasError && (
          <p id={`${props.id}-help`} className="text-gray-400 text-sm">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'

export default FormField