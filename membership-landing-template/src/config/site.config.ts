// Site Configuration
// Replace all placeholder values with your actual content

export const siteConfig = {
  // Basic Info
  name: "[Your Product Name]",
  title: "[Your Product] - [Main Value Proposition]",
  description: "[Brief description of your product/service]",
  price: 799, // Your price in USD
  
  // Tools/Features to highlight
  tools: [
    { name: "Tool 1", icon: "🛠️", color: "from-gray-900 to-black" },
    { name: "Tool 2", icon: "⚡", color: "from-blue-500 to-blue-600" },
    { name: "Tool 3", icon: "🚀", color: "from-green-500 to-green-600" },
    { name: "Tool 4", icon: "💡", color: "from-purple-600 to-purple-700" },
  ],
  
  // Three main problems your audience faces
  problems: [
    {
      icon: "😩",
      title: "[Problem 1 Title]",
      description: "[Describe the pain point in relatable terms]",
      highlight: false
    },
    {
      icon: "😤",
      title: "[Problem 2 Title]",
      description: "[Another pain point they experience]",
      highlight: false
    },
    {
      icon: "😰",
      title: "[Problem 3 Title]",
      description: "[The most urgent problem - set highlight: true]",
      highlight: true
    }
  ],
  
  // Transformation journey (weeks/modules)
  journey: [
    {
      week: "Week 1",
      title: "[First Milestone]",
      price: "$[X]K",
      description: "[What they'll achieve]",
      bullets: ["Key outcome 1", "Key outcome 2"]
    },
    {
      week: "Week 2",
      title: "[Second Milestone]",
      price: "$[X]K",
      description: "[Next achievement]",
      bullets: ["Key outcome 1", "Key outcome 2"]
    },
    {
      week: "Week 3",
      title: "[Third Milestone]",
      price: "$[X]K",
      description: "[Final product/result]",
      bullets: ["Key outcome 1", "Key outcome 2"]
    }
  ],
  
  // Pricing
  pricing: {
    originalPrice: 2997,
    salePrice: 799,
    savingsPercent: 73,
    productName: "[Your Product Name]",
    features: [
      {
        title: "[Main Deliverable]",
        description: "[What they get and the value]"
      },
      {
        title: "[Support Feature]",
        description: "[How you'll help them succeed]"
      },
      {
        title: "[Bonus Feature]",
        description: "[Additional value included]"
      }
    ]
  },
  
  // FAQs
  faqs: [
    {
      question: "What exactly do I get for $[price]?",
      answer: "[List all deliverables and value]"
    },
    {
      question: "Do I need [specific skill/requirement]?",
      answer: "[Address common concerns about prerequisites]"
    },
    {
      question: "How is this different from [alternatives]?",
      answer: "[Your unique value proposition]"
    },
    {
      question: "What if I can't attend live sessions?",
      answer: "[Explain recording access and flexibility]"
    },
    {
      question: "What's your refund policy?",
      answer: "[Clear refund terms and conditions]"
    }
  ],
  
  // Final CTA
  finalCTA: {
    headline: "[Compelling closing statement]",
    subheadline: "[Urgency or transformation promise]",
    features: ["[Feature 1]", "[Feature 2]"]
  }
}