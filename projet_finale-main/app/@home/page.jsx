"use client"
import styles from "./styles.module.css"
import post_styles from "./post.module.css"
import FeedComponent from "./feed"
import Image from "next/image"
import Link from "next/link"
import SpacesSidebar from "./spacesSidebar"
import { useState, useEffect } from "react"
import { createClient } from "@/supabase/client"

/* 
La "main page"
*/

export default function HomePage() {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        const client = createClient()

        const getProfile = async () => {
            const userid = (await client.auth.getUser()).data.user.id
            const { data, error } = await client.from("profiles").select("*").eq("id", userid).single()

            if (error) {
                console.log(error)
            }

            console.log(data)
            setProfile(data);
        }
        
        getProfile()
    }, [])

    return (
        <>
            <SpacesSidebar />
            <div className={styles.forum}>
                <div className={styles.postContainer}>
                    <div className={styles.postContainerTop}>
                        <Image width={32} height={32} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile picture" className={styles.postProfile}/>
                        <div className={styles.searchPromt} onClick={() => {
                            document.querySelector(`.${post_styles.postContainerFull}`).style.display = "flex";
                            document.querySelector(`.${post_styles.questionSelected}`).style.visibility = "visible"
                            document.querySelector(`.${post_styles.postSelected}`).style.visibility = "hidden"
                            document.querySelector(`.${post_styles.questionAdd}`).style.display = "block"
                            document.querySelector(`.${post_styles.postAdd}`).style.display = "none"
                    }}>What do you want to ask or share?</div>
                    </div>
                    <div className={styles.postContainerBottom}>
                        <button className={styles.postButton} onClick={() => {
                            document.querySelector(`.${post_styles.postContainerFull}`).style.display = "flex";
                            document.querySelector(`.${post_styles.questionSelected}`).style.visibility = "visible"
                            document.querySelector(`.${post_styles.postSelected}`).style.visibility = "hidden"
                            document.querySelector(`.${post_styles.questionAdd}`).style.display = "block"
                            document.querySelector(`.${post_styles.postAdd}`).style.display = "none"
                    }}>
                            <div className={styles.postCenter}>
                                <Image width={20} height={20} src="/askIcon.svg" alt="Ask icon" className={styles.postIcon}/>
                                <div className={styles.postText}>Ask</div>
                            </div>
                        </button>
                        <button className={styles.postButton}>
                            <Link className={styles.answerLink} href="/answer"/>
                            <div className={styles.postCenter}>
                                <Image width={20} height={20} src="/answerIcon.svg" alt="Answer icon" className={styles.postIcon}/>
                                <div className={styles.postText}>Answer</div>
                            </div>
                        </button>
                        <button className={styles.postButton} onClick={() => {
                                document.querySelector(`.${post_styles.postContainerFull}`).style.display = "flex";
                                document.querySelector(`.${post_styles.questionSelected}`).style.visibility = "hidden"
                                document.querySelector(`.${post_styles.postSelected}`).style.visibility = "visible"
                                document.querySelector(`.${post_styles.questionAdd}`).style.display = "none"
                                document.querySelector(`.${post_styles.postAdd}`).style.display = "block"
                            }}>
                            <div className={styles.postCenter}>
                                <Image width={20} height={20} src="/postIcon.svg" alt="Post icon" className={styles.postIcon}/>
                                <div className={styles.postText}>Post</div>
                            </div>
                        </button>
                    </div>
                </div>
                <FeedComponent/>
            </div>
        </>
    )
}