import cn from "classnames";


const Separator = ({wide, short}) => {

    const styles = cn({
        'separator-short': short,
        'separator-wide': wide
    })

    return (
        <div className={styles}></div>
    )
}

export default Separator;