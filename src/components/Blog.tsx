import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiClock, FiTag } from 'react-icons/fi'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a modern React project with TypeScript and best practices for type safety.',
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['React', 'TypeScript', 'Web Development'],
    slug: 'getting-started-with-react-typescript',
  },
  {
    title: 'Building Accessible Web Applications',
    excerpt: 'A comprehensive guide to creating web applications that are accessible to all users.',
    date: '2024-03-10',
    readTime: '8 min read',
    tags: ['Accessibility', 'Web Development', 'Best Practices'],
    slug: 'building-accessible-web-applications',
  },
  // Add more blog posts as needed
]

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="blog" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center mb-12">Latest Blog Posts</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <FiClock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                      >
                        <FiTag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    whileHover={{ x: 5 }}
                  >
                    Read more →
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/blog"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View All Posts
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog 