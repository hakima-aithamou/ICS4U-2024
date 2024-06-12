"use client"

import { usePathname } from "next/navigation"
import { createClient } from "@/supabase/client"
import { useState, useEffect } from "react"
import styles from "./styles.module.css"
import Image from "next/image"

export default function QuestionPage() {
    const question_id = usePathname().split("/question/").pop()
    console.log(question_id)

    const [question, setQuestion] = useState([])
    const [profile, setProfile] = useState([])
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        const client = createClient()

        const getAnswers = async (question_id) => {
            const {data, error} = await client.from("answers").select("*, profiles(*))").eq("question_id", question_id)
    
            if (error) {
                console.log(error)
            }

            console.log(data)
            setAnswers(data)
        }

        const getQuestion = async () => {
            const {data, error} = await client.from("questions").select("*").eq("id", question_id).single()
    
            if (error) {
                console.log(error)
            }

            getAnswers(data.id)

            console.log(data)
            setQuestion(data)
        }

        const getProfile = async () => {
            const userid = (await client.auth.getUser()).data.user.id
            const { data, error } = await client.from("profiles").select("*").eq("id", userid).single()

            if (error) {
                console.log(error)
            }

            console.log(data)
            setProfile(data);
        }
        
        getQuestion()
        getProfile()
    }, [])
    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.questionContainer}>
                    <p className={styles.questionTitle}>{question.name}</p>
                    <div className={styles.questionButtons}>
                        <button onClick={() => {

                        }} className={styles.answerButton}>
                            <Image width={24} height={24} alt="Answer Icon" src="/answerIcon.svg" />
                            <p>Answer</p>
                        </button>
                        <button className={styles.followButton}>
                            <Image width={24} height={24} alt="Follow Icon" src="/followIcon.svg" />
                            <p>Follow · <span className={styles.followCount}></span></p>
                        </button>
                    </div>
                    <div className={styles.questionBottom}>
                        <Image width={40} height={40} className={styles.profilePic} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile pic"/>
                        <div className={styles.canAnswer}>{profile.name + ", can you answer this question?"}</div>
                        <p>People are searching for a better answer to this question.</p>
                        <button style={{boxShadow: "rgb(72, 148, 253) 0px 0px 0px 1px inset!important;", marginTop: "8px"}} className={styles.answerButton}>
                            <Image width={24} height={24} alt="Blue follow Icon" src="/blueFollowIcon.svg" />
                            <p style={{color: "rgb(72, 148, 253)!important;"}}>Answer</p>
                        </button>
                    </div>
                </div>
                {
                answers.map(answer => {
                    return (
                        <div key={answer.id} className={styles.answerContainer}>
                            <div className={styles.answerContainerTop}>
                                <Image width={36} height={36} className={styles.answerProfilePic} src={(answer.profiles.profile_pic == null) ? "/Images/quora_default_profile.png" : answer.profiles.profile_pic}/>
                                <div className={styles.answerProfileSplit}>
                                    <div className={styles.answerProfileName}>{answer.profiles.name}</div>
                                    <div className={styles.answerCred}>{answer.profiles.credentials + " · " + answer.created_at}</div>
                                </div>
                            </div>
                            <p>{answer.content}</p>
                            <div className={styles.answerContainerBottom}>

                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}