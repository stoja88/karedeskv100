'use client'

import NotificationToast from './NotificationToast'
import { useToast } from '@/hooks/useToast'

export default function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed top-0 right-0 z-50 p-6 space-y-4">
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ zIndex: 50 + index }}>
          <NotificationToast
            type={toast.type}
            title={toast.title}
            message={toast.message}
            isVisible={true}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  )
}