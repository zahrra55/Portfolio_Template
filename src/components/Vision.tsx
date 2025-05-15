import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const visionItems = [
    {
      title: 'Academic Interests',
      description: 'My research focuses on artificial intelligence and machine learning, particularly in the areas of natural language processing and computer vision.',
    },
    {
      title: 'Career Goals',
      description: 'I aim to lead innovative projects that push the boundaries of technology while maintaining a strong focus on user experience and accessibility.',
    },
    {
      title: 'Research Aspirations',
      description: 'I'm passionate about contributing to open-source projects and publishing research that advances the field of software engineering.',
    },
  ]

  return (
    <section id="vision" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center mb-12">Academic & Career Vision</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {visionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 italic">
              "I believe in continuous learning and pushing the boundaries of what's possible through technology."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision 