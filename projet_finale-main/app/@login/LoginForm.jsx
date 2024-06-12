'use client'

/*
La page login qui inclut le form pour envoyer les credentiels au server
*/
import styles from "./styles.module.css"
import React, { useEffect, useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const button = document.getElementById("submit")
        if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && password) {
            button.removeAttribute("disabled")
        } else {
            button.setAttribute("disabled", "disabled")
        }
    }, [email, password])

    return (
        <div className="loginContainer">
            <div className={styles.emailContainer}>
                <label htmlFor="email">Email:</label>
                <input onChange={e => setEmail(e.target.value)} className={styles.loginValidate} placeholder="Your email" id="email" name="email" type="email" />
            </div>
            <div className={styles.passwordContainer}>
                <label htmlFor="password">Password:</label>
                <input onChange={e => setPassword(e.target.value)} placeholder="Your password" id="password" name="password" type="password" />
            </div>
            <div className={styles.loginBottom}>
                <a className={styles.forgotPassword}>Forgot password?</a>
                <button id="submit" type="submit" disabled={true} className={styles.loginButton}>Log in</button>
            </div>
        </div>
    )
}