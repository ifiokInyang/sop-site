const typingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};
const typingText = {
  hidden: { opacity: 0, y: "-20px" },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      ease: "easeInOut",
    },
  },
};
const explainProduct = {
  hidden: { opacity: 0, y: "-20px" },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 2.2,
      ease: "easeInOut",
    },
  },
};
const buttonProduct = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 2.3,
      type: "tween",
    },
  },
};
const imgProduct1 = {
  hidden: {
    opacity: 0,
    y: "400px",
    width: "80px",
  },
  show: {
    opacity: 1,
    y: 0,
    width: "250px",
    transition: {
      duration: 1,
      delay: 2.5,
      ease: "easeInOut",
    },
  },
};
const imgProduct2 = {
  hidden: {
    opacity: 0,
    y: "400px",
    x: "50px",
    width: "80px",
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    width: "250px",
    transition: {
      duration: 1,
      delay: 3.4,
      ease: "easeInOut",
    },
  },
};
const navAnimation = {
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 3.8,
      ease: "easeInOut",
    },
  },
};
const navText = {
  hidden: {
    opacity: 0,
    y: "-10px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const starAnimation = {
  hidden: {
    opacity: 0,
    x: "-50px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 3.8,
    },
  },
};
const starItem = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeIn",
    },
  },
};


export default {
  typingContainer,
  typingText,
  explainProduct,
  buttonProduct,
  imgProduct1,
  imgProduct2,
  navAnimation,
  navText,
  starAnimation,
  starItem,
};