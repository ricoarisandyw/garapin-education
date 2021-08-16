import Link from 'next/link'
import React from 'react'

const LinkList = () => {
    return <div className="container-fluid">
        <div className="row p-5">
            <h1 className="text-center">Garapin Link List</h1>
            <Link href="#facebook" passHref>
                <button className="btn btn-primary col-sm-12 mt-1 mb-1">
                    <i className="bi bi-facebook" /> Facebook
                </button>
            </Link>
            <Link href="#instagram" passHref>
                <button className="btn btn-primary col-sm-12 mt-1 mb-1">
                    <i className="bi bi-instagram" /> Instagram</button>
            </Link>
            <Link href="#facebook" passHref>
                <button className="btn btn-primary col-sm-12 mt-1 mb-1">
                    <i className="bi bi-link" /> Sites</button>
            </Link>
            <Link href="#whatsapp" passHref>
                <button className="btn btn-primary col-sm-12 mt-1 mb-1">
                    <i className="bi bi-whatsapp" /> Whatsapp</button>
            </Link>
            <Link href="#email" passHref>
                <button className="btn btn-primary col-sm-12 mt-1 mb-1">
                    <i className="bi bi-envelope" /> Email</button>
            </Link>
        </div>
    </div>
}

export default LinkList