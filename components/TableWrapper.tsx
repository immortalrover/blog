// wrap table. You can DIY it if you want.

export default function TableWrapper({ children }) {
  return (
    <div className="w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  )
}

