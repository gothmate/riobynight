import styles from '../../page.module.css'
import style from '../../page.module.sass'
import Card from '@/app/../components/Card'

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={style.container}>
                <div className={style.battlefield}>
                    <div className={style.scene}>
                        <div className={`${style.compArena} ${style.cardSetting}`}>
                            <Card typeCard={'computer'}  initial={false} />
                        </div>
                        <div className={`${style.playerArena} ${style.cardSetting}`}>
                            <Card typeCard={'player'} initial={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}