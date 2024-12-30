import { useNavigate } from 'react-router-dom'; 
import style from './Button.module.css'
export default function Button({ children ,nav}) {
  const navigate = useNavigate()
  return <button className={style.btn} onClick={()=>navigate(`${nav}`)}>{children}</button>;
}
