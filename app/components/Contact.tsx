'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [showCaptchaWarning, setShowCaptchaWarning] = useState(false)
  const { toast } = useToast()

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
    setShowCaptchaWarning(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if (!captchaToken) {
      setShowCaptchaWarning(true)
      toast({
        title: "Error",
        description: "Please complete the CAPTCHA verification.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      ...Object.fromEntries(formData),
      captchaToken
    }

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setShowDialog(true)
        event.currentTarget.reset()
        setCaptchaToken(null)
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 flex items-center bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white theme-transition overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="text-sm font-semibold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
              CONTACT ME
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              Let&apos;s Work Together
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg blur opacity-20 group-hover:opacity-75 dark:opacity-30 dark:group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800/50 theme-transition">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <motion.a 
                    href="mailto:usamanazir13@gmail.com"
                    className="flex items-center group space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">usamanazir13@gmail.com</span>
                  </motion.a>

                  <motion.a 
                    href="tel:+923124156411"
                    className="flex items-center group space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-green-500 dark:text-green-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">+92 312 4156411</span>
                  </motion.a>

                  <motion.div 
                    className="flex items-center group space-x-3 p-2 rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Lahore, Pakistan</span>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-75 dark:opacity-30 dark:group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800/50 theme-transition">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Social Media
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/usama-nazir', color: 'from-blue-400 to-blue-600' },
                    { name: 'GitHub', url: 'https://github.com/themrsami', color: 'from-gray-400 to-gray-600' },
                    { name: 'Twitter', url: 'https://twitter.com/themrsami', color: 'from-blue-400 to-cyan-400' },
                    { name: 'Instagram', url: 'https://instagram.com/themrsami', color: 'from-pink-500 to-orange-400' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`text-sm font-medium bg-gradient-to-r ${social.color} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity`}>
                        {social.name}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg blur opacity-20 group-hover:opacity-75 dark:opacity-30 dark:group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <form onSubmit={handleSubmit} className="relative space-y-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg ring-1 ring-gray-200 dark:ring-gray-800/50 theme-transition">
                <div className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 theme-transition"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 theme-transition"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="min-h-[150px] bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 theme-transition"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={handleCaptchaChange}
                    theme="dark"
                  />
                  {showCaptchaWarning && (
                    <p className="text-red-500 dark:text-red-400 text-sm">Please complete the CAPTCHA verification</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:opacity-90 transition-opacity"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showDialog && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-800 theme-transition">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span>Message Sent!</span>
                </DialogTitle>
              </DialogHeader>
              <p className="text-gray-600 dark:text-gray-300">
                Thank you for your message. I&apos;ll get back to you as soon as possible.
              </p>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}