'use client'

import Card from "@/components/Card"
import styles from "./page.module.css"
import style from "./page.module.sass"
import Link from "next/link"
import { MouseEvent } from "react"
import { ChoosenSetProvider, useChoosenSet } from "@/contexts/choosenSet"

export default function Home() {
  const { value: choice, setValue: setChoice } = useChoosenSet()

  function handleChoice(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) {
    const linkElement = e.target instanceof Element && e.target.closest('a') as HTMLAnchorElement | null
    if (linkElement) {
      setChoice(linkElement.className)
      console.log('Choice:', choice)
    } else {
      console.warn('Elemento Link não encontrado!')
    }
  }

  return (
    <ChoosenSetProvider>
      <div className={styles.page}>
        <div className={style.container}>
          <h1>Escolha seu lado na escuridão</h1>
          <div className={style.scene}>
            <div className={`${style.compArena} ${style.cardSetting}`}>
              <Link className="camarilla" href='/home' onClick={(e) => handleChoice(e)}>
                <Card typeCard={choice} initial={true} seita='camarilla' />
              </Link>
            </div>
            <div className={`${style.playerArena} ${style.cardSetting}`}>
              <Link className="sabbat" href='/home' onClick={(e) => handleChoice(e)}>
                <Card typeCard={choice} initial={true} seita='sabbat' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ChoosenSetProvider>
  )
}
