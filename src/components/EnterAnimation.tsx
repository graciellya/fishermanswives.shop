import * as motion from "motion/react-client";
import logo from '../assets/logo.png';

export default function EnterAnimation() {
  return (
    <motion.img
      src= {logo}
      alt="Logo"
      style={{
        width: 700,
        height: 700,
        margin: "0 auto",
        display: "block",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 1, bounce: 0.7 },
      }}
    />
  );
}
