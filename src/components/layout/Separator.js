import cn from "classnames";

// horizontal bar to use as a separator: wide(gray) or short(orange)
const Separator = ({wide, short, margin}) => {

    const styles = cn({
        'separator-short': short,
        'separator-wide': wide,
        'margin': margin
    })

    return <div className={styles}></div>

}

export default Separator;