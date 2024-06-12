import { login } from "./authentication"
import styles from "./styles.module.css"
import Image from "next/image"
import "../global.css"
import LoginForm from "./LoginForm"

export default function Login() {
    return (
        <div className={styles.landingContainer}>
            <Image
            alt="landingPage background"
            src="/Images/quora_background_image_login.png"
            className={styles.landingImage}
            fill
            />
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                    <Image
                        alt="Quora title"
                        src="/quora.svg"
                        width={176}
                        height={100}
                        />
                    </div>
                    <div className={styles.subtitle}>A place to share knowledge and better understand the world</div>
                </div>
                <div className={styles.mainBody}>
                    <div style={{borderRight: "1px solid #393839"}} className={styles.mainSide}>
                        <div className={styles.continuing}>By continuing you indicate that you agree to Quora’s <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</div>
                        <div className="auth">
                            <div className="google"></div>
                            <div className="facebook"></div>
                            <div className="emailSignup">Sign up with email</div>
                        </div>
                    </div>
                    <div className={styles.mainSide}>
                        <div className={styles.loginTitle}>Login</div>
                        <form action={login} className={styles.loginForm}>
                            <LoginForm />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}