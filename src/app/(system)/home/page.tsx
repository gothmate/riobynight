'use client'

import { useChoosenSet } from '@/contexts/choosenSet'
import styles from '../../page.module.css'
import style from '../../page.module.sass'
import Card from '@/app/../components/Card'
import { deckCamarilla, deckSabbat } from '@/gameCards'

export default function Home() {

    const { value: choice, setValue: setChoice } = useChoosenSet()

    const deck = choice === 'camarilla' ? deckCamarilla : deckSabbat
    const cdeck = choice === 'camarilla' ? deckSabbat : deckCamarilla

    console.log(deck)

    return (
        <div className={styles.page}>
            <div className={style.container}>
                <div className={style.battlefield}>
                    <div className={style.scene}>
                        <div className={`${style.compArena} ${style.cardSetting}`}>
                            <Card typeCard={'player'}  initial={false} drawCard={deck[0]} />
                        </div>
                        <div className={`${style.playerArena} ${style.cardSetting}`}>
                            <Card typeCard={'computer'} initial={false} drawCard={cdeck[0]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}