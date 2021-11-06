import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchField from "react-search-field";
import Carousel from 'react-bootstrap/Carousel';
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <html>
      <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/yxi2imx.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <body className = {styles.body}>
        <div className={styles.mainWrapper}>
          <div className={styles.headerLogoBlock}>
            <img src="header.png" alt="Header Logo" width="100%"></img>
          </div>
          <div className={styles.navbarHeader}>
            <nav className={styles.navbarBar}>
              <a className={styles.navBarItems} href="#">New This Week</a>
              <a className={styles.navBarItems} href="#">Popular</a>
              <a className={styles.navBarItems} href="#">Critically Acclaimed</a>
              <a className={styles.navBarItems} href="#">Genres</a>
              <a className={styles.navBarItems} href="#">Movie Generator</a>
              <SearchField 
                placeholder="Search..."
                searchText="This is initial search text"
                classNames={styles.navBarItems}
              />
            </nav>
          </div>
          <div className={styles.carouselSection}>
            <Carousel>
              <Carousel.Item>
                <img
                  src="aesthetic1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="aesthetic1.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="aesthetic1.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <footer className={styles.footer}>
            <div className={styles.footerTitle}>
              <h2>
                WhatToKnowBeforeWatching.com
              </h2>
            </div>
            <hr className={styles.footerLines}/> {/*line to break the footer*/}
            <div className={styles.secondFooterSection}>
              <div className={styles.officialStuff}> {/*about and stuff*/}
                <a href="https://www.google.com">
                  <p>About</p>
                </a>
                <a href="https://www.google.com">
                  <p>Privacy Policy</p>
                </a>
                <a href="https://www.google.com">
                  <p>Feedback</p>
                </a>
                <a href="https://www.google.com">
                  <p>Help</p>
                </a>
              </div>
              <div className={styles.officialStuff}> {/*Mission statement*/}
                <div className={styles.officialMissionBlock}> {/*Mission statement*/}
                  <h3>Mission Statement</h3>
                  <p className={styles.officalParagraphLineHeight}> This will eventually be our mission 
                  statement stating why we do what we do, because I want to service the internet and allow 
                  for people to know what they're getting into before watching what they want to watch, 
                  because sometimes people get confused idk.</p>
                </div>
              </div>
              <div className={styles.officialStuff}> {/*Follow us on*/}
                <div className={styles.officialFollowBlock}> {/*Follow us on*/}
                  <h3 className={styles.officialFollowTitles}>Follow Us On:</h3>
                  <div className={styles.officialImages}>
                    <a href="https://www.google.com">
                      <img src="/face1.png" alt="Facebook" className={styles.officialFacebookLink}></img>
                    </a>
                    <a href="https://www.google.com">
                      <img src="/insta1.png" alt="Instagram" className={styles.officialInstaLink}></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.officialStuff}> {/*Sign up for things*/}
                <div className={styles.officialSignUpBlock}> {/*Sign up for things*/}
                  <h3 className={styles.officialSignUpTitle}>Sign Up For Notificatons on New Postings:</h3>
                    <div className={styles.officialSignUpCouple}> {/*Sign up for things*/}
                      <form noValidate autoComplete="off">
                        <TextField className={styles.officialSignUpForm} id="outlined-basic" label="Enter Your Email Here" variant="filled" />
                          <Button className={styles.officialSignUpButton} variant="contained" color="primary">Submit</Button>
                      </form>
                    </div>
                </div>
              </div>
            </div>
              <hr className={styles.footerLines}/> {/*line to break the footer*/}
              <p className={styles.lastFooterText}>© 2021 WhatToKnowBeforeWatching.com. All Rights Reserved. </p>
            </footer>


          <style jsx global>{`
            html {
              font-family: forma-djr-deck, sans-serif;
              font-weight: 200;
              font-style: normal;
              margin-top: 0vw;
              margin-bottom: 0vw;
            }
          `}</style>
        </div>
      </body>
    </html>
  )
}
