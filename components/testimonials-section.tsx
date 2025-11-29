import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "This platform transformed how we work. The intuitive design and powerful features have increased our productivity by 40%.",
    name: "Sarah Chen",
    role: "CEO at TechFlow",
    avatar: "/professional-woman-portrait.png",
  },
  {
    quote:
      "The best investment we've made for our team. Support is exceptional and the product keeps getting better every month.",
    name: "Marcus Johnson",
    role: "CTO at ScaleUp",
    avatar: "/professional-man-portrait.png",
  },
  {
    quote:
      "Finally, a solution that understands what modern teams need. Clean interface, powerful under the hood. Highly recommended.",
    name: "Emily Rodriguez",
    role: "Product Lead at Innovate",
    avatar: "/professional-woman-smiling-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#0a0a12]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-[#0f0f17] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-purple-500/5"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-purple-500/30 mb-4" />

              {/* Quote text */}
              <p className="text-gray-300 leading-relaxed mb-6 text-pretty">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-purple-500/30"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Accent border on top */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
