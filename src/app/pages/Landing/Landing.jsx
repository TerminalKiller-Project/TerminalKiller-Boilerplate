import s from './Landing.module.css';
import introVideo from '../../assets/videos/laruina-intro.mp4';
import { motion } from 'framer-motion';
import { Example } from '../../components/Example';

export const Landing = () => {
  return (
    <div className={s.landing}>
      <video className={s.video} src={introVideo} autoPlay loop muted />
      <motion.div>
        <div className={s.canvas}>
          <Example/>
        </div>
      </motion.div>
    </div>
  )
}