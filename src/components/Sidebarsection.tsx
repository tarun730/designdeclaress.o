
const Sidebarsection = ({ title, className  }:{title:string, className?:string}) => {
  return (
    <div className="sidebar">
    <div className="sticky-header">
      <h2 className={`heading ${className}`}>{title}</h2>
    </div>
  </div>
  )
}

export default Sidebarsection

