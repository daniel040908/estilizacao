import style from './Heading.module.css'

export function Heading(){
    const classes = `${style.fundo}${style.cor}`
    return(
        <h1 className={classes}>Olá mundo</h1>
)
}
