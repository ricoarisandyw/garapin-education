import Link from "next/link";
import React from "react";
import NextImage from "../../components/NextImage";

export default function Main() {
    return (
        <div className="row">
            <div className="col-lg-12" style={{ padding: "2rem", minHeight: "100vh", backgroundImage: "url('/images/notebook.jpg')", backgroundSize: "cover" }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-sm-6">
                        <h1>GARAPIN</h1>
                        <div style={{ padding: "1rem", border: "5px solid white", background: "#000000ab", color: "white" }}>
                            <p>
                                Kesehatan mental adalah gerbang awal dari segala aspek. Kita tidak bisa bekerja, belajar, bahkan hidup dengan tenang jika mental kita kurang sehat. Garapin sebuah aplikasi yang menggarap semua aspek kehidupan anda dimulai dari kemampuan IQ, EQ, dan SQ.
                                <br />Garapin akan menjadi mentor digital anda untuk memaksimalkan potensi yang anda miliki. Dengan garapin hidup anda lebih terarah dan bahagia.
                            </p>
                        </div>
                        <div style={{height:"50px",width:200,cursor:"pointer"}}>
                            <Link href="https://drive.google.com/file/d/1Jsqn9c4gRahPryF4F8sUj7W2Mob1nLbQ/view?usp=sharing" passHref>
                                <NextImage fromUrl src="/images/google-play.png" alt="google-play" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <div className="shadow" style={{width:"250px",margin:"0 auto"}}>
                            <NextImage src="/images/Garapin_Mobile.png" alt="garapin_mobile" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 pt-5">
                <h1 className="text-center">Layanan Kami</h1>
                <div className="row p-5">
                    <div className="col-sm-4 p-3">
                        <div className="card shadow p-3">
                            <h1>Test IQ</h1>
                            <h1>
                                <i className="bi bi-award"></i>
                            </h1>
                            <p>Kita harus selalu mengasah IQ dengan menguji soal soal logika yang ada. Tes IQ biasanya kita gunakan untuk tes masuk sekolah atau tes masuk kerja.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3">
                        <div className="card shadow p-3">
                            <h1>Test EQ</h1>
                            <h1>
                                <i className="bi bi-emoji-laughing"></i>
                            </h1>
                            <p>Tes EQ bisa berupa MBTI dan Tipe Kepribadian. dalam tes ini kita bisa menemukan potensi terbaik berdasarkan karakter kita. Dengan adanya potensi dan kemampuan maka karir kita bisa berjalan lancar.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 p-3">
                        <div className="card shadow p-3">
                            <h1>Test SQ</h1>
                            <h1>
                                <i className="bi bi-people"></i>
                            </h1>
                            <p>Albert Einstein pernah berkata, tidak ada gunakan jika menggunakan ilmu tanpa hati yang baik. Agar kita selalu berada di jalan kemanusiaan maka kita juga memberikan tes SQ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 p-5">
                <h1 className="text-center pb-5">Sekilas Aplikasi Kami</h1>
                <div className="d-flex justify-content-center">
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display2.png" alt="google-play" />
                    </div>
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display3.png" alt="google-play" />
                    </div>
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display2.png" alt="google-play" />
                    </div>
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display3.png" alt="google-play" />
                    </div>
                </div>
                <div className="d-flex mt-3 justify-content-center">
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display4.png" alt="google-play" />
                    </div>
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display5.png" alt="google-play" />
                    </div>
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display6.png" alt="google-play" />
                    </div>
                    <div style={{width:200}} className="me-3 shadow">
                        <NextImage src="/images/display/display7.png" alt="google-play" />
                    </div>
                </div>
            </div>
            <div className="col-lg-12 text-center p-5">
                <Link passHref href="mailto:developer.garapin@gmail.com">
                    <button className="btn btn-success">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}