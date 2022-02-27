import cn from "classnames";

// horizontal bar to use as a separator: wide(gray) or short(orange)
const Separator = ({wide, short}) => {

    const styles = cn({
        'separator-short': short,
        'separator-wide': wide
    })

    return <div className={styles}></div>

}

export default Separator;