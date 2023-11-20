import logo from '/logo.svg';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet';

const Framer = ({title}) => {
  const pVariants = {
    hidden: {x: -1000, opacity: 0},
    visible: {x: 0, opacity: 1},
  };

  const listVariants = {
    hidden: {opacity: 0, y: 50},
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {delay: i * 0.5},
    }),
  };

  const items = ['Text 1', 'Text 2', 'Text 3'];

  return (
    <>
      <Helmet>
        <title>{title} - SPA</title>
      </Helmet>
      <div className='framer flex flex-col  items-center  '>
        <h2>framer</h2>
        <motion.img
          className='img w-60 '
          src={logo}
          alt=''
          animate={{rotate: 360}}
          // initial={{}}
          transition={{
            delay: 0,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: 'reverse',
            type: 'tween',
            ease: 'easeInOut',
          }}
        />
        <motion.p
          className='text-center mt-10'
          initial={'hidden'}
          animate={'visible'}
          transition={{
            delay: 1,
            duration: 2,
          }}
          variants={pVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem iure non autem accusamus cupiditate
          officia recusandae voluptatem assumenda, eaque quaerat neque ea, suscipit ipsa exercitationem. Commodi
          dignissimos sint voluptas.
        </motion.p>
        <motion.a
          // href='#'
          href='#'
          className='mt-10 p-2 border'
          whileHover={{
            scale: 1.5,
            color: 'orange',
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
          }}
        >
          Link
        </motion.a>
        <div className='mt-10'></div>
        {items.map((el, index) => (
          <motion.li
            // key={index}
            key={el}
            variants={listVariants}
            initial='hidden'
            animate='visible'
            custom={index}
          >
            {el}
          </motion.li>
        ))}
      </div>
    </>
  );
};

export default Framer;
