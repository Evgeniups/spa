import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';

const About = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} - SPA</title>
      </Helmet>
      <div className='text-2xl font-bold text-sky-900'>About page</div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      />
    </div>
  );
};

export default About;
