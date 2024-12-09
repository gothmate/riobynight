import Card from "@/components/Card";
import styles from "./page.module.css";
import style from "./page.module.sass";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={style.container}>
        <div className={style.scene}>
            <div className={`${style.compArena} ${style.cardSetting}`}>
                <Card typeCard={'computer'}  initial={true} />
            </div>
            <div className={`${style.playerArena} ${style.cardSetting}`}>
                <Card typeCard={'player'} initial={true} />
            </div>
        </div>
      </div>
    </div>
  );
}
