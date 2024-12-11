'use client'

import styles from '@/app/page.module.sass'
import style from './page.module.sass'
import {Tilt} from 'react-tilt'
import Image from 'next/image'

export default function Card(props) {

    const defaultOptions = {
        reverse:        false, 
        max:            35,    
        perspective:    1000,  
        scale:          1.1,   
        speed:          1000,  
        transition:     true,  
        axis:           null,  
        reset:          true,  
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }

    return (
        <Tilt options={defaultOptions}>
            <div className={style.box} data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500">
                <div className={style.hist}>
                    <div className={style.boxHist}></div>
                </div>
                <div id={props.typeCard} className={style.card}>
                    {props.initial == true ?
                        <div className={styles.content}>
                            <div className={style.initialCard}>
                                {props.seita == 'camarilla' ?
                                    <div>
                                        <h2>Camarilla</h2>
                                        <p className={style.card_text}>
                                            A Camarilla é a maior das seitas vampíricas, uma organização ampla
                                            que ostensivamente representa e protege todos os vampiros ao
                                            executar e promulgar a Máscara. Atualmente composta por seis clãs,
                                            embora oficialmente considere todos os Membros sob seu alcance e
                                            receba qualquer um que obedeça suas leis.
                                        </p>
                                    </div>
                                    :
                                    <div>
                                        <h2>Sabbat</h2>
                                        <p className={style.card_text}>
                                            Em Vampiro: A Máscara, o Sabá é uma ampla organização de cainitas
                                            que rejeita as Tradições. Diferente da Camarilla, o Sabá acredita
                                            nos Antediluvianos e em Caim. Também conhecido como a Espada de
                                            Caim, pois creem que serão o exército que Caim usará para destruir
                                            os Antediluvianos quando a Gehenna chegar.
                                        </p>
                                    </div>
                                }
                            </div> 
                        </div>
                        : 
                        <div className={styles.content}>
                            <div id={style.imagem_card}>
                                <Image 
                                    src={props.drawCard.imagem}
                                    alt={props.drawCard.nome}
                                    width={229}
                                    height={319}
                                    priority
                                />
                            </div>
                            <div id={style.card_name}><p>{props.drawCard.nome}</p></div>
                            <div id={style.card_clan}>{props.drawCard.cla}</div>
                            <div id={style.card_opcoes}></div>
                        </div>
                    }
                </div>
            </div>
        </Tilt>
    )
}