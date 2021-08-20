import Link from "next/link";
import React from "react";
import NextImage from "../../components/NextImage";
import styles from './main.module.scss'

export default function Main() {
    return (
        <div className="row">
            <div className="col-lg-12" style={{ padding: "2rem", minHeight: "70vh" }}>
                <div className="position-relative">
                    <div className={styles.wave}>
                        <img alt='wave' src={"/images/home/Bg Shape.png"} height="500px" />
                    </div>
                    <div className={styles.people}>
                        <img alt="people" src="/images/home/Group 1311.png" height="300px" />
                    </div>
                    <div className="image-person"></div>
                    <div className="row">
                        <div className="col-sm-6 p-5">
                            <h1>Sistem Ujian Online</h1>
                            <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos eaque, inventore fugit, reiciendis quisquam, accusantium id sunt porro quos est perspiciatis facere in molestias provident pariatur! Asperiores, voluptatem quo!</p>
                            <span className="btn-yellow">DAFTAR SEKARANG</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 pl-5 pr-5">
                <img alt='wave' src={"/images/home/Group 1314.png"} height="500px" />
            </div>
            <div className="col-lg-6 p-5 m-auto">
                <strong className="text-green">Biography</strong>
                <h1>Who are we?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minima aliquam molestiae cupiditate ex ipsa ducimus et consequatur eveniet quaerat? Enim quibusdam delectus vitae repellendus quod. Ab delectus vitae consectetur.</p>
                <span className="btn-green">SEE MORE</span>
            </div>
            <div className="col-lg-12 p-5">
                <strong className="text-green">Fitur GARAP.IN</strong>
                <h1>Apa yang kita tawarkan?</h1>
                <div className="row">
                    <div className="col-sm-4 p-3 p-lg-5">
                        <div className="card-radius py-5 px-3 shadow-lg">
                            <img src={"/images/home/001-process.png"} alt="process" height="100px" style={{ objectFit: "contain", width: "100%" }} />
                            <h3 className="py-3">Title Here</h3>
                            <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente libero incidunt corporis, facilis accusantium beatae fuga. Voluptatem debitis necessitatibus inventore? Similique facilis laboriosam odit cupiditate maxime officia reprehenderit necessitatibus temporibus?</p>
                            <div className="text-end">
                                <span className="btn-green">SEE MORE</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3 p-lg-5">
                        <div className="card-radius py-5 px-3 shadow">
                            <img src={"/images/home/002-social-media.png"} alt="process" height="100px" style={{ objectFit: "contain", width: "100%" }} />
                            <h3 className="py-3">Title Here</h3>
                            <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente libero incidunt corporis, facilis accusantium beatae fuga. Voluptatem debitis necessitatibus inventore? Similique facilis laboriosam odit cupiditate maxime officia reprehenderit necessitatibus temporibus?</p>
                            <div className="text-end"><span className="btn-green">SEE MORE</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3 p-lg-5">
                        <div className="card-radius py-5 px-3 shadow">
                            <img src={"/images/home/003-responsive.png"} alt="process" height="100px" style={{ objectFit: "contain", width: "100%" }} />
                            <h3 className="py-3">Title Here</h3>
                            <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente libero incidunt corporis, facilis accusantium beatae fuga. Voluptatem debitis necessitatibus inventore? Similique facilis laboriosam odit cupiditate maxime officia reprehenderit necessitatibus temporibus?</p>
                            <div className="text-end"><span className="btn-green">SEE MORE</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3 p-lg-5">
                        <div className="card-radius py-5 px-3 shadow">
                            <img src={"/images/home/004-social-media-1.png"} alt="process" height="100px" style={{ objectFit: "contain", width: "100%" }} />
                            <h3 className="py-3">Title Here</h3>
                            <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente libero incidunt corporis, facilis accusantium beatae fuga. Voluptatem debitis necessitatibus inventore? Similique facilis laboriosam odit cupiditate maxime officia reprehenderit necessitatibus temporibus?</p>
                            <div className="text-end"><span className="btn-green">SEE MORE</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3 p-lg-5">
                        <div className="card-radius py-5 px-3 shadow">
                            <img src={"/images/home/007-analysis.png"} alt="process" height="100px" style={{ objectFit: "contain", width: "100%" }} />
                            <h3 className="py-3">Title Here</h3>
                            <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente libero incidunt corporis, facilis accusantium beatae fuga. Voluptatem debitis necessitatibus inventore? Similique facilis laboriosam odit cupiditate maxime officia reprehenderit necessitatibus temporibus?</p>
                            <div className="text-end"><span className="btn-green">SEE MORE</span></div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3 p-lg-5">
                        <div className="card-radius py-5 px-3 shadow">
                            <img src={"/images/home/008-computer.png"} alt="process" height="100px" style={{ objectFit: "contain", width: "100%" }} />
                            <h3 className="py-3">Title Here</h3>
                            <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente libero incidunt corporis, facilis accusantium beatae fuga. Voluptatem debitis necessitatibus inventore? Similique facilis laboriosam odit cupiditate maxime officia reprehenderit necessitatibus temporibus?</p>
                            <div className="text-end"><span className="btn-green">SEE MORE</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 text-center pt-5" style={{ background: "#FDF6DB" }}>
                <span className="text-green">Pricing</span>
                <h1>Our Pricing</h1>
                <div className="row pt-1 p-5">
                    <div className="col-sm-4 p-5">
                        <div className="card-radius shadow-lg p-5">
                            <h3 className="py-3">Paket Platinum</h3>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam praesentium laudantium obcaecati ex sit, fugit dolores unde repellendus corporis veritatis doloremque odit enim? Voluptatibus alias reiciendis, modi architecto vel repellat.</p>
                            <h1 className="pb-5 text-green">$ 140</h1>
                            <span className="btn-green">See Details</span>
                        </div>
                    </div>
                    <div className="col-sm-4 p-5">
                        <div className="card-radius shadow-lg p-5">
                            <h3 className="py-3">Paket Platinum</h3>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam praesentium laudantium obcaecati ex sit, fugit dolores unde repellendus corporis veritatis doloremque odit enim? Voluptatibus alias reiciendis, modi architecto vel repellat.</p>
                            <h1 className="pb-5 text-green">$ 140</h1>
                            <span className="btn-green">See Details</span>
                        </div>
                    </div>
                    <div className="col-sm-4 p-5">
                        <div className="card-radius shadow-lg p-5">
                            <h3 className="py-3">Paket Platinum</h3>
                            <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam praesentium laudantium obcaecati ex sit, fugit dolores unde repellendus corporis veritatis doloremque odit enim? Voluptatibus alias reiciendis, modi architecto vel repellat.</p>
                            <h1 className="pb-5 text-green">$ 140</h1>
                            <span className="btn-green">See Details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 p-5 text-center">
                <div className="pt-5">
                    <strong className="text-green">Newsletter</strong>
                    <h3>Apakah anda ingin mendapat <strong>Berita Terbaru Kami</strong></h3>
                </div>
                <div className="pb-5">
                    <input placeholder="Drop your email" className="simple-input me-3" /><span className="btn-green">Subscribe</span>
                </div>
            </div>
        </div>
    )
}