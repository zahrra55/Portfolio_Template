import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
              My journey in software development began with a curiosity for creating impactful digital
              experiences, and it has evolved into a professional pursuit of building robust and
              user-friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
              <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Projects</h4>
              <p className="text-gray-600 dark:text-gray-300">20+ Completed</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Clients</h4>
              <p className="text-gray-600 dark:text-gray-300">15+ Happy Clients</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Awards</h4>
              <p className="text-gray-600 dark:text-gray-300">3+ Achievements</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 