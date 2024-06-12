'use client'
import { createClient } from '@/supabase/client'
import { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProfileComponent() {
    const [profile, setProfile] = useState([null])
    const router = useRouter()

    const getProfile = async () => {
        const client = createClient()
        const userid = (await client.auth.getUser()).data.user.id
        const {data, error} = await client.from("profiles").select("*").eq("id", userid).single();

        if (error) {
            console.log(error)
        }

        setProfile(data)
        console.log(profile)
    }
   
      useEffect(() => {
        getProfile()
      }, [])
    
    return (
        <>
            <div className={styles.profileMainContainer}>
                <div>
                    <div className={styles.profileContainer}>
                        <Image width={120} height={120} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile picture" className={styles.profilePic}/>
                        <div>
                            <div className={styles.nameContainer}>
                                <h1 className={styles.name}>{profile.name}</h1>
                                <div className={styles.editContainer}>
                                    <div onClick={() => {document.querySelector(`.${styles.editNameContainerFull}`).style.display = "flex";}} className={styles.editName}>Edit</div>
                                </div>
                            </div>
                            <div className={styles.credentialsCotainer}>
                                <h2 className={styles.credentials}>{profile.credentials}</h2>
                                <div className={styles.editContainer}>
                                    <div className={styles.editName}>Edit</div>
                                </div>
                            </div>
                            <div className={styles.followCount}></div>
                        </div>
                    </div>
                    <div className={styles.description}></div>
                </div>
                <div className={styles.activity}></div>
            </div>
            <div className={styles.editNameContainerFull}>
                <div className={styles.editNameContainer}>
                    <div className={styles.containerTop}>
                        <div className={styles.exitButtonOuterContainer}>
                            <div className={styles.exitButtonInnerContainer} onClick={() => {document.querySelector(`.${styles.editNameContainerFull}`).style.display = "none";}}>
                                <Image className={styles.exitButton} width={24} height={24} src="/exitIcon.svg" alt="Exit icon"/>
                            </div>
                        </div>
                        <div style={{padding: "0 16px 8px 16px"}}>
                            <h1>Edit Name</h1>
                            <h3>You can change your name up to 10 times.</h3>
                        </div>
                    </div>
                    <div className={styles.editNameCenter}>
                        <p>Name</p>
                        <input className={styles.editNameInput} type="text" defaultValue={profile.name} placeholder="Name"/>
                    </div>
                    <div className={styles.containerBottom}>
                        <div className={styles.sumbitButtonContainer}>
                            <button disabled={false} className={styles.submitNameButton} onClick={async () => {
                                    const editInput = document.querySelector(`.${styles.editNameInput}`)
                                    let client = createClient()
                                    let userid = await (await client.auth.getSession()).data.session.user.id
                                    console.log(userid)
                                    const {error} = await client.from('profiles').upsert({ id: userid, name: editInput.value})
                                    if (error) console.log(error)
                                    router.refresh()
                                    document.querySelector(`.${styles.editNameContainerFull}`).style.display = "none";
                                }}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}