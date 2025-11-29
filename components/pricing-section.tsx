import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: ["Up to 5 projects", "Basic analytics", "24/7 support", "1GB storage"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$79",
    description: "For enterprises with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "Custom SLAs",
      "On-premise option",
      "Advanced security",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#0f0f17]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-purple-500/20"
                      }`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
