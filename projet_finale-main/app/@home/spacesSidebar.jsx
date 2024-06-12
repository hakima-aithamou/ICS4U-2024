"use client"
import styles from "./spacebar.module.css"
import Image from "next/image"
import { createClient } from "@/supabase/client"

/*
Page qui inclut la creation des spaces
*/

export default function SpacesSidebar() {

    return (
        <>
        <div className={styles.spaces}>
            <div onClick={() => {document.querySelector(`.${styles.createSpaceFull}`).style.visibility = "visible";}} className={styles.createSpaceButton}>
                <div className={styles.plusIconContainer}>
                    <Image width={12} height={12} src="/plusIcon.svg" alt="Plus icon"/>
                </div>
                <div>Create Space</div>
            </div>
        </div>
        <div className={styles.createSpaceFull}>
            <div className={styles.createSpaceContainer}>
                <div className={styles.SpaceTop}>
                    <div className={styles.exitButtonOuterContainer}>
                        <div className={styles.exitButtonInnerContainer} onClick={() => {document.querySelector(`.${styles.createSpaceFull}`).style.visibility = "hidden";}}>
                            <Image className={styles.exitButton} width={24} height={24} src="/exitIcon.svg" alt="Exit icon"/>
                        </div>
                    </div>
                    <div className={styles.createSpaceTitleContainer}>
                        <h2>Create a Space</h2>
                        <h3>Share your interests, curate content, host discussions, and more.</h3>
                    </div>
                </div>
                <div className={styles.SpaceBottom}>
                    <div className={styles.spaceFormContainer}>
                        <div className={styles.labelContainer}>
                            <div className={styles.label}>Name<span color="#f52936">*</span></div>
                            <div className={styles.sublabel}>This can be changed in Space settings.</div>
                        </div>
                        <input onChange={e => {
                            const text = e.target.value;
                            const available = document.querySelector(`.${styles.available}`);
                            const submitButton = document.querySelector(`.${styles.submitButton}`);
                            switch (text.length) {
                                case 0:
                                    submitButton.disabled = true;
                                    available.innerHTML = ""
                                return;
                                case 1:
                                    submitButton.disabled = true;
                                    available.innerHTML = `<span style="color: #f52936; font-size: 13px;">Please give your Space a longer, more descriptive name.</span>`;
                                    return;
                                default:
                                //implement checking for if space name already exists
                                submitButton.disabled = false;
                            }
                            
                        }} maxLength={50} className={styles.spaceNameInput} type="text" />
                        <div className={styles.available}></div>
                        <div className={styles.labelContainer}>
                            <div className={styles.label}>Brief description<span color="#f52936">*</span></div>
                            <div className={styles.sublabel}>Include a few keywords to show people what to expect if they join.</div>
                        </div>
                        <input maxLength={80} className={styles.spaceDescriptionInput} type="text" />
                    </div>
                </div>
                <div className={styles.sumbitButtonContainer}>
                    <button className={styles.submitButton} type="submit">Create</button>
                </div>
            </div>
        </div>
        </>
    )
}