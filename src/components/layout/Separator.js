import cn from "classnames";
import {Fragment} from "react";

// horizontal bar to use as a separator: wide(gray) or short(orange)
const Separator = ({wide, short, margin}) => {

    const styles = cn('separator', {
        'separator-short': short,
        'separator-wide': wide,
        'margin': margin
    })

    return <Fragment>
        <div className={styles}></div>
    </Fragment>

}

export default Separator;