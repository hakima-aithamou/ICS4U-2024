import QuestionFeed from "./questionFeed"
import styles from "./styles.module.css"
import Image from "next/image"

export default function AnswerPage() {
    return (
        <>
            <div className={styles.questionsContainer}>
                <div className={styles.questionsHeader}>
                    <div className={styles.starContainer}>
                        <Image width={16} height={16} src="/starIcon.svg" alt="Star icon"/>
                    </div>
                    <div className={styles.questionsTitle}>Questions for you</div>
                </div>
                <div className={styles.questionsBody}>
                    <QuestionFeed/>
                </div>
            </div>
        </>
    )
}