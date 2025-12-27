import { NavLink } from "react-router-dom"
import "./liquid.css"

const LiquidButton = ({ to, children }) => {
  return (
    <NavLink to={to} className="liquid-btn-premium">
      <span>{children}</span>

      {/* Liquid layers */}
      <div className="liquid liquid-1"></div>
      <div className="liquid liquid-2"></div>
    </NavLink>
  )
}

export default LiquidButton

