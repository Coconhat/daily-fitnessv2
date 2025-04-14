import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import { NavbarDemo } from "@/components/nav-bar";
import Gallery from "@/components/gallery";
import { MarqueeDemo } from "@/components/marquee";
import map from "@/app/public/daily-fitness-map.jpg";

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
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  View Membership
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px]">
              <Image
                src="/placeholder.svg?height=550&width=550"
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
          <div className="container px-4 md:px-6 ">
            <div className="space-y-2 mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Trainers
              </h2>
              <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our certified professionals are here to help you reach your
                fitness goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                specialty: "Strength & Conditioning",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Williams",
                specialty: "Yoga & Pilates",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                specialty: "HIIT & Functional Training",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((trainer, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {trainer.specialty}
                  </p>
                  <Button variant="ghost" className="mt-4">
                    View Profile
                  </Button>
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
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Membership Plans
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that fits your fitness goals and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 sm:grod-cols-2">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Regular</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">PHP 500</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>exclusive for students</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Silver</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">PHP 999</span>
                  <br />
                  <span className="text-gray-500">for 3 months</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full mt-2">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-900">
              <CardContent className="p-6 text-center">
                <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Gold</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">PHP 1500</span>
                  <br />
                  <span className="text-gray-500"> for 6 months</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Platinum</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">PHP 2799</span>
                  <br />
                  <span className="text-gray-500">For 1 year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Access to gym floor</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Standard equipment</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Free wifi and water</span>
                  </li>
                </ul>
                <Button className="w-full mt-11">Get Started</Button>
              </CardContent>
            </Card>
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
                      href="tel:09055478224"
                      className="hover:underline text-left"
                    >
                      09055478224
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <a
                      href="https://www.facebook.com/daily.fitness2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-left"
                    >
                      facebook.com/daily.fitness2024
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-left border-b pb-2">
                    Hours of Operation
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="font-medium">Monday - Friday</div>
                    <div>5:00 AM - 11:00 PM</div>
                    <div className="font-medium">Saturday - Sunday</div>
                    <div>7:00 AM - 9:00 PM</div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://facebook.com/daily.fitness2024"
                      aria-label="Facebook"
                      className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-gray-600" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-gray-600" />
                    </a>
                  </div>
                </div>
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

            {/* Map Integration */}
            <div className="w-full max-w-4xl mt-8 rounded-lg overflow-hidden shadow-sm h-64 bg-gray-200">
              {/* Replace with actual map implementation or keep as placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <Image src={map} alt="map" />
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
