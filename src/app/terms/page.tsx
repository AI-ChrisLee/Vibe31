export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-gray-900">Terms of Service</h1>
          <p className="text-base text-gray-600 mb-8">Last updated: August 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                By enrolling in the Vibe 31 Challenge (&quot;the Program&quot;), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not enroll in the Program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">2. Program Description</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                The Vibe 31 Challenge is a 31-day intensive program designed to help agency owners build digital products. The Program includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">4 course modules delivered weekly</li>
                <li className="text-base text-gray-700">Weekly office hours every Thursday</li>
                <li className="text-base text-gray-700">Discord community access</li>
                <li className="text-base text-gray-700">Templates and source code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">3. Payment Terms</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                The Program fee is $799 USD (founding price for August 2025 cohort). Payment is required in full upon enrollment. 
                All payments are processed through Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">4. Refund Policy</h2>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-4">
                <p className="text-base font-bold text-gray-900 mb-2">Important: Please read carefully before enrolling</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Once the program starts, refunds are generally not available because you will have immediate access to our 
                  community, resources, and proprietary materials.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  <strong>Exception:</strong> If you complete ALL of the following requirements and don&apos;t achieve results, 
                  you may be eligible for a refund:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li className="text-base text-gray-700">Complete all assignments for all 4 modules</li>
                  <li className="text-base text-gray-700">Attend and participate in all 5 office hours sessions</li>
                  <li className="text-base text-gray-700">Send 20 DM outreach messages every day during the program</li>
                  <li className="text-base text-gray-700">Provide documented proof of all above activities</li>
                </ul>
                <p className="text-base text-gray-700 leading-relaxed mt-4">
                  Refund requests must be submitted within 7 days of program completion with full documentation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">5. Intellectual Property</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                All course materials, templates, and content provided in the Program are the intellectual property of 
                Vibe 31 and Chris Lee. You are granted a license to use these materials for your own projects but may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">Resell or redistribute the materials</li>
                <li className="text-base text-gray-700">Create competing courses or programs using our materials</li>
                <li className="text-base text-gray-700">Share access credentials with non-enrolled individuals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">6. Community Guidelines</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Participation in the Discord community requires professional behavior. We reserve the right to remove 
                anyone who:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">Engages in harassment or inappropriate behavior</li>
                <li className="text-base text-gray-700">Spams or promotes unrelated services</li>
                <li className="text-base text-gray-700">Violates the intellectual property rights of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">7. Disclaimer of Warranties</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                The Program is provided &quot;as is&quot; without any warranties. We do not guarantee specific income results. 
                Your success depends on many factors including your effort, market conditions, and business acumen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">8. Limitation of Liability</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                In no event shall Vibe 31 or Chris Lee be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of your participation in the Program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">9. Contact Information</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                For questions about these Terms of Service, please contact us at:<br />
                Email: support@vibe31.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}