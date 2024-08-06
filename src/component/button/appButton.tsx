
interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  className?: string
  loading?: boolean
  type?: "button" | "submit" | "reset"
  children?: string
}

const AppButton = ({ className, type = "button", children, onClick }: AppButtonProps) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 text-white rounded-full ${className}`} type={type} >
      {children}
    </button >
  )
}

export default AppButton
