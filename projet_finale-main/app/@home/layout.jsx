'use client'
import Link from "next/link"
import styles from "./navbar.module.css"
import Image from "next/image"
import "../global.css"
import { redirect, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { createClient } from "@/supabase/client"
import post_styles from "./post.module.css"
import PostComponent from "./post"
import { useRouter } from "next/router"

/* 
Le html ecrit dans le fichier layout est copier partout (alors il faut que l'ecrire un fois) 
*/


export default function Layout({children}) {
    const pathname = usePathname()
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
            <div className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <Link href="/" className={styles.title}>
                        <Image className={styles.titleImg} color="rgb(230, 231, 232)" alt="Quora title" src="/quora.svg" width={88} height={50}/>
                    </Link>
                    <Link className={styles.navbarItem} href="/">
                        <div className={styles.itemHover}></div>
                        <Image className={styles.selectedIcon} src={(pathname == '/') ? "/homeFillIcon.svg" : "/homeStrokeIcon.svg"} alt="Home icon" width={28} height={28}/>
                        <div className={(pathname == '/') ? styles.currentlySelectedItem : styles.selectedItem}></div>
                        <div className={styles.itemName}>Home</div>
                    </Link>
                    <Link className={styles.navbarItem} href="/following">
                        <div className={styles.itemHover}></div>
                        <Image className={styles.selectedIcon} src={(pathname == '/following') ? "/followingFillIcon.svg" : "/followingStrokeIcon.svg"} alt="Home icon" width={28} height={28}/>
                        <div className={(pathname == '/following') ? styles.currentlySelectedItem : styles.selectedItem}></div>
                        <div className={styles.itemName}>Following</div>
                    </Link>
                    <Link className={styles.navbarItem} href="/answer">
                        <div className={styles.itemHover}></div>
                        <Image className={styles.selectedIcon} src={(pathname == '/answer') ? "/answerFillIcon.svg" : "/answerStrokeIcon.svg"} alt="Answer icon" width={28} height={28}/>
                        <div className={(pathname == '/answer') ? styles.currentlySelectedItem : styles.selectedItem}></div>
                        <div className={styles.itemName}>Answer</div>
                    </Link>
                    <Link className={styles.navbarItem} href="/spaces">
                        <div className={styles.itemHover}></div>
                        <Image className={styles.selectedIcon} src={(pathname == '/spaces') ? "/spacesFillIcon.svg" : "/spacesStrokeIcon.svg"} alt="Spaces icon" width={28} height={28}/>
                        <div className={(pathname == '/spaces') ? styles.currentlySelectedItem : styles.selectedItem}></div>
                        <div className={styles.itemName}>Spaces</div>
                    </Link>
                    <Link className={styles.navbarItem} href="/notifications">
                        <div className={styles.itemHover}></div>
                        <Image className={styles.selectedIcon} src={(pathname == '/notifications') ? "/notificationsFillIcon.svg" : "/notificationsStrokeIcon.svg"} alt="Notifications icon" width={28} height={28}/>
                        <div className={(pathname == '/notifications') ? styles.currentlySelectedItem : styles.selectedItem}></div>
                        <div className={styles.itemName}>Notifications</div>
                    </Link>
                    <div className={styles.searchBar}>
                        <Image className={styles.searchBarIcon} width={16} height={16} src="/searchIcon.svg" alt="Search icon" />
                        <input spellCheck="false" aria-expanded placeholder="Search Quora" type="text" />
                    </div>
                    <div className={styles.profileMenuContainer} onClick={() => {
                        const element = document.querySelector(`.${styles.dropDownMenu}`)

                        if (window.getComputedStyle(element).display == "block") {
                            element.style.display = "none"
                        } else {
                            element.style.display = "block"
                        }
                    }}>
                        <Image className={styles.profileMenuIcon} width={24} height={24} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile pic"/>
                        <div className={styles.dropDownMenu}>
                            <Link href="/profile" className={styles.dropTop}>
                                <Image className={styles.dropImg} width={40} height={40} src={(profile.profile_pic == null) ? "/Images/quora_default_profile.png" : profile.profile_pic} alt="Profile pic"/>
                                <div className={styles.dropProfileContainer}>
                                    <div className={styles.profileName}>{profile.name}</div>
                                    <Image width={20} height={20} src="/rightArrow2.svg" alt="Right arrow 2" />
                                </div>
                                <p>{profile.credentials}</p>
                            </Link>
                            <div onClick={async () =>{
                                const client = createClient()
                                const {error} = await client.auth.signOut()
                                if (error) console.log(error)
                                redirect("/")
                            }} className={styles.logout}>Logout</div>
                        </div>
                    </div>
                    <button className={styles.addQuestion} onClick={() => {
                        document.querySelector(`.${post_styles.postContainerFull}`).style.display = "flex";
                        document.querySelector(`.${post_styles.questionSelected}`).style.visibility = "visible"
                        document.querySelector(`.${post_styles.postSelected}`).style.visibility = "hidden"
                        document.querySelector(`.${post_styles.questionAdd}`).style.display = "block"
                        document.querySelector(`.${post_styles.postAdd}`).style.display = "none"
                    }}>
                        <p>Add question</p>
                        <Image className={styles.addQuestionImg} src="/downArrow.svg" alt="Down arrow icon" width={20} height={20} />
                    </button>
                </div>
            </div>
            <main className={styles.main}>{children}</main>
            <PostComponent profile={profile}/>
        </>
    )
}