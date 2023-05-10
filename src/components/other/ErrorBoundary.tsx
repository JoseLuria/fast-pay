import { type ReactNode, type ErrorInfo, Component } from 'react'
import { Error } from '@/components'

interface Props {
  children?: ReactNode
  error?: boolean
  type?: 'error' | 'page'
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error:', error.message, errorInfo)
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return <Error type={this.props.type} />
    }

    return this.props.children
  }
}
