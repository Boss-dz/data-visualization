import style from './Description.module.css'
export default function Description({children}) {
  return <div className={style.container}><span>Description : </span>{children}</div>;
}
