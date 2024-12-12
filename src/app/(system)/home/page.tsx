'use client'

import { useChoosenSet } from '@/contexts/choosenSet'
import styles from '../../page.module.css'
import style from '../../page.module.sass'
import Card from '@/app/../components/Card'
import { deckCamarilla, deckSabbat, deckType } from '@/gameCards'

export default function Home() {

    const { value: choice } = useChoosenSet()

    const deck = choice === 'camarilla' ? deckCamarilla : deckSabbat
    const cdeck = choice === 'camarilla' ? deckSabbat : deckCamarilla

    console.log(deck)

    function embaralharDecks(deck: deckType[]) {
        return deck
            .map((item) => ({ item, sorteio: Math.random() }))
            .sort((a, b) => a.sorteio - b.sorteio)
            .map(({ item }) => item)
    }

    return (
        <div className={styles.page}>
            <div className={style.container}>
                <div className={style.battlefield}>
                    <div className={style.scene}>
                        <div className={`${style.compArena} ${style.cardSetting}`}>
                            <Card typeCard={'player'}  initial={false} drawCard={embaralharDecks(deck)} />
                        </div>
                        <div className={style.line}></div>
                        <div className={`${style.playerArena} ${style.cardSetting}`}>
                            <Card typeCard={'computer'} initial={false} drawCard={embaralharDecks(cdeck)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}