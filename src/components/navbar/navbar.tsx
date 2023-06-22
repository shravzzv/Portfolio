import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav__container}>
        <div className={styles.nav__logo}>Sai Shravan</div>.{' '}
        <button className={styles.nav__toggle} aria-label='open navigation'>
          <Image
            src='/utility svgs/hamburger.svg'
            alt='hamburger'
            className={styles.nav__hamburger}
            width={50}
            height={50}
          />
        </button>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href='#' className={styles.nav__link}>
                Home
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#aboutme' className={styles.nav__link}>
                About
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#portfolio' className={styles.nav__link}>
                Portfolio
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href='#contact' className={styles.nav__link}>
                Contact
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Image
                src='/utility svgs/lighttheme-bulb.svg'
                alt='light-theme'
                width={50}
                height={50}
              />
              <Image
                src='/utility svgs/darktheme-bulb.svg'
                alt='light-theme'
                width={50}
                height={50}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
