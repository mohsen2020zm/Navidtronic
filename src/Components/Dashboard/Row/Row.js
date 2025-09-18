import './Row.css'

export default function Row({children, column1, column2, column3}) {
  return (
    <div className="row-information">
        <div className="row-info">
            <p>{column1}</p>
        </div>
        <div className="row-info">
            <p>{column2}</p>
        </div>
        <div className="row-info">
            <p>{column3}</p>
        </div>
        {children}
    </div>
  )
}
