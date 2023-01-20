import { AriaAttributes } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    redirect?: string
    required?: boolean
    rules?: string
  }
}
