import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import carData from '../../data/carData.json'

import styles from '../../styles/car.module.css'

export default function () {
    const router = useRouter()
    const [data, setData] = useState({  }) 

    useEffect(() => {
        if (!router.isReady) return

        setData(carData[router.query.id])

    }, [router.isReady, router.query.id])

    return (
        <div>
            <h1 className={styles.name}>{data.name}:</h1>
            <div className={styles.carImageWrapper}>
                <img src={data.img} />
            </div>
            <p className={styles.carStat}><b>Speed:</b> {data.speed}mph</p>
            <p className={styles.carStat}><b>Description:</b> {data.description}</p>
        </div>
    )
}