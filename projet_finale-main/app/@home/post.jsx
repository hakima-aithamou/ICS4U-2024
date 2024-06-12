"use client"
import Link from "next/link";
import styles from "./post.module.css"
import Image from "next/image";
import { createClient } from "@/supabase/client";

export default function PostComponent({ profile }) {
    return (
        <>
            <div className={styles.postContainerFull}>
                <div className={styles.postContainer}>
                    <div className={styles.containerTop}>
                        <div className={styles.exitButtonOuterContainer}>
                            <div className={styles.exitButtonInnerContainer} onClick={() => {document.querySelector(`.${styles.postContainerFull}`).style.display = "none";}}>
                                <Image className={styles.exitButton} width={24} height={24} src="/exitIcon.svg" alt="Exit icon"/>
                            </div>
                        </div>
                        <div className={styles.toggleContainer}>
                            <div className={styles.questionToggle} onClick={() => {
                                document.querySelector(`.${styles.questionSelected}`).style.visibility = "visible"
                                document.querySelector(`.${styles.postSelected}`).style.visibility = "hidden"
                                document.querySelector(`.${styles.questionAdd}`).style.display = "block"
                                document.querySelector(`.${styles.postAdd}`).style.display = "none"


                            }}>
                                <h3>Add Question</h3>
                                <div className={styles.questionSelected}></div>
                            </div>
                            <div className={styles.postToggle} onClick={el => {
                                document.querySelector(`.${styles.questionSelected}`).style.visibility = "hidden"
                                document.querySelector(`.${styles.postSelected}`).style.visibility = "visible"
                                document.querySelector(`.${styles.questionAdd}`).style.display = "none"
                                document.querySelector(`.${styles.postAdd}`).style.display = "block"
                            }}>
                                <h3>Create Post</h3>
                                <div style={{visibility: "hidden"}} className={styles.postSelected}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerBottom}>
                        <div className={styles.questionAdd}>
                            <div className={styles.questionTips}>
                                <h3 style={{fontWeight: 700, fontSize: "15px"}}>Tips on getting good answers quickly</h3>
                                <ul>
                                    <li>Make sure your question has not been asked already</li>
                                    <li>Keep your question short and to the point</li>
                                    <li>Double-check grammar and spelling</li>
                                </ul>
                            </div>
                            <div className={styles.questionTypeContainer}>
                                <Link href="/profile">
                                    <Image width={18} height={18} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile picture" className={styles.postProfile} />
                                </Link>
                                <Image style={{marginLeft: "4px"}} width={12} height={12} src="/rightArrow.svg" alt="Right arrow icon"/>
                                <button className={styles.questionTypeButton} onClick={() => {
                                    const popup = document.querySelector(`.${styles.popupContainer}`)
                                    popup.style.visibility = (window.getComputedStyle(popup).visibility == "visible") ? "hidden" : "visible"
                                }}>
                                    <div className={styles.popupContainer}>
                                        <div onClick={() => {
                                            const public_div = document.querySelector(`.${styles.public}`)
                                            const limited_div = document.querySelector(`.${styles.limited}`)
                                            public_div.style.display = "flex"
                                            limited_div.style.display = "none"
                                        }} className={styles.popupSec}><span style={{display: "block"}}>Public</span><span style={{display: "inline-block"}}>Others will see your identity alongside this question on your profile and in their feeds.</span></div>
                                        <div onClick={() => {
                                            const public_div = document.querySelector(`.${styles.public}`)
                                            const limited_div = document.querySelector(`.${styles.limited}`)
                                            public_div.style.display = "none"
                                            limited_div.style.display = "flex"
                                        }} className={styles.popupSec}><span style={{display: "block"}}>Limited</span><span style={{display: "inline-block"}}>Your identity will be shown but this question will not appear in your followers' feeds or your profile.</span></div>
                                    </div>
                                    <div className={styles.public}>
                                        <Image width={20} height={20} src="/publicIcon.svg" alt="Public icon"/>
                                        <h3>Public</h3>
                                    </div>
                                    <div style={{display: "none"}} className={styles.limited}>
                                        <Image width={20} height={20} src="/limitedIcon.svg" alt="Limited icon"/>
                                        <h3>Limited</h3>
                                    </div>
                                    <Image style={{marginLeft: "4px", marginRight: "-4px"}} width={16} height={16} src="/downArrow.svg" alt="Down arrow icon"/>
                                </button>
                            </div>
                            <div className={styles.questionInputContainer}>
                                <textarea maxLength={250} className={styles.questionInput} type="text" placeholder='Start your question with "What", "How", "Why", etc.' onChange={el => {
                                    let v = el.target.value.replace(/\?/g, '') + '?'
                                    if (el.target.value != v && el.target.value.length == 1) {
                                        el.target.value = v
                                        let i = el.target.value.length-1
                                        el.target.setSelectionRange(i, i)
                                    }

                                    //submit button state
                                    let button = document.querySelector(`.${styles.submitQuestionButton}`)
                                    button.disabled = (el.target.value.length == 0) ? true : false
                                }}/>
                            </div>
                            <div className={styles.sumbitButtonContainer}>
                                <button disabled={false} className={styles.submitQuestionButton} onClick={async () => {
                                    const question_text = document.querySelector(`.${styles.questionInput}`).value

                                    let client = createClient()
                                    let user = await (await client.auth.getSession()).data.session.user.id
                                    console.log(user)
                                    const {error} = await client.from('questions').insert({ author_id: user, name: question_text})
                                    if (error) console.log(error)

                                }}>Add question</button>
                            </div>
                        </div>
                        <div className={styles.postAdd}>
                            <div className={styles.postTop}>
                                <Image width={40} height={40} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile picture" className={styles.postProfileImg} />
                                <div>
                                    <p>{profile.name}</p>
                                    p.{styles.credentials}
                                </div>
                            </div>
                            <textarea name="" id=""></textarea>
                            <div className={styles.sumbitButtonContainer}>
                                <button disabled={false} className={styles.submitPostButton} onClick={async () => {
                                        const question_text = document.querySelector(`.${styles.postInput}`).value

                                        let client = createClient()
                                        let user = await (await client.auth.getSession()).data.session.user.id
                                        console.log(user)
                                        const {error} = await client.from('questions').insert({ author_id: user, name: question_text})
                                        if (error) console.log(error)

                                    }}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}