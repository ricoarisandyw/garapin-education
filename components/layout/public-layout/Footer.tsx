import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import NextImage from '../../NextImage'

const Footer = () => {
    const pawonMenu = [
        { label: "Semua Menu", href: "/allMenu" },
        { label: "Tentang Kami", href: "/allMenu" },
        { label: "Kontak", href: "/allMenu" },
        { label: "Konfirmasi Pesanan", href: "/allMenu" },
    ]

    const menuList = pawonMenu.map((menu) => <li className="footer-menu" key={menu.label}>
        <a href={menu.href}>{menu.label}</a>
    </li>)

    const sosMed = [
        { icon: "/images/social-media/facebook.png", href: "/facebook" },
        { icon: "/images/social-media/instagram.png", href: "/instagram" },
    ]

    const sosMedList = sosMed.map((menu) => <div className="footer-menu" key={menu.href}>
        <a href={menu.href}>
            <NextImage src={menu.icon} alt="icon" className="footer-icon" />
        </a>
    </div>)

    const paymentMethod = [
        { icon: "/images/payment/payment-channel-alfamart.png" },
        { icon: "/images/payment/payment-channel-bca_va.png" },
        { icon: "/images/payment/payment-channel-shopeepay.png" },
        { icon: "/images/payment/payment-channel-dana.png" },
        { icon: "/images/payment/payment-channel-gopay.png" },
        { icon: "/images/payment/payment-channel-ovo.png" },
        { icon: "/images/payment/payment-channel-permata_va.png" },
    ]

    const paymentList = paymentMethod.map((menu) => <div className="footer-menu" style={{ marginRight: 10 }} key={menu.icon}>
        <a href={menu.icon}>
            <NextImage src={menu.icon} alt="icon" className="footer-icon-payment" />
        </a>
    </div>)

    return (
        <footer>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        <strong>Garapin</strong>
                    </Typography>
                    From Surabaya. Since 2021.
                    <br /><br />
                    <div>
                        <b>Founder</b>
                        <br />Frida <i>(Manager Marketing)</i>
                        <br />M. Taffaquh Fiddin <i>(Data Scientist)</i>
                        <br />Wahyue Abied <i>(Mobile Developer)</i>
                        <br />Rico Arisandy <i>(Fullstack Developer)</i>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        <strong>Social Media</strong>
                    </Typography>
                    <Grid container>
                        {sosMedList}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">
                        <strong>Contact</strong>
                    </Typography>
                    <Grid container>
                        developer.garapin@gmail.com
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer