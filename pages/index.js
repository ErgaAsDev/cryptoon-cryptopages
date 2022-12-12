import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LandingPage from './components/LandingPage'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <div className={styles.container}>
      <LandingPage />
      
    </div>
  )
}
