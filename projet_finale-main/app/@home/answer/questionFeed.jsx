"use client"
import { createClient } from '@/supabase/client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from "./styles.module.css"
import Image from 'next/image'

export default function QuestionFeed() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const getQuestionFeed = async () => {
            const client = createClient()
            const {data, error} = await client.from("questions").select("*, answers(count)")
    
            if (error) {
                console.log(error)
            }

            console.log(data)
            setQuestions(data)
        }
        
        getQuestionFeed()
    }, [])

    return (
        <>
            {
                questions.map(question => {
                    return (
                        <div key={question.name} className={styles.questionContainer}>
                            <Link href={"/question/"+question.id.replace(/\s+/g, '-')} className={styles.questionTitle}>{question.name}</Link>
                            <Link href={"/question/"+question.id.replace(/\s+/g, '-')} className={styles.answerCount}>{(question.answers[0].count > 0) ? ((question.answers[0].count == 1) ? question.answers[0].count + " answer" : question.answers[0].count + "answers") : "No answer yet"}</Link>
                            <div className={styles.questionBottom}>
                                <button onClick={
                                    () => {
                                        console.log(document.querySelector(`.${answer_styles.answerContainer}`))
                                        //document.querySelector(`.${answer_styles.answerFull}`).style.display = "flex"
                                        }} className={styles.answerButton}>
                                    <Image width={24} height={24} alt="Answer Icon" src="/answerIcon.svg" />
                                    <p>Answer</p>
                                </button>
                                <button className={styles.followButton}>
                                    <Image width={24} height={24} alt="Follow Icon" src="/followIcon.svg" />
                                    <p>Follow · <span className={styles.followCount}></span></p>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )

}