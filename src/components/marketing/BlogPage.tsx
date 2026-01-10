import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User, Tag, ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { CTASection } from "./CTASection";
import { Newsletter } from "./Newsletter";
import { Divider } from "./Divider";

const featuredPost = {
  title: "The Future of Trade Finance: Why Compliance Automation Matters",
  excerpt: "As global trade becomes more complex, businesses need smarter tools to navigate regulatory requirements. Here's how automation is changing the game.",
  author: "Sarah Chen",
  role: "CTO",
  date: "Jan 8, 2026",
  readTime: "8 min read",
  category: "Industry Insights",
  image: "gradient",
};

const posts = [
  {
    title: "TRAIBOX Platform Now Generally Available",
    excerpt: "After months of successful pilots across EU corridors, we're excited to announce general availability of the TRAIBOX platform.",
    author: "Alex Mercer",
    date: "Jan 5, 2026",
    readTime: "3 min read",
    category: "Product News",
  },
  {
    title: "Understanding ESG/CBAM Requirements for Trade",
    excerpt: "The EU's Carbon Border Adjustment Mechanism is changing how companies approach cross-border trade. Here's what you need to know.",
    author: "Marcus Schmidt",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    category: "Compliance",
  },
  {
    title: "Building Trust in Trade Networks",
    excerpt: "How verifiable proofs and deterministic audits are creating new standards for trade partner relationships.",
    author: "Elena Rodriguez",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    category: "Industry Insights",
  },
  {
    title: "Case Study: TechDistrib's 97% Faster Processing",
    excerpt: "How a leading electronics distributor transformed their Portugal-Spain trade corridor with TRAIBOX.",
    author: "Elena Rodriguez",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    category: "Case Studies",
  },
  {
    title: "API v2.0: What's New for Developers",
    excerpt: "Webhooks, improved schemas, and better error handling. Everything developers need to know about our latest API release.",
    author: "Sarah Chen",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    category: "Engineering",
  },
  {
    title: "The Hidden Costs of Manual Compliance",
    excerpt: "Research shows companies spend 20+ hours per week on manual compliance tasks. Here's how to reclaim that time.",
    author: "Marcus Schmidt",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    category: "Compliance",
  },
];

const categories = ["All", "Product News", "Industry Insights", "Compliance", "Case Studies", "Engineering"];

export const BlogPage = () => {
  return (
    <>
      <Section
        id="blog"
        eyebrow="Blog"
        title="Insights & Updates"
        subtitle="The latest on trade infrastructure, compliance automation, and product news."
      >
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden mb-10 group cursor-pointer hover:border-primary/30 transition-all duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 text-xs text-primary">
                  <Tag className="h-3 w-3" />
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{featuredPost.author}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {featuredPost.date}
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </motion.article>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 cursor-pointer hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10 transition">
            Load more articles
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Section>

      <Divider />
      <Newsletter />
      <Divider />
      <CTASection />
    </>
  );
};
