import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dumbbell,
  Clock,
  Users,
  Calendar,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  CheckIcon,
  InfoIcon,
  Badge,
  MessagesSquare,
  Utensils,
  CalendarDays,
  FileChartColumn,
  Clipboard,
} from "lucide-react";
import { NavbarDemo } from "@/components/nav-bar";
import Gallery from "@/components/gallery";
import { MarqueeDemo } from "@/components/marquee";
import map from "@/app/public/daily-fitness-map.jpg";
import { LinkPreview } from "@/components/ui/link-preview";
import QNA from "@/components/qna";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6 text-center ">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our state-of-the-art fitness center and start your journey
                to a healthier, stronger you. Expert trainers, modern equipment,
                and a supportive community await.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button size="lg" className="px-8">
                  Book a call
                </Button>

                <Link href="#pricing" scroll={true} legacyBehavior>
                  <Button size="lg" variant="outline" className="px-8">
                    View Membership
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px]">
              <Image
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/440150939_122109135734280990_6215751454428996132_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEZ_RTrycZb3_1kjrHjAPo755aD72283ULnloPvbbzdQgTFErQGTuCK9ytscFMQ5lQbqpcqAIH29JvoJUUSzUhk&_nc_ohc=CBCWlLEZSGgQ7kNvwEw9wIy&_nc_oc=AdnM2upTHNPVieJHLMT4uLMm_wqh2Yc50mdHMrI6MKHMwOWnByExIw7d7XjH91snPmVXJz9putVfWd5KUPffQBn9&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=Fq88xjFsPGR5VMMYs-DZGw&oh=00_AfG_MzyWvTJQTdKOQ7zl9QEOYk1SXpbeSbHUbKhVSK8iuQ&oe=6802BA14"
                width={550}
                height={550}
                alt="Gym interior with modern equipment"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="container px-4 md:px-6  ">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Daily Fitness Gym
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-3xl">
                We offer everything you need to achieve your fitness goals and
                maintain a healthy lifestyle.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Dumbbell className="h-12 w-12 mb-4 text-gray-900" />
                <h3 className="text-xl font-bold">Modern Equipment</h3>
                <p className="text-sm text-gray-500 mt-2">
                  State-of-the-art machines and free weights for every fitness
                  level.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Users className="h-12 w-12 mb-4 text-gray-900" />
                <h3 className="text-xl font-bold">Expert Trainers</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Certified professionals to guide and motivate you on your
                  fitness journey.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Calendar className="h-12 w-12 mb-4 text-gray-900" />
                <h3 className="text-xl font-bold">Diverse Classes</h3>
                <p className="text-sm text-gray-500 mt-2">
                  From yoga to HIIT, we offer a wide range of classes for all
                  interests.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Clock className="h-12 w-12 mb-4 text-gray-900" />
                <h3 className="text-xl font-bold">24/7 Access</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Work out on your schedule with round-the-clock facility
                  access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50 flex justify-center">
        <div className=" w-full">
          <Gallery />
        </div>
      </section>

      {/* Trainers Section */}
      <section
        id="trainers"
        className="w-full py-12 md:py-24 bg-gray-50 flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="space-y-2 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Trainers
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our certified professionals are here to help you reach your
              fitness goals.
            </p>
          </div>

          {/* Personal Training Inclusions */}
          <div className="mt-8 mb-12 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-bold text-center">
                What's Included With Personal Training
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-3">
                    <Clipboard className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Comprehensive Assessment
                  </h4>
                  <p className="text-sm text-gray-600">
                    Initial fitness level & postural analysis to identify
                    strengths and areas for improvement
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">1-on-1 Training</h4>
                  <p className="text-sm text-gray-600">
                    Personalized sessions with dedicated attention to form,
                    technique and motivation
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-3">
                    <FileChartColumn className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Progress Monitoring</h4>
                  <p className="text-sm text-gray-600">
                    Regular tracking of key metrics to ensure you're moving
                    toward your goals
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-3">
                    <CalendarDays className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Custom Workout Plan</h4>
                  <p className="text-sm text-gray-600">
                    Tailored exercise programs designed specifically for your
                    body and goals
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-3">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Nutritional Advice</h4>
                  <p className="text-sm text-gray-600">
                    Guidance on eating habits that complement your training for
                    maximum results
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-3">
                    <MessagesSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-sm text-gray-600">
                    Regular check-ins and adjustments to keep you motivated and
                    on track
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 py-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                specialty: "Strength & Conditioning",
                image: "/placeholder.svg?height=300&width=300",
                certification: "NASM Certified",
                experience: "7+ years experience",
              },
              {
                name: "Sarah Williams",
                specialty: "Yoga & Pilates",
                image: "/placeholder.svg?height=300&width=300",
                certification: "RYT-500 Certified",
                experience: "5+ years experience",
              },
              {
                name: "Michael Chen",
                specialty: "HIIT & Functional Training",
                image: "/placeholder.svg?height=300&width=300",
                certification: "ACE Certified",
                experience: "6+ years experience",
              },
            ].map((trainer, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">
                      {trainer.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">
                      {trainer.specialty}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm">
                      <Badge className="mr-2">{trainer.certification}</Badge>
                      <span className="text-gray-500">
                        {trainer.experience}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Specializing in {trainer.specialty.toLowerCase()} to help
                      clients achieve their fitness goals through personalized
                      programs.
                    </p>
                    <div className="flex justify-between mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary/10"
                      >
                        View Profile
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-dark text-white"
                      >
                        Book Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 flex justify-center">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Members Say
              </h2>
              <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Hear from our satisfied
                members.
              </p>
            </div>
          </div>
          <div>
            <MarqueeDemo />
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section
        id="pricing"
        className="w-full py-12 md:py-24 bg-gray-50 flex justify-center"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Membership Plans
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our pricing consists of a membership fee plus an hourly usage
                rate to give you maximum flexibility.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 py-6 md:grid-cols-2 sm:grid-cols-2">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Regular</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">₱500</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="mb-4 bg-green-50 text-green-700 text-sm py-1 px-2 rounded-md inline-block">
                  Exclusive for students
                </div>
                <div className="border-t border-b border-gray-100 py-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2">
                    + ₱59/hour usage fee
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-left pl-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Silver</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">₱999</span>
                </div>
                <div className="mb-4 text-gray-500">
                  for 3 months (₱333/month)
                </div>
                <div className="border-t border-b border-gray-100 py-4 mb-4">
                  <p className="text-sm text-gray-500">
                    + ₱59/hour for students
                  </p>
                  <p className="text-sm text-gray-500">
                    + ₱79/hour for non-students
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-left pl-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-4 rounded-bl">
                MOST POPULAR
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Gold</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">₱1,500</span>
                </div>
                <div className="mb-4 text-gray-500">
                  for 6 months (₱250/month)
                </div>
                <div className="border-t border-b border-gray-100 py-4 mb-4">
                  <p className="text-sm text-gray-500">
                    + ₱59/hour for students
                  </p>
                  <p className="text-sm text-gray-500">
                    + ₱79/hour for non-students
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-left pl-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Platinum</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">₱2,799</span>
                </div>
                <div className="mb-4 text-gray-500">
                  for 1 year (₱233/month)
                </div>
                <div className="border-t border-b border-gray-100 py-4 mb-4">
                  <p className="text-sm text-gray-500">
                    + ₱59/hour for students
                  </p>
                  <p className="text-sm text-gray-500">
                    + ₱79/hour for non-students
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-left pl-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              <QNA />
              {/* <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold">
                  Why do you charge an hourly fee in addition to membership?
                </h4>
                <p className="mt-2 text-gray-600">
                  Our dual pricing model ensures that members only pay for the
                  time they actually use the gym, making it more cost-effective
                  for everyone. This allows us to maintain top-quality equipment
                  and facilities while keeping membership fees affordable.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold">
                  How do I prove I'm a student to get the discounted rate?
                </h4>
                <p className="mt-2 text-gray-600">
                  Simply bring a valid student ID card with you when you sign up
                  and each time you visit. We'll verify your student status to
                  apply the discounted hourly rate of ₱59.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold">
                  Is there a maximum time limit per visit?
                </h4>
                <p className="mt-2 text-gray-600">
                  No, you can stay as long as you like during our operating
                  hours. The hourly fee will be calculated based on your total
                  time at the gym.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Get In Touch
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our gym or membership options? Our team is
                ready to assist you with any inquiries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl w-full">
              {/* Contact Information */}
              <div className="flex flex-col justify-center space-y-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-left">
                      Laurel National Highway, Mataas na Lupa, 4217, Batangas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <a
                      href="tel:(0995) 260 0264
"
                      className="hover:underline text-left"
                    >
                      (0995) 260 0264
                    </a>
                    <br />
                    <a
                      href="tel:(0945) 780 7652
"
                      className="hover:underline text-left"
                    >
                      (0945) 780 7652
                    </a>
                    <br />
                    <a
                      href="tel:(0905)547 8224
"
                      className="hover:underline text-left"
                    >
                      (0905)547 8224
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <LinkPreview
                      url="https://www.facebook.com/daily.fitness2024"
                      className="hover:underline text-left"
                    >
                      facebook.com/daily.fitness2024
                    </LinkPreview>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-left border-b pb-2">
                    Hours of Operation
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="font-medium">Daily</div>
                    <div>6:00 AM - 8:00 PM</div>
                  </div>
                </div>

                <div className="pt-4"></div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-left mb-4">
                  Send us a message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none block text-left"
                      >
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="first-name"
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none block text-left"
                      >
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="last-name"
                        required
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none block text-left"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                      placeholder="johndoe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none block text-left"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                      placeholder="09XX XXX XXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none block text-left"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="classes">Class Information</option>
                      <option value="training">Personal Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none block text-left"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <p>
                Visit us at the second floor of{" "}
                <LinkPreview url="https://www.google.co.uk/maps/place/Vintage+Cuts+Barber+Shop/@13.9413832,121.1470485,70m/data=!3m1!1e3!4m6!3m5!1s0x33bd6cc745fd56b9:0x84d77fe09ac1c3a0!8m2!3d13.9412783!4d121.1470555!16s%2Fg%2F11sbwqbcj5?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                  <span className="underline">Vintage Cut Barber</span>
                </LinkPreview>{" "}
                Near De La Salle Lipa
              </p>
            </div>
            {/* Map */}

            <div className="w-full max-w-4xl mt-8 rounded-lg overflow-hidden shadow-sm h-64 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <LinkPreview url="https://www.google.co.uk/maps/place/Vintage+Cuts+Barber+Shop/@13.9413832,121.1470485,70m/data=!3m1!1e3!4m6!3m5!1s0x33bd6cc745fd56b9:0x84d77fe09ac1c3a0!8m2!3d13.9412783!4d121.1470555!16s%2Fg%2F11sbwqbcj5?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                  <Image src={map} alt="map" />
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0 flex justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row ">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6" />
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} Daily Fitness Gym
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/daily.fitness2024"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Facebook
            </Link>
            <Link
              href="https://www.facebook.com/daily.fitness2024"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
