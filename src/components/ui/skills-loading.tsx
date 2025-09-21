// Skills Loading Skeleton Component
import { motion } from "framer-motion"

export const SkillsLoadingSkeleton = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
    {Array.from({ length: 12 }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          delay: index * 0.1 
        }}
        className="p-2 sm:p-3 md:p-4 bg-white/5 border border-purple-200/20 rounded-lg sm:rounded-xl"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 dark:bg-gray-700 rounded mb-2 sm:mb-3" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-1" />
        <div className="h-2 bg-gray-400 dark:bg-gray-600 rounded w-2/3" />
      </motion.div>
    ))}
  </div>
)