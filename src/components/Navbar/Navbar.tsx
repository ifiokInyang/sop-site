import React from "react";
// import "../../App.css";
import "./Navbar.css"
import { motion } from "framer-motion";
import NavbarVariant from "./NavbarFramer";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <motion.ul
          variants={NavbarVariant.navAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={NavbarVariant.navText}>
            <a href="#">Home</a>
          </motion.li>
          <motion.li variants={NavbarVariant.navText}>
            <a href="#">Product</a>
          </motion.li>
          <motion.li variants={NavbarVariant.navText}>
            <a href="#">About</a>
          </motion.li>
          <motion.li variants={NavbarVariant.navText}>
            <a href="#">Contact</a>
          </motion.li>
        </motion.ul>
      </nav>
      <section className="section">
        <div className="left">
          <motion.h1
            className="text"
            variants={NavbarVariant.typingContainer}
            initial="hidden"
            animate="show"
          >
            {Array.from('Coffee Nature').map((word, i) => (
              <motion.span key={i} variants={NavbarVariant.typingText}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <div className="explain-product">
            <motion.p
              variants={NavbarVariant.explainProduct}
              initial="hidden"
              animate="show"
            >
              Coffee Nature is brand product that provides the best quality of
              coffee in the world. We dedicate the best quality of coffee in the
              world. For Coffee lover we will serve you
            </motion.p>
          </div>
          <div className="button">
            <motion.button
              className="btn-order"
              variants={NavbarVariant.buttonProduct}
              initial="hidden"
              animate="show"
            >
              Order now
            </motion.button>
          </div>
          <motion.div
            className="star-square"
            variants={NavbarVariant.starAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.img
              src="/images/star.png"
              alt="star-square"
              variants={NavbarVariant.starItem}
            />
            <motion.img
              src="/images/star.png"
              alt="star-square"
              variants={NavbarVariant.starItem}
            />
            <motion.img
              src="/images/star.png"
              alt="star-square"
              variants={NavbarVariant.starItem}
            />
          </motion.div>
        </div>
        <div className="right">
          <motion.img
            src="/images/nature.jpg"
            alt="nature"
            className="img1"
            variants={NavbarVariant.imgProduct1}
            initial="hidden"
            animate="show"
          />
          <p className="text-[blue]">Hello</p>
          <motion.img
            src="/images/coffee.jpg"
            alt="coffee"
            className="img2"
            variants={NavbarVariant.imgProduct2}
            initial="hidden"
            animate="show"
          />
        </div>
      </section>
      <div className="chatContainer">
        <div className="chatSubContainer">
          <a
            href="https://api.whatsapp.com/send/?phone=2348162964632&text&type=phone_number&app_absent=0"
            target={'_blank'}
            className="chatLink"
          >
            <i
              className="fa fa-whatsapp"
              style={{ color: 'green', fontSize: '24px' }}
            ></i>{' '}
            Start chatting now!!!
          </a>

          <div className="ring"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
