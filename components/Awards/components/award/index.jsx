'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';

export default function Award({index, title, url, manageModal}) {

    return (
       
        
        <Link href={url} className="w-full" target="_blank">
            <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project} >
                <h2>{title}</h2>
                {/* <p>Design & Development</p> */}
            </div>
        </Link>
    )
}
