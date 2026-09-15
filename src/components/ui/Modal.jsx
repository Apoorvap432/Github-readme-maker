export default function Modal({ children, isOpen = false }) {
  if (!isOpen) return null

  return <div>{children}</div>
}
