import Link from 'next/link'
import {useRouter} from 'next/router'
import {useLangUpdate} from "../../context/LangContext";

export default function LocaleSwitcher({children}) {
    const router = useRouter()
    const langUpdate = useLangUpdate()

    const {locales, locale: activeLocale} = router
    const otherLocales = locales.filter((locale) => locale !== activeLocale)

    const styles = {
        width: '45px',
        borderRadius: '5px',
        height: '30px'
    }

    return (
        <div>
            {otherLocales.map((locale) => {
                const {pathname, query, asPath} = router
                return (
                    <Link   key={locale} href={{pathname, query}} as={asPath} locale={locale}>
                        <a onClick={langUpdate}>{router.locale === 'en-US' ? <img style={styles} src={'/en.png'} alt={'lang'}/> : <img style={styles} src={'/fr.png'} alt={'lang'}/> }</a>
                    </Link>
                )
            })}
        </div>
    )
}
