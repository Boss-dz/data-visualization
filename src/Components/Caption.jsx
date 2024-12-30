import style from './Caption.module.css'
export default function Caption({children}) {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
}
