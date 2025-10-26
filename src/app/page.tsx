"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Briefcase, Building, Code, DollarSign, Folder, Handshake, HelpCircle, Layers, Lightbulb, Megaphone, Palette, Quote, Rocket, Send, Sparkles, Target, TrendingUp, Users, Linkedin, Twitter, Github } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Elevate Agency"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="We Elevate Brands Through Design"
          description="Transform your business with our comprehensive design and development solutions. We create memorable experiences that drive results."
          tag="Creative Agency"
          tagIcon={Sparkles}
          imageSrc="https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern creative agency workspace"
          buttons={[
            {
              text: "Start Project",
              href: "contact"
            },
            {
              text: "View Portfolio",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Our Agency"
          description="We're a full-service creative agency dedicated to crafting exceptional digital experiences that resonate with your audience and drive business growth."
          tag="Who We Are"
          tagIcon={Users}
          imageSrc="https://images.pexels.com/photos/7661185/pexels-photo-7661185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Our creative team at work"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Creative Excellence",
              description: "Award-winning designs that capture attention and communicate your brand story effectively.",
              icon: Award
            },
            {
              title: "Strategic Approach",
              description: "Data-driven solutions tailored to your specific business goals and target audience.",
              icon: Target
            },
            {
              title: "Full-Service Team",
              description: "From strategy to execution, we handle every aspect of your creative project.",
              icon: Layers
            },
            {
              title: "Proven Results",
              description: "Track record of delivering successful campaigns that increase engagement and conversions.",
              icon: TrendingUp
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive solutions to elevate your brand and drive business success"
          tag="What We Do"
          tagIcon={Briefcase}
          features={[
            {
              title: "Brand Strategy",
              description: "Develop compelling brand narratives and positioning strategies that differentiate you from competitors and resonate with your target market.",
              icon: Lightbulb,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Creative Design",
              description: "From logos to complete visual systems, we create stunning designs that capture your brand essence and engage your audience.",
              icon: Palette,
              button: {
                text: "View Work",
                href: "product"
              }
            },
            {
              title: "Web Development",
              description: "Build responsive, high-performance websites and applications that deliver exceptional user experiences across all devices.",
              icon: Code,
              button: {
                text: "Get Quote",
                href: "pricing"
              }
            },
            {
              title: "Digital Marketing",
              description: "Strategic campaigns that increase brand awareness, drive traffic, and convert visitors into loyal customers.",
              icon: Megaphone,
              button: {
                text: "Start Campaign",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Work"
          description="Explore our portfolio of successful projects and see how we've helped brands reach new heights"
          tag="Portfolio"
          tagIcon={Folder}
          products={[
            {
              id: "1",
              name: "Mobile App Design",
              price: "View Case Study",
              imageSrc: "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mobile app interface design",
              onProductClick: () => window.open('#portfolio', '_self')
            },
            {
              id: "2",
              name: "E-commerce Website",
              price: "View Case Study",
              imageSrc: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "E-commerce website design",
              onProductClick: () => window.open('#portfolio', '_self')
            },
            {
              id: "3",
              name: "Brand Identity",
              price: "View Case Study",
              imageSrc: "https://images.pexels.com/photos/15635235/pexels-photo-15635235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Brand identity design materials",
              onProductClick: () => window.open('#portfolio', '_self')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Our Packages"
          description="Choose the perfect package for your project needs and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "1",
              badge: "Startup",
              badgeIcon: Rocket,
              price: "$2,500",
              subtitle: "Perfect for small businesses and startups",
              features: [
                "Brand identity design",
                "Basic website (5 pages)",
                "Logo and style guide",
                "2 rounds of revisions",
                "1 month support"
              ]
            },
            {
              id: "2",
              badge: "Professional",
              badgeIcon: Briefcase,
              price: "$5,500",
              subtitle: "Ideal for growing businesses",
              features: [
                "Complete brand system",
                "Custom website (up to 10 pages)",
                "SEO optimization",
                "Content management system",
                "3 months support",
                "Analytics setup"
              ]
            },
            {
              id: "3",
              badge: "Enterprise",
              badgeIcon: Building,
              price: "$12,000",
              subtitle: "Comprehensive solution for large organizations",
              features: [
                "Full brand strategy",
                "Advanced web application",
                "E-commerce functionality",
                "Custom integrations",
                "6 months support",
                "Priority support",
                "Training sessions"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The talented professionals behind our creative success"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Creative Director",
              description: "Over 10 years of experience in brand strategy and creative direction. Led campaigns for Fortune 500 companies.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sarah-johnson"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/sarahj_design"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Lead Developer",
              description: "Full-stack developer with expertise in modern web technologies and scalable application architecture.",
              imageSrc: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com/michael-chen"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/michael-chen"
                }
              ]
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Marketing Strategist",
              description: "Digital marketing expert specializing in data-driven campaigns and customer acquisition strategies.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez portrait",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com/emma_marketing"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/emma-rodriguez"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from the brands we've helped transform"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "John Mitchell",
              role: "CEO",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/21044852/pexels-photo-21044852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "John Mitchell portrait"
            },
            {
              id: "2",
              name: "Lisa Thompson",
              role: "Founder",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson portrait"
            },
            {
              id: "3",
              name: "David Kim",
              role: "Marketing Director",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5989942/pexels-photo-5989942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "4",
              name: "Maria Garcia",
              role: "VP of Design",
              company: "CreativeCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8546799/pexels-photo-8546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Garcia portrait"
            },
            {
              id: "5",
              name: "Alex Chen",
              role: "Product Manager",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4473491/pexels-photo-4473491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Chen portrait"
            },
            {
              id: "6",
              name: "Sophie Williams",
              role: "Brand Manager",
              company: "RetailPlus",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sophie Williams portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful companies that trust us with their brand"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about working with our agency"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What services do you offer?",
              content: "We offer a full range of creative services including brand strategy, logo design, web development, digital marketing, and ongoing support. Our team handles everything from initial concept to final execution."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary depending on scope and complexity. A basic brand identity project typically takes 2-3 weeks, while a complete website can take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
            },
            {
              id: "3",
              title: "Do you work with businesses of all sizes?",
              content: "Absolutely! We work with startups, small businesses, and large enterprises. Our packages and approach are tailored to meet the specific needs and budgets of different business sizes."
            },
            {
              id: "4",
              title: "What's included in your ongoing support?",
              content: "Our support includes technical maintenance, content updates, performance monitoring, and strategic guidance. The level of support varies by package, from basic maintenance to comprehensive marketing support."
            },
            {
              id: "5",
              title: "How do you measure project success?",
              content: "We establish clear KPIs at the project start, including brand awareness, website traffic, conversion rates, and ROI. We provide regular reports and analytics to track progress and optimize performance."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Send}
          title="Ready to Elevate Your Brand?"
          description="Let's discuss your project and create something amazing together. Drop us a message and we'll get back to you within 24 hours."
          inputPlaceholder="Enter your email address"
          buttonText="Start Project"
          termsText="By clicking Start Project, you agree to our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Brand Strategy",
                  href: "feature"
                },
                {
                  label: "Web Design",
                  href: "feature"
                },
                {
                  label: "Development",
                  href: "feature"
                },
                {
                  label: "Marketing",
                  href: "feature"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Portfolio",
                  href: "product"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Support",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Elevate Agency. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}