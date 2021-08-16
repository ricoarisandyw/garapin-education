import React from 'react'
import Image from 'next/image'

interface ImageProps {
    src: string
    alt: string
    className?: string
    fromUrl?: boolean
}

const NextImage: React.FC<ImageProps> = (props) => {
    return (
        <div className="nextImageContainer">
            {props.fromUrl ?
                <Image loader={() => props.src} src={props.alt} alt={props.alt} layout="fill" className={props.className ? props.className : "nextImage"} />:
                <Image src={props.src} alt="props.alt" layout="fill" className={props.className ? props.className : "nextImage"} />
            }
        </div>
    )
}

export default NextImage